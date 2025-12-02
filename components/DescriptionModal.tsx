import { Ebook } from '@/types';
import Image from 'next/image';

interface DescriptionModalProps {
  ebook: Ebook | null;
  isOpen: boolean;
  onClose: () => void;
  onProceedToBuy: (ebook: Ebook) => void;
}

export default function DescriptionModal({ ebook, isOpen, onClose, onProceedToBuy }: DescriptionModalProps) {
  if (!isOpen || !ebook) return null;

  const handleBuyClick = () => {
  if (ebook.price <= 0) {
    if (ebook.downloadUrl) {
      window.open(ebook.downloadUrl, '_blank');
      onClose();
    } else {
      alert('Download link not available');
    }
  } else {
    onClose();            // IMPORTANT FIX!
    onProceedToBuy(ebook);
  }
};


  return (
    <div 
      className="fixed inset-0 z-50 bg-black bg-opacity-75 flex items-start justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-xl shadow-2xl w-full max-w-5xl mt-8 mb-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-700 hover:text-gray-900 z-10 p-2 bg-white rounded-full transition"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>

        <div className="p-8 md:p-10 flex flex-col lg:flex-row gap-8">
          {/* Left Column */}
          <div className="lg:w-1/3 flex flex-col items-center">
            <div className="relative w-48 h-64 mb-6 shadow-lg rounded-lg overflow-hidden bg-gray-100">
              <Image src={ebook.image} alt={ebook.title} fill className="object-cover" priority />
            </div>

            <div className="w-full max-w-xs p-4 bg-gray-50 rounded-lg">
              <div className="flex items-end justify-between mb-3">
                {ebook.price <= 0 ? (
                  <span className="text-green-600 text-2xl font-bold"></span>
                ) : (
                  <span className="text-green-600 text-2xl font-bold">
                    NGN {ebook.price.toLocaleString('en-US')}
                  </span>
                )}
              </div>
              
              {ebook.price === 0 ? (
                <button
                  onClick={handleBuyClick}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg text-lg font-bold hover:bg-blue-700 transition duration-200"
                >
                  Get Now (Free)
                </button>
              ) : (
                <button
                  onClick={handleBuyClick}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg text-lg font-bold hover:bg-blue-700 transition duration-200"
                >
                  Proceed to Payment
                </button>
              )}
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:w-2/3">
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2 leading-tight">
              {ebook.title}
            </h1>
            <p className="text-lg text-blue-600 font-semibold mb-6 border-b pb-4">
              By: {ebook.author}
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-3">Ebook Overview</h2>
            <p className="text-gray-600 text-base leading-relaxed mb-6">
              {ebook.description}
            </p>

            <div className="flex gap-4 text-sm font-semibold text-gray-700">
              <span>📖 {ebook.pages} Chapters</span>
              <span className="text-gray-400">|</span>
              <span>📄 {ebook.format} Format</span>
              <span className="text-gray-400">|</span>
              <span>Category: {ebook.category}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
