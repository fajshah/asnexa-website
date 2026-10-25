import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, PhoneCall, Sparkles, Copy, Check, Sun, Moon } from 'lucide-react';
import { WHATSAPP_NUMBER, WHATSAPP_URL, WhatsAppIcon } from './WhatsAppButton';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  onNotify?: (title: string, message: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNotify }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copiedUrl, setCopiedUrl] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  const isDark = theme === 'dark';

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/industries', label: 'Industries' },
    { path: '/sandbox', label: 'Live Sandbox' },
    { path: '/calculator', label: 'ROI Calculator' },
    { path: '/3d-architecture', label: '3D Architecture' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/faq', label: 'FAQ' },
    { path: '/company', label: 'Company' },
    { path: '/contact', label: 'Contact' },
  ];

  // Helper to check active route (handles both clean and .html extensions)
  const isPathActive = (targetPath: string) => {
    const current = location.pathname.replace('.html', '') || '/';
    if (targetPath === '/') return current === '/' || current === '';
    return current === targetPath;
  };

  const handleCopyCurrentUrl = () => {
    navigator.clipboard?.writeText(window.location.href).then(() => {
      setCopiedUrl(true);
      onNotify?.('URL Copied!', `${window.location.pathname} copied to clipboard.`);
      setTimeout(() => setCopiedUrl(false), 2000);
    });
  };

  return (
    <header className="sticky top-0 z-40 transition-colors duration-200">
      {/* Top URL Quick-Bar Indicator */}
      <div
        className={`px-4 py-1.5 text-[11px] font-mono flex items-center justify-between border-b transition-colors duration-200 ${
          isDark
            ? 'bg-[#080d1a] border-slate-800 text-slate-300'
            : 'bg-[#0b1120] border-slate-800 text-slate-300'
        }`}
      >
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar max-w-2xl">
          <span className="text-cyan-400 font-bold shrink-0">Active Route:</span>
          <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-700 text-blue-300 shrink-0 font-bold">
            {location.pathname === '' ? '/' : location.pathname}
          </span>
          <span className="text-slate-600 hidden sm:inline">•</span>
          <div className="hidden lg:flex items-center gap-2 text-slate-400 shrink-0">
            <span>Direct URLs:</span>
            {navItems.map(item => (
              <Link
                key={item.path}
                to={item.path}
                className={`hover:text-white transition-colors ${
                  isPathActive(item.path) ? 'text-blue-400 underline font-bold' : ''
                }`}
              >
                {item.path}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-emerald-400 hover:text-emerald-300 bg-emerald-950/60 hover:bg-emerald-900/80 px-2.5 py-0.5 rounded-lg border border-emerald-500/30 transition-colors font-mono font-bold"
            title={`Direct WhatsApp Chat: ${WHATSAPP_NUMBER}`}
          >
            <WhatsAppIcon className="w-3.5 h-3.5 text-emerald-400" />
            <span>WhatsApp: {WHATSAPP_NUMBER}</span>
          </a>

          <button
            onClick={handleCopyCurrentUrl}
            className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 px-2.5 py-0.5 rounded-lg border border-slate-700 transition-colors"
            title="Copy direct link to this page URL"
          >
            {copiedUrl ? (
              <>
                <Check className="w-3 h-3 text-emerald-400" />
                <span className="text-emerald-400">Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3 h-3" />
                <span>Copy URL</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`backdrop-blur-xl border-b transition-all duration-300 ${
          isDark
            ? 'bg-[#0f172a]/95 border-slate-700/80 shadow-xl shadow-black/40 text-white'
            : 'bg-white/95 border-slate-200 shadow-sm text-slate-900'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center space-x-3 group text-left focus:outline-none"
            >
              <div
                className={`relative w-11 h-11 rounded-2xl p-0.5 overflow-hidden shadow-md group-hover:scale-105 transition-all ${
                  isDark
                    ? 'bg-slate-800 border border-blue-500/40 shadow-blue-500/10'
                    : 'bg-white border border-indigo-200 shadow-indigo-100'
                }`}
              >
                <img
                  src="/assets/aistudio/asnexa.jpg_55861581.jpeg"
                  alt="AsNexa Logo"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span
                    className={`font-heading font-extrabold text-lg tracking-tight block leading-none ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    ASNEXA
                  </span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded font-mono font-bold border ${
                      isDark
                        ? 'bg-blue-950/80 text-blue-300 border-blue-700'
                        : 'bg-blue-50 text-blue-700 border-blue-200'
                    }`}
                  >
                    3D
                  </span>
                </div>
                <span
                  className={`text-[9px] tracking-widest font-extrabold uppercase block mt-1 ${
                    isDark ? 'text-blue-400' : 'text-blue-600'
                  }`}
                >
                  TECHNOLOGIES
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden xl:flex items-center space-x-1.5 text-sm">
              {navItems.map(item => {
                const active = isPathActive(item.path);
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`relative font-semibold transition-all py-1.5 px-2.5 rounded-lg text-[13px] ${
                      isDark
                        ? active
                          ? 'text-white font-bold bg-blue-600/25 border border-blue-500/40 shadow-xs'
                          : 'text-slate-200 hover:text-white hover:bg-slate-800/60'
                        : active
                          ? 'text-blue-600 font-bold bg-blue-50/80 border border-blue-200/60'
                          : 'text-slate-700 hover:text-blue-600 hover:bg-slate-100/70'
                    }`}
                  >
                    {item.label}
                    {active && (
                      <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-blue-500 rounded-full" />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Right Action Buttons */}
            <div className="hidden md:flex items-center space-x-2.5">
              
              {/* Theme Toggle Button */}
              <button
                onClick={toggleTheme}
                className={`p-2.5 rounded-xl border transition-all flex items-center gap-1.5 text-xs font-semibold shadow-xs ${
                  isDark
                    ? 'bg-slate-800 text-amber-300 border-amber-400/40 hover:bg-slate-700 hover:border-amber-400'
                    : 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200'
                }`}
                title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                aria-label="Toggle Dark/Light Mode"
              >
                {isDark ? (
                  <>
                    <Sun className="w-4 h-4 text-amber-400" />
                    <span className="hidden lg:inline text-amber-300 font-mono text-[11px] font-bold">Light</span>
                  </>
                ) : (
                  <>
                    <Moon className="w-4 h-4 text-indigo-600" />
                    <span className="hidden lg:inline text-slate-700 font-mono text-[11px] font-bold">Dark</span>
                  </>
                )}
              </button>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-xl px-3.5 py-2.5 text-xs font-semibold shadow-md shadow-emerald-500/20 transition-all hover:scale-105 flex items-center gap-1.5 border border-emerald-400/30"
                title={`Chat on WhatsApp: ${WHATSAPP_NUMBER}`}
              >
                <WhatsAppIcon className="w-4 h-4 text-white" />
                <span className="font-mono font-bold">{WHATSAPP_NUMBER}</span>
              </a>

              <Link
                to="/calculator"
                className={`text-xs font-mono font-semibold px-3 py-2.5 rounded-xl border transition-all flex items-center gap-1.5 shadow-2xs ${
                  isDark
                    ? 'bg-slate-800 text-slate-100 border-slate-700 hover:border-blue-400 hover:bg-slate-700'
                    : 'bg-slate-100 text-slate-700 border-slate-200 hover:border-blue-300 hover:bg-slate-200'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                <span>Calc ROI</span>
              </Link>

              <Link
                to="/contact"
                className="bg-[#1D63FF] hover:bg-blue-600 text-white rounded-xl px-4 py-2.5 text-xs font-semibold shadow-md shadow-blue-500/20 transition-all hover:scale-105 flex items-center gap-2"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Book a Call</span>
              </Link>
            </div>

            {/* Mobile Actions */}
            <div className="xl:hidden flex items-center gap-2">
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-xl border transition-all ${
                  isDark
                    ? 'bg-slate-800 text-amber-300 border-amber-400/40'
                    : 'bg-slate-100 text-indigo-600 border-slate-200'
                }`}
                title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                aria-label="Toggle Theme"
              >
                {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-600" />}
              </button>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] text-white p-2 rounded-xl text-xs font-semibold flex items-center gap-1"
                title={`WhatsApp: ${WHATSAPP_NUMBER}`}
              >
                <WhatsAppIcon className="w-4 h-4 text-white" />
                <span className="text-[11px] font-mono font-bold hidden sm:inline">{WHATSAPP_NUMBER}</span>
              </a>

              <Link
                to="/contact"
                className="md:hidden bg-blue-600 text-white p-2 rounded-xl text-xs font-semibold"
              >
                Book Call
              </Link>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-2.5 rounded-xl border ${
                  isDark
                    ? 'bg-slate-800 border-slate-700 text-white'
                    : 'bg-slate-100 border-slate-200 text-slate-700'
                }`}
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Drawer Menu */}
        {mobileMenuOpen && (
          <div
            className={`xl:hidden px-6 py-5 space-y-2 border-b shadow-2xl animate-in slide-in-from-top-2 ${
              isDark
                ? 'bg-[#0f172a] border-slate-800 text-white'
                : 'bg-white border-slate-200 text-slate-900'
            }`}
          >
            <div className={`flex items-center justify-between px-3 pb-2 border-b mb-2 ${
              isDark ? 'border-slate-800' : 'border-slate-100'
            }`}>
              <span className={`text-[10px] font-mono uppercase ${
                isDark ? 'text-slate-400' : 'text-slate-500'
              }`}>
                Theme &amp; Route Selection
              </span>
              <button
                onClick={toggleTheme}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold border ${
                  isDark
                    ? 'bg-slate-800 text-amber-300 border-amber-400/30'
                    : 'bg-slate-100 text-slate-800 border-slate-200'
                }`}
              >
                {isDark ? (
                  <>
                    <Sun className="w-3.5 h-3.5 text-amber-400" />
                    <span>Switch to Light</span>
                  </>
                ) : (
                  <>
                    <Moon className="w-3.5 h-3.5 text-indigo-600" />
                    <span>Switch to Dark</span>
                  </>
                )}
              </button>
            </div>

            {navItems.map(item => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block w-full text-left py-2.5 px-3 rounded-xl text-sm font-semibold transition-all ${
                  isPathActive(item.path)
                    ? isDark
                      ? 'bg-blue-900/40 text-blue-300 font-bold border border-blue-700/60'
                      : 'bg-blue-50 text-blue-700 font-bold border border-blue-200'
                    : isDark
                      ? 'text-slate-200 hover:bg-slate-800 hover:text-white'
                      : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span>{item.label}</span>
                  <span className={`text-[10px] font-mono ${isDark ? 'text-slate-400' : 'text-slate-400'}`}>
                    {item.path}
                  </span>
                </div>
              </Link>
            ))}

            <div className={`pt-3 border-t flex flex-col gap-2.5 ${isDark ? 'border-slate-800' : 'border-slate-200'}`}>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white text-center py-3 rounded-xl font-bold text-sm shadow-md shadow-emerald-500/20 flex items-center justify-center gap-2"
              >
                <WhatsAppIcon className="w-4 h-4 text-white" />
                <span>Chat on WhatsApp: {WHATSAPP_NUMBER}</span>
              </a>

              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full bg-blue-600 text-white text-center py-3 rounded-xl font-semibold text-sm shadow-md shadow-blue-500/20"
              >
                Schedule Strategy Session
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
