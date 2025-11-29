// app/ebooks/page.tsx
'use client'
import { ebooks } from '@/data/ebooks'; // Assumed data source
import EbookCard from '@/components/EbookCard';
import DescriptionModal from '@/components/DescriptionModal'; 
import PaymentModal from '@/components/PaymentModal';       // Assumed component
import React from 'react';

// Re-defining Ebook interface for completeness
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
  rating?: number; 
}

export default function EbooksPage() {
  const [search, setSearch] = React.useState<string>("");
  
  // Modal State Management
  const [selectedEbook, setSelectedEbook] = React.useState<Ebook | null>(null);
  const [isDescriptionModalOpen, setIsDescriptionModalOpen] = React.useState(false);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = React.useState(false);

  React.useEffect(() => {
    document.title = 'Ebooks - Digital Library';
  }, []);
  
  // --- HANDLER FUNCTIONS ---
  
  // 1. Opens the detailed Description Modal (called from EbookCard)
  const handleViewDetails = (ebook: Ebook) => {
    setSelectedEbook(ebook);
    setIsDescriptionModalOpen(true);
  };
  
  // 2. Handles the transition from Description Modal to Payment Modal
  const handleProceedToBuy = (ebook: Ebook) => {
    setIsDescriptionModalOpen(false); // Close description modal
    setSelectedEbook(ebook);
    setIsPaymentModalOpen(true); // Open the Payment Modal
  };
  
  // 3. Closes all modals and resets the selected ebook
  const handleCloseModals = () => {
    setIsDescriptionModalOpen(false);
    setIsPaymentModalOpen(false);
    setSelectedEbook(null);
  };

  // --- FILTERING LOGIC ---

  const filteredEbooks = ebooks.filter((ebook: Ebook) => {
    const searchTerm = search.toLowerCase();
    
    if (searchTerm === "") {
      return true;
    }
    
    return (
      ebook.title.toLowerCase().includes(searchTerm) ||
      ebook.description.toLowerCase().includes(searchTerm)
    );
  });


  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">All Ebooks</h1>
          <p className="text-lg text-gray-600">Browse our complete collection of digital books</p>
        </div>

        <div className='mb-8 flex justify-center gap-4'>
          <input 
            placeholder='Search by title or description' 
            className='border-2 border-purple-800 rounded-[10px] text-black justify-center p-2 w-full max-w-md' 
            onChange={(e) => { setSearch(e.target.value) }}
            value={search}
          />
        </div>

        {/* Ebook Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredEbooks.map((ebook: Ebook) => (
            <EbookCard 
              key={ebook.id} 
              ebook={ebook} 
              onViewDetails={handleViewDetails} 
            />
          ))}
          {filteredEbooks.length === 0 && (
              <p className="text-center text-xl text-gray-600 col-span-full">No ebooks found matching {search}</p>
          )}
        </div>
      </div>
      
      {/* --- MODALS --- */}

      <DescriptionModal
        ebook={selectedEbook}
        isOpen={isDescriptionModalOpen}
        onClose={handleCloseModals}
        onProceedToBuy={handleProceedToBuy}
      />

      <PaymentModal
        ebook={selectedEbook}
        isOpen={isPaymentModalOpen}
        onClose={handleCloseModals}
      />
    </div>
  );
}