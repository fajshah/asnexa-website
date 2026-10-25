import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Search } from 'lucide-react';

interface FAQItem {
  id: number;
  question: string;
  category: 'fte' | 'voice' | 'rag' | 'security';
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    id: 1,
    question: 'How do Autonomous Digital FTEs integrate with our existing stack?',
    category: 'fte',
    answer:
      'We run autonomous orchestration engines (such as self-hosted n8n and LangGraph) that connect via secure OAuth, REST APIs, or database webhooks to your existing tools (Salesforce, HubSpot, NetSuite, Shopify, Slack, PostgreSQL). No massive legacy migration is needed.',
  },
  {
    id: 2,
    question: 'How do you achieve <300ms round-trip latency on voice telephony?',
    category: 'voice',
    answer:
      'Our voice telephony pipeline utilizes WebRTC SIP trunking directly streamed into sub-150ms speech-to-text models (Deepgram Nova-2), streaming token inference, and instantaneous acoustic synthesis (Cartesia Sonic). By eliminating disk I/O and intermediate audio file buffering, we maintain natural, human-like turn-taking without awkward pauses.',
  },
  {
    id: 3,
    question: 'How do you guarantee zero hallucinations in enterprise RAG systems?',
    category: 'rag',
    answer:
      'We implement a strict Knowledge System of Record (KSoR) framework. Documents are indexed with dense semantic vectors and sparse BM25 keywords. A secondary validation layer audits every proposed token against source document chunks. If confidence drops below 99%, the model issues a transparent refusal rather than guessing.',
  },
  {
    id: 4,
    question: 'Who owns the code, workflows, and intellectual property?',
    category: 'security',
    answer:
      'You do. 100%. All custom prompts, LangGraph architectures, n8n JSON workflows, and fine-tuned model weights belong entirely to your enterprise. We sign explicit IP assignment agreements before Day 1.',
  },
  {
    id: 5,
    question: 'Are your deployments SOC2 and HIPAA compliant?',
    category: 'security',
    answer:
      'Yes. We build in private enterprise VPCs (AWS, GCP, Azure, or on-premise hardware) with zero-data-retention agreements from foundational model providers. All data in transit is encrypted with TLS 1.3, and data at rest uses AES-256 with role-based access control.',
  },
  {
    id: 6,
    question: 'What is the typical timeline from contract to go-live?',
    category: 'fte',
    answer:
      'Typical deployments range from 7 to 21 business days. Week 1 is architecture design and API integration. Week 2 is workflow orchestration and guardrail calibration. Week 3 is user acceptance testing, shadow running, and go-live.',
  },
];

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(1);
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const filteredFaqs = FAQS.filter(faq => {
    const matchesCategory = filterCategory === 'all' || faq.category === filterCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div id="faq" className="py-24 sm:py-28 bg-[#f8fafc] relative border-b border-slate-200 transition-colors">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold">
            <HelpCircle className="w-3.5 h-3.5 text-blue-600" />
            <span>Knowledge Base &amp; Architecture Specs</span>
          </div>
          {/* Single Solid Color Heading */}
          <h2 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight font-heading">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Expert answers regarding AsNexa's production AI engineering, voice latency, and enterprise governance.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-md mx-auto pt-4">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              placeholder="Search questions (e.g. latency, security, FTE)..."
              className="w-full bg-white border border-slate-300 rounded-2xl pl-11 pr-4 py-3 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 shadow-xs"
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {[
              { id: 'all', label: 'All Questions' },
              { id: 'fte', label: 'Digital FTEs' },
              { id: 'voice', label: 'Voice Latency' },
              { id: 'rag', label: 'Zero-Hallucination RAG' },
              { id: 'security', label: 'Security & Privacy' },
            ].map(cat => (
              <button
                key={cat.id}
                onClick={() => setFilterCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all ${
                  filterCategory === cat.id
                    ? 'bg-blue-600 text-white font-bold shadow-md shadow-blue-500/20'
                    : 'bg-white text-slate-700 hover:text-blue-600 border border-slate-300'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Human Support Engineers Office Banner */}
        <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-md group">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80"
            alt="AsNexa Technical Architecture Support Engineers in Tech Office"
            className="w-full h-64 sm:h-80 object-cover object-center group-hover:scale-105 transition-transform duration-700 filter contrast-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent flex flex-col justify-end p-6 sm:p-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600 text-white text-xs font-mono font-bold w-fit mb-2">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>24/7 Human Engineering Support</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
              Enterprise Answers from Real Systems Architects
            </h3>
            <p className="text-slate-200 text-xs sm:text-sm max-w-2xl mt-1">
              Every implementation includes dedicated Slack channels, weekly performance syncs, and direct escalations to senior core engineers.
            </p>
          </div>
        </div>

        {/* Accordion List Container */}
        <div className="max-w-4xl mx-auto space-y-4">
          {filteredFaqs.map(faq => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 font-heading">
                    {faq.question}
                  </h3>
                  <div
                    className={`w-8 h-8 rounded-xl border border-slate-200 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-blue-600 text-white border-blue-600' : 'bg-slate-100 text-slate-700'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-slate-700 text-sm leading-relaxed border-t border-slate-100 pt-4 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};
