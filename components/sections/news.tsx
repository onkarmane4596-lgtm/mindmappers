'use client';

import { useState } from 'react';
import { ArrowRight, Calendar, Clock, X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

const newsArticles = [
  {
    id: 1,
    title: 'Featured in Lokmat - Guidance for 10th & 12th',
    category: 'Media Coverage',
    date: 'Jan 20, 2026',
    readTime: '2 min read',
    image: '/article/1.jpeg',
    excerpt: 'Mindmappers was featured in Lokmat for our expert guidance provided to 10th and 12th standard students.'
  },
  {
    id: 2,
    title: 'Agniaditya: Building Future Leaders',
    category: 'Featured News',
    date: 'Feb 15, 2026',
    readTime: '3 min read',
    image: '/article/2.jpeg',
    excerpt: 'A detailed feature by Agniaditya newspaper on Mindmappers\' mission to empower the next generation.'
  },
  {
    id: 3,
    title: 'Newspaper Highlights: Career Counseling Success',
    category: 'Recognition',
    date: 'Mar 10, 2026',
    readTime: '4 min read',
    image: '/article/3.jpeg',
    excerpt: 'Our recent educational seminars and their impact on students were highlighted in leading local newspapers.'
  },
  {
    id: 4,
    title: 'Ekmat News: Shaping Young Minds',
    category: 'Media Highlights',
    date: 'Mar 18, 2026',
    readTime: '2 min read',
    image: '/article/4.jpeg',
    excerpt: 'Ekmat newspaper covers the story of how Mindmappers is reshaping the career counseling landscape.'
  }
];

export function NewsSection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % newsArticles.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + newsArticles.length) % newsArticles.length);
    }
  };

  return (
    <section className="py-10 md:py-16 relative bg-white overflow-hidden">
      {/* Subtle Background Accents */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#1a235c]/5 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#F4A16C]/5 rounded-full blur-[80px] translate-y-1/2 translate-x-1/4 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#1a235c] font-bold text-xs tracking-widest uppercase mb-6 shadow-sm">
            Insights & Updates
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#1a235c] to-[#3D57C5] mb-6 tracking-tight leading-tight pb-1">
            Latest News & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4A16C] to-[#FF6B00]">Articles</span>
          </h2>
          <p className="text-sm md:text-base text-slate-600 font-medium max-w-xl">
            Stay informed with expert advice, industry trends, and the latest updates from the world of career counseling and education.
          </p>
        </div>
      </div>

      {/* Horizontal Carousel for Vertical Cards */}
      <div className="flex overflow-x-auto pb-16 pt-4 px-4 sm:px-6 lg:px-8 snap-x snap-mandatory gap-6 md:gap-8 max-w-[100vw] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <div className="w-[1vw] shrink-0 sm:hidden" />
        
        {newsArticles.map((article, index) => (
          <div 
            key={article.id} 
            onClick={() => openLightbox(index)}
            className="group relative flex flex-col shrink-0 w-[260px] sm:w-[320px] lg:w-[360px] snap-start bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl hover:shadow-blue-900/10 transition-all duration-500 border border-slate-100 cursor-pointer hover:-translate-y-1.5"
          >
            {/* Image Container (Vertical Format) */}
            <div className="relative w-full aspect-[4/5] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a235c]/90 via-[#1a235c]/40 to-transparent opacity-80 z-10 delay-100 transition-opacity group-hover:opacity-40"></div>
              
              <img 
                src={article.image} 
                alt={article.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Category Badge */}
              <div className="absolute top-4 left-4 z-20">
                <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white bg-[#F4A16C] rounded-full shadow-md">
                  {article.category}
                </span>
              </div>

                {/* Read More Overlay Icon */}
              <div className="absolute top-4 right-4 z-20 w-10 h-10 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                 <Maximize2 className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
              </div>

              {/* Title & Meta over image */}
              <div className="absolute bottom-0 left-0 w-full p-6 z-20 flex flex-col justify-end transform transition-transform duration-500 group-hover:-translate-y-2">
                <div className="flex flex-wrap items-center gap-3 text-white/70 text-[10px] font-bold uppercase tracking-widest mb-3">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#F4A16C]" />
                    {article.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#F4A16C]" />
                    {article.readTime}
                  </span>
                </div>
                
                <h3 className="text-lg md:text-xl font-bold text-white leading-tight">
                  {article.title}
                </h3>
              </div>
            </div>
            
            {/* Content below image */}
            <div className="absolute bottom-0 left-0 w-full bg-white p-6 translate-y-[110%] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 z-30 border-t border-slate-50 shadow-[0_-20px_40px_rgba(0,0,0,0.1)] rounded-b-[2.5rem]">
               <h3 className="text-lg font-bold text-[#1a235c] leading-tight mb-3 line-clamp-2">
                  {article.title}
                </h3>
               <p className="text-slate-500 font-medium line-clamp-3 mb-4 text-sm leading-relaxed">
                  {article.excerpt}
               </p>
               <div className="flex items-center gap-2 text-[#F4A16C] font-bold text-xs uppercase tracking-widest">
                  Enlarge Article <Maximize2 className="w-4 h-4" />
               </div>
            </div>
          </div>
        ))}
        
        <div className="w-[1vw] shrink-0 sm:hidden" />
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 z-[100] bg-[#1a235c]/95 backdrop-blur-md flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button 
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors border border-white/20 z-50 backdrop-blur-md"
            onClick={closeLightbox}
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Buttons */}
          <button 
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors border border-white/20 z-50 backdrop-blur-md"
            onClick={prevImage}
          >
            <ChevronLeft className="w-8 h-8 md:w-10 md:h-10 pr-1" />
          </button>

          <button 
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors border border-white/20 z-50 backdrop-blur-md"
            onClick={nextImage}
          >
            <ChevronRight className="w-8 h-8 md:w-10 md:h-10 pl-1" />
          </button>

          {/* Main Image Container */}
          <div 
            className="relative w-full max-w-5xl max-h-[90vh] px-4 md:px-0 flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full flex flex-col items-center justify-center gap-6">
              <img 
                src={newsArticles[selectedImage].image} 
                alt={newsArticles[selectedImage].title}
                className="max-w-full max-h-[70vh] object-contain rounded-2xl shadow-2xl border-4 border-white/10"
              />
              
              <div className="text-center bg-white/10 px-6 py-4 rounded-[1.5rem] backdrop-blur-md border border-white/20 max-w-xl w-[90%]">
                <h3 className="text-white text-lg sm:text-xl font-bold mb-1 line-clamp-2">
                  {newsArticles[selectedImage].title}
                </h3>
                <p className="text-[#F4A16C] font-semibold text-xs md:text-sm uppercase tracking-widest mt-2">
                  {newsArticles[selectedImage].category}
                </p>
              </div>

              {/* Image Counter */}
              <div className="text-white/40 font-bold tracking-widest text-xs uppercase bg-white/5 px-4 py-2 rounded-full border border-white/10">
                {selectedImage + 1} / {newsArticles.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
