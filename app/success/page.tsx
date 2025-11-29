'use client';

import React, { JSX, useEffect, useState, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { ebooks } from '@/data/ebooks';
import { Ebook } from '@/types';

// We removed 'export const dynamic = ...' because Suspense handles the boundary now.

function SuccessContent() {
  const searchParams = useSearchParams();
  const ebookId = searchParams.get('ebook');

  const [ebook, setEbook] = useState<Ebook | null>(null);
  const [downloadCount, setDownloadCount] = useState<number>(3);
  const [isDownloading, setIsDownloading] = useState<boolean>(false);

  useEffect(() => {
    if (!ebookId) {
      setEbook(null);
      return;
    }

    const idNum = Number(ebookId);
    if (Number.isNaN(idNum)) {
      setEbook(null);
      return;
    }

    const found = ebooks.find((e) => e.id === idNum) ?? null;
    setEbook(found);
    setDownloadCount(3);
  }, [ebookId]);

  const handleDownload = async () => {
    if (!ebook) return;

    const url = ebook.downloadUrl ?? '';
    if (!url || downloadCount === 0) return;

    try {
      setIsDownloading(true);

      // If it's a Google Drive link, open in new tab
      if (url.includes('drive.google.com')) {
        window.open(url, '_blank', 'noopener,noreferrer');
      } else {
        // For direct file links, attempt to trigger a download
        const link = document.createElement('a');
        link.href = url;
        // Use a safe file-name fallback
        const safeTitle = (ebook.title ?? 'ebook').replace(/\s+/g, '-').toLowerCase();
        link.download = `${safeTitle}.pdf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }

      // decrement downloads (but never below 0)
      setDownloadCount((prev) => Math.max(0, prev - 1));
    } finally {
      // short delay to prevent double-click race
      setTimeout(() => setIsDownloading(false), 250);
    }
  };

  if (!ebook) {
    return (
      <main className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">Purchase not found</h1>
          <p className="text-gray-600 mt-2">Unable to find your purchase details.</p>
          <Link
            href="/ebooks"
            className="inline-block mt-4 rounded-lg bg-green-600 text-white px-5 py-2.5 font-semibold hover:bg-green-700 transition"
          >
            Browse Ebooks
          </Link>
        </div>
      </main>
    );
  }

  const url = ebook.downloadUrl ?? '';
  const hasDownloadUrl = url.length > 0;
  const isDrive = hasDownloadUrl && url.includes('drive.google.com');
  const downloadDisabled = downloadCount === 0 || !hasDownloadUrl || isDownloading;

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-lg p-8 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-3xl">✅</span>
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-4">Payment Successful!</h1>
          <p className="text-lg text-gray-600 mb-6">
            Thank you for your purchase. Your ebook is ready to download.
          </p>

          <div className="bg-gray-50 rounded-lg p-6 mb-6 text-left">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">{ebook.title}</h2>
            <p className="text-gray-600 mb-2">Category: {ebook.category}</p>
            <p className="text-gray-600">You have {downloadCount} downloads remaining</p>
            {!hasDownloadUrl && (
              <p className="text-sm text-red-600 mt-2">Download URL not available for this ebook.</p>
            )}
          </div>

          <button
            onClick={handleDownload}
            disabled={downloadDisabled}
            aria-disabled={downloadDisabled}
            className={`w-full py-4 rounded-lg font-semibold transition duration-300 mb-4 ${
              downloadDisabled
                ? 'bg-gray-400 text-white cursor-not-allowed'
                : 'bg-green-600 text-white hover:bg-green-700'
            }`}
          >
            {isDownloading
              ? 'Preparing...'
              : downloadCount > 0
              ? isDrive
                ? 'Open in Google Drive'
                : 'Download Ebook'
              : 'No Downloads Remaining'}
          </button>

          {isDrive && (
            <p className="text-sm text-blue-600 mb-4">
              📎 This ebook is hosted on Google Drive and will open in a new tab
            </p>
          )}

          <p className="text-sm text-gray-500 mb-6">
            The download link will also be sent to your email for future access.
          </p>

          <div className="flex gap-4">
            <Link
              href="/ebooks"
              className="flex-1 inline-flex items-center justify-center border-2 border-black text-black py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
            >
              Browse More
            </Link>
            <button
              onClick={() => window.print()}
              className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Print Receipt
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

// Main page component wrapping the content in Suspense
export default function SuccessPage(): JSX.Element {
  return (
    <Suspense fallback={
       <main className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading order details...</p>
          </div>
       </main>
    }>
      <SuccessContent />
    </Suspense>
  );
}