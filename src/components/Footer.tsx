import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Mail, Globe, ArrowUp } from 'lucide-react';
import { WHATSAPP_NUMBER, WHATSAPP_URL, WhatsAppIcon } from './WhatsAppButton';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#05070c] text-slate-400 text-xs py-16 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-slate-900">
          
          {/* Brand Info */}
          <div className="space-y-4 md:col-span-1">
            <Link to="/" className="flex items-center space-x-3">
              <img
                src="/assets/aistudio/asnexa.jpg_55861581.jpeg"
                alt="AsNexa Logo"
                className="w-9 h-9 rounded-xl object-cover border border-purple-500/40"
              />
              <div>
                <span className="font-heading font-extrabold text-base tracking-tight text-white block leading-none">
                  ASNEXA
                </span>
                <span className="text-[8px] tracking-widest font-extrabold uppercase text-blue-400 block mt-1">
                  TECHNOLOGIES
                </span>
              </div>
            </Link>
            <p className="text-slate-400 text-xs leading-relaxed">
              Premier Forward Deployed Engineering and Autonomous AI Systems agency for high-growth U.S. enterprises.
            </p>
            <div className="flex flex-col gap-2">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono font-bold text-emerald-400 bg-emerald-950/50 hover:bg-emerald-950/80 border border-emerald-500/30 px-3 py-1.5 rounded-xl transition-all"
              >
                <WhatsAppIcon className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp: {WHATSAPP_NUMBER}</span>
              </a>
              <div className="flex items-center gap-2 text-emerald-400 font-mono text-[11px]">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>All Systems Operational • 99.98% SLA</span>
              </div>
            </div>
          </div>

          {/* Core Navigation */}
          <div className="space-y-3">
            <h4 className="font-mono uppercase text-white font-bold tracking-wider text-[11px]" style={{ color: '#ffffff' }}>
              Solutions &amp; URLs
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="hover:text-cyan-400 transition-colors flex items-center justify-between">
                  <span>Autonomous Digital FTEs</span>
                  <span className="font-mono text-[10px] text-slate-600">/services</span>
                </Link>
              </li>
              <li>
                <Link to="/sandbox" className="hover:text-cyan-400 transition-colors flex items-center justify-between">
                  <span>Sub-300ms Voice Telephony</span>
                  <span className="font-mono text-[10px] text-slate-600">/sandbox</span>
                </Link>
              </li>
              <li>
                <Link to="/calculator" className="hover:text-cyan-400 transition-colors flex items-center justify-between">
                  <span>Digital FTE ROI Calculator</span>
                  <span className="font-mono text-[10px] text-slate-600">/calculator</span>
                </Link>
              </li>
              <li>
                <Link to="/3d-architecture" className="hover:text-cyan-400 transition-colors flex items-center justify-between">
                  <span>Interactive 3D Engine</span>
                  <span className="font-mono text-[10px] text-slate-600">/3d-architecture</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Industries */}
          <div className="space-y-3">
            <h4 className="font-mono uppercase text-white font-bold tracking-wider text-[11px]" style={{ color: '#ffffff' }}>
              Industries
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/industries" className="hover:text-cyan-400 transition-colors">
                  Real Estate &amp; Tenant Intake
                </Link>
              </li>
              <li>
                <Link to="/industries" className="hover:text-cyan-400 transition-colors">
                  Legal &amp; Contract Auditing
                </Link>
              </li>
              <li>
                <Link to="/industries" className="hover:text-cyan-400 transition-colors">
                  FinTech &amp; Loan Underwriting
                </Link>
              </li>
              <li>
                <Link to="/industries" className="hover:text-cyan-400 transition-colors">
                  Retail &amp; Shopify Orchestration
                </Link>
              </li>
              <li>
                <Link to="/industries" className="hover:text-cyan-400 transition-colors">
                  Healthcare Clinical Triage
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Legal */}
          <div className="space-y-3">
            <h4 className="font-mono uppercase text-white font-bold tracking-wider text-[11px]" style={{ color: '#ffffff' }}>
              Connect &amp; Legal
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 text-emerald-400/90 font-medium transition-colors flex items-center justify-between"
                >
                  <span className="flex items-center gap-1.5">
                    <WhatsAppIcon className="w-3.5 h-3.5 text-emerald-400" />
                    <span>WhatsApp Chat</span>
                  </span>
                  <span className="font-mono text-[10px] text-emerald-400 font-bold">{WHATSAPP_NUMBER}</span>
                </a>
              </li>
              <li>
                <Link to="/company" className="hover:text-cyan-400 transition-colors flex items-center justify-between">
                  <span>Company Hub &amp; Social Bios</span>
                  <span className="font-mono text-[10px] text-slate-600">/company</span>
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:text-cyan-400 transition-colors flex items-center justify-between">
                  <span>Client Case Studies</span>
                  <span className="font-mono text-[10px] text-slate-600">/portfolio</span>
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-cyan-400 transition-colors flex items-center justify-between">
                  <span>Enterprise FAQ &amp; Security</span>
                  <span className="font-mono text-[10px] text-slate-600">/faq</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-cyan-400 transition-colors flex items-center justify-between">
                  <span>Book AI Strategy Session</span>
                  <span className="font-mono text-[10px] text-slate-600">/contact</span>
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <div>
            &copy; 2026 AsNexa Technologies Inc. All rights reserved. • Autonomous AI Systems &amp; Digital FTEs.
          </div>
          <div className="flex items-center space-x-6">
            <span>SOC2 Type II Ready</span>
            <span>HIPAA Compliant Pipelines</span>
            <span>0% Training Data Retention</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
