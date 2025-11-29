// components/DescriptionModal.tsx

import { Ebook } from '@/types';
import Image from 'next/image';

interface DescriptionModalProps {
  ebook: Ebook | null;
  isOpen: boolean;
  onClose: () => void;
  onProceedToBuy: (ebook: Ebook) => void;
}

const ProjectDescriptionText = `
  Welcome to Windows To The Ancient World (WAW) – your portal to the past, offering an immersive journey through the grandeur and mysteries of civilizations long gone. We believe that understanding history isn't just about memorizing dates and names; it's about experiencing the lives, innovations, and cultural landscapes that shaped our world.

  Our mission at WAW is to open up breathtaking vistas into antiquity, making the wonders of ancient Egypt, the might of Rome, the wisdom of Greece, and countless other forgotten empires accessible and engaging for everyone.
`;

export default function DescriptionModal({ ebook, isOpen, onClose, onProceedToBuy }: DescriptionModalProps) {
  if (!isOpen || !ebook) return null;

  // Use a local handler to ensure the current ebook is passed to the parent's buy function
  const handleBuyClick = () => {
    onProceedToBuy(ebook);
    onClose(); // Close the description modal
  };

  return (
    // Modal Overlay
    <div 
      className="fixed inset-0 z-50 bg-black bg-opacity-75 flex items-start justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      
      {/* Modal Content */}
      <div 
        className="bg-white rounded-xl shadow-2xl w-full max-w-5xl mt-8 mb-8"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
      >
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-700 hover:text-gray-900 z-10 p-2 bg-white rounded-full transition"
          aria-label="Close modal"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>

        {/* Ebook Details Layout */}
        <div className="p-8 md:p-10">
            <div className="flex flex-col lg:flex-row gap-8">
              
                {/* Left Column: Cover and Buy */}
                <div className="lg:w-1/3 flex flex-col items-center ">
                    <div className="relative w-48 h-64 mb-6 shadow-lg rounded-lg overflow-hidden bg-gray-100">
                        <Image
                            src={ebook.image}
                            alt={ebook.title}
                            fill
                            className=""
                            // sizes="400px"
                            priority
                        />
                    </div>

                    <div className="w-full max-w-xs p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-end justify-between mb-3">
                            <h4 className="text-xl font-light text-gray-600">Price:</h4>
                            <span className="text-3xl font-extrabold text-blue-600">
                                NGN {ebook.price.toLocaleString('en-US', {})}
                            </span>
                        </div>
                        
                        <button
                            onClick={handleBuyClick}
                            className="w-full bg-blue-600 text-white py-3 rounded-lg text-lg font-bold hover:bg-blue-700 transition duration-200"
                        >
                            Proceed to Checkout
                        </button>
                    </div>
                </div>

                {/* Right Column: Title and Description */}
                <div className="lg:w-2/3">
                    <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2 leading-tight">
                        {ebook.title}
                    </h1>
                    <p className="text-lg text-blue-600 font-semibold mb-6 border-b pb-4">
                        By: {'Dr. Ishiusah Chijioke'}
                    </p>

                    <h2 className="text-2xl font-bold text-gray-800 mb-3">
                Ebook Overview
                    </h2>
                   
                    <p className="text-gray-600 text-base leading-relaxed mb-6">
                        {ebook.description}
                    </p>

                    {/* Quick Info */}
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
    </div>
  );
}