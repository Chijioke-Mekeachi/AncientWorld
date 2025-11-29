'use client'
import { ebooks } from '@/data/ebooks';
import EbookCard from '@/components/EbookCard';
import DescriptionModal from '@/components/DescriptionModal'; // <-- NEW
import PaymentModal from '@/components/PaymentModal';       // <-- NEW
import React from 'react';

// Re-defining Ebook interface for completeness, though typically it's imported from @/types
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
  author?: string; // Added for modal display
  rating?: number; // Added for modal display
}

export default function EbooksPage() {
  const [search, setSearch] = React.useState<string>("");
  
  // Modal State Management
  const [selectedEbook, setSelectedEbook] = React.useState<Ebook | null>(null);
  const [isDescriptionModalOpen, setIsDescriptionModalOpen] = React.useState(false);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = React.useState(false);

  React.useEffect(() => {
    document.title = 'Ebooks - Digital Library';
    // console.log(search); // Removed console.log from useEffect dependency array
  }, []);
  
  // --- HANDLER FUNCTIONS ---
  
  // 1. Opens the detailed Description Modal
  const handleViewDetails = (ebook: Ebook) => {
    setSelectedEbook(ebook);
    setIsDescriptionModalOpen(true);
  };
  
  // 2. Handles the transition from Description Modal to Payment Modal
  const handleProceedToBuy = (ebook: Ebook) => {
    // Description Modal is expected to close itself before this function is called
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
    
    // If search is empty, return all ebooks
    if (searchTerm === "") {
      return true;
    }
    
    // Check if search term is included in title or description
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
            // Pass the handler to the EbookCard
            <EbookCard 
              key={ebook.id} 
              ebook={ebook} 
              onViewDetails={handleViewDetails} // <-- Using the handler here
            />
          ))}
          {filteredEbooks.length === 0 && (
              <p className="text-center text-xl text-gray-600 col-span-full">No ebooks found matching "{search}"</p>
          )}
        </div>
      </div>
      
      {/* --- MODALS --- */}

      {/* 1. Description Modal */}
      <DescriptionModal
        ebook={selectedEbook}
        isOpen={isDescriptionModalOpen}
        onClose={handleCloseModals}
        onProceedToBuy={handleProceedToBuy}
      />

      {/* 2. Payment Modal */}
      <PaymentModal
        ebook={selectedEbook}
        isOpen={isPaymentModalOpen}
        onClose={handleCloseModals}
      />
    </div>
  );
}