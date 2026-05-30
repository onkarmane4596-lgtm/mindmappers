'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Plus } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'What age is ideal for career counseling?',
    answer: 'We recommend career guidance from Grade 8 onwards (age 13+). Earlier exposure helps students make informed academic choices. However, we also work with older students and even college students looking for a career change.'
  },
  {
    question: 'How long does the assessment take?',
    answer: 'The comprehensive assessment takes 30-45 minutes. It\'s online and can be completed from home. Results and detailed report are available within 2-3 business days.'
  },
  {
    question: 'Is the assessment scientifically valid?',
    answer: 'Yes, our assessment tools are based on international psychometric standards (ICCC). They measure personality, aptitude, interests, and learning styles using validated frameworks trusted by career counselors worldwide.'
  },
  {
    question: 'What happens after the assessment?',
    answer: 'You receive a detailed report with career recommendations, educational pathways, and skill development areas. We also schedule a one-on-one counseling session to discuss results and create an actionable plan.'
  },
  {
    question: 'Can we do multiple assessments for different children?',
    answer: 'Absolutely! We offer family packages with special pricing for multiple assessments. Each child gets personalized analysis and counseling based on their unique profile.'
  },
  {
    question: 'What if my child is unsure even after counseling?',
    answer: 'We provide ongoing support through follow-up sessions, career exploration webinars, and regular check-ins. Our counselors work with you until your child feels confident about their career direction.'
  }
];

export function ActionSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section className="py-10 md:py-16 bg-white relative overflow-hidden flex flex-col items-center">
      {/* Subtle Background Accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1a235c]/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#F4A16C]/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/4 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* FAQ Section */}
        <div className="mb-12 md:mb-16">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#1a235c] font-bold text-xs tracking-widest uppercase mb-6 shadow-sm">
              <span>Got Questions?</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#1a235c] to-[#3D57C5] mb-6 tracking-tight leading-tight pb-1">
              Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4A16C] to-[#FF6B00]">Questions</span>
            </h2>
            <p className="text-sm md:text-base text-slate-600 font-medium max-w-xl mx-auto">
              Everything you need to know about our career guidance services.
            </p>
          </div>

          <div className="space-y-3 max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <Card
                key={index}
                className={`overflow-hidden border transition-all duration-500 ease-out relative group rounded-2xl ${
                  expandedIndex === index 
                    ? 'bg-white border-[#F4A16C]/30 shadow-xl shadow-[#1a235c]/10 scale-[1.01] md:scale-[1.02] z-10' 
                    : 'bg-white border-slate-100 shadow-sm hover:shadow-md hover:shadow-[#1a235c]/5 hover:border-slate-200'
                }`}
              >
                <button
                  onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-4 md:p-5 text-left relative z-10 gap-4"
                >
                  <h3 className={`text-base md:text-lg font-bold transition-all duration-300 ${
                    expandedIndex === index 
                      ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#1a235c] to-[#3D57C5]' 
                      : 'text-slate-700 group-hover:text-[#1a235c]'
                  }`}>{faq.question}</h3>
                  
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 shadow-sm ${
                    expandedIndex === index 
                      ? 'bg-gradient-to-br from-[#F4A16C] to-[#FF6B00] text-white rotate-45 shadow-orange-500/20' 
                      : 'bg-blue-50 text-[#1a235c] group-hover:bg-[#1a235c] group-hover:text-white group-hover:scale-110'
                  }`}>
                    <Plus size={16} className="transition-transform duration-500" strokeWidth={2.5} />
                  </div>
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out relative z-10 ${expandedIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="px-4 md:px-5 pb-4 md:pb-5 pt-1">
                    <p className="text-slate-500 font-medium text-xs md:text-sm leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Final CTA Section */}
        <div className="bg-[#1a235c] rounded-[2rem] md:rounded-[3rem] p-6 md:p-16 text-white text-center relative overflow-hidden shadow-2xl shadow-blue-900/20">
          <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight pb-1 text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">
              Ready to Transform Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4A16C] to-[#FF6B00]">Child's Future?</span>
            </h2>
            <p className="text-sm md:text-lg font-medium opacity-80 mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed">
              Take the first step today. Start with a free assessment to discover your child's unique strengths and ideal career path.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center mb-12">
              <Button
                size="lg"
                className="rounded-full h-14 px-10 text-[17px] bg-[#F4A16C] hover:bg-[#e67e3a] text-white font-black shadow-xl shadow-[#F4A16C]/20 transition-all hover:-translate-y-1 border-0 uppercase tracking-widest text-sm"
                asChild
              >
                <a href="https://wa.me/919822258300?text=Hello%20MindMappers%20Team!%20%F0%9F%8C%9F%0A%0AI%20would%20like%20to%20get%20a%20free%20assessment." target="_blank" rel="noopener noreferrer">
                  Get Free Assessment
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full h-14 px-10 text-[17px] border-2 border-white/20 bg-white/5 backdrop-blur-md text-white hover:bg-white hover:text-[#1a235c] font-black transition-all hover:-translate-y-1 uppercase tracking-widest text-sm"
                asChild
              >
                <a href="https://wa.me/919822258300?text=Hello%20MindMappers%20Team!%20%F0%9F%8C%9F%0A%0AI%20would%20like%20to%20chat%20with%20a%20counselor." target="_blank" rel="noopener noreferrer">
                  Chat with Counselor
                </a>
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-xs md:text-sm font-bold opacity-60 pt-10 border-t border-white/10 max-w-3xl mx-auto uppercase tracking-widest">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#F4A16C]" />
                <span>100% Confidential</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#F4A16C]" />
                <span>Free Consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#F4A16C]" />
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom info */}
        <div className="mt-16 text-center">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest leading-relaxed">
            MindMappers © 2024. All rights reserved. | Certified by International Career Counselors Association
          </p>
        </div>
      </div>
    </section>
  );
}
