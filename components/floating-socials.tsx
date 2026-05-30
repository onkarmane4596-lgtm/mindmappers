'use client';

import { MessageCircle, Phone, Instagram, Facebook, Youtube, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export function FloatingSocials() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const whatsappMessage = encodeURIComponent("Hello MindMappers Team! 🌟\n\nI would like to book a career counseling session. Please share the details and available time slots.");

  return (
    <>
      {/* Left side vertical social bar (hidden on small screens, shown on md and up) */}
      <div className="fixed left-0 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-2 p-2 bg-white/80 backdrop-blur-md rounded-r-2xl shadow-[4px_0_24px_rgba(0,0,0,0.06)] border border-slate-100 border-l-0">
        <a href="https://www.facebook.com/people/Mindmapper-Career-Counselling/61575185248722/?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-xl text-slate-400 hover:bg-[#1877F2] hover:text-white transition-all duration-300" aria-label="Facebook">
          <Facebook size={18} />
        </a>
        <a href="https://www.instagram.com/mindmapperscounselling?igsh=MXhsZ3B1cjlqbWp0" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-xl text-slate-400 hover:bg-[#E4405F] hover:text-white transition-all duration-300" aria-label="Instagram">
          <Instagram size={18} />
        </a>
        <a href="https://www.youtube.com/@mindmapperscareercounseling" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-xl text-slate-400 hover:bg-[#FF0000] hover:text-white transition-all duration-300" aria-label="YouTube">
          <Youtube size={18} />
        </a>
      </div>

      {/* Right side floating action buttons */}
      <div className="fixed right-4 bottom-4 md:right-8 md:bottom-8 z-50 flex flex-col items-center gap-4">
        
        {/* Scroll to top button */}
        <AnimatePresence>
          {isVisible && (
            <motion.button
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.5, y: 20 }}
              onClick={scrollToTop}
              className="w-10 h-10 bg-white text-slate-500 rounded-full flex items-center justify-center shadow-lg border border-slate-100 hover:bg-slate-50 hover:text-[#1a235c] transition-colors"
              aria-label="Scroll to top"
            >
              <ChevronUp size={20} />
            </motion.button>
          )}
        </AnimatePresence>

        {/* Call button */}
        <motion.a
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          href="tel:+919822258300"
          className="w-12 h-12 bg-[#1a235c] text-white rounded-full flex items-center justify-center shadow-[0_8px_20px_rgba(26,35,92,0.3)] hover:scale-110 transition-transform duration-300 relative group"
          aria-label="Call Us"
        >
          <Phone size={20} />
          <span className="absolute right-full mr-4 bg-gray-900 text-white text-sm px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap hidden sm:block">
            Call Us
          </span>
        </motion.a>

        {/* Primary WhatsApp Booking button */}
        <motion.a
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          href={`https://wa.me/919822258300?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_8px_25px_rgba(37,211,102,0.4)] hover:shadow-[0_12px_35px_rgba(37,211,102,0.6)] hover:scale-110 transition-all duration-300 relative group z-10"
          aria-label="Book on WhatsApp"
        >
          {/* Pulsing ring effect */}
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"></span>
          
          <MessageCircle size={32} />
          <span className="absolute right-full mr-4 bg-gray-900 text-white font-medium text-sm px-4 py-2 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-xl">
            Book a Session
            <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 border-[6px] border-transparent border-l-gray-900"></div>
          </span>
        </motion.a>
      </div>
    </>
  );
}
