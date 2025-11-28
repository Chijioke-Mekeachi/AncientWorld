// app/ebooks/page.tsx
'use client'
import { ebooks } from '@/data/ebooks';
import EbookCard from '@/components/EbookCard';
import React from 'react';

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
}

export default function EbooksPage() {
  const [search, setSearch] = React.useState<string>("");
  React.useEffect(() => {
    document.title = 'Ebooks - Digital Library';
    console.log(search);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">All Ebooks</h1>
          <p className="text-lg text-gray-600">Browse our complete collection of digital books</p>
        </div>

      <div className='mb-8 flex justify-center gap-4'>
        <input placeholder='Search' className='border-2 border-purple-800 rounded-[10px] text-black justify-center p-2' onChange={(e)=>{setSearch(e.target.value)}}/>
        {/* <button type="button" className='bg-purple-500 border-3 border-purple-800 rounded-[15px] p-1 w-20 font-bold' onClick={()=>{console.log(search)}}>Search</button> */}
      </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {ebooks.map((ebook: Ebook) =>{
            if(search===""){
              return <EbookCard key={ebook.id} ebook={ebook} />
            } else if(ebook.title.toLowerCase().includes(search.toLowerCase()) || ebook.description.toLowerCase().includes(search.toLowerCase())){
              return <EbookCard key={ebook.id} ebook={ebook} />
            }
          })}
        </div>
      </div>
    </div>
  );
}