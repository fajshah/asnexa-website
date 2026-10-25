import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Bot,
  Mic,
  ShieldCheck,
  Zap,
  TrendingUp,
  BrainCircuit,
  ArrowRight,
  CheckCircle2,
  Layers,
  X,
} from 'lucide-react';
import { ThreeDCard } from './ThreeDCard';

interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  icon: React.ElementType;
  glow: 'purple' | 'blue' | 'cyan' | 'emerald';
  features: string[];
  techStack: string[];
  latencyOrMetric: string;
  architectureDetails: string;
}

const SERVICES: ServiceItem[] = [
  {
    id: 'digital-fte',
    title: 'Autonomous Digital FTEs',
    tagline: 'Virtual AI Knowledge Workers',
    description:
      'Multi-agent autonomous systems running continuous business operations across ERP, CRM, and accounting with human-in-the-loop governance.',
    icon: Bot,
    glow: 'purple',
    features: [
      'Self-healing API & webhook integrations',
      'Human-in-the-loop Slack & Teams approvals',
      'Persistent cross-session memory engines',
      'Comprehensive SOC2-ready audit trail logs',
    ],
    techStack: ['Claude 3.5 Sonnet', 'n8n Self-Hosted', 'LangGraph', 'PostgreSQL'],
    latencyOrMetric: '24/7 Zero Latency',
    architectureDetails:
      'Autonomous workers are orchestrated via LangGraph state machines running in hardened containers. Every agent step is cryptographically audited and validated against business constraints.',
  },
  {
    id: 'voice-agents',
    title: 'Sub-300ms Voice Agents',
    tagline: 'Real-Time Conversational Telephony',
    description:
      'Natural-sounding voice AI replacing rigid IVRs with conversational phone agents for tier-1 support, inbound lead qualification, and dispatch.',
    icon: Mic,
    glow: 'cyan',
    features: [
      'Ultra-low round-trip latency (<280ms RTT)',
      'Natural barge-in & interruption detection',
      'Native Twilio / SIP trunking integrations',
      'Multi-lingual real-time acoustic synthesis',
    ],
    techStack: ['Deepgram Nova-2', 'Cartesia Sonic', 'LiveKit WebRTC', 'Twilio SIP'],
    latencyOrMetric: '<280ms RTT',
    architectureDetails:
      'Our voice pipeline connects SIP audio streams via bidirectional WebSockets directly to streaming token generators and direct neural audio synthesizers, eliminating intermediate file buffering.',
  },
  {
    id: 'governed-rag',
    title: 'Governed Enterprise RAG',
    tagline: 'Zero-Hallucination Knowledge Systems',
    description:
      'Enterprise knowledge retrieval engines combining hybrid dense vector spaces with deterministic BM25 keyword matching, evaluated against a strict System of Record (KSoR) rubric.',
    icon: ShieldCheck,
    glow: 'emerald',
    features: [
      'Dual-layer dense + sparse keyword retrieval',
      'Verifiable document citations & source page audit',
      'Strict KSoR verification rules preventing hallucinations',
      'Role-based access control (RBAC) data masking',
    ],
    techStack: ['Qdrant / Pinecone', 'Cohere Rerank 3', 'BM25 Engine', 'LlamaIndex'],
    latencyOrMetric: '0.00% Hallucinations',
    architectureDetails:
      'Documents are chunked hierarchically with metadata tagging. A secondary critic LLM inspects retrieved passages against the proposed completion before token dispatch, returning a refusal if confidence is below 98%.',
  },
  {
    id: 'workflow-automation',
    title: 'Workflow & CRM Automation',
    tagline: 'End-to-End Enterprise Integration',
    description:
      'Connect Shopify, Stripe, Salesforce, HubSpot, Zendesk, and custom internal SQL databases into reliable, self-healing automated business processes.',
    icon: Zap,
    glow: 'blue',
    features: [
      'Event-driven webhook ingestion & transformation',
      'Automated invoice generation & reconciliation',
      'Two-way sync across disparate CRM/ERP platforms',
      'Dead-letter queues with exponential backoff retries',
    ],
    techStack: ['n8n Self-Hosted', 'Node.js / TS', 'Redis BullMQ', 'Docker'],
    latencyOrMetric: '25,000 Ops / Min',
    architectureDetails:
      'Workflows run in isolated sandboxes with strict rate-limiting and cryptographic payload verification. All executions generate persistent audit trails for compliance.',
  },
  {
    id: 'predictive-bi',
    title: 'Predictive BI & Forecasting',
    tagline: 'Deterministic Business Intelligence',
    description:
      'Transform raw operational data into deterministic predictive models for demand forecasting, inventory reordering, churn prediction, and revenue modeling.',
    icon: TrendingUp,
    glow: 'purple',
    features: [
      'Automated time-series regression pipelines',
      'Customer lifetime value & churn probability scoring',
      'Dynamic automated inventory reorder triggers',
      'Real-time executive KPI dashboards',
    ],
    techStack: ['Python / PyTorch', 'DuckDB', 'ClickHouse', 'Prophet Engine'],
    latencyOrMetric: '99.2% Trend Accuracy',
    architectureDetails:
      'OLAP ClickHouse engines aggregate high-velocity transactional data while Python background workers continuously fit Bayesian ridge and gradient-boosted trees against 14-day rolling windows.',
  },
  {
    id: 'custom-fine-tuning',
    title: 'Custom Models & Fine-Tuning',
    tagline: 'Private Domain-Specific AI',
    description:
      'Fine-tune open-weight models (Llama 3, Mistral) on proprietary datasets for secure, offline, self-hosted deployments behind your VPC firewall.',
    icon: BrainCircuit,
    glow: 'blue',
    features: [
      'LoRA and QLoRA efficient parameter tuning',
      'Synthetic dataset distillation & deduplication',
      'Private on-premises or VPC Ollama / vLLM serving',
      'Full enterprise IP and data ownership guarantee',
    ],
    techStack: ['vLLM Server', 'Unsloth / Axolotl', 'Ollama Enterprise', 'Triton'],
    latencyOrMetric: '100% Private VPC',
    architectureDetails:
      'We curate domain-specific corpora using automated deduplication and contrastive evaluation, then fine-tune quantized weights to run inference efficiently on single-node GPU clusters inside your VPC.',
  },
];

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);

  return (
    <section className="py-24 relative overflow-hidden bg-[#f8fafc]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header - Solid Color, No Double Shading */}
        <div className="text-center max-w-4xl mx-auto mb-20 space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-blue-700 font-bold px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 inline-block shadow-xs">
            Full-Spectrum AI Engineering
          </span>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight font-heading">
            Enterprise AI Consulting &amp; Services
          </h2>
          <p className="text-slate-600 text-base sm:text-xl max-w-3xl mx-auto">
            Click any service card below to open its dedicated full page with detailed architectural specs, execution diagrams, case studies, and SLA metrics.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map(service => {
            const Icon = service.icon;
            return (
              <ThreeDCard key={service.id} glowColor={service.glow} className="flex flex-col justify-between h-full group bg-white border border-slate-200 shadow-md">
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center font-bold shadow-xs">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-xs font-mono font-bold text-emerald-700 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200">
                      {service.latencyOrMetric}
                    </span>
                  </div>

                  <div>
                    <span className="text-[11px] font-mono text-blue-600 uppercase tracking-widest block mb-1 font-semibold">
                      {service.tagline}
                    </span>
                    <Link
                      to={`/services/${service.id}`}
                      className="text-2xl font-bold text-slate-900 font-heading hover:text-blue-600 transition-colors block"
                    >
                      {service.title}
                    </Link>
                  </div>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-slate-200">
                    {service.features.slice(0, 3).map((feat, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-200 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                  <Link
                    to={`/services/${service.id}`}
                    className="bg-[#1D63FF] hover:bg-blue-600 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-all hover:scale-105 text-center flex items-center justify-center gap-1.5 shadow-md shadow-blue-500/20"
                  >
                    <span>Open Full Page</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <div className="flex items-center justify-between sm:justify-end gap-2">
                    <button
                      onClick={() => setActiveModalService(service)}
                      className="text-xs font-mono text-blue-600 hover:text-blue-800 font-semibold flex items-center gap-1 p-1"
                    >
                      <Layers className="w-3.5 h-3.5" />
                      <span>Architecture</span>
                    </button>
                    <button
                      onClick={() => onSelectService(service.title)}
                      className="text-xs bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 px-3 py-2 rounded-xl transition-all font-semibold"
                    >
                      Select
                    </button>
                  </div>
                </div>
              </ThreeDCard>
            );
          })}
        </div>
      </div>

      {/* Architecture Detail Modal */}
      {activeModalService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white border border-slate-200 rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-6 shadow-2xl relative">
            <button
              onClick={() => setActiveModalService(null)}
              className="absolute top-6 right-6 text-slate-400 hover:text-slate-800 p-2 rounded-xl bg-slate-100 border border-slate-200"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-2">
              <span className="text-xs font-mono uppercase text-blue-600 font-bold">
                Technical Specification
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
                {activeModalService.title}
              </h3>
              <p className="text-slate-600 text-sm">
                {activeModalService.tagline}
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase text-slate-700 tracking-wider font-bold">
                Production Architecture &amp; Execution Topology
              </h4>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-800 leading-relaxed font-mono">
                {activeModalService.architectureDetails}
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-mono uppercase text-slate-700 tracking-wider font-bold">
                Primary Technology Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {activeModalService.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-xl bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 flex justify-end gap-3">
              <button
                onClick={() => setActiveModalService(null)}
                className="px-5 py-2.5 rounded-xl bg-slate-100 text-slate-700 text-xs font-semibold hover:bg-slate-200"
              >
                Close
              </button>
              <button
                onClick={() => {
                  onSelectService(activeModalService.title);
                  setActiveModalService(null);
                }}
                className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-md shadow-blue-500/25"
              >
                Consult on this Service
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
