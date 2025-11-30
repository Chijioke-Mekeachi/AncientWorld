'use client';
import Link from "next/link";
import { useState } from "react";
import { Facebook, Twitter, Instagram, Linkedin, Menu, X, BookOpen, Award, Globe, Users, Quote } from "lucide-react";

export default function About() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">

      {/* MAIN CONTENT */}
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About the Author
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Meet the mind behind {'"'}Windows to the Ancient World{`"`}  a scholar dedicated to 
              bridging ancient wisdom with contemporary understanding.
            </p>
          </div>
        </section>

        {/* Author Profile */}
        <section className="py-16 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              {/* Author Image */}
              <div className="lg:w-2/5">
                <div className="relative">
                  <div className="w-80 h-80 mx-auto bg-gradient-to-br from-amber-500 to-amber-700 rounded-full p-2 shadow-2xl">
                    <div className="w-full h-full bg-slate-200 rounded-full overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-slate-300 to-slate-400 flex items-center justify-center">
                        <Users size={64} className="text-slate-600" />
                      </div>
                    </div>
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-amber-500 text-white px-6 py-3 rounded-xl shadow-lg">
                    <div className="text-center">
                      <div className="text-2xl font-bold">15+</div>
                      <div className="text-sm">Years Research</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Author Bio */}
              <div className="lg:w-3/5">
                <div className="bg-amber-500 text-white px-4 py-2 rounded-full text-sm font-semibold inline-block mb-4">
                  Distinguished Scholar & Author
                </div>
                
                <h2 className="text-4xl font-bold text-slate-900 mb-6">
                  Dr. Ishiusah Chijioke W.
                </h2>
                
                <div className="prose prose-lg text-slate-700 leading-relaxed space-y-6">
                  <p>
                    <strong>Dr. Ishiusah Chijioke W.</strong> is a distinguished Nigerian scholar, 
                    author, and passionate historian who brings together the depth of his cultural 
                    heritage with a lifelong fascination for the civilizations, ideas, and moral 
                    traditions that shaped the ancient world.
                  </p>
                  
                  <p>
                    Holding a PhD in Financial Accounting, Dr. Ishiusah uniquely bridges analytical 
                    precision with narrative storytelling. His works represent a rare synthesis of 
                    rigorous academic research and engaging, accessible writing that makes ancient 
                    wisdom relevant to modern readers.
                  </p>

                  <p>
                    With over 15 years of dedicated research into ancient civilizations, Dr. Ishiusah 
                    has developed a distinctive approach that combines historical accuracy with 
                    philosophical insight, creating works that not only educate but also inspire 
                    personal reflection and growth.
                  </p>
                </div>

                {/* Author Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <BookOpen className="text-amber-600" size={24} />
                    </div>
                    <div className="text-2xl font-bold text-slate-900">5+</div>
                    <div className="text-sm text-slate-600">Books Published</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Award className="text-amber-600" size={24} />
                    </div>
                    <div className="text-2xl font-bold text-slate-900">3</div>
                    <div className="text-sm text-slate-600">Awards</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Globe className="text-amber-600" size={24} />
                    </div>
                    <div className="text-2xl font-bold text-slate-900">12+</div>
                    <div className="text-sm text-slate-600">Civilizations Studied</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Users className="text-amber-600" size={24} />
                    </div>
                    <div className="text-2xl font-bold text-slate-900">5K+</div>
                    <div className="text-sm text-slate-600">Readers</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Philosophy */}
        <section className="py-16 bg-white/50 backdrop-blur-sm">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Mission & Philosophy
              </h2>
              <p className="text-lg text-slate-600">
                The driving force behind every publication and research endeavor
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                  <BookOpen className="text-amber-600" size={32} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Educational Mission</h3>
                <p className="text-slate-700 leading-relaxed">
                  To make ancient history and philosophy accessible to everyone, 
                  breaking down complex academic concepts into engaging narratives 
                  that resonate with contemporary audiences while maintaining 
                  scholarly integrity.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                  <Globe className="text-amber-600" size={32} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Cultural Bridge</h3>
                <p className="text-slate-700 leading-relaxed">
                  To serve as a bridge between ancient wisdom and modern life, 
                  demonstrating how lessons from past civilizations can inform 
                  our present decisions and shape a better future for humanity.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Quote Section */}
        <section className="py-16 bg-gradient-to-r from-amber-500 to-amber-600 text-white">
          <div className="container mx-auto px-6 max-w-4xl text-center">
            <Quote size={48} className="mx-auto mb-6 opacity-80" />
            <blockquote className="text-2xl md:text-3xl font-light italic leading-relaxed mb-6">
              {`"`}The ancient world holds mirrors to our modern souls. In studying 
              civilizations long gone, we discover timeless truths about humanity, 
              leadership, and the pursuit of meaning that remain profoundly relevant today.{`"`}
            </blockquote>
            <cite className="text-xl font-semibold not-italic">
              — Dr. Ishiusah Chijioke W.
            </cite>
          </div>
        </section>

        {/* Expertise Areas */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Areas of Expertise
              </h2>
              <p className="text-lg text-slate-600">
                Specialized knowledge spanning multiple ancient civilizations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Ancient Egyptian Civilization", period: "3100–332 BCE" },
                { title: "Classical Greek Philosophy", period: "6th–4th Century BCE" },
                { title: "Roman Empire & Republic", period: "753 BCE–476 CE" },
                { title: "Mesopotamian Cultures", period: "3500–539 BCE" },
                { title: "Ancient African Kingdoms", period: "Varied Periods" },
                { title: "Early Moral Philosophies", period: "Global Traditions" }
              ].map((area, index) => (
                <div key={index} className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300 border border-slate-200">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{area.title}</h3>
                  <p className="text-sm text-amber-600 font-medium">{area.period}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-slate-300 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent mb-4 block">
                Windows to the Ancient World
              </Link>
              <p className="text-sm max-w-md">
                Bringing ancient civilizations to life through meticulously researched publications 
                and articles that bridge past and present.
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-6">
              <Link
                href="https://facebook.com"
                target="_blank"
                className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors duration-200"
              >
                <Facebook size={18} />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors duration-200"
              >
                <Twitter size={18} />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors duration-200"
              >
                <Instagram size={18} />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors duration-200"
              >
                <Linkedin size={18} />
              </Link>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm">
            <p>© {new Date().getFullYear()} Windows to the Ancient World. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}