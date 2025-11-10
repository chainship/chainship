export const runtime = 'edge';

export async function POST(request, context) {
  try {
    const body = await request.json();
    const { 
      name, 
      email, 
      company, 
      projectType, 
      budget, 
      timeline, 
      description 
    } = body;

    // Validate required fields
    if (!name || !email || !projectType || !description) {
      return Response.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return Response.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Get DB from context.env (Cloudflare) or context.cloudflare.env
    const env = context?.cloudflare?.env || context?.env || {};
    const DB = env.DB;

    if (!DB) {
      // For local development or if DB is not bound
      console.warn('D1 database not available. Logging submission instead.');
      console.log('Quote submission:', { 
        name, email, company, projectType, budget, timeline, description,
        timestamp: new Date().toISOString() 
      });
      
      return Response.json(
        {
          success: true,
          message: 'Quote request received successfully (dev mode). We\'ll respond within 24 hours!',
          id: Date.now()
        },
        { status: 201 }
      );
    }

    // Insert into Cloudflare D1
    const result = await DB.prepare(
      'INSERT INTO quotes (name, email, company, project_type, budget, timeline, description, created_at, status, source) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'
    )
      .bind(
        name,
        email,
        company || null,
        projectType,
        budget || null,
        timeline || null,
        description,
        new Date().toISOString(),
        'pending',
        'website'
      )
      .run();

    return Response.json(
      {
        success: true,
        message: 'Quote request received successfully. We\'ll respond within 24 hours!',
        id: result.meta.last_row_id
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Quote API Error:', error);
    return Response.json(
      { error: 'Failed to submit quote request' },
      { status: 500 }
    );
  }
}
