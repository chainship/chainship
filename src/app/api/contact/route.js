export const runtime = 'edge';

export async function POST(request) {
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

    // Insert into Supabase via REST API
    const response = await fetch(
      `https://zbpcvojulkxjznovhiyx.supabase.co/rest/v1/contacts`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': process.env.SUPABASE_ANON_KEY,
          'Authorization': `Bearer ${process.env.SUPABASE_ANON_KEY}`,
          'Prefer': 'return=representation'
        },
        body: JSON.stringify({
          name,
          email,
          message,
          created_at: new Date().toISOString(),
          status: 'new',
          source: 'website'
        })
      }
    );

    if (!response.ok) {
      const error = await response.text();
      console.error('Supabase error:', error);
      throw new Error('Database insertion failed');
    }

    const result = await response.json();

    return Response.json(
      {
        success: true,
        message: 'Contact message received successfully',
        id: result[0]?.id
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
