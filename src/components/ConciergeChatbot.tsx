import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Bot, X, Send, Sparkles, ArrowRight, MessageSquare, PhoneCall, TrendingUp } from 'lucide-react';
import { WHATSAPP_NUMBER, WHATSAPP_URL, WhatsAppIcon } from './WhatsAppButton';

interface ConciergeChatbotProps {}

interface ChatMessage {
  id: string;
  sender: 'ai' | 'user';
  text: string;
  timestamp: string;
  action?: { label: string; url: string };
}

export const ConciergeChatbot: React.FC<ConciergeChatbotProps> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [unreadCount, setUnreadCount] = useState(1);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      sender: 'ai',
      text: "👋 Hello! I am the AsNexa AI Concierge. How can I help you scale operations? You can ask about our Digital FTEs, test our sub-300ms voice agents, or calculate your team's ROI.",
      timestamp: 'Just now',
    },
  ]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setUnreadCount(0);
    }
  }, [isOpen, messages]);

  const handleSendMessage = (textToSend?: string) => {
    const text = (textToSend || inputText).trim();
    if (!text) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages(prev => [...prev, userMsg]);
    if (!textToSend) setInputText('');
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      let replyText = '';
      let action: { label: string; url: string } | undefined;

      const lower = text.toLowerCase();
      if (lower.includes('whatsapp') || lower.includes('phone') || lower.includes('number') || lower.includes('cell')) {
        replyText = `You can chat with our engineering leads directly on WhatsApp at ${WHATSAPP_NUMBER} (+92 335 2204606) for instant technical support or demo requests!`;
        action = { label: `Open WhatsApp (${WHATSAPP_NUMBER})`, url: WHATSAPP_URL };
      } else if (lower.includes('roi') || lower.includes('cost') || lower.includes('calculator') || lower.includes('saving')) {
        replyText =
          'Our Digital FTEs deliver an average 70% operational cost savings with payback in just 17 days. Open our interactive ROI calculator at /calculator:';
        action = { label: 'Go to /calculator', url: '/calculator' };
      } else if (lower.includes('voice') || lower.includes('call') || lower.includes('latency')) {
        replyText =
          'AsNexa voice agents operate under 280ms round-trip latency (RTT) with real-time barge-in and human turn-taking cadences. Test the live stream at /sandbox:';
        action = { label: 'Go to /sandbox', url: '/sandbox' };
      } else if (lower.includes('book') || lower.includes('contact') || lower.includes('meeting') || lower.includes('consult')) {
        replyText =
          'You can book a free strategy session directly with our Forward Deployed Engineers at /contact:';
        action = { label: 'Go to /contact', url: '/contact' };
      } else if (lower.includes('3d') || lower.includes('architecture') || lower.includes('model')) {
        replyText =
          'We have interactive 3D WebGL models of our Digital FTE avatar, Voice matrix, and Governed RAG lattice at /3d-architecture:';
        action = { label: 'Go to /3d-architecture', url: '/3d-architecture' };
      } else {
        replyText =
          'AsNexa architects autonomous AI systems for enterprises: 24/7 Digital FTEs, ultra-low latency voice agents, and governed zero-hallucination RAG pipelines. Check our services at /services:';
        action = { label: 'Go to /services', url: '/services' };
      }

      const aiMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: replyText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        action,
      };

      setMessages(prev => [...prev, aiMsg]);
    }, 600);
  };

  return (
    <>
      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-3">
        {/* Scroll to top */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Scroll to top"
          className="w-10 h-10 rounded-full bg-slate-900 border border-slate-700 text-slate-300 shadow-xl hover:bg-slate-800 hover:text-white flex items-center justify-center font-bold text-sm transition-transform hover:scale-105"
        >
          ↑
        </button>

        {/* Robot Concierge Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Open AI Assistant"
          className="relative w-15 h-15 rounded-full bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 text-white shadow-[0_0_25px_rgba(99,102,241,0.5)] hover:scale-110 active:scale-95 transition-transform flex items-center justify-center text-2xl group border-2 border-indigo-400/40"
        >
          <Bot className="w-7 h-7 text-white animate-bounce" />
          {unreadCount > 0 && !isOpen && (
            <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-rose-500 text-white text-[10px] font-bold flex items-center justify-center shadow-md animate-pulse">
              {unreadCount}
            </span>
          )}
        </button>
      </div>

      {/* Drawer */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-84 sm:w-96 bg-slate-950 border border-indigo-500/40 rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col animate-in fade-in slide-in-from-bottom-5 duration-300">
          
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-slate-900 to-indigo-950 text-white border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center space-x-2.5">
              <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </div>
              <div>
                <h4 className="font-heading font-bold text-white text-sm leading-none" style={{ color: '#ffffff' }}>
                  AsNexa AI Concierge
                </h4>
                <span className="text-[10px] font-mono text-cyan-400">Autonomous Assistant • Online</span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white p-1 rounded-lg"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Prompts Bar */}
          <div className="p-2 bg-slate-900/80 border-b border-slate-800/80 flex items-center gap-1.5 overflow-x-auto text-[11px] font-mono no-scrollbar">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-2.5 py-1 rounded-lg bg-emerald-950/80 text-emerald-300 hover:text-white border border-emerald-500/40 whitespace-nowrap flex items-center gap-1"
            >
              <WhatsAppIcon className="w-3 h-3 text-emerald-400" />
              <span>WhatsApp: {WHATSAPP_NUMBER}</span>
            </a>
            <button
              onClick={() => handleSendMessage('Calculate my ROI')}
              className="px-2.5 py-1 rounded-lg bg-slate-800 text-slate-300 hover:text-white whitespace-nowrap"
            >
              💰 /calculator
            </button>
            <button
              onClick={() => handleSendMessage('Test voice agent')}
              className="px-2.5 py-1 rounded-lg bg-slate-800 text-slate-300 hover:text-white whitespace-nowrap"
            >
              🎙️ /sandbox
            </button>
            <button
              onClick={() => handleSendMessage('Book consultation')}
              className="px-2.5 py-1 rounded-lg bg-slate-800 text-slate-300 hover:text-white whitespace-nowrap"
            >
              📅 /contact
            </button>
          </div>

          {/* Message List */}
          <div className="p-4 space-y-3 h-72 overflow-y-auto text-xs bg-slate-950 font-sans">
            {messages.map(msg => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`p-3 rounded-2xl max-w-[85%] leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-blue-600 text-white rounded-br-none shadow-md'
                      : 'bg-slate-900 text-slate-200 border border-slate-800 rounded-bl-none'
                  }`}
                >
                  <p>{msg.text}</p>
                  {msg.action && (
                    <button
                      onClick={() => {
                        if (msg.action!.url.startsWith('http')) {
                          window.open(msg.action!.url, '_blank', 'noopener,noreferrer');
                        } else {
                          navigate(msg.action!.url);
                        }
                        setIsOpen(false);
                      }}
                      className="mt-2.5 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-[11px] shadow transition-all"
                    >
                      <span>{msg.action.label}</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  )}
                </div>
                <span className="text-[9px] text-slate-500 font-mono mt-1 px-1">
                  {msg.timestamp}
                </span>
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-1.5 p-3 rounded-2xl bg-slate-900 border border-slate-800 w-20">
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-bounce"></span>
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-bounce [animation-delay:0.2s]"></span>
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-bounce [animation-delay:0.4s]"></span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Form */}
          <form
            onSubmit={e => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="p-3 bg-slate-900 border-t border-slate-800 flex items-center gap-2"
          >
            <input
              type="text"
              value={inputText}
              onChange={e => setInputText(e.target.value)}
              placeholder="Ask anything about AsNexa AI..."
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-500 text-white p-2.5 rounded-xl text-xs font-semibold shrink-0 shadow"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

        </div>
      )}
    </>
  );
};
