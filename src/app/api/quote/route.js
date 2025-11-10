export const runtime = 'edge';

export async function POST(request) {
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

    // Insert into Supabase via REST API
    const response = await fetch(
      `https://zbpcvojulkxjznovhiyx.supabase.co/rest/v1/quotes`,
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
          company: company || null,
          project_type: projectType,
          budget: budget || null,
          timeline: timeline || null,
          description,
          created_at: new Date().toISOString(),
          status: 'pending',
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
        message: 'Quote request received successfully. We\'ll respond within 24 hours!',
        id: result[0]?.id
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
