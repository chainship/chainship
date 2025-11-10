import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

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
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Connect to MongoDB
    const client = await clientPromise;
    const db = client.db('chainship');
    const collection = db.collection('quotes');

    // Insert quote request
    const result = await collection.insertOne({
      name,
      email,
      company: company || null,
      projectType,
      budget: budget || null,
      timeline: timeline || null,
      description,
      createdAt: new Date(),
      status: 'pending',
      source: 'website'
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Quote request received successfully. We\'ll respond within 24 hours!',
        id: result.insertedId
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Quote API Error:', error);
    return NextResponse.json(
      { error: 'Failed to submit quote request' },
      { status: 500 }
    );
  }
}
