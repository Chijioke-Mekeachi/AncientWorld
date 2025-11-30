// components/Header.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md border-b sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Bar */}
        <div className="flex justify-between h-20 items-center">
          
          {/* Logo */}
          <Link
            href="/"
            className="text-1xl font-extrabold bg-gradient-to-r from-yellow-500 via-amber-600 to-red-500 bg-clip-text text-transparent flex items-center gap-3"
          >
            <Image alt="Logo" src="/favorite.png" width={60} height={60} />
            Windows to The Ancient World
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10 text-lg font-medium">
            <Link href="/" className="nav-link text-black  hover:text-orange-600">Home</Link>
            <Link href="/about" className="nav-link text-black  hover:text-orange-600">About</Link>
            <Link href="/videos" className="nav-link text-black  hover:text-orange-600">Videos</Link>
            <Link href="/articles" className="nav-link text-black  hover:text-orange-600">Articles</Link>
            <Link href="/pictures" className="nav-link text-black hover:text-orange-600">Pictorials</Link>

            <Link 
              href="/ebooks"
              className="bg-orange-500 text-white px-5 py-2.5 rounded-xl shadow hover:bg-orange-600 hover:shadow-lg transition-all duration-300"
            >
              Browse Books
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg shadow-sm border text-gray-800 text-4xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Mobile Menu Panel */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            menuOpen ? "max-h-96 opacity-100 py-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col space-y-4 text-lg font-medium">

            <Link href="/" className="mobile-link text-black  hover:text-orange-600">Home</Link>
            <Link href="/" className="mobile-link text-black  hover:text-orange-600">About</Link>
            <Link href="/videos" className="mobile-link text-black  hover:text-orange-600">Videos</Link>
            <Link href="/articles" className="mobile-link text-black  hover:text-orange-600">Articles</Link>
            <Link href="/pictures" className="mobile-link text-black  hover:text-orange-600">Pictorials</Link>

            <Link 
              href="/ebooks"
              className="bg-orange-500 text-white px-5 py-2 rounded-xl shadow-md hover:bg-orange-600 w-fit transition-all duration-300"
            >
              Browse Books
            </Link>
          </div>
        </div>
      </nav>

      {/* Tailwind Styles */}
      <style jsx>{`
        .nav-link {
          @apply text-gray-700 hover:text-orange-600 transition-colors;
        }
        .mobile-link {
          @apply text-gray-700 hover:text-orange-600 px-2 transition-colors;
        }
      `}</style>
    </header>
  );
}
