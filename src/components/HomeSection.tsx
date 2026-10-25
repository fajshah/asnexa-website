import React from 'react';
import { ArrowRight, Bot, Mic, ShieldCheck, TrendingUp, CheckCircle2, Play, Users } from 'lucide-react';
import { ThreeDHeroCanvas } from './ThreeDHeroCanvas';
import { ThreeDCard } from './ThreeDCard';

interface HomeSectionProps {
  onNavigate: (sectionId: string) => void;
}

export const HomeSection: React.FC<HomeSectionProps> = ({ onNavigate }) => {
  return (
    <div className="relative overflow-hidden cosmic-grid-dark transition-colors">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Hero Section */}
      <section className="pt-16 pb-24 lg:pt-20 lg:pb-32">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">
            
            {/* Left Content (7 Cols) */}
            <div className="lg:col-span-7 space-y-8 text-left">
              
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-blue-700 font-bold text-xs sm:text-sm shadow-xs">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-600"></span>
                </span>
                <span>Top U.S. AI Consulting Agency &amp; Autonomous Systems</span>
              </div>

              {/* Single Solid Heading Color */}
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.06] text-slate-900 font-heading">
                Strategic AI Consulting &amp; Autonomous AI Systems
              </h1>

              <p className="text-slate-700 text-base sm:text-xl leading-relaxed max-w-2xl font-normal">
                AsNexa Technologies is a premier AI consulting agency helping growing U.S. businesses deploy autonomous Digital FTEs, ultra-low latency voice agents, and governed RAG systems to scale operations 10x with 99.4% deterministic precision.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={() => onNavigate('contact')}
                  className="bg-[#1D63FF] hover:bg-blue-600 text-white font-bold px-9 py-4 rounded-2xl shadow-xl shadow-blue-500/25 inline-flex items-center justify-center gap-3 text-base transition-all hover:scale-105 active:scale-95"
                >
                  <span>Book Free AI Consultation</span>
                  <ArrowRight className="w-5 h-5" />
                </button>

                <button
                  onClick={() => onNavigate('sandbox')}
                  className="bg-white hover:bg-slate-50 text-slate-800 font-semibold px-8 py-4 rounded-2xl border border-slate-300 shadow-xs inline-flex items-center justify-center gap-2.5 text-base transition-all hover:border-blue-400"
                >
                  <Play className="w-4 h-4 text-blue-600 fill-blue-600" />
                  <span>Launch Live 3D Sandbox</span>
                </button>
              </div>

              {/* Enterprise Trust Stats Bar */}
              <div className="pt-8 border-t border-slate-200 grid grid-cols-2 sm:grid-cols-4 gap-6">
                <div>
                  <div className="text-3xl sm:text-4xl font-extrabold font-mono text-slate-900">99.4%</div>
                  <div className="text-xs text-slate-600 font-mono mt-1">Deterministic Accuracy</div>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-extrabold font-mono text-blue-600">&lt;300ms</div>
                  <div className="text-xs text-slate-600 font-mono mt-1">Voice Latency RTT</div>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-extrabold font-mono text-indigo-600">70%</div>
                  <div className="text-xs text-slate-600 font-mono mt-1">OPEX Reduction</div>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-extrabold font-mono text-emerald-600">17 Days</div>
                  <div className="text-xs text-slate-600 font-mono mt-1">Avg Payback Period</div>
                </div>
              </div>

            </div>

            {/* Right Interactive 3D Canvas (5 Cols) */}
            <div className="lg:col-span-5 relative">
              <ThreeDHeroCanvas interactive={true} />
            </div>

          </div>
        </div>
      </section>

      {/* Human Workforce & AI Synergy Section (High-Tech Enterprise Workspace) */}
      <section className="py-24 bg-slate-50/80 dark:bg-[#080d19] border-t border-b border-slate-200 dark:border-slate-800 transition-colors">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: Real Modern Office Workspace Photography */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-md group">
                  <img
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
                    alt="Modern high-tech enterprise engineering headquarters"
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="p-3 bg-white text-[11px] font-mono text-slate-600 border-t border-slate-100">
                    Enterprise Operations Center
                  </div>
                </div>

                <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-md group">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
                    alt="Professional reviewing AI customer support telemetry"
                    className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="p-3 bg-white text-[11px] font-mono text-slate-600 border-t border-slate-100">
                    Voice Agent Operations Lead
                  </div>
                </div>
              </div>

              <div className="space-y-4 pt-8">
                <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-md group">
                  <img
                    src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80"
                    alt="Engineers in modern conference room building autonomous workflows"
                    className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="p-3 bg-white text-[11px] font-mono text-slate-600 border-t border-slate-100">
                    Forward Deployed Engineering Sprint
                  </div>
                </div>

                <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-md group">
                  <img
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80"
                    alt="Executive reviewing AI business intelligence metrics"
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="p-3 bg-white text-[11px] font-mono text-slate-600 border-t border-slate-100">
                    Executive Strategy &amp; RAG Insights
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Narrative */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold font-mono">
                <Users className="w-3.5 h-3.5" />
                <span>Empowering Human Potential</span>
              </div>

              {/* Single Solid Heading Color */}
              <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight font-heading leading-tight">
                Built to Empower Human Teams, Not Replace Them
              </h2>

              <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
                When you deploy AsNexa Digital FTEs, your human professionals stop drowning in manual data entry, repetitive billing reconciliations, and routine status inquiries.
              </p>

              <div className="space-y-4 pt-2 text-sm text-slate-700">
                <div className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-slate-200 shadow-xs">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block font-heading">
                      Human-in-the-Loop Governance
                    </strong>
                    <span className="text-slate-600 text-xs">
                      Critical threshold decisions pause for quick human approval directly on Slack or Microsoft Teams.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-slate-200 shadow-xs">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block font-heading">
                      Eliminate Burnout &amp; Turnover
                    </strong>
                    <span className="text-slate-600 text-xs">
                      Teams liberated from 15+ hours of weekly repetitive tasks show 84% higher retention and job satisfaction.
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('calculator')}
                  className="bg-[#1D63FF] hover:bg-blue-600 text-white font-bold px-8 py-3.5 rounded-xl shadow-lg shadow-blue-500/25 transition-all"
                >
                  Calculate Your Team's Liberated Hours →
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3 Core Value Pillars */}
      <section className="py-28 relative">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-4xl mx-auto mb-20 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-blue-700 font-bold px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 inline-block shadow-xs">
              Enterprise AI Architecture
            </span>
            {/* Single Solid Heading Color */}
            <h2 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight font-heading">
              Engineered for Measurable ROI
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              We replace brittle automation scripts with production-grade autonomous intelligence that thinks, acts, and guarantees zero hallucinations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Pillar 1 */}
            <ThreeDCard glowColor="purple">
              <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-2xl shadow-sm mb-6 border border-blue-100">
                <Bot className="w-8 h-8" />
              </div>
              <div className="space-y-3">
                <span className="text-xs font-mono text-blue-600 uppercase tracking-widest font-semibold block">
                  Autonomous Operations
                </span>
                <h3 className="text-2xl font-bold text-slate-900 font-heading">
                  Autonomous Digital FTEs
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Virtual full-time employees powered by Claude 3.5 reasoning and n8n orchestration. They run multi-step workflows across your CRM, ERP, and Slack 24/7 without fatigue.
                </p>
                <div className="pt-4 flex items-center justify-between border-t border-slate-200 text-xs">
                  <span className="text-slate-500 font-mono">150+ Tool Integrations</span>
                  <button
                    onClick={() => onNavigate('services')}
                    className="text-blue-600 font-bold hover:text-blue-700 inline-flex items-center gap-1"
                  >
                    Explore Service →
                  </button>
                </div>
              </div>
            </ThreeDCard>

            {/* Pillar 2 */}
            <ThreeDCard glowColor="cyan">
              <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-2xl shadow-sm mb-6 border border-blue-100">
                <Mic className="w-8 h-8" />
              </div>
              <div className="space-y-3">
                <span className="text-xs font-mono text-blue-600 uppercase tracking-widest font-semibold block">
                  Telephony Voice AI
                </span>
                <h3 className="text-2xl font-bold text-slate-900 font-heading">
                  Sub-300ms Voice Agents
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Ultra-low latency conversational telephony agents capable of qualifying inbound leads, handling support tickets, and booking calendar meetings with zero awkward pauses.
                </p>
                <div className="pt-4 flex items-center justify-between border-t border-slate-200 text-xs">
                  <span className="text-slate-500 font-mono">240ms Turn-Taking</span>
                  <button
                    onClick={() => onNavigate('sandbox')}
                    className="text-blue-600 font-bold hover:text-blue-700 inline-flex items-center gap-1"
                  >
                    Test Live Voice →
                  </button>
                </div>
              </div>
            </ThreeDCard>

            {/* Pillar 3 */}
            <ThreeDCard glowColor="emerald">
              <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-2xl shadow-sm mb-6 border border-emerald-100">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <div className="space-y-3">
                <span className="text-xs font-mono text-emerald-600 uppercase tracking-widest font-semibold block">
                  Zero Hallucinations
                </span>
                <h3 className="text-2xl font-bold text-slate-900 font-heading">
                  Governed Enterprise RAG
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Deterministic knowledge engines backed by System of Record (KSoR) verification rubrics and hybrid dense vector search to eliminate hallucinations entirely.
                </p>
                <div className="pt-4 flex items-center justify-between border-t border-slate-200 text-xs">
                  <span className="text-slate-500 font-mono">0.00% Hallucination SLA</span>
                  <button
                    onClick={() => onNavigate('faq')}
                    className="text-emerald-600 font-bold hover:text-emerald-700 inline-flex items-center gap-1"
                  >
                    Read Architecture →
                  </button>
                </div>
              </div>
            </ThreeDCard>

          </div>

        </div>
      </section>

      {/* Quick Interactive ROI Banner Teaser */}
      <section className="py-16 bg-blue-50/80 dark:bg-[#070b14] border-t border-b border-blue-200 dark:border-slate-800 transition-colors">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-blue-700 dark:text-cyan-400 font-bold uppercase">
              <TrendingUp className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>Interactive Financial Model Ready</span>
            </div>
            {/* Single Solid Heading Color */}
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-heading">
              How Much Will a Digital FTE Save Your Team?
            </h3>
            <p className="text-slate-600 dark:text-slate-300 text-sm">
              Use our real-time calculator to compute hours liberated, net savings, and estimated payback days.
            </p>
          </div>

          <button
            onClick={() => onNavigate('calculator')}
            className="shrink-0 bg-[#1D63FF] hover:bg-blue-600 text-white font-bold px-8 py-4 rounded-2xl shadow-xl shadow-blue-500/25 transition-all hover:scale-105"
          >
            Open ROI Calculator →
          </button>
        </div>
      </section>

    </div>
  );
};
