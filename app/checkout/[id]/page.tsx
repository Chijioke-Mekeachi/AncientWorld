// app/checkout/[id]/page.tsx
'use client';

import { useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { ebooks } from '@/data/ebooks';
import PaymentModal from '@/components/PaymentModal';

export default function CheckoutPage() {
  const params = useParams();
  const router = useRouter();
  const ebookId = parseInt(params.id as string);
  const ebook = ebooks.find(e => e.id === ebookId);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        router.push('/ebooks');
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [router]);

  if (!ebook) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">❌</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Ebook Not Found</h1>
          <p className="text-gray-600 mb-4">The ebook you{`'`}re looking for doesn{`'`}t exist.</p>
          <button
            onClick={() => router.push('/ebooks')}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Browse Ebooks
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <PaymentModal
        ebook={ebook}
        isOpen={true}
        onClose={() => router.push('/ebooks')}
      />
    </div>
  );
}