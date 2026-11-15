'use client';

import { FileText, Download, ExternalLink, Sparkles, Building2, GraduationCap, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { brochuresData } from '@/lib/brochures-data';

export { brochuresData };

export function BrochuresSection({ compact = false }: { compact?: boolean }) {
  return (
    <section className={`relative overflow-hidden w-full max-w-full ${compact ? 'py-8' : 'py-16 md:py-24 bg-gradient-to-b from-[#f8fafc] to-white'}`} style={{ contain: 'paint' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {!compact && (
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#1a235c] font-bold text-xs tracking-widest uppercase mb-4 shadow-sm">
              <FileText size={14} className="text-[#F4A16C]" />
              Official Documentation & Downloads
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#1a235c] to-[#3D57C5] mb-4 tracking-tight">
              Download MindMappers® <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4A16C] to-[#FF6B00]">Brochures</span>
            </h2>
            <p className="text-slate-600 text-sm md:text-base font-medium leading-relaxed">
              Explore our full curriculum, scientific assessment methodologies, media coverage, and corporate employee transformation packages in our official reference brochures.
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {brochuresData.map((doc) => {
            const Icon = doc.icon;
            return (
              <Card 
                key={doc.id}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-lg hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl ${doc.themeColor} opacity-5 rounded-bl-[100px] pointer-events-none group-hover:scale-110 transition-transform duration-500`} />
                
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${doc.badgeColor}`}>
                      <Icon size={14} />
                      {doc.vertical}
                    </span>
                    <span className="text-xs font-bold text-slate-400 bg-slate-100 px-3 py-1 rounded-full">
                      {doc.pages} • PDF ({doc.size})
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-slate-800 group-hover:text-[#1a235c] transition-colors leading-snug mb-2">
                    {doc.title}
                  </h3>
                  
                  <p className="text-xs font-bold text-[#F4A16C] mb-3">
                    {doc.marathiTitle}
                  </p>

                  <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed mb-6">
                    {doc.description}
                  </p>

                  <div className="bg-slate-50 rounded-2xl p-4 mb-6 border border-slate-100">
                    <p className="text-[11px] font-black uppercase tracking-wider text-slate-400 mb-2.5">
                      Included in this document:
                    </p>
                    <ul className="space-y-2">
                      {doc.highlights.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs font-semibold text-slate-700">
                          <CheckCircle2 size={14} className="text-emerald-500 mt-0.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                  <Button 
                    asChild 
                    className="w-full sm:flex-1 h-12 rounded-xl text-xs sm:text-sm font-bold bg-[#1a235c] hover:bg-[#3D57C5] text-white shadow-md hover:shadow-lg transition-all"
                  >
                    <a href={doc.pdfUrl} download={doc.fileName}>
                      <Download size={16} className="mr-2" />
                      Download PDF
                    </a>
                  </Button>
                  
                  <Button 
                    asChild 
                    variant="outline" 
                    className="w-full sm:w-auto h-12 rounded-xl text-xs sm:text-sm font-bold border-slate-200 text-slate-700 hover:bg-slate-50 hover:text-[#1a235c]"
                  >
                    <a href={doc.pdfUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={15} className="mr-2" />
                      View Online
                    </a>
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
