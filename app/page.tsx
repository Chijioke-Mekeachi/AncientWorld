// app/page.tsx
import Link from 'next/link';
import { ebooks } from '@/data/ebooks';
import EbookCard from '@/components/EbookCard';
import Newsletter from '@/components/Newsletter';

export default function Home() {
  const featuredEbooks = ebooks.slice(0, 3);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Transform Your <span className="text-yellow-300">Knowledge</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Discover premium ebooks that will help you grow, learn new skills, and achieve your goals.
          </p>
          <Link 
            href="/ebooks"
            className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition duration-300 shadow-lg"
          >
            Browse All Ebooks
          </Link>
        </div>
      </section>

      {/* Featured Ebooks */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Ebooks
            </h2>
            <p className="text-lg text-gray-600">Our most popular titles</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredEbooks.map((ebook) => (
              <EbookCard key={ebook.id} ebook={ebook} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/ebooks"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
            >
              View All Ebooks
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
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
              <h3 className="text-xl font-semibold mb-3 text-black  ">Any Device</h3>
              <p className="text-gray-600">Read on your phone, tablet, or computer</p>
            </div>
          </div>
        </div>
      </section>

      <Newsletter />
    </div>
  );
}