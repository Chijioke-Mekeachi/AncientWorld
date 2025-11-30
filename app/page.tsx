// app/page.tsx
'use client';

import Link from 'next/link';
import { ebooks } from '@/data/ebooks';
import EbookCard from '@/components/EbookCard';
import Newsletter from '@/components/Newsletter';
import FeaturedBooks from '@/components/FeaturedBooks';
import Image from 'next/image';

export default function Home() {
  const featuredEbooks = ebooks.slice(0, 3);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="
        py-10 
        bg-gradient-to-r from-yellow-400 via-brown-500 to-orange-700 
        text-white 
        flex flex-col md:flex-row 
        items-center md:items-start 
        justify-between 
        px-4 md:px-8 
        gap-10 md:gap-0
        overflow-hidden
      ">
        
        {/* Left Book */}
        <div className="flex flex-col items-center md:items-start">
          <Link href="/ebooks" className="text-center md:text-left">
            <p className="py-3 font-bold text-lg md:text-xl">Our Featured Books</p>
            <Image 
              src="/3 COVER PAGE 70 YEARS.png" 
              width={200} height={200} 
              alt="book"
              className="w-32 md:w-48 rotate-[-10deg] floating"
            />
          </Link>
        </div>

        {/* Middle Content */}
        <div className="max-w-2xl mx-auto text-center md:text-center flex flex-col gap-6">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Discover <span className="bg-gradient-to-r from-orange-800 via-brown-800 to-yellow-800 bg-clip-text text-transparent">Ancient Wisdom</span> for Modern Times
            </h1>
            <p className="text-[15px] md:text-xl mb-4">
              Journey through time with meticulously researched articles and books that bring ancient civilizations to life. Explore philosophies, histories, Pictorials, Videos and traditions that shaped our world and reflections on contemporary issues
            </p>
          </div>

          {/* Pictorials */}
          <div className="flex flex-col items-center md:items-start gap-6 justify-center">
            <p className="text-xl md:text-2xl font-bold border-b-2 px-6 w-full text0center">
              Features Pictorials
            </p>
            <Link href='/pictures'>
            <div className="flex flex-wrap justify-center gap-4">
              <Image src="/Giove,_I_sec_dc,_con_parti_simulanti_il_bronzo_moderne_02.JPG" alt="pictorial" width={200} height={200} className="w-24 md:w-40 rotate-[-20deg]" />
              <Image src="/Jupiter-Religion1.jpg" alt="pictorial" width={200} height={200} className="w-24 md:w-40 rounded-lg" />
              <Image src="/face-of-roman-god-jupiter.png" alt="pictorial" width={200} height={200} className="w-24 md:w-40 rotate-[20deg]" />
            </div>
            </Link>
          </div>
        </div>

        {/* Right Video */}
        <div className="flex flex-col items-center md:items-end">
          <p className="py-3 font-bold text-lg md:text-xl">Our Featured Videos</p>
          <Link href="/videos">
            <Image 
              src="/image5.png" 
              width={300} height={400} 
              alt="book"
              className="w-32 md:w-48 rotate-[10deg] floating"
            />
          </Link>
        </div>
      </section>

      {/* Featured Books */}
      <FeaturedBooks ebooks={featuredEbooks} />

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-black">Instant Access</h3>
              <p className="text-gray-600">Download immediately after payment confirmation</p>
            </div>

            <div className="text-center p-6">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💳</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-black">Secure Payment</h3>
              <p className="text-gray-600">Paystack secured payments with multiple options</p>
            </div>

            <div className="text-center p-6">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-black">Any Device</h3>
              <p className="text-gray-600">Read on your phone, tablet, or computer</p>
            </div>
          </div>
        </div>
      </section>

      <Newsletter />
    </div>
  );
}
