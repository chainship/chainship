export const runtime = 'edge';

export async function POST(request, context) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
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
      console.log('Contact submission:', { name, email, message, timestamp: new Date().toISOString() });
      
      return Response.json(
        {
          success: true,
          message: 'Contact message received successfully (dev mode)',
          id: Date.now()
        },
        { status: 201 }
      );
    }

    // Insert into Cloudflare D1
    const result = await DB.prepare(
      'INSERT INTO contacts (name, email, message, created_at, status, source) VALUES (?, ?, ?, ?, ?, ?)'
    )
      .bind(
        name,
        email,
        message,
        new Date().toISOString(),
        'new',
        'website'
      )
      .run();

    return Response.json(
      {
        success: true,
        message: 'Contact message received successfully',
        id: result.meta.last_row_id
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Contact API Error:', error);
    return Response.json(
      { error: 'Failed to submit contact message' },
      { status: 500 }
    );
  }
}
