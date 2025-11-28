// components/FeaturedBooks.tsx
'use client';

import { useState } from 'react';
import { Ebook } from '@/types';
import EbookCard from './EbookCard';
import PaymentModal from './PaymentModal';

interface FeaturedBooksProps {
  ebooks: Ebook[];
}

export default function FeaturedBooks({ ebooks }: FeaturedBooksProps) {
  const [selectedEbook, setSelectedEbook] = useState<Ebook | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleQuickBuy = (ebook: Ebook) => {
    setSelectedEbook(ebook);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedEbook(null);
  };

  return (
    <>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Books
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Handpicked selection of our most popular and highly-rated ebooks
            </p>
          </div>

          {/* Books Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ebooks.map((ebook, index) => (
              <div 
                key={ebook.id} 
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                {/* Featured Badge for first book */}
                {index === 0 && (
                  <div className="absolute -top-3 -left-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold z-10 shadow-lg">
                    🔥 Bestseller
                  </div>
                )}

                {/* Book Cover with Category-based Colors */}
                <div className={`relative h-48 rounded-t-2xl overflow-hidden ${
                  ebook.category.includes('Military') ? 'bg-gradient-to-br from-gray-700 to-red-800' :
                  ebook.category.includes('Religion') ? 'bg-gradient-to-br from-purple-600 to-blue-700' :
                  ebook.category.includes('Fiction') ? 'bg-gradient-to-br from-green-500 to-teal-600' :
                  'bg-gradient-to-br from-blue-500 to-purple-600'
                }`}>
                  <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white text-5xl">
                      {ebook.category.includes('Military') ? '⚔️' :
                       ebook.category.includes('Religion') ? '🕍' :
                       ebook.category.includes('Fiction') ? '🌈' : '📚'}
                    </span>
                  </div>
                  
                  {/* Quick Action Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                    <button
                      onClick={() => handleQuickBuy(ebook)}
                      className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-50 transition duration-200 transform scale-95 group-hover:scale-100"
                    >
                      Quick Buy
                    </button>
                  </div>
                </div>

                {/* Book Info */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-bold text-gray-900 line-clamp-2 flex-1 mr-2">
                      {ebook.title}
                    </h3>
                    <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-2 py-1 rounded flex-shrink-0">
                      ${ebook.price}
                    </span>
                  </div>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {ebook.description}
                  </p>

                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <span className="flex items-center">
                      <span className="mr-1">📖</span>
                      {ebook.pages} pages
                    </span>
                    <span className="flex items-center">
                      <span className="mr-1">📄</span>
                      {ebook.format}
                    </span>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => handleQuickBuy(ebook)}
                      className="flex-1 bg-blue-600 text-white py-2 px-3 rounded-lg text-sm font-semibold hover:bg-blue-700 transition duration-200"
                    >
                      Buy Now
                    </button>
                    <button 
                      className="bg-gray-200 text-gray-700 py-2 px-3 rounded-lg text-sm font-semibold hover:bg-gray-300 transition duration-200"
                      title="Preview"
                    >
                      👁️
                    </button>
                  </div>
                </div>

                {/* Category Tag */}
                <div className="absolute top-4 right-4">
                  <span className={`bg-white bg-opacity-90 text-gray-700 px-2 py-1 rounded-full text-xs font-medium ${
                    ebook.category.includes('Military') ? 'border-l-4 border-red-500' :
                    ebook.category.includes('Religion') ? 'border-l-4 border-purple-500' :
                    ebook.category.includes('Fiction') ? 'border-l-4 border-green-500' :
                    'border-l-4 border-blue-500'
                  }`}>
                    {ebook.category}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
              <div className="text-2xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-sm text-gray-600">Happy Readers</div>
            </div>
            <div className="bg-green-50 rounded-xl p-6 border border-green-100">
              <div className="text-2xl font-bold text-green-600 mb-2">4.9★</div>
              <div className="text-sm text-gray-600">Average Rating</div>
            </div>
            <div className="bg-purple-50 rounded-xl p-6 border border-purple-100">
              <div className="text-2xl font-bold text-purple-600 mb-2">24/7</div>
              <div className="text-sm text-gray-600">Support</div>
            </div>
            <div className="bg-orange-50 rounded-xl p-6 border border-orange-100">
              <div className="text-2xl font-bold text-orange-600 mb-2">100%</div>
              <div className="text-sm text-gray-600">Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Modal */}
      <PaymentModal
        ebook={selectedEbook}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
}