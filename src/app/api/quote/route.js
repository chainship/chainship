export const runtime = 'edge';

export async function POST(request, { env }) {
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

    // Insert into Cloudflare D1
    const result = await env.DB.prepare(
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
