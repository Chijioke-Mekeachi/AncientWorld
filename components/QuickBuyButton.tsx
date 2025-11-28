// components/QuickBuyButton.tsx
'use client';

import { useState } from 'react';
import { Ebook } from '@/types';
import PaymentModal from './PaymentModal';

interface QuickBuyButtonProps {
  ebook: Ebook;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export default function QuickBuyButton({ 
  ebook, 
  variant = 'primary', 
  className = '' 
}: QuickBuyButtonProps) {
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const baseClasses = "px-6 py-3 rounded-lg font-semibold transition duration-300";
  const variantClasses = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300"
  };

  return (
    <>
      <button
        onClick={() => setIsPaymentModalOpen(true)}
        className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      >
        Buy Now - ${ebook.price}
      </button>

      <PaymentModal
        ebook={ebook}
        isOpen={isPaymentModalOpen}
        onClose={() => setIsPaymentModalOpen(false)}
      />
    </>
  );
}