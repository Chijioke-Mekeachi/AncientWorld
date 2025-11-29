// components/Header.tsx
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-yellow-500 via-brown-500 to-red-400 bg-clip-text text-transparent flex justify-center items-center gap-2">
            <Image src={`/favorite.png`} width={100} height={100}/>
             Windows to The Ancient-World
            </Link>
          </div>
          <div className="flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-gray-900 font-medium">
              Home
            </Link>
            <Link 
              href="/ebooks" 
              className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-gradient-to-r hover:from-yellow-500 hover:via-brown-500 hover:to-red-400 transition ease-in duration-300"
            >
              Browse Books
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}