'use client';

import { useState } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight, Camera } from 'lucide-react';

const galleryImages = [
  {
    id: 1,
    url: '/gallery/1.jpeg',
    title: 'Seminar Excellence',
    location: 'Main Hall',
    size: 'large',
  },
  {
    id: 2,
    url: '/gallery/2.jpeg',
    title: 'Expert Presentation',
    location: 'Conference Room',
    size: 'wide',
  },
  {
    id: 3,
    url: '/gallery/3.jpeg',
    title: 'One-on-One Counseling',
    location: 'Counseling Room',
    size: 'tall',
  },
  {
    id: 4,
    url: '/gallery/4.jpeg',
    title: 'Interactive Workshop',
    location: 'Workshop Space',
    size: 'regular',
  },
  {
    id: 5,
    url: '/gallery/5.jpeg',
    title: 'Personalized Mentoring',
    location: 'Interaction Hub',
    size: 'tall',
  },
  {
    id: 6,
    url: '/gallery/6.jpeg',
    title: 'Classroom Engagement',
    location: 'Digital Lab',
    size: 'wide',
  },
  {
    id: 7,
    url: '/gallery/7.jpeg',
    title: 'Learning Session',
    location: 'Seminar Hall',
    size: 'regular',
  },
  {
    id: 8,
    url: '/gallery/8.jpeg',
    title: 'Skills Development',
    location: 'Training Center',
    size: 'regular',
  },
  {
    id: 9,
    url: '/gallery/9.jpeg',
    title: 'Awards & Recognition',
    location: 'Gala Event',
    size: 'wide',
  },
  {
    id: 10,
    url: '/gallery/10.jpeg',
    title: 'Empowerment Seminar',
    location: 'Auditiorium',
    size: 'regular',
  },
  {
    id: 11,
    url: '/gallery/11.jpeg',
    title: 'Large Scale Orientation',
    location: 'Convention Center',
    size: 'large',
  },
  {
    id: 12,
    url: '/gallery/12.jpeg',
    title: 'Educational Forum',
    location: 'Knowledge Park',
    size: 'wide',
  },
  {
    id: 13,
    url: '/gallery/13.jpeg',
    title: 'Community Outreach',
    location: 'Outer Space',
    size: 'regular',
  }
];

export function SessionsGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);

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
      setSelectedImage((selectedImage + 1) % galleryImages.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  return (
    <section className="py-10 md:py-16 relative bg-[#f8fafc] overflow-hidden">
      {/* Subtle Background Accents */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#1a235c]/5 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#F4A16C]/5 rounded-full blur-[80px] translate-y-1/2 translate-x-1/4 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#1a235c] font-bold text-xs tracking-widest uppercase mb-6 shadow-sm">
            <Camera size={14} className="text-[#F4A16C]" />
            <span>Our Legacy</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#1a235c] to-[#3D57C5] mb-6 tracking-tight leading-tight pb-1">
            Glimpses of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4A16C] to-[#FF6B00]">Our Sessions</span>
          </h2>
          <p className="text-sm md:text-base text-slate-600 font-medium max-w-xl mx-auto">
            Explore moments captured during our interactive counseling sessions, workshops, and seminars where transformations happen.
          </p>
        </div>

        {/* Dynamic Layout: Scroll or Grid */}
        <div 
          className={
            isExpanded 
              ? "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-6 auto-rows-[130px] md:auto-rows-[250px] transition-all duration-700 ease-in-out" 
              : "flex overflow-x-auto snap-x snap-mandatory gap-4 md:gap-8 pb-10 no-scrollbar scroll-smooth transition-all duration-700 ease-in-out px-4 -mx-4 md:px-0 md:mx-0"
          }
        >
          {galleryImages.map((image, index) => {
            let spanClasses = "";
            let scrollClasses = "flex-shrink-0 w-[240px] md:w-[400px] aspect-[4/3] snap-center";

            switch(image.size) {
              case 'large':
                spanClasses = "col-span-2 row-span-2";
                scrollClasses = "flex-shrink-0 w-[200px] sm:w-[240px] md:w-[400px] aspect-[4/3] snap-center";
                break;
              case 'wide':
                spanClasses = "col-span-2 row-span-1";
                scrollClasses = "flex-shrink-0 w-[260px] sm:w-[300px] md:w-[500px] aspect-[16/9] snap-center";
                break;
              case 'tall':
                spanClasses = "col-span-1 row-span-2";
                scrollClasses = "flex-shrink-0 w-[160px] sm:w-[180px] md:w-[300px] aspect-[3/4] snap-center";
                break;
              default:
                spanClasses = "col-span-1 row-span-1";
                scrollClasses = "flex-shrink-0 w-[200px] sm:w-[240px] md:w-[400px] aspect-[4/3] snap-center";
                break;
            }

            return (
              <div 
                key={image.id}
                className={`group relative rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden bg-white cursor-pointer shadow-sm hover:shadow-2xl hover:shadow-[#1a235c]/20 transition-all duration-500 transform hover:-translate-y-2 border border-slate-100 ${isExpanded ? spanClasses : scrollClasses}`}
                onClick={() => openLightbox(index)}
              >
                <img 
                  src={image.url} 
                  alt={image.title} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  loading="lazy"
                />

                {/* Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a235c]/90 via-[#1a235c]/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                
                {/* Expand Icon */}
                <div className="absolute top-4 right-4 md:top-8 md:right-8 w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0 shadow-lg border border-white/30">
                  <Maximize2 className="w-5 h-5 md:w-6 md:h-6" />
                </div>

                {/* Content Details */}
                <div className="absolute bottom-0 left-0 w-full p-5 md:p-8 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="inline-block px-3 py-1 bg-[#F4A16C] text-white text-[8px] md:text-[10px] font-black rounded-full mb-2 md:mb-3 shadow-lg uppercase tracking-widest">
                    {image.location}
                  </div>
                  <h3 className="text-white font-black text-sm sm:text-base md:text-2xl leading-tight tracking-tight line-clamp-2">
                    {image.title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>

        {/* Toggle Button */}
        <div className="mt-12 flex justify-center">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#1a235c] text-white font-black text-sm md:text-base tracking-widest uppercase overflow-hidden transition-all duration-500 hover:shadow-[0_20px_40px_rgba(26,35,92,0.3)] hover:-translate-y-1 active:scale-95"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#F4A16C] to-[#F4A16C] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out" />
            <span className="relative z-10">{isExpanded ? 'View Less' : 'View All Sessions'}</span>
            <div className={`relative z-10 transition-transform duration-500 ${isExpanded ? 'rotate-180' : 'group-hover:translate-y-1'}`}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
            </div>
          </button>
        </div>

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
                src={galleryImages[selectedImage].url} 
                alt={galleryImages[selectedImage].title}
                className="max-w-full max-h-[70vh] object-contain rounded-2xl shadow-2xl border-4 border-white/10"
              />
              
              <div className="text-center bg-white/10 px-6 py-4 rounded-[1.5rem] backdrop-blur-md border border-white/20 max-w-xl w-[90%]">
                <h3 className="text-white text-lg sm:text-xl md:text-2xl font-bold mb-1 line-clamp-2">
                  {galleryImages[selectedImage].title}
                </h3>
                <p className="text-[#F4A16C] font-semibold text-xs md:text-sm flex items-center justify-center gap-2 uppercase tracking-widest mt-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F4A16C]"></span>
                  {galleryImages[selectedImage].location}
                </p>
              </div>

              {/* Image Counter */}
              <div className="text-white/40 font-bold tracking-widest text-xs uppercase bg-white/5 px-4 py-2 rounded-full border border-white/10">
                {selectedImage + 1} / {galleryImages.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
