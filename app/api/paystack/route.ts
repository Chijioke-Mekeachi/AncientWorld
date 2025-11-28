// app/api/paystack/route.ts
import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

interface PaymentRequest {
  email: string;
  amount: number;
  ebookId: number;
  metadata?: {
    first_name?: string;
    last_name?: string;
    phone?: string;
  };
}

interface PaymentResponse {
  status: boolean;
  message: string;
  data: {
    authorization_url: string;
    access_code: string;
    reference: string;
  };
}

export async function POST(request: NextRequest) {
  try {
    const { email, amount, ebookId, metadata }: PaymentRequest = await request.json();

    // For demo purposes - in production, use real Paystack keys
    const paystackSecretKey = process.env.PAYSTACK_SECRET_KEY || 'sk_test_demo';

    const response = await axios.post<PaymentResponse>(
      'https://api.paystack.co/transaction/initialize',
      {
        email,
        amount: Math.round(amount * 100), // Convert to kobo
        callback_url: `${process.env.NEXTAUTH_URL || 'http://localhost:3000'}/success?ebook=${ebookId}`,
        metadata: {
          ebook_id: ebookId,
          customer_data: metadata,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${paystackSecretKey}`,
          'Content-Type': 'application/json',
        },
      }
    );

    return NextResponse.json(response.data);
  } catch (error: any) {
    console.error('Paystack error:', error.response?.data || error.message);
    return NextResponse.json(
      { 
        error: 'Payment initialization failed',
        details: error.response?.data?.message || error.message
      },
      { status: 500 }
    );
  }
}