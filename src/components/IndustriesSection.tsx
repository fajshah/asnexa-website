import React, { useState } from 'react';
import {
  Building2,
  Scale,
  Stethoscope,
  ShoppingBag,
  TrendingUp,
  Truck,
  GraduationCap,
  Rocket,
  ArrowRight,
} from 'lucide-react';

interface Industry {
  id: string;
  name: string;
  icon: React.ElementType;
  shortDesc: string;
  detailedWorkflow: string;
  roiStat: string;
  timeToDeploy: string;
  examplePrompt: string;
}

interface IndustriesSectionProps {
  onSelectIndustry: (industryName: string) => void;
}

const INDUSTRIES: Industry[] = [
  {
    id: 'real-estate',
    name: 'Real Estate & PropTech',
    icon: Building2,
    shortDesc: 'Automated tenant qualification, calendar tour booking, and instant lease renewal dispatch via conversational phone and SMS agents.',
    detailedWorkflow:
      'Inbound tenant calls and Zillow inquiries are instantly routed to our voice agent, which verifies budget, credit criteria, and books showing slots directly into your property manager calendar.',
    roiStat: '68% Faster Lease Closings',
    timeToDeploy: '10 Days',
    examplePrompt: 'Qualify caller credit score (>650), desired move-in date (<30 days), and book tour into Calendly.',
  },
  {
    id: 'legal',
    name: 'Legal & Contract Audit',
    icon: Scale,
    shortDesc: 'Governed RAG systems for rapid NDA discovery, redlining risk assessments, and deterministic clause verification with verifiable citations.',
    detailedWorkflow:
      'Lawyers drag-and-drop 300+ page contracts into our local governed engine. The system audits liability caps, indemnification provisions, and cross-references them against firm standards.',
    roiStat: '85% Reduction in Review Time',
    timeToDeploy: '14 Days',
    examplePrompt: 'Flag any clause that waives consequential damages or extends warranties beyond 12 months.',
  },
  {
    id: 'healthcare',
    name: 'Healthcare & Dental',
    icon: Stethoscope,
    shortDesc: 'HIPAA-compliant patient intake voice telephony, automated insurance pre-authorizations, and appointment rescheduling.',
    detailedWorkflow:
      'Voice agent answers patient calls with warm conversational empathy, collects insurance member ID numbers, triggers real-time eligibility checks, and logs confirmations into your EHR system.',
    roiStat: '92% Intake Automation',
    timeToDeploy: '14 Days',
    examplePrompt: 'Verify patient insurance policy with payer API and confirm next available slot with Dr. Chen.',
  },
  {
    id: 'ecommerce',
    name: 'E-Commerce & Retail',
    icon: ShoppingBag,
    shortDesc: '24/7 omni-channel customer resolution, automated Gorgias/Zendesk ticketing, and dynamic Shopify inventory synchronization.',
    detailedWorkflow:
      'Autonomous Digital FTE monitors Shopify return webhooks, calculates restocking eligibility, issues prepaid shipping labels, and updates customer support tickets without manual human touch.',
    roiStat: '74% Tier-1 Ticket Deflection',
    timeToDeploy: '7 Days',
    examplePrompt: 'Check order status in Shopify, issue replacement for transit-damaged item if photo is validated.',
  },
  {
    id: 'finance',
    name: 'FinTech & Accounting',
    icon: TrendingUp,
    shortDesc: 'Deterministic invoice reconciliation, automated accounts receivable follow-ups, and real-time cash flow anomaly detection.',
    detailedWorkflow:
      'Digital FTE ingests PDF bank statements, extracts line items via deterministic OCR, matches transactions against QuickBooks entries, and drafts escalation summaries for unmatched exceptions.',
    roiStat: '10x Faster Month-End Close',
    timeToDeploy: '12 Days',
    examplePrompt: 'Match Stripe invoice payment IDs against pending bank wire records in NetSuite.',
  },
  {
    id: 'logistics',
    name: 'Logistics & Supply Chain',
    icon: Truck,
    shortDesc: 'Automated carrier check-in calls, freight rate negotiation workflows, and real-time tracking updates dispatched via SMS.',
    detailedWorkflow:
      'Voice bots call freight dispatchers to confirm load pickup times and GPS locations, pushing telemetry updates straight to your internal transportation management dashboard.',
    roiStat: '60% Cut in Dispatch Overhead',
    timeToDeploy: '9 Days',
    examplePrompt: 'Reconcile bill of lading weights against supplier invoice line items and flag 5%+ variance.',
  },
  {
    id: 'edtech',
    name: 'EdTech & Admissions',
    icon: GraduationCap,
    shortDesc: '24/7 conversational tutors and admissions advisors guiding prospective students through enrollment and course selection.',
    detailedWorkflow:
      'Multi-modal student admissions counselor answers tuition, prerequisite, and transfer credit questions across WhatsApp and web chat, automatically capturing enrollment leads.',
    roiStat: '3.4x Application Completion',
    timeToDeploy: '8 Days',
    examplePrompt: 'Evaluate prospective student AP credits against engineering graduation requirements.',
  },
  {
    id: 'saas',
    name: 'B2B SaaS Growth',
    icon: Rocket,
    shortDesc: 'Enriching inbound leads, dispatching personalized executive briefings, and provisioning user workspaces automatically.',
    detailedWorkflow:
      'Pulls incoming trial signup data, enriches firmographics via Apollo/Clearbit, drafts customized pitch decks, and sends pre-configured onboarding workspaces in under 2 minutes.',
    roiStat: '45% Increase in SQL Velocity',
    timeToDeploy: '5 Days',
    examplePrompt: 'Enrich new enterprise signup with tech stack data, funding rounds, and assign to Account Exec.',
  },
];

