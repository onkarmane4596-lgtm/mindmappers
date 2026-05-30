import { AlertCircle, HelpCircle, Zap } from 'lucide-react';

const problems = [
  {
    icon: AlertCircle,
    title: 'Career Uncertainty',
    description: 'Your child doesn\'t know what they want to pursue, leaving you concerned about their future prospects.',
    stat: '73% of students',
    color: 'from-[#F4A16C] to-[#FF6B00]',
    text: 'text-[#F4A16C]',
    bg: 'bg-gradient-to-br from-[#F4A16C]/10 to-[#FF6B00]/10'
  },
  {
    icon: HelpCircle,
    title: 'Lack of Guidance',
    description: 'School career guidance is limited. You need expert advice on choosing the right education path.',
    stat: 'Industry standard',
    color: 'from-[#1F2F78] to-[#3D57C5]',
    text: 'text-[#1F2F78]',
    bg: 'bg-gradient-to-br from-[#1F2F78]/5 to-[#3D57C5]/10'
  },
  {
    icon: Zap,
    title: 'Wasted Potential',
    description: 'Fear your child might pursue wrong career due to peer pressure instead of their actual aptitudes.',
    stat: '1 in 3 students',
    color: 'from-[#F4A16C] to-[#FF6B00]',
    text: 'text-[#F4A16C]',
    bg: 'bg-gradient-to-br from-[#F4A16C]/10 to-[#FF6B00]/10'
  },
];

export function ProblemSection() {
  return (
    <section className="py-12 md:py-20 bg-white relative overflow-hidden flex flex-col items-center">
      {/* Subtle Background Accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1a235c]/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#F4A16C]/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/4 pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#1a235c] font-bold text-xs tracking-widest uppercase mb-6 shadow-sm">
            <span>The Challenge</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#1a235c] to-[#3D57C5] mb-6 tracking-tight leading-tight pb-1">
            Is Your Child's <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4A16C] to-[#FF6B00]">Career Path</span> Clear?
          </h2>
          <p className="text-sm md:text-base text-slate-600 font-medium max-w-xl mx-auto">
            Many parents struggle to guide their children toward the right career path. Without expert guidance, students often miss incredible opportunities.
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-8">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <div
                key={index}
                className="group p-6 sm:p-8 bg-white border border-slate-100 rounded-[1.5rem] sm:rounded-[2rem] shadow-sm hover:shadow-xl hover:shadow-blue-900/10 hover:-translate-y-1.5 transition-all duration-500 relative overflow-hidden"
              >
                <div className="flex items-start gap-5 flex-col lg:flex-row relative z-10">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-[1rem] sm:rounded-2xl bg-blue-50 text-[#1a235c] group-hover:bg-[#1a235c] group-hover:text-white transition-all duration-300">
                      <Icon size={24} className="sm:w-7 sm:h-7" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-bold text-[#1a235c] leading-tight mb-2 sm:mb-3">{problem.title}</h3>
                    <p className="text-slate-500 mb-4 sm:mb-5 font-medium text-xs sm:text-sm leading-relaxed">{problem.description}</p>
                    <div className="inline-flex items-center gap-2 bg-slate-50 px-4 py-1.5 rounded-full border border-slate-100 group-hover:bg-blue-50 group-hover:border-blue-100 transition-colors">
                       <span className="text-xs font-bold text-[#F4A16C] uppercase tracking-widest">{problem.stat}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mt-10 md:mt-16">
          {[
            { stat: '73%', label: 'Students uncertain about careers' },
            { stat: '48%', label: 'Change major within 3 years' },
            { stat: '62%', label: 'Lack proper guidance' },
            { stat: '85%', label: 'Parents want better advice' }
          ].map((item, index) => (
            <div key={index} className="text-center p-4 sm:p-6 md:p-8 bg-white border border-slate-100 rounded-[1.2rem] sm:rounded-[1.5rem] shadow-sm hover:shadow-xl hover:shadow-blue-900/10 transition-all duration-500 hover:-translate-y-1">
              <p className="text-2xl sm:text-3xl md:text-5xl font-black mb-1 sm:mb-2 text-[#1a235c] tracking-tight">{item.stat}</p>
              <p className="text-[9px] sm:text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-widest leading-tight block max-w-[140px] mx-auto">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
