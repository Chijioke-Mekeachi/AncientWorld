// types/index.ts
export interface Ebook {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  category: string;
  pages: number;
  format: string;
  downloadUrl?: string;
  author?: string;
}

export interface PaymentResponse {
  status: boolean;
  message: string;
  data: {
    authorization_url: string;
    access_code: string;
    reference: string;
  };
}

export interface PaymentRequest {
  email: string;
  amount: number;
  ebookId: number;
  metadata?: {
    first_name?: string;
    last_name?: string;
    phone?: string;
  };
}

export interface SubscriptionRequest {
  email: string;
}

export interface PaymentFormData {
  email: string;
  firstName: string;
  lastName: string;
  phone?: string;
}