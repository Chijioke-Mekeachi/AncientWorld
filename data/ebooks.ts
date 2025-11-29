// data/ebooks.ts
import { Ebook } from '@/types';

export const ebooks: Ebook[] = [
  {
    id: 1,
    title: "70 Years Military Crushing",
    description: "A comprehensive analysis of military strategies and historical perspectives spanning seven decades of conflict and resolution.",
    price: 29.99,
    image: "/images/military-crushing.jpg",
    category: "Military History",
    pages: 215,
    format: "PDF",
    downloadUrl: "https://drive.google.com/uc?export=download&id=1bwfACcOghl9YDCpB8u3y0H1a7U38k9KO"
  },
  {
    id: 2,
    title: "A Better Understanding of Judaism",
    description: "Explore the rich traditions, beliefs, and history of Judaism in this comprehensive guide to one of the world's oldest religions.",
    price: 24.99,
    image: "/images/judaism.jpg",
    category: "Religion",
    pages: 180,
    format: "PDF",
    downloadUrl: "https://drive.google.com/uc?export=download&id=1rQ9-6DZisYb-St3o1me8j4crgnrXsFsx"
  },
  {
    id: 3,
    title: "Rainbow Slum",
    description: "A compelling narrative that explores the vibrant yet challenging life in urban communities, filled with hope and resilience.",
    price: 19.99,
    image: "/images/rainbow-slum.jpg",
    category: "Fiction",
    pages: 165,
    format: "PDF",
    downloadUrl: "https://drive.google.com/uc?export=download&id=1O_NoELnGVr6cq66ZjdTXCP4xWkVm3dJy"
  },
  {
    id: 4,
    title: "Military Strategy & Analysis",
    description: "Advanced military tactics and strategic analysis for modern warfare and defense planning.",
    price: 34.99,
    image: "/images/military-strategy.jpg",
    category: "Military Science",
    pages: 198,
    format: "PDF",
    downloadUrl: "https://drive.google.com/uc?export=download&id=1bwfACcOghl9YDCpB8u3y0H1a7U38k9KO"
  },
  {
    id: 5,
    title: "The Complete Guide to Digital Marketing",
    description: "Master digital marketing strategies that actually work in today's competitive landscape. Learn SEO, social media marketing, email campaigns, and more.",
    price: 27.99,
    image: "/images/digital-marketing.jpg",
    category: "Marketing",
    pages: 156,
    format: "PDF",
    downloadUrl: "/downloads/digital-marketing-guide.pdf"
  },
  {
    id: 6,
    title: "Python Programming for Beginners",
    description: "Learn Python from scratch with practical examples and real-world projects. Perfect for absolute beginners looking to start their coding journey.",
    price: 24.99,
    image: "/images/python.jpg",
    category: "Programming",
    pages: 203,
    format: "PDF, EPUB",
    downloadUrl: "/downloads/python-beginners.pdf"
  },
  {
    id: 7,
    title: "Financial Freedom Blueprint",
    description: "Step-by-step guide to achieving financial independence through smart investing, budgeting, and wealth-building strategies.",
    price: 32.99,
    image: "/images/finance.jpg",
    category: "Finance",
    pages: 189,
    format: "PDF",
    downloadUrl: "/downloads/financial-freedom.pdf"
  },
  {
    id: 8,
    title: "Healthy Cooking Made Simple",
    description: "Delicious and nutritious recipes that are easy to make. Transform your diet and improve your health with these amazing dishes.",
    price: 22.99,
    image: "/images/cooking.jpg",
    category: "Health",
    pages: 145,
    format: "PDF, EPUB",
    downloadUrl: "/downloads/healthy-cooking.pdf"
  }
];
