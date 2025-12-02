// app/layout.tsx
'useclient'
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Windows To The Ancient World',
  description: 'Discover amazing ebooks that transform your knowledge',
  icons:'/favorite.png'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Toaster position="top-right" />
      </body>
    </html>
  );
}