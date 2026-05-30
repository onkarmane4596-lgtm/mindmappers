'use client';

import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { useState, useRef } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Student Success Story 1',
    role: '10th Standard Career guidance',
    videoUrl: '/testimonial/Mindmappers1.mp4',
    thumbnail: 'bg-indigo-500',
    type: 'vertical',
  },
  {
    id: 6,
    name: 'Parent Feedback: New Career approach',
    role: 'Parent of 10th Grader',
    videoUrl: '/testimonial/Mindmappers6.mp4.mp4',
    thumbnail: 'bg-blue-400',
    type: 'horizontal',
  },
  {
    id: 2,
    name: 'Scientific Assessment Impact',
    role: 'Career Counseling Recipient',
    videoUrl: '/testimonial/Mindmappers2.mp4.mp4',
    thumbnail: 'bg-purple-600',
    type: 'vertical',
  },
  {
    id: 7,
    name: 'Mental Health & Studies',
    role: 'Holistic Development',
    videoUrl: '/testimonial/Mindmappers7.mp4.mp4',
    thumbnail: 'bg-rose-500',
    type: 'horizontal',
  },
  {
    id: 3,
    name: 'Expert Mentoring Session',
    role: 'Future Planning',
    videoUrl: '/testimonial/Mindmappers3.mp4.mp4',
    thumbnail: 'bg-teal-600',
    type: 'vertical',
  },
  {
    id: 8,
    name: 'Student Experience: Career Path Clarity',
    role: '12th Grade Student',
    videoUrl: '/testimonial/Mindmappers8.mp4.mp4',
    thumbnail: 'bg-emerald-400',
    type: 'horizontal',
  },
  {
    id: 4,
    name: 'Career Choices Simplified',
    role: 'Scientific Stream Selection',
    videoUrl: '/testimonial/Mindmappers4.mp4.mp4',
    thumbnail: 'bg-orange-400',
    type: 'vertical',
  },
  {
    id: 9,
    name: 'Workshop Session Feedback',
    role: 'Seminar Participant',
    videoUrl: '/testimonial/Mindmappers9.mp4.mp4',
    thumbnail: 'bg-pink-500',
    type: 'horizontal',
  },
  {
    id: 5,
    name: 'Mindmappers Guidance Success',
    role: 'Academic Transformation',
    videoUrl: '/testimonial/Mindmappers5.mp4',
    thumbnail: 'bg-blue-600',
    type: 'vertical',
  },
  {
    id: 10,
    name: 'Educational Insight: New methods',
    role: 'Expert counseling',
    videoUrl: '/testimonial/Mindmappers10.mp4.mp4',
    thumbnail: 'bg-slate-500',
    type: 'horizontal',
  },
  {
    id: 11,
    name: 'Career Seminar Highlights',
    role: 'Leadership Mentoring',
    videoUrl: '/testimonial/Mindmappers11.mp4.mp4',
    thumbnail: 'bg-indigo-400',
    type: 'horizontal',
  },
  {
    id: 12,
    name: 'Family Counseling Experience',
    role: 'Supportive Mentorship',
    videoUrl: '/testimonial/Mindmappers12.mp4.mp4',
    thumbnail: 'bg-rose-600',
    type: 'horizontal',
  }
];

export function VideoTestimonialsSection() {
  const [playingId, setPlayingId] = useState<number | null>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({});

  const togglePlay = (id: number) => {
    if (playingId && playingId !== id && videoRefs.current[playingId]) {
      videoRefs.current[playingId]?.pause();
    }

    const video = videoRefs.current[id];
    if (video) {
      if (playingId === id) {
        video.pause();
        setPlayingId(null);
      } else {
        video.play();
        setPlayingId(id);
      }
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMuted(!isMuted);
  };

  return (
    <section className="py-10 md:py-16 bg-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#1a235c]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-80 h-80 bg-[#F4A16C]/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-10 md:mb-14 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#1a235c] font-bold text-xs tracking-widest uppercase mb-6 shadow-sm">
          <span>Real Stories</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#1a235c] to-[#3D57C5] mb-4 tracking-tight pb-1">
          Hear From <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4A16C] to-[#FF6B00]">Our Families</span>
        </h2>
        <p className="text-sm md:text-base text-slate-600 font-medium max-w-xl mx-auto">
          Explore moments from our success stories and counseling impact. 
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div 
          className={
            isExpanded 
              ? "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6 auto-rows-[160px] md:auto-rows-[300px] transition-all duration-700 ease-in-out" 
              : "flex overflow-x-auto snap-x snap-mandatory gap-4 md:gap-8 pb-10 no-scrollbar scroll-smooth transition-all duration-700 ease-in-out px-4 -mx-4 md:px-0 md:mx-0"
          }
        >
          {testimonials.map((testimonial) => {
            const isVertical = testimonial.type === 'vertical';
            
            // Layout-specific classes
            const gridClasses = isVertical 
              ? 'row-span-2 col-span-1' 
              : 'col-span-2 row-span-1';
            
            const scrollClasses = isVertical
              ? 'flex-shrink-0 w-[140px] sm:w-[160px] md:w-[240px] aspect-[9/16] snap-center'
              : 'flex-shrink-0 w-[260px] sm:w-[280px] md:w-[480px] aspect-video snap-center';

            return (
              <div 
                key={testimonial.id}
                className={`relative group rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-black border border-slate-100/10 cursor-pointer ${isExpanded ? gridClasses : scrollClasses}`}
                onClick={() => togglePlay(testimonial.id)}
              >
                <div className={`absolute inset-0 ${testimonial.thumbnail} opacity-30 group-hover:opacity-20 transition-opacity duration-500`} />

                <video
                  ref={(el) => {
                    videoRefs.current[testimonial.id] = el;
                  }}
                  src={testimonial.videoUrl}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loop
                  playsInline
                  muted={isMuted}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#1a235c]/90 via-[#1a235c]/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                
                <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${playingId === testimonial.id ? 'opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100' : 'opacity-100 scale-100'}`}>
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-20 md:h-20 rounded-full bg-white/10 backdrop-blur-xl flex items-center justify-center text-white transform transition-all duration-500 group-hover:scale-110 shadow-[0_0_30px_rgba(255,255,255,0.2)] border border-white/30">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 rounded-full bg-white flex items-center justify-center text-[#1a235c] shadow-lg">
                      {playingId === testimonial.id ? (
                        <Pause className="w-4 h-4 sm:w-5 sm:h-5 md:w-7 md:h-7" fill="currentColor" />
                      ) : (
                        <Play className="w-4 h-4 sm:w-5 sm:h-5 md:w-7 md:h-7 ml-1" fill="currentColor" />
                      )}
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-10 z-10 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0 text-left">
                  <div className="flex flex-col gap-0.5 sm:gap-1 md:gap-2">
                    <p className="text-[#F4A16C] font-black text-[8px] sm:text-[9px] md:text-xs uppercase tracking-[0.2em] mb-0.5 opacity-90">{testimonial.role}</p>
                    <h3 className="text-white font-black text-[11px] sm:text-sm md:text-2xl leading-tight tracking-tight line-clamp-2 max-w-[95%] sm:max-w-[90%]">{testimonial.name}</h3>
                  </div>
                </div>

                <button 
                  onClick={toggleMute}
                  className={`absolute top-3 right-3 sm:top-4 sm:right-4 md:top-8 md:right-8 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-all duration-300 hover:bg-white/20 active:scale-95 ${playingId === testimonial.id || 'opacity-0 group-hover:opacity-100'}`}
                >
                  {isMuted ? <VolumeX className="w-4 h-4 sm:w-5 sm:h-5" /> : <Volume2 className="w-4 h-4 sm:w-5 sm:h-5" />}
                </button>
              </div>
            );
          })}
        </div>

        <div className="mt-12 flex justify-center">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#1a235c] text-white font-black text-sm md:text-base tracking-widest uppercase overflow-hidden transition-all duration-500 hover:shadow-[0_20px_40px_rgba(26,35,92,0.3)] hover:-translate-y-1 active:scale-95"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#F4A16C] to-[#F4A16C] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out" />
            <span className="relative z-10">{isExpanded ? 'View Less' : 'View All Testimonials'}</span>
            <div className={`relative z-10 transition-transform duration-500 ${isExpanded ? 'rotate-180' : 'group-hover:translate-y-1'}`}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
