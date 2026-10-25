import React, { useState } from 'react';
import { Copy, Check, Building, Code2, Users, Shield } from 'lucide-react';
import confetti from 'canvas-confetti';

interface CompanySectionProps {
  onNotify: (title: string, message: string) => void;
}

export const CompanySection: React.FC<CompanySectionProps> = ({ onNotify }) => {
  const [activeSocialTab, setActiveSocialTab] = useState<'linkedin' | 'facebook' | 'instagram' | 'twitter' | 'tiktok'>('linkedin');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const socialBios = {
    linkedin: {
      platform: 'LinkedIn Company Profile & Bio',
      title: 'Enterprise Technical Bio',
      text: 'AsNexa Technologies is a premier Forward Deployed Engineering and Autonomous AI Systems firm. We architect high-performance Digital FTEs, ultra-low latency voice agents, and zero-hallucination RAG pipelines for high-growth enterprises.\n\nOur mission is to eliminate manual operational overhead by deploying intelligent autonomous agents that operate 24/7 across CRM, ERP, and communication channels with 99.4% deterministic accuracy.',
    },
    facebook: {
      platform: 'Facebook Page About Section',
      title: 'Community & Brand Summary',
      text: 'Welcome to AsNexa Technologies — Leaders in Autonomous AI Systems & Digital FTEs. We help businesses automate workflows, deploy sub-second voice agents, and scale operations effortlessly with guaranteed positive ROI.',
    },
    instagram: {
      platform: 'Instagram Bio',
      title: 'Compact Social Bio',
      text: '🚀 AsNexa Technologies | Autonomous AI Systems & Digital FTEs\n⚡ Sub-300ms Voice Agents & n8n Workflows\n🔗 Transforming enterprise efficiency 24/7\n👇 Test our live AI Sandbox below!',
    },
    twitter: {
      platform: 'X (Twitter) Profile Bio',
      title: 'Microblogging Bio',
      text: 'Architecting autonomous Digital FTEs & sub-second AI voice agents at AsNexa Technologies. Zero hallucinations, maximum enterprise ROI. 🤖⚡',
    },
    tiktok: {
      platform: 'TikTok Bio',
      title: 'Shortform Video Bio',
      text: 'AsNexa Technologies 🤖 The Future of Work with Autonomous Digital FTEs & AI Voice Agents! Follow for live agent builds.',
    },
  };

  const handleCopyBio = (platformKey: keyof typeof socialBios) => {
    const textToCopy = socialBios[platformKey].text;
    navigator.clipboard?.writeText(textToCopy).then(() => {
      setCopiedKey(platformKey);
      confetti({ particleCount: 50, spread: 60, origin: { y: 0.7 } });
      onNotify('Bio Copied!', `${platformKey.toUpperCase()} copy is ready in clipboard.`);
      setTimeout(() => setCopiedKey(null), 2500);
    });
  };

  return (
    <div id="company" className="py-28 bg-[#f8fafc] relative border-b border-slate-200 transition-colors">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header - Single Solid Heading */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold font-mono">
            <Building className="w-3.5 h-3.5 text-blue-600" />
            <span>Company Hub &amp; Brand Media</span>
          </div>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight font-heading">
            AsNexa Social Media Hub
          </h2>
          <p className="text-slate-600 text-base sm:text-xl max-w-3xl mx-auto">
            Explore our official brand bios, enterprise announcements, and forward-deployed engineering values ready to copy for all major platforms.
          </p>

          {/* Social Platform Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 pt-4">
            {(['linkedin', 'facebook', 'instagram', 'twitter', 'tiktok'] as const).map(p => (
              <button
                key={p}
                onClick={() => setActiveSocialTab(p)}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  activeSocialTab === p
                    ? 'bg-[#1D63FF] text-white shadow-md shadow-blue-500/25'
                    : 'bg-white border border-slate-300 text-slate-700 hover:bg-slate-50'
                }`}
              >
                {p === 'twitter' ? 'X (Twitter)' : p.charAt(0).toUpperCase() + p.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Human Office Engineering Leadership Banner */}
        <div className="rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-md grid grid-cols-1 lg:grid-cols-12 items-center">
          <div className="lg:col-span-6 h-72 lg:h-full relative">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
              alt="AsNexa engineering squad working in tech office"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="lg:col-span-6 p-8 sm:p-10 space-y-4 text-left">
            <span className="text-xs font-mono uppercase text-blue-600 font-bold block">
              Forward Deployed Engineering Culture
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
              Built by Engineers Who Love Hard Problems
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              We are not account managers; we are senior systems builders. We take immense pride in architecting AI that operates with deterministic reliability, clean codebase architecture, and real business impact.
            </p>
            <div className="pt-2 flex items-center gap-4 text-xs font-mono text-blue-700 font-semibold">
              <div>✓ Direct Engineering Access</div>
              <div>✓ 24/7 Global Delivery</div>
            </div>
          </div>
        </div>

        {/* Active Bio Box */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-xl space-y-6">
            <div className="flex items-center justify-between border-b border-slate-200 pb-4">
              <div>
                <span className="text-xs font-mono text-blue-600 uppercase tracking-widest font-semibold block">
                  {socialBios[activeSocialTab].platform}
                </span>
                <h3 className="text-xl font-bold text-slate-900 font-heading">
                  {socialBios[activeSocialTab].title}
                </h3>
              </div>

              <button
                onClick={() => handleCopyBio(activeSocialTab)}
                className="bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold px-5 py-2.5 rounded-xl border border-slate-300 transition-all flex items-center gap-2 active:scale-95"
              >
                {copiedKey === activeSocialTab ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700 font-bold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-slate-600" />
                    <span>Copy Bio</span>
                  </>
                )}
              </button>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-800 leading-relaxed font-mono whitespace-pre-line">
              {socialBios[activeSocialTab].text}
            </div>
          </div>
        </div>

        {/* Company Engineering Principles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
              <Code2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 font-heading">
              Forward Deployed Model
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              We do not sell generic SaaS licenses and walk away. Our senior AI engineers embed directly inside your workflows to write custom code, test edge cases, and ensure production uptime.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 font-heading">
              Deterministic Accuracy
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Unchecked LLM hallucinations destroy enterprise trust. We enforce strict System of Record (KSoR) validation, schema enforcement, and critic agent verification on every step.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 font-heading">
              Zero Vendor Lock-In
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              All workflows, prompt topologies, and vector indexes remain 100% your enterprise IP. We deploy to your own cloud infrastructure (GCP, AWS, Azure, or On-Premise).
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};
