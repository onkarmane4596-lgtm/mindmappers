'use client';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail, Clock, MessageCircle, Instagram, Facebook, Youtube } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ContactPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-slate-50 pt-32 pb-24 overflow-hidden relative">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1a235c]/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#F4A16C]/5 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/4 pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-black mb-4 flex items-center justify-center gap-2 sm:gap-3">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1a235c] to-[#3D57C5]">Let's</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4A16C] to-[#e66000]">Connect</span>
            </h1>
            <p className="text-slate-600 text-sm md:text-base max-w-xl mx-auto font-medium">
              Ready to take the next step in your career journey? Book a session with us directly on WhatsApp or reach out through our channels.
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-5 gap-6"
          >
            {/* Primary Action - Booking */}
            <motion.div variants={itemVariants} className="md:col-span-3 bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 flex flex-col items-center justify-center text-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mb-6 shadow-inner rotate-3 group-hover:rotate-0 transition-transform duration-300">
                <MessageCircle size={40} />
              </div>
              <h2 className="text-3xl font-black text-[#1a235c] mb-3">Book a Session</h2>
              <p className="text-slate-500 text-sm md:text-base mb-8 max-w-sm">
                Skip the forms. Message us directly on WhatsApp to schedule your personalized career counseling session.
              </p>
              <Button className="w-full sm:w-auto min-w-[280px] bg-[#25D366] hover:bg-[#128C7E] text-white rounded-2xl py-7 text-lg font-bold shadow-[0_8px_25px_rgba(37,211,102,0.3)] hover:shadow-[0_12px_35px_rgba(37,211,102,0.4)] transition-all hover:-translate-y-1" asChild>
                <a href="https://wa.me/919822258300?text=Hello%20MindMappers%20Team!%20%F0%9F%8C%9F%0A%0AI%20would%20like%20to%20book%20a%20career%20counseling%20session.%20Please%20share%20the%20details%20and%20available%20time%20slots." target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2" size={24} /> Book via WhatsApp
                </a>
              </Button>
            </motion.div>

            {/* Socials & Hours */}
            <div className="md:col-span-2 flex flex-col gap-6">
              <motion.div variants={itemVariants} className="bg-white rounded-3xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 flex-1">
                <h3 className="font-bold text-[#1a235c] mb-5 flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-blue-50 text-[#1a235c] flex items-center justify-center">
                    <Clock size={18} />
                  </span>
                  Business Hours
                </h3>
                <div className="space-y-3 text-sm text-slate-600">
                  <div className="flex justify-between items-center py-2 border-b border-slate-50">
                    <span className="font-semibold">Mon - Sat</span>
                    <span className="font-black text-[#F4A16C] bg-[#F4A16C]/10 px-3 py-1 rounded-lg">10 AM - 6 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="font-semibold">Sunday</span>
                    <span className="font-bold text-slate-400 bg-slate-100 px-3 py-1 rounded-lg">Closed</span>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="bg-white rounded-3xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100">
                <h3 className="font-bold text-[#1a235c] mb-4 flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-blue-50 text-[#1a235c] flex items-center justify-center">
                    <MessageCircle size={18} />
                  </span>
                  Socials
                </h3>
                <div className="grid grid-cols-3 gap-3">
                  <a href="https://www.facebook.com/people/Mindmapper-Career-Counselling/61575185248722/?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center gap-2 bg-[#1877F2]/5 text-[#1877F2] p-4 rounded-2xl hover:bg-[#1877F2] hover:text-white transition-all font-bold text-sm group">
                    <Facebook size={24} className="group-hover:scale-110 transition-transform" />
                    <span className="text-[10px] sm:text-xs text-center leading-tight">Facebook</span>
                  </a>
                  <a href="https://www.instagram.com/mindmapperscounselling?igsh=MXhsZ3B1cjlqbWp0" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center gap-2 bg-[#E4405F]/5 text-[#E4405F] p-4 rounded-2xl hover:bg-[#E4405F] hover:text-white transition-all font-bold text-sm group">
                    <Instagram size={24} className="group-hover:scale-110 transition-transform" />
                    <span className="text-[10px] sm:text-xs text-center leading-tight">Instagram</span>
                  </a>
                  <a href="https://www.youtube.com/@mindmapperscareercounseling" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center gap-2 bg-[#FF0000]/5 text-[#FF0000] p-4 rounded-2xl hover:bg-[#FF0000] hover:text-white transition-all font-bold text-sm group">
                    <Youtube size={24} className="group-hover:scale-110 transition-transform" />
                    <span className="text-[10px] sm:text-xs text-center leading-tight">YouTube</span>
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Details Grid */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6"
          >
            <motion.a href="tel:+919822258300" variants={itemVariants} className="bg-white rounded-3xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 flex flex-col items-center text-center group hover:border-[#1a235c]/20 transition-colors">
              <div className="w-12 h-12 bg-blue-50 text-[#1a235c] rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Phone size={20} />
              </div>
              <h3 className="font-bold text-slate-400 text-xs uppercase tracking-wider mb-1">Phone</h3>
              <p className="font-black text-[#1a235c] text-lg">9822258300</p>
            </motion.a>

            <motion.a href="mailto:Mindmapperscareer@gmail.com" variants={itemVariants} className="bg-white rounded-3xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 flex flex-col items-center text-center group hover:border-[#1a235c]/20 transition-colors">
              <div className="w-12 h-12 bg-blue-50 text-[#1a235c] rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Mail size={20} />
              </div>
              <h3 className="font-bold text-slate-400 text-xs uppercase tracking-wider mb-1">Email</h3>
              <p className="font-bold text-[#1a235c] text-sm break-all">Mindmapperscareer@<br/>gmail.com</p>
            </motion.a>

            <motion.div variants={itemVariants} className="bg-white rounded-3xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 flex flex-col items-center text-center group hover:border-[#1a235c]/20 transition-colors">
              <div className="w-12 h-12 bg-blue-50 text-[#1a235c] rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <MapPin size={20} />
              </div>
              <h3 className="font-bold text-slate-400 text-xs uppercase tracking-wider mb-1">Location</h3>
              <p className="font-semibold text-[#1a235c] text-xs leading-relaxed">
                MindMappers career counselling centre, shop no. 13, Rathi galaxy, Disha alankar society, Connought place, cidco, chh. Sambhajinagar. 431001
              </p>
            </motion.div>
          </motion.div>

        </div>
      </main>
      <Footer />
    </>
  );
}
