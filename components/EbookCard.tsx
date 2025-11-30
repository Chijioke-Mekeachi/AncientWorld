// components/EbookCard.tsx
import { Ebook } from "@/types"; // Assumed import
import Image from "next/image";

interface EbookCardProps {
  ebook: Ebook;
  // Handler passed from the parent to open the modal
  onViewDetails: (ebook: Ebook) => void; 
}

export default function EbookCard({ ebook, onViewDetails }: EbookCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
      <div className="relative w-full h-48 bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center">
        {ebook.image ? (
          <Image
            alt={`Cover for ${ebook.title}`}
            src={ebook.image}
            fill
            className="w-full h-full "
          />
        ) : (
          <span className="text-white text-center text-[20px]">
            Book has no Image...
          </span>
        )}
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gray-900 line-clamp-2">
            {ebook.title}
          </h3>
          <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-2 py-1 rounded ml-2">
            NGN {ebook.price.toLocaleString('en-US', {})}
          </span>
        </div>

        <p className="text-gray-600 mb-4 text-sm line-clamp-3">
          {ebook.description}
        </p>

        <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
          <span>📖 {ebook.pages} chapters</span>
          <span>📄 {ebook.format}</span>
        </div>

        {/* Action Button: Triggers the modal via the handler */}
        <button
          onClick={() => onViewDetails(ebook)} 
          className="w-full bg-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-700 transition block"
        >
          View Details
        </button>
      </div>
    </div>
  );
}