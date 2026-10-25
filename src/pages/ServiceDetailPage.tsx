import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { SERVICES_DATA } from '../data/servicesData';
import { WHATSAPP_NUMBER, WHATSAPP_URL, WhatsAppIcon } from '../components/WhatsAppButton';
import { CheckCircle2, ArrowRight, ArrowLeft, Zap, Cpu, Award } from 'lucide-react';
import { ThreeDCard } from '../components/ThreeDCard';

interface ServiceDetailPageProps {
  onSelectService: (serviceName: string) => void;
  onNotify: (title: string, message: string) => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({
  onSelectService,
  onNotify,
}) => {
  const { serviceSlug } = useParams<{ serviceSlug: string }>();
  const navigate = useNavigate();

  // Normalize slug (strip .html if present)
  const cleanSlug = serviceSlug?.replace('.html', '') || 'digital-fte';
  const service = SERVICES_DATA[cleanSlug] || SERVICES_DATA['digital-fte'];

  const handleBookSession = () => {
    onSelectService(service.title);
    onNotify('Service Configured', `${service.title} pre-selected for your strategy session.`);
    navigate('/contact');
  };

  return (
    <div className="py-20 bg-[#f8fafc] min-h-screen text-slate-800">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between border-b border-slate-200 pb-6">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-xs font-mono text-blue-600 hover:text-blue-800 font-bold transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Services</span>
          </Link>

          <div className="flex items-center gap-3">
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 font-bold">
              {service.category}
            </span>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20bd5a] text-white px-3.5 py-1.5 rounded-xl text-xs font-bold font-mono flex items-center gap-1.5 shadow-md transition-all hover:scale-105"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 text-white" />
              <span>WhatsApp: {WHATSAPP_NUMBER}</span>
            </a>
          </div>
        </div>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-8 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 font-mono text-xs font-bold shadow-sm">
              <Cpu className="w-3.5 h-3.5 text-blue-600" />
              <span>Enterprise Production Architecture</span>
            </div>

            {/* Single Solid Color Heading */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 font-heading leading-tight">
              {service.title}
            </h1>

            <p className="text-xl text-blue-600 font-semibold">
              {service.tagline}
            </p>

            <p className="text-slate-700 text-base sm:text-lg leading-relaxed max-w-3xl">
              {service.overview}
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={handleBookSession}
                className="bg-[#1D63FF] hover:bg-blue-600 text-white font-bold px-8 py-4 rounded-2xl shadow-xl shadow-blue-500/20 transition-all hover:scale-105 active:scale-95 flex items-center gap-3 text-sm sm:text-base"
              >
                <span>Deploy {service.title}</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold px-6 py-4 rounded-2xl shadow-lg shadow-emerald-500/20 transition-all hover:scale-105 flex items-center gap-2 text-sm sm:text-base font-mono"
              >
                <WhatsAppIcon className="w-5 h-5 text-white" />
                <span>Chat on WhatsApp: {WHATSAPP_NUMBER}</span>
              </a>
            </div>
          </div>

          {/* Metric Highlight Box */}
          <div className="lg:col-span-4 bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-xl text-center space-y-6">
            <span className="text-xs font-mono uppercase tracking-widest text-slate-500 font-bold block">
              Verified Production SLA
            </span>

            {/* Single Solid Metric Color */}
            <div className="text-5xl sm:text-6xl font-extrabold font-mono text-blue-600">
              {service.metric}
            </div>

            <p className="text-sm font-semibold text-slate-800">
              {service.metricLabel}
            </p>

            <div className="pt-4 border-t border-slate-200 text-xs text-slate-700 space-y-2 text-left">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Guaranteed Positive ROI in Contract</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Zero Hallucination Refusal Policy</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Full IP Ownership &amp; Clean Code Handoff</span>
              </div>
            </div>
          </div>

        </div>

        {/* 4-Step Architecture Execution Pipeline */}
        <div className="space-y-8">
          <div className="space-y-2 text-center max-w-2xl mx-auto">
            <span className="text-xs font-mono uppercase tracking-widest text-blue-600 font-bold block">
              Execution Architecture
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading">
              End-to-End System Pipeline
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.architectureDiagramSteps.map(item => (
              <div
                key={item.step}
                className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3 relative overflow-hidden"
              >
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-extrabold font-mono text-blue-600 opacity-80">
                    {item.step}
                  </span>
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 font-heading">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Key Technical Capabilities */}
        <div className="space-y-8">
          <div className="space-y-2 text-center max-w-2xl mx-auto">
            <span className="text-xs font-mono uppercase tracking-widest text-blue-600 font-bold block">
              Core Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading">
              Engineered for Enterprise Demands
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.keyCapabilities.map((cap, i) => (
              <ThreeDCard key={i} glowColor="blue" className="space-y-3 bg-white border border-slate-200 shadow-md">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 font-heading">
                  {cap.title}
                </h3>
                <p className="text-slate-700 text-sm leading-relaxed">
                  {cap.desc}
                </p>
              </ThreeDCard>
            ))}
          </div>
        </div>

        {/* Technical Specs Table */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-md space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-mono uppercase tracking-widest text-blue-600 font-bold block">
              Technical Specifications &amp; Runtime Specs
            </span>
            <h3 className="text-2xl font-bold text-slate-900 font-heading">
              Production Stack &amp; Constraints
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4 border-t border-slate-200">
            {service.technicalSpecs.map((spec, i) => (
              <div key={i} className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <span className="text-xs text-slate-500 font-mono uppercase block mb-1">
                  {spec.label}
                </span>
                <span className="text-sm font-bold text-blue-700 font-mono">
                  {spec.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Real-World Case Study */}
        <div className="bg-white p-8 sm:p-14 rounded-3xl border border-slate-200 shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold font-mono">
              <Award className="w-3.5 h-3.5" />
              <span>Verified Enterprise Case Study</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
              {service.caseStudy.client}
            </h3>
            <span className="text-xs font-mono text-blue-600 block">
              Industry: {service.caseStudy.industry}
            </span>

            <div className="space-y-2 pt-2 text-sm text-slate-700">
              <p><strong>Challenge:</strong> {service.caseStudy.challenge}</p>
              <p><strong>Solution:</strong> {service.caseStudy.solution}</p>
            </div>

            <div className="space-y-2 pt-4">
              <span className="text-xs font-mono text-slate-500 uppercase tracking-widest font-bold block">
                Quantifiable Results:
              </span>
              {service.caseStudy.results.map((res, i) => (
                <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-emerald-700 font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{res}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 bg-slate-50 p-8 rounded-3xl border border-slate-200 text-center space-y-6">
            <h4 className="text-xl font-bold text-slate-900 font-heading">
              Ready to Achieve Similar Results?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Speak directly with our senior engineers to design a production deployment for your team.
            </p>

            <button
              onClick={handleBookSession}
              className="w-full bg-[#1D63FF] hover:bg-blue-600 text-white font-bold py-4 rounded-2xl shadow-xl shadow-blue-500/25 transition-all hover:scale-105"
            >
              Book Strategy Session for {service.title}
            </button>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-3.5 rounded-2xl shadow-md transition-all font-mono text-xs"
            >
              💬 WhatsApp Us: {WHATSAPP_NUMBER}
            </a>
          </div>
        </div>

        {/* Supported Integrations List */}
        <div className="text-center space-y-6">
          <span className="text-xs font-mono uppercase tracking-widest text-slate-500 font-bold block">
            Native Connectors &amp; Integrations
          </span>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {service.supportedIntegrations.map((tool, i) => (
              <span
                key={i}
                className="px-5 py-2.5 rounded-2xl bg-white border border-slate-200 text-xs sm:text-sm font-mono font-semibold text-slate-700 shadow-sm"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Service FAQs */}
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="text-center space-y-2">
            <h3 className="text-2xl font-bold text-slate-900 font-heading">
              Frequently Asked Questions About {service.title}
            </h3>
          </div>

          <div className="space-y-4">
            {service.faq.map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white border border-slate-200 space-y-2 shadow-sm">
                <h4 className="font-bold text-base text-slate-900 font-heading">
                  {item.q}
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
