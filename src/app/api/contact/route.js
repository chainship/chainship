export const runtime = 'edge';

export async function POST(request, { env }) {
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

    // Insert into Cloudflare D1
    const result = await env.DB.prepare(
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
