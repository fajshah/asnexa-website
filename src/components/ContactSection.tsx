import React, { useState } from 'react';
import { Calendar, CheckCircle2, Clock, ShieldCheck, Send, User } from 'lucide-react';
import { WHATSAPP_NUMBER, WHATSAPP_URL, WhatsAppIcon } from './WhatsAppButton';

interface ContactSectionProps {
  initialService?: string;
  initialTeamSize?: number;
  initialSavings?: number;
  onNotify: (title: string, message: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialService,
  initialTeamSize,
  initialSavings,
  onNotify,
}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [teamSize, setTeamSize] = useState(initialTeamSize ? `${initialTeamSize} members` : '10-25 members');
  const [goal, setGoal] = useState(initialService || 'Deploy Autonomous Digital FTEs for Operations');
  const [preferredSlot, setPreferredSlot] = useState('Tomorrow, 10:00 AM EST');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    onNotify(
      'Strategy Session Requested!',
      `Thank you, ${fullName}. Our AI Solutions Architect will email your invite for ${preferredSlot}.`
    );
  };

  return (
    <div id="contact" className="py-28 bg-[#f8fafc] relative border-b border-slate-200 transition-colors">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold">
            <Calendar className="w-3.5 h-3.5 text-blue-600" />
            <span>Direct Technical Engineering Access</span>
          </div>
          {/* Single Solid Color Heading */}
          <h2 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight font-heading">
            Book an AI Strategy Session
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Speak directly with our Forward Deployed Engineers to map out your enterprise Digital FTE and voice automation architecture.
          </p>
        </div>

        {/* Human Office Team Collaboration Banner */}
        <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-md group">
          <img
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1400&q=80"
            alt="AsNexa Strategy and AI Engineering Consultants in Modern Office"
            className="w-full h-64 sm:h-80 lg:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-700 filter contrast-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent flex flex-col justify-end p-6 sm:p-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600 text-white text-xs font-mono font-bold w-fit mb-2">
              <User className="w-3.5 h-3.5" />
              <span>Dedicated Human AI Solution Architects</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
              Personalized Engineering Consultations
            </h3>
            <p className="text-slate-200 text-xs sm:text-sm max-w-2xl mt-1">
              Connect directly with our senior developers in modern collaborative sprints. We analyze your tech stack, outline measurable ROI milestones, and build tailored POCs.
            </p>
          </div>
        </div>

        {/* Main Booking Container */}
        <div className="bg-white p-8 sm:p-14 rounded-3xl border border-slate-200 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Info (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-blue-600 font-bold">
                Why Consult With AsNexa?
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
                Direct Engineering Expertise
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Zero sales fluff or pitch decks. You will speak with senior AI engineers who build production systems every single day.
              </p>
            </div>

            <div className="space-y-3 pt-2 text-xs text-slate-700">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>1-on-1 Architecture &amp; Data Schema Review</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Live Custom Voice Agent &amp; Workflow Demo</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200">
                <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" />
                <span>Guaranteed Payback Model &amp; SLA Commitment</span>
              </div>
            </div>

            {/* WhatsApp Direct Connect Card */}
            <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 shadow-xs space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-emerald-800 font-bold text-xs uppercase font-mono">
                  <WhatsAppIcon className="w-4 h-4 text-emerald-700" />
                  <span>Instant WhatsApp Line</span>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-200 text-emerald-900 font-mono font-bold">
                  Online
                </span>
              </div>
              <p className="text-slate-700 text-xs">
                Need quick technical answers? Chat directly with our engineering leads:
              </p>
              <div className="pt-1 flex items-center justify-between gap-2">
                <span className="text-slate-900 font-mono font-bold text-sm">{WHATSAPP_NUMBER}</span>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold px-3.5 py-1.5 rounded-xl shadow-md transition-all hover:scale-105 flex items-center gap-1.5"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5 text-white" />
                  <span>Chat Now ↗</span>
                </a>
              </div>
            </div>

            {initialSavings && (
              <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200">
                <span className="text-[10px] font-mono uppercase text-slate-500 block mb-0.5 font-bold">Calculated Target Savings:</span>
                <span className="text-2xl font-mono font-bold text-blue-700">${initialSavings.toLocaleString()} / year</span>
              </div>
            )}

            <div className="pt-2 text-xs text-slate-500 font-mono space-y-1">
              <div>💬 WhatsApp: {WHATSAPP_NUMBER} (+92 335 2204606)</div>
              <div>📍 Headquarters: United States • Global Remote Engineering</div>
              <div>⚡ Response SLA: Immediate on WhatsApp or within 24h via Email</div>
            </div>
          </div>

          {/* Right Form (7 Cols) */}
          <div className="lg:col-span-7">
            {submitted ? (
              <div className="p-10 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4 animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto text-2xl font-bold">
                  ✓
                </div>
                <h4 className="text-2xl font-bold text-slate-900 font-heading">
                  Session Request Confirmed
                </h4>
                <p className="text-slate-700 text-sm max-w-md mx-auto">
                  Thank you, <strong className="text-slate-900">{fullName}</strong>. We have logged your request for <strong className="text-blue-700">{preferredSlot}</strong>. A calendar invite and prep dossier will arrive in <strong className="text-slate-900">{email}</strong> shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold border border-slate-300"
                >
                  Book Another Session
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={e => setFullName(e.target.value)}
                      placeholder="Alex Vance"
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      placeholder="alex@company.com"
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      value={company}
                      onChange={e => setCompany(e.target.value)}
                      placeholder="Acme Corp"
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Team Size
                    </label>
                    <select
                      value={teamSize}
                      onChange={e => setTeamSize(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-blue-600 focus:bg-white transition-colors"
                    >
                      <option>1-10 members</option>
                      <option>10-25 members</option>
                      <option>25-100 members</option>
                      <option>100+ Enterprise</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Primary Automation Focus
                  </label>
                  <select
                    value={goal}
                    onChange={e => setGoal(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-blue-600 focus:bg-white transition-colors"
                  >
                    <option>Deploy Autonomous Digital FTEs for Operations</option>
                    <option>Sub-300ms Voice Agent / Inbound Telephony</option>
                    <option>Governed Enterprise RAG (Zero Hallucinations)</option>
                    <option>Custom Shopify / n8n Workflow Automation</option>
                    <option>Forward Deployed AI Engineering Partnership</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Preferred Consultation Window
                  </label>
                  <select
                    value={preferredSlot}
                    onChange={e => setPreferredSlot(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-blue-600 focus:bg-white transition-colors"
                  >
                    <option>Tomorrow, 10:00 AM EST</option>
                    <option>Tomorrow, 2:00 PM EST</option>
                    <option>In 2 Days, 11:30 AM EST</option>
                    <option>In 3 Days, 3:00 PM EST</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#1D63FF] hover:bg-blue-600 text-white font-bold text-sm py-4 rounded-xl shadow-xl shadow-blue-500/25 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Confirm Strategy Consultation</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};
