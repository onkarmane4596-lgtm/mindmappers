import { Card } from '@/components/ui/card';
import { CheckCircle, Brain, Target, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const services = [
  {
    icon: Brain,
    title: 'Comprehensive Assessment',
    description: 'Scientific personality and aptitude testing combined with interest mapping to provide deep insights into your child\'s strengths.',
    features: ['Personality profile', 'Aptitude testing', 'Interest mapping', 'Learning style analysis']
  },
  {
    icon: Target,
    title: 'Career Matching',
    description: 'AI-powered career recommendations matched with market demand, growth potential, and alignment with your child\'s values.',
    features: ['350+ career options', 'Market demand analysis', 'Salary insights', 'Growth potential']
  },
  {
    icon: Users,
    title: 'Expert Counseling',
    description: 'One-on-one sessions with certified counselors to discuss results, explore options, and create an actionable career plan.',
    features: ['Personal counselor', 'Action plan creation', 'College guidance', 'Ongoing support']
  },
];

export function SolutionSection() {
  return (
    <section className="py-12 md:py-20 bg-[#f8fafc] relative overflow-hidden flex flex-col items-center">
      {/* Subtle Background Accents */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#1a235c]/5 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#F4A16C]/5 rounded-full blur-[80px] translate-y-1/2 translate-x-1/4 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#1a235c] font-bold text-xs tracking-widest uppercase mb-6 shadow-sm">
            <span>Our Approach</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#1a235c] to-[#3D57C5] mb-6 tracking-tight leading-tight pb-1">
            A Proven Process for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4A16C] to-[#FF6B00]">Career Success</span>
          </h2>
          <p className="text-sm md:text-base text-slate-600 font-medium max-w-xl mx-auto">
            Our comprehensive 3-step approach ensures your child finds their ideal career path with confidence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-20 relative">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="p-6 sm:p-8 bg-white border border-slate-100 rounded-[1.5rem] sm:rounded-[2rem] shadow-sm hover:shadow-xl hover:shadow-blue-900/10 transition-all duration-500 hover:-translate-y-1.5 group relative z-10"
              >
                <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-[1rem] sm:rounded-2xl bg-blue-50 text-[#1a235c] group-hover:bg-[#1a235c] group-hover:text-white mb-5 sm:mb-6 transition-all duration-300">
                  <Icon size={24} className="sm:w-7 sm:h-7" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#1a235c] mb-3 sm:mb-4 leading-tight">{service.title}</h3>
                <p className="text-slate-500 font-medium text-xs sm:text-sm leading-relaxed mb-6 sm:mb-8">{service.description}</p>
                <div className="space-y-2.5 sm:space-y-3">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-5 h-5 rounded-full bg-blue-50 text-[#1a235c]">
                         <CheckCircle size={10} />
                      </div>
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{feature}</span>
                    </div>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Process Timeline */}
        <div className="bg-white rounded-[2rem] md:rounded-[3rem] p-6 md:p-12 border border-slate-100 relative overflow-hidden shadow-sm">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-[#1a235c] mb-10 md:mb-16 text-center">Your Journey in 4 Steps</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-0 relative z-10">
            {[
              { step: '1', title: 'Register', desc: 'Schedule your assessment' },
              { step: '2', title: 'Assess', desc: 'Complete comprehensive tests' },
              { step: '3', title: 'Analyze', desc: 'Get detailed report & insights' },
              { step: '4', title: 'Succeed', desc: 'Plan & execute your path' }
            ].map((item, index, arr) => (
              <div key={index} className="relative group">
                <div className="flex flex-col items-center text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-[#1a235c] font-black text-lg mb-6 shadow-sm group-hover:bg-[#1a235c] group-hover:text-white transition-all duration-300">
                    {item.step}
                  </div>
                  <h4 className="font-bold text-[#1a235c] text-lg mb-2">{item.title}</h4>
                  <p className="text-xs font-bold text-slate-400 max-w-[160px] uppercase tracking-widest">{item.desc}</p>
                </div>
                {/* Connector line Desktop */}
                {index < arr.length - 1 && (
                  <div className="hidden md:block absolute top-[1.5rem] left-[60%] w-[calc(100%-2rem)] h-[2px] bg-slate-100" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12 md:mt-20">
          <Button asChild size="lg" className="rounded-full h-12 px-8 text-sm bg-[#1a235c] hover:bg-blue-900 text-white font-black shadow-xl shadow-blue-900/10 transition-all hover:-translate-y-1 group border-0 uppercase tracking-widest">
            <a href="https://wa.me/919822258300?text=Hello%20MindMappers%20Team!%20%F0%9F%8C%9F%0A%0AI%20would%20like%20to%20book%20a%20career%20counseling%20session.%20Please%20share%20the%20details%20and%20available%20time%20slots." target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
              Start Career Discovery <CheckCircle size={18} className="group-hover:rotate-12 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
