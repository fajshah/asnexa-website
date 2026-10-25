import React from 'react';
import { Star, Award } from 'lucide-react';
import { ThreeDCard } from './ThreeDCard';

interface PortfolioSectionProps {
  onConsult: () => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onConsult }) => {
  const testimonials = [
    {
      name: 'Randel Griff',
      role: 'CEO & Founder',
      company: 'Doozoo',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      quote:
        'Their advanced understanding and experience in AI, Digital FTEs, and Machine Learning technology—combined with current trends and capabilities—set them apart. All deliveries were on time and accurate.',
      metric: '82% OPEX Saved',
      project: 'Autonomous Operations & Digital FTEs',
    },
    {
      name: 'Suleman Niazi',
      role: 'CEO & Founder',
      company: 'Konnect',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      quote:
        "We've been impressed with the AsNexa team. Working with their Forward Deployed Engineers does not feel like dealing with an outside vendor; it feels like dealing with a group of partners who want us to be successful.",
      metric: '<260ms Voice Latency',
      project: 'Conversational Telephony Voice Agent',
    },
    {
      name: 'David Milward',
      role: 'Chairman',
      company: 'Metadataworks',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
      quote:
        'Very knowledgeable, and the team did what they promised—no fluff, just solid production engineering working through our KSoR and voice agent requirements and delivering measurable solutions.',
      metric: '0.00% Hallucinations',
      project: 'Enterprise Governed RAG Pipeline',
    },
  ];

  return (
    <div id="portfolio" className="py-28 bg-[#f8fafc] relative border-b border-slate-200 transition-colors">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header - Single Solid Heading */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold font-mono">
            <Award className="w-3.5 h-3.5 text-blue-600" />
            <span>Proven Enterprise Track Record</span>
          </div>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight font-heading">
            What Our Clients Say About AsNexa
          </h2>
          <p className="text-slate-600 text-base sm:text-xl max-w-3xl mx-auto">
            Discover how enterprise leaders scale operations and eliminate overhead with AsNexa's production-grade AI systems.
          </p>
        </div>

        {/* Real Enterprise Human Office Collaboration Banner */}
        <div className="rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-md grid grid-cols-1 lg:grid-cols-12 items-center">
          <div className="lg:col-span-6 h-72 lg:h-full relative">
            <img
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80"
              alt="Enterprise client executives in boardroom collaborating with engineering leads"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="lg:col-span-6 p-8 sm:p-10 space-y-4 text-left">
            <span className="text-xs font-mono uppercase text-blue-600 font-bold block">
              Trusted Enterprise Partnerships
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
              Engineering Built on Human Collaboration
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              We work shoulder-to-shoulder with our clients' executive teams and technical leads. Every system is tailored directly to your internal workflows, ensuring 100% adoption and measurable EBITDA growth.
            </p>
            <div className="pt-2 flex items-center gap-4 text-xs font-mono text-blue-700 font-semibold">
              <div>✓ 100% Transparent Sprints</div>
              <div>✓ No Vendor Lock-In</div>
            </div>
          </div>
        </div>

        {/* 3 Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <ThreeDCard key={idx} glowColor="purple" className="flex flex-col justify-between h-full bg-white border border-slate-200 shadow-md">
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs font-mono font-bold text-emerald-700 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200">
                    {t.metric}
                  </span>
                </div>

                <p className="text-slate-700 text-sm leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200 flex items-center gap-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-13 h-13 rounded-2xl object-cover border-2 border-blue-200 shadow-xs"
                />
                <div>
                  <h4 className="font-heading font-bold text-slate-900 text-base leading-tight">
                    {t.name}
                  </h4>
                  <span className="text-xs text-blue-600 font-semibold block">
                    {t.role}, {t.company}
                  </span>
                  <span className="text-[10px] text-slate-500 font-mono block mt-0.5">
                    {t.project}
                  </span>
                </div>
              </div>
            </ThreeDCard>
          ))}
        </div>

        {/* Case Study Metrics Banner */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-md grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl sm:text-5xl font-extrabold font-mono text-blue-600">$1.8M+</div>
            <div className="text-xs text-slate-600 font-mono mt-1">Verified Client OPEX Liberated</div>
          </div>
          <div>
            <div className="text-3xl sm:text-5xl font-extrabold font-mono text-indigo-600">140k+</div>
            <div className="text-xs text-slate-600 font-mono mt-1">Automated Operations Monthly</div>
          </div>
          <div>
            <div className="text-3xl sm:text-5xl font-extrabold font-mono text-emerald-600">99.4%</div>
            <div className="text-xs text-slate-600 font-mono mt-1">Deterministic Precision Rate</div>
          </div>
          <div>
            <div className="text-3xl sm:text-5xl font-extrabold font-mono text-purple-600">17 Days</div>
            <div className="text-xs text-slate-600 font-mono mt-1">Average Contract Payback</div>
          </div>
        </div>

      </div>
    </div>
  );
};
