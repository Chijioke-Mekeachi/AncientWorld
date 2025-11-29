// components/FeaturedBooksSimple.tsx
import { Ebook } from '@/types';
import EbookCard from './EbookCard';

interface FeaturedBooksProps {
  ebooks: Ebook[];
  onViewDetails: (ebook: Ebook) => void; // ✅ Add the handler prop
}

export default function FeaturedBooksSimple({ ebooks, onViewDetails }: FeaturedBooksProps) {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Books
          </h2>
          <p className="text-lg text-gray-600">Curated selection of our bestsellers</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ebooks.map((ebook) => (
            <div key={ebook.id} className="relative">
              {/* Featured Badge for first book */}
              {ebook.id === 1 && (
                <div className="absolute -top-3 -left-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold z-10">
                  Popular
                </div>
              )}
              {/* Pass the required handler */}
              <EbookCard ebook={ebook} onViewDetails={onViewDetails} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