export const IndustriesSection: React.FC<IndustriesSectionProps> = ({ onSelectIndustry }) => {
  const [selectedInd, setSelectedInd] = useState<Industry>(INDUSTRIES[0]);

  return (
    <div id="industries" className="py-28 bg-[#f8fafc] relative border-b border-slate-200 transition-colors">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-blue-700 font-bold px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 inline-block shadow-xs">
            Domain-Specific Implementations
          </span>
          {/* Single Solid Heading Color */}
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight font-heading">
            AI Solutions Tailored For Your Industry
          </h2>
          <p className="text-slate-600 text-base sm:text-xl max-w-3xl mx-auto">
            We deploy specialized autonomous workflows and Digital FTEs pre-tuned to the regulatory, data, and operational demands of your sector.
          </p>
        </div>

        {/* 8 Industries Card Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
          {INDUSTRIES.map(ind => {
            const Icon = ind.icon;
            const isSelected = selectedInd.id === ind.id;
            return (
              <button
                key={ind.id}
                onClick={() => setSelectedInd(ind)}
                className={`p-5 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between ${
                  isSelected
                    ? 'bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-500/25 scale-105'
                    : 'bg-white border-slate-200 text-slate-800 hover:border-blue-400 hover:bg-blue-50/40 shadow-xs'
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${
                    isSelected ? 'bg-white/20 text-white' : 'bg-blue-50 border border-blue-100 text-blue-600'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className={`font-heading font-bold text-sm sm:text-base ${isSelected ? 'text-white' : 'text-slate-900'}`}>
                    {ind.name}
                  </h3>
                  <span className={`text-[10px] font-mono block mt-1 ${isSelected ? 'text-blue-100' : 'text-blue-600 font-semibold'}`}>
                    {ind.roiStat}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Industry Deep Dive Feature Card */}
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-7 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 border border-blue-200 flex items-center justify-center">
                <selectedInd.icon className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono uppercase text-blue-600 font-bold">
                  Active Industry Blueprint
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
                  {selectedInd.name}
                </h3>
              </div>
            </div>

            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              {selectedInd.detailedWorkflow}
            </p>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block font-bold">
                Sample Autonomous Command:
              </span>
              <div className="text-xs font-mono text-blue-800 bg-white p-3 rounded-xl border border-slate-200">
                "{selectedInd.examplePrompt}"
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200 space-y-6 text-center">
            <div className="space-y-1">
              <span className="text-xs font-mono uppercase text-slate-500 font-bold">Target Benchmark</span>
              <div className="text-3xl sm:text-4xl font-extrabold font-mono text-emerald-600">
                {selectedInd.roiStat}
              </div>
            </div>

            <div className="flex justify-between items-center py-3 border-t border-b border-slate-200 text-xs font-mono">
              <span className="text-slate-500">Deployment Velocity:</span>
              <span className="text-slate-900 font-bold">{selectedInd.timeToDeploy} to Production</span>
            </div>

            <button
              onClick={() => onSelectIndustry(selectedInd.name)}
              className="w-full bg-[#1D63FF] hover:bg-blue-600 text-white font-bold text-xs sm:text-sm py-4 rounded-xl shadow-md shadow-blue-500/20 transition-all hover:scale-105 flex items-center justify-center gap-2"
            >
              <span>Deploy {selectedInd.name} System</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Human Office Industry Teams Showcase */}
        <div className="rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-md grid grid-cols-1 lg:grid-cols-12 items-center">
          <div className="lg:col-span-6 h-72 lg:h-full relative">
            <img
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1000&q=80"
              alt="Industry executive leadership team working in office"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="lg:col-span-6 p-8 sm:p-10 space-y-4 text-left">
            <span className="text-xs font-mono uppercase text-blue-600 font-bold block">
              Domain Expertise &amp; Human Leadership
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
              Aligning Systems with Real-World Domain Practice
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              We design autonomous systems that integrate seamlessly with your industry's compliance guidelines. Our forward-deployed engineers partner directly with your domain experts to validate every edge case.
            </p>
            <div className="pt-2 flex items-center gap-4 text-xs font-mono text-blue-700 font-semibold">
              <div>✓ Regulatory Hardened</div>
              <div>✓ 100% Traceable Citations</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
