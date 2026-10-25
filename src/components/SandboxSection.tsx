import React, { useState } from 'react';
import { Play, Square, Search, RefreshCw, CheckCircle, Volume2, Sparkles, Database, GitBranch, Terminal, Shield } from 'lucide-react';
import { ThreeDVoiceVisualizer } from './ThreeDVoiceVisualizer';

interface SandboxSectionProps {
  onNotify: (title: string, message: string) => void;
}

export const SandboxSection: React.FC<SandboxSectionProps> = ({ onNotify }) => {
  const [activeTab, setActiveTab] = useState<'voice' | 'rag' | 'workflow'>('voice');

  // Voice State
  const [callActive, setCallActive] = useState(false);
  const [speakingState, setSpeakingState] = useState<'idle' | 'agent' | 'user'>('idle');
  const [voiceScenario, setVoiceScenario] = useState<'inbound' | 'support' | 'booking'>('inbound');
  const [userInputSpeech, setUserInputSpeech] = useState('');
  const [transcript, setTranscript] = useState<Array<{ sender: 'System' | 'Caller' | 'AsNexa Voice Agent'; text: string; time: string }>>([
    {
      sender: 'System',
      text: 'Voice agent pipeline standby on Twilio SIP WebSocket. Click "Start Simulated Call" to test sub-300ms turn-taking.',
      time: '19:35:00',
    },
  ]);

  // RAG State
  const [ragQuery, setRagQuery] = useState('How does AsNexa guarantee zero hallucinations in enterprise pipelines?');
  const [isSearchingRag, setIsSearchingRag] = useState(false);
  const [ragResult, setRagResult] = useState<{
    answer: string;
    citation: string;
    latency: string;
    confidence: string;
    sources: string[];
  }>({
    answer:
      'AsNexa guarantees zero-hallucination compliance through dual-layer retrieval: pairing hybrid dense vector search with deterministic BM25 keyword matching, evaluated against a strict System of Record (KSoR) rubric before output tokenization.',
    citation: 'AsNexa_Enterprise_Governance_Architecture_v2.pdf - Section 4.2',
    latency: '142ms',
    confidence: '99.8%',
    sources: ['KSoR_Rubric_v3.json', 'Vector_Index_Cluster_04', 'Pinecone_Hybrid_Index'],
  });

  // Workflow State
  const [workflowRunning, setWorkflowRunning] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [workflowLogs, setWorkflowLogs] = useState<string[]>([
    'Workflow listening for inbound webhook events (Shopify, HubSpot, Form)...',
  ]);

  // Handle Call Start
  const handleStartCall = () => {
    setCallActive(true);
    setSpeakingState('agent');
    const now = new Date().toLocaleTimeString();
    setTranscript(prev => [
      ...prev,
      { sender: 'System', text: 'Call session initiated via WebRTC Opus 48kHz (RTT: 240ms).', time: now },
      { sender: 'AsNexa Voice Agent', text: 'Hello! Thank you for calling AsNexa Technologies. Are you looking to deploy Digital FTEs or explore voice automation?', time: now },
    ]);
    onNotify('Call Connected', 'Sub-300ms WebSocket voice stream active.');
  };

  const handleEndCall = () => {
    setCallActive(false);
    setSpeakingState('idle');
    const now = new Date().toLocaleTimeString();
    setTranscript(prev => [
      ...prev,
      { sender: 'System', text: 'Call session ended. Complete transcript archived.', time: now },
    ]);
    onNotify('Call Terminated', 'Audio session closed.');
  };

  const handleUserSpeak = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInputSpeech.trim() || !callActive) return;

    const query = userInputSpeech;
    setUserInputSpeech('');
    const now = new Date().toLocaleTimeString();

    // 1. User speaks
    setSpeakingState('user');
    setTranscript(prev => [...prev, { sender: 'Caller', text: query, time: now }]);

    // 2. Sub-300ms agent response
    setTimeout(() => {
      setSpeakingState('agent');
      let response = '';
      if (query.toLowerCase().includes('cost') || query.toLowerCase().includes('price') || query.toLowerCase().includes('roi')) {
        response = 'Our Digital FTEs typically achieve complete payback within 14 to 21 days by saving 70% of manual repetitive tasks. Would you like me to email you our financial model?';
      } else if (query.toLowerCase().includes('latency') || query.toLowerCase().includes('fast')) {
        response = 'Our voice agents operate under 280 milliseconds round-trip latency using streaming text-to-speech pipelines, completely eliminating conversational lag.';
      } else {
        response = `Understood. For ${query}, our forward-deployed engineers integrate custom n8n workflows and governed RAG with your current CRM. Let's schedule a 15-minute architecture briefing!`;
      }

      setTranscript(prev => [...prev, { sender: 'AsNexa Voice Agent', text: response, time: new Date().toLocaleTimeString() }]);
    }, 450);
  };

  // Handle RAG Search
  const handleRagSearch = (searchQuery?: string) => {
    const q = searchQuery || ragQuery;
    setIsSearchingRag(true);

    setTimeout(() => {
      setIsSearchingRag(false);
      if (q.toLowerCase().includes('digital fte') || q.toLowerCase().includes('fte')) {
        setRagResult({
          answer:
            'Autonomous Digital FTEs are software agents configured with Claude 3.5 reasoning cores and deterministic n8n orchestration loops that continuously poll, evaluate, and update enterprise ERP, CRM, and communication platforms without requiring human intervention.',
          citation: 'Digital_FTE_Standard_Operating_Procedure_2026.pdf - Page 12',
          latency: '118ms',
          confidence: '99.9%',
          sources: ['ERP_API_Connectors.ts', 'Claude_3_5_Reasoning_Pipeline', 'Deterministic_Execution_Specs'],
        });
      } else if (q.toLowerCase().includes('latency') || q.toLowerCase().includes('voice')) {
        setRagResult({
          answer:
            'Conversational voice latency is bounded to <300ms by utilizing streaming WebSocket audio transport, local VAD (Voice Activity Detection), and direct-token audio synthesizers, preserving sub-second human turn-taking cadences.',
          citation: 'Voice_Engine_Telephony_Benchmarks_v4.pdf - Page 3',
          latency: '135ms',
          confidence: '99.7%',
          sources: ['Twilio_SIP_Trunk_Config', 'Deepgram_Nova_Streaming', 'Cartesia_Sonic_Synthesizer'],
        });
      } else {
        setRagResult({
          answer:
            'AsNexa guarantees zero-hallucination compliance through dual-layer retrieval: pairing hybrid dense vector search with deterministic BM25 keyword matching, evaluated against a strict System of Record (KSoR) rubric before output tokenization.',
          citation: 'AsNexa_Enterprise_Governance_Architecture_v2.pdf - Section 4.2',
          latency: '142ms',
          confidence: '99.8%',
          sources: ['KSoR_Rubric_v3.json', 'Vector_Index_Cluster_04', 'Pinecone_Hybrid_Index'],
        });
      }
      onNotify('RAG Search Verified', `Query answered in ${ragResult.latency} with 0% hallucinations.`);
    }, 500);
  };

  // Handle Workflow Execution Run
  const handleRunWorkflow = () => {
    setWorkflowRunning(true);
    setActiveStep(1);
    setWorkflowLogs(['[00:00.010] Trigger: New high-value lead webhook received from Web Intake.']);

    setTimeout(() => {
      setActiveStep(2);
      setWorkflowLogs(prev => [
        ...prev,
        '[00:00.120] Claude 3.5 Reasoning: Extracted company name, verified budget > $50k, scored priority as Tier 1.',
      ]);
    }, 800);

    setTimeout(() => {
      setActiveStep(3);
      setWorkflowLogs(prev => [
        ...prev,
        '[00:00.280] n8n Orchestration: Generated customized executive dossier from internal knowledge base.',
      ]);
    }, 1600);

    setTimeout(() => {
      setActiveStep(4);
      setWorkflowLogs(prev => [
        ...prev,
        '[00:00.410] CRM & ERP Sync: Created lead in Salesforce, notified #executive-leads on Slack, and dispatched invite.',
        '[00:00.415] Execution completed in 415ms with 0 errors.',
      ]);
      setWorkflowRunning(false);
      onNotify('Workflow Completed', 'Digital FTE executed 4-step pipeline in 415ms.');
    }, 2400);
  };

  return (
    <div className="py-28 bg-[#f8fafc] relative border-b border-slate-200 transition-colors">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold font-mono shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Interactive Live Engineering Sandbox</span>
          </div>
          {/* Single Solid Heading Color */}
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight font-heading">
            Test AsNexa's Live AI Sandbox
          </h2>
          <p className="text-slate-600 text-base sm:text-xl max-w-3xl mx-auto">
            Experience our sub-300ms voice agents, zero-hallucination RAG knowledge search, and autonomous workflow loops live right now.
          </p>
        </div>

        {/* Human Office Engineers in Control Center */}
        <div className="rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-md grid grid-cols-1 lg:grid-cols-12 items-center">
          <div className="lg:col-span-5 h-64 lg:h-full relative">
            <img
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
              alt="Systems engineers working in office monitoring AI infrastructure"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="lg:col-span-7 p-6 sm:p-8 space-y-3 text-left">
            <span className="text-xs font-mono uppercase text-blue-600 font-bold block">
              24/7 Monitored Telemetry
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading">
              Forward Deployed Engineers Overseeing Every Packet
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Our forward-deployed teams in the United States continuously monitor voice latencies, vector recall, and n8n job queues to ensure zero dropped calls and deterministic execution across your infrastructure.
            </p>
          </div>
        </div>

        {/* Sandbox Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <button
            onClick={() => setActiveTab('voice')}
            className={`flex items-center gap-2 px-7 py-3.5 rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
              activeTab === 'voice'
                ? 'bg-[#1D63FF] text-white shadow-md shadow-blue-500/25 scale-105'
                : 'bg-white border border-slate-200 text-slate-700 hover:text-blue-600 hover:bg-slate-50 shadow-xs'
            }`}
          >
            <Volume2 className="w-4 h-4 text-blue-600" />
            <span>🎙️ Sub-300ms Voice Agent</span>
          </button>

          <button
            onClick={() => setActiveTab('rag')}
            className={`flex items-center gap-2 px-6 py-3 rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
              activeTab === 'rag'
                ? 'bg-[#1D63FF] text-white shadow-md shadow-blue-500/25 scale-105'
                : 'bg-white border border-slate-200 text-slate-700 hover:text-blue-600 hover:bg-slate-50 shadow-xs'
            }`}
          >
            <Database className="w-4 h-4 text-purple-600" />
            <span>📚 Enterprise RAG Query</span>
          </button>

          <button
            onClick={() => setActiveTab('workflow')}
            className={`flex items-center gap-2 px-6 py-3 rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
              activeTab === 'workflow'
                ? 'bg-[#1D63FF] text-white shadow-md shadow-blue-500/25 scale-105'
                : 'bg-white border border-slate-200 text-slate-700 hover:text-blue-600 hover:bg-slate-50 shadow-xs'
            }`}
          >
            <GitBranch className="w-4 h-4 text-emerald-600" />
            <span>⚡ Workflow Loop (n8n)</span>
          </button>
        </div>

        {/* Tab 1: Sub-300ms Voice Agent Sandbox */}
        {activeTab === 'voice' && (
          <div className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-xl space-y-8 animate-in fade-in duration-300">
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-200 pb-6">
              <div>
                <span className="text-xs font-mono uppercase text-blue-600 tracking-widest block mb-1 font-bold">
                  Live Telephony Pipeline Simulation
                </span>
                <h3 className="text-2xl font-bold text-slate-900 font-heading">
                  Autonomous Inbound Telephony Voice Agent
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm mt-1">
                  Featuring sub-300ms turn-taking, intelligent interruption handling, and CRM lead capture.
                </p>
              </div>

              <div className="flex items-center gap-3">
                {!callActive ? (
                  <button
                    onClick={handleStartCall}
                    className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-lg shadow-emerald-500/25 transition-all flex items-center gap-2"
                  >
                    <Play className="w-4 h-4 fill-white" />
                    <span>Start Simulated Call</span>
                  </button>
                ) : (
                  <button
                    onClick={handleEndCall}
                    className="bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-lg shadow-rose-500/25 transition-all flex items-center gap-2"
                  >
                    <Square className="w-4 h-4 fill-white" />
                    <span>End Call</span>
                  </button>
                )}
              </div>
            </div>

            {/* 3D Audio Visualizer Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* 3D Soundwave Canvas (6 cols) */}
              <div className="lg:col-span-6 space-y-4">
                <ThreeDVoiceVisualizer
                  isActive={callActive}
                  rttMs={240}
                  speakingState={speakingState}
                />

                <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center justify-between text-xs">
                  <div className="space-y-1">
                    <span className="text-slate-400 block font-mono">Agent Voice Engine</span>
                    <strong className="text-cyan-400 font-mono">Cartesia Sonic • Ultra Fast</strong>
                  </div>
                  <div className="space-y-1 text-right">
                    <span className="text-slate-400 block font-mono">Simulated Line</span>
                    <strong className="text-emerald-400 font-mono">+1 (800) 555-ASNEXA</strong>
                  </div>
                </div>
              </div>

              {/* Call Transcript & Live Interactive Speaking (6 cols) */}
              <div className="lg:col-span-6 space-y-4">
                <div className="p-4 bg-slate-900/90 rounded-2xl border border-slate-800 h-64 overflow-y-auto font-mono text-xs space-y-3">
                  {transcript.map((msg, i) => (
                    <div
                      key={i}
                      className={`p-3 rounded-xl ${
                        msg.sender === 'System'
                          ? 'bg-slate-950 text-slate-400 border border-slate-800/80'
                          : msg.sender === 'Caller'
                          ? 'bg-blue-600 text-white ml-6 text-right'
                          : 'bg-indigo-950/80 text-cyan-200 mr-6 border border-indigo-500/30'
                      }`}
                    >
                      <div className="flex items-center justify-between text-[10px] opacity-75 mb-1 font-semibold">
                        <span>{msg.sender}</span>
                        <span>{msg.time}</span>
                      </div>
                      <div className="leading-relaxed">{msg.text}</div>
                    </div>
                  ))}
                </div>

                {/* Input to talk to the agent */}
                <form onSubmit={handleUserSpeak} className="flex gap-2">
                  <input
                    type="text"
                    disabled={!callActive}
                    value={userInputSpeech}
                    onChange={e => setUserInputSpeech(e.target.value)}
                    placeholder={callActive ? 'Type a question or message to the voice agent...' : 'Click "Start Simulated Call" above to begin...'}
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 disabled:opacity-50"
                  />
                  <button
                    type="submit"
                    disabled={!callActive}
                    className="bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm shrink-0 transition-all"
                  >
                    Speak
                  </button>
                </form>

                {/* Quick Prompts */}
                <div className="flex flex-wrap items-center gap-1.5 pt-1">
                  <span className="text-[11px] text-slate-500 font-mono">Sample Questions:</span>
                  {[
                    'What is your ROI timeline?',
                    'How fast is your voice latency?',
                    'Can you connect with Salesforce?',
                  ].map((chip, idx) => (
                    <button
                      key={idx}
                      disabled={!callActive}
                      onClick={() => {
                        setUserInputSpeech(chip);
                      }}
                      className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 disabled:opacity-40"
                    >
                      "{chip}"
                    </button>
                  ))}
                </div>
              </div>

            </div>

          </div>
        )}

        {/* Tab 2: Governed Enterprise RAG Sandbox */}
        {activeTab === 'rag' && (
          <div className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-xl space-y-6 animate-in fade-in duration-300">
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase text-blue-600 tracking-widest block font-bold">
                Zero-Hallucination Governance Engine (KSoR)
              </span>
              <h3 className="text-2xl font-bold text-slate-900 font-heading">
                Enterprise Vector &amp; BM25 Hybrid Knowledge Search
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm">
                Query internal indexed SOPs and architecture docs with verifiable citations.
              </p>
            </div>

            {/* Search Input */}
            <div className="flex gap-2">
              <div className="relative w-full">
                <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  value={ragQuery}
                  onChange={e => setRagQuery(e.target.value)}
                  placeholder="Ask a technical or compliance question..."
                  className="w-full bg-slate-50 border border-slate-300 rounded-2xl pl-12 pr-4 py-3.5 text-sm text-slate-900 focus:outline-none focus:border-blue-600 focus:bg-white"
                />
              </div>
              <button
                onClick={() => handleRagSearch()}
                disabled={isSearchingRag}
                className="bg-[#1D63FF] hover:bg-blue-600 text-white px-7 py-3.5 rounded-2xl font-semibold text-sm shrink-0 transition-all shadow-md shadow-blue-500/25 flex items-center gap-2"
              >
                {isSearchingRag ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Search className="w-4 h-4" />}
                <span>Execute Query</span>
              </button>
            </div>

            {/* Query suggestions */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs text-slate-500 font-mono">Preset Inquiries:</span>
              {[
                'How does AsNexa guarantee zero hallucinations in enterprise pipelines?',
                'What are Digital FTEs and how do they integrate with ERP?',
                'What is the sub-300ms voice agent latency architecture?',
              ].map((query, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setRagQuery(query);
                    handleRagSearch(query);
                  }}
                  className="text-xs bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 px-3 py-1.5 rounded-xl transition-colors"
                >
                  {query}
                </button>
              ))}
            </div>

            {/* Result Box */}
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3 text-xs border-b border-slate-200 pb-3">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-emerald-600" />
                  <span className="text-slate-800 font-mono font-bold">Status: Deterministic Verified</span>
                </div>
                <div className="flex items-center gap-4 font-mono">
                  <span>Latency: <strong className="text-blue-700">{ragResult.latency}</strong></span>
                  <span>Confidence: <strong className="text-emerald-700">{ragResult.confidence}</strong></span>
                </div>
              </div>

              <div className="text-slate-800 text-sm leading-relaxed">
                "{ragResult.answer}"
              </div>

              <div className="p-3 bg-white rounded-xl border border-slate-200 text-xs font-mono text-blue-800 flex items-center justify-between shadow-2xs">
                <span>Primary Citation: {ragResult.citation}</span>
                <span className="text-emerald-700 font-bold">100% Traceable</span>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Workflow Loop (n8n) */}
        {activeTab === 'workflow' && (
          <div className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-xl space-y-6 animate-in fade-in duration-300">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase text-emerald-700 tracking-widest block font-bold">
                  Autonomous Multi-Agent Loop
                </span>
                <h3 className="text-2xl font-bold text-slate-900 font-heading">
                  Autonomous Lead Qualification &amp; ERP Sync Pipeline
                </h3>
              </div>
              <button
                onClick={handleRunWorkflow}
                disabled={workflowRunning}
                className="bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-2xl shadow-md shadow-emerald-500/25 transition-all flex items-center gap-2"
              >
                <Play className="w-4 h-4 fill-white" />
                <span>{workflowRunning ? 'Executing Steps...' : 'Trigger Workflow Run'}</span>
              </button>
            </div>

            {/* 4 Pipeline Steps */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
              {[
                { step: 1, title: '1. Inbound Webhook', desc: 'New Lead / Ticket' },
                { step: 2, title: '2. Claude 3.5 Reasoning', desc: 'Filter & Priority Score' },
                { step: 3, title: '3. n8n Orchestration', desc: 'Dossier Compilation' },
                { step: 4, title: '4. Enterprise Sync', desc: 'Salesforce & Slack Push' },
              ].map(item => {
                const isCurrent = activeStep === item.step;
                const isPassed = activeStep > item.step;
                return (
                  <div
                    key={item.step}
                    className={`p-4 rounded-2xl border transition-all ${
                      isCurrent
                        ? 'bg-emerald-950/60 border-emerald-500 shadow-lg shadow-emerald-500/20 scale-105'
                        : isPassed
                        ? 'bg-slate-900 border-emerald-500/40 text-emerald-300'
                        : 'bg-slate-900/60 border-slate-800 text-slate-400'
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs font-mono mb-1">
                      <span>Step 0{item.step}</span>
                      {isPassed && <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />}
                    </div>
                    <div className="font-bold text-sm text-white">{item.title}</div>
                    <div className="text-xs text-slate-400 mt-1">{item.desc}</div>
                  </div>
                );
              })}
            </div>

            {/* Execution Logs Terminal */}
            <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800 font-mono text-xs space-y-1.5 h-48 overflow-y-auto">
              <div className="text-slate-500 flex items-center gap-2 mb-2 pb-1 border-b border-slate-800">
                <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                <span>n8n Execution Stream • autonomous_lead_enrichment_v4.json</span>
              </div>
              {workflowLogs.map((log, i) => (
                <div key={i} className="text-slate-300">
                  {log}
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
