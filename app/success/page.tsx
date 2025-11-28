// app/success/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { ebooks } from '@/data/ebooks';
import { Ebook } from '@/types';

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const ebookId = searchParams.get('ebook');
  const [ebook, setEbook] = useState<Ebook | null>(null);
  const [downloadCount, setDownloadCount] = useState(3);

  useEffect(() => {
    if (ebookId) {
      const foundEbook = ebooks.find(e => e.id === parseInt(ebookId));
      setEbook(foundEbook || null);
    }
  }, [ebookId]);

  const handleDownload = () => {
    if (ebook?.downloadUrl) {
      // In a real app, this would trigger the actual download
      // For demo, we'll just simulate it
      const link = document.createElement('a');
      link.href = ebook.downloadUrl;
      link.download = `${ebook.title.replace(/\s+/g, '-').toLowerCase()}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      setDownloadCount(prev => Math.max(0, prev - 1));
    }
  };

  if (!ebook) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">Purchase not found</h1>
          <p className="text-gray-600 mt-2">Unable to find your purchase details.</p>
          <Link href="/ebooks" className="btn-primary mt-4 inline-block">
            Browse Ebooks
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-lg p-8 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-3xl">✅</span>
          </div>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Payment Successful!</h1>
          <p className="text-lg text-gray-600 mb-6">
            Thank you for your purchase. Your ebook is ready to download.
          </p>

          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">{ebook.title}</h2>
            <p className="text-gray-600">You have {downloadCount} downloads remaining</p>
          </div>

          <button
            onClick={handleDownload}
            disabled={downloadCount === 0}
            className="w-full bg-green-600 text-white py-4 rounded-lg font-semibold hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition duration-300 mb-4"
          >
            {downloadCount > 0 ? 'Download Ebook' : 'No Downloads Remaining'}
          </button>

          <p className="text-sm text-gray-500 mb-6">
            The download link will also be sent to your email for future access.
          </p>

          <div className="flex gap-4">
            <Link href="/ebooks" className="flex-1 btn-secondary text-center">
              Browse More
            </Link>
            <button
              onClick={() => window.print()}
              className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
            >
              Print Receipt
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}