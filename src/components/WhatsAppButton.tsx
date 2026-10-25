import React from 'react';

export const WHATSAPP_NUMBER = '03352204606';
export const WHATSAPP_INTL = '+92 335 2204606';
export const WHATSAPP_URL = 'https://wa.me/923352204606?text=Hello%20AsNexa%20Technologies%2C%20I%20am%20interested%20in%20your%20AI%20solutions%20and%20Digital%20FTEs.';

export const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.9C17.18 3.03 14.69 2 12.04 2ZM12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.68 12.04 3.68C14.25 3.68 16.31 4.54 17.87 6.11C19.43 7.67 20.28 9.74 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15ZM16.57 14.37C16.32 14.24 15.1 13.64 14.87 13.56C14.65 13.47 14.48 13.43 14.32 13.68C14.15 13.92 13.68 14.48 13.54 14.64C13.39 14.81 13.25 14.83 13 14.7C12.75 14.58 11.95 14.32 11 13.47C10.26 12.81 9.76 11.99 9.61 11.75C9.47 11.5 9.59 11.37 9.72 11.24C9.83 11.13 9.97 10.95 10.1 10.8C10.22 10.65 10.26 10.55 10.34 10.38C10.43 10.22 10.39 10.07 10.32 9.95C10.26 9.82 9.77 8.62 9.57 8.12C9.37 7.64 9.17 7.71 9.02 7.7C8.88 7.69 8.71 7.69 8.55 7.69C8.38 7.69 8.11 7.75 7.88 8C7.66 8.25 7.03 8.84 7.03 10.04C7.03 11.24 7.91 12.4 8.03 12.56C8.15 12.73 9.75 15.19 12.21 16.25C12.8 16.5 13.25 16.65 13.61 16.77C14.2 16.96 14.74 16.93 15.17 16.87C15.64 16.8 16.62 16.28 16.83 15.69C17.03 15.1 17.03 14.6 16.97 14.5C16.91 14.4 16.76 14.34 16.51 14.21L16.57 14.37Z" />
  </svg>
);

export const FloatingWhatsAppButton: React.FC = () => {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp: 03352204606"
      className="fixed bottom-6 left-6 z-50 flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white px-4 py-3 rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.4)] transition-all duration-300 hover:scale-105 group border-2 border-emerald-300/40"
    >
      <div className="relative">
        <WhatsAppIcon className="w-5 h-5 text-white" />
        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-white rounded-full animate-ping" />
      </div>
      <div className="flex flex-col text-left">
        <span className="text-[10px] uppercase tracking-wider font-extrabold leading-none text-emerald-950">
          WhatsApp Direct
        </span>
        <span className="text-xs font-mono font-bold leading-tight text-white">
          {WHATSAPP_NUMBER}
        </span>
      </div>
    </a>
  );
};
