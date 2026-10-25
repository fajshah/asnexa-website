export interface ServiceDetail {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  metric: string;
  metricLabel: string;
  category: string;
  overview: string;
  executiveSummary: string;
  architectureDiagramSteps: { step: string; title: string; desc: string }[];
  keyCapabilities: { title: string; desc: string }[];
  technicalSpecs: { label: string; value: string }[];
  caseStudy: {
    client: string;
    industry: string;
    challenge: string;
    solution: string;
    results: string[];
  };
  supportedIntegrations: string[];
  faq: { q: string; a: string }[];
}

export const SERVICES_DATA: Record<string, ServiceDetail> = {
  'digital-fte': {
    id: 'digital-fte',
    slug: 'digital-fte',
    title: 'Autonomous Digital FTEs',
    tagline: '24/7 Virtual Employees with Deterministic Precision',
    metric: '99.4%',
    metricLabel: 'Deterministic Execution Accuracy',
    category: 'Autonomous Operations',
    overview:
      'Autonomous Digital FTEs (Full-Time Equivalents) are persistent virtual employees engineered with Claude 3.5 reasoning cores, LangGraph memory states, and deterministic n8n orchestration loops. They operate continuously across ERP, CRM, Slack, and email channels without human fatigue.',
    executiveSummary:
      'Deploying an AsNexa Digital FTE eliminates 70% of manual repetitive back-office tasks, freeing human teams for strategic high-leverage initiatives while maintaining rigorous SLA compliance and auditability.',
    architectureDiagramSteps: [
      { step: '01', title: 'Multi-Modal Ingestion', desc: 'Monitors inbound emails, tickets, webhooks, and ERP feeds in real time.' },
      { step: '02', title: 'Cognitive Reasoning', desc: 'Claude 3.5 Sonnet parses unstructured inputs and evaluates decision logic.' },
      { step: '03', title: 'Deterministic Guardrails', desc: 'Assertion policies verify business constraints, budget limits, and RBAC rules.' },
      { step: '04', title: 'System-of-Record Commits', desc: 'Writes updates to Salesforce, HubSpot, SAP, NetSuite, and notifies Slack.' },
    ],
    keyCapabilities: [
      {
        title: 'Multi-Step Autonomous Workflow Decomposition',
        desc: 'Breaks down complex enterprise requests into sequential, atomic actions with rollback safety.',
      },
      {
        title: 'Continuous ERP & CRM Reconciliation',
        desc: 'Validates line items between purchase orders, invoices, and payment receipts with zero discrepancies.',
      },
      {
        title: 'Intelligent Email & Ticket Resolution',
        desc: 'Drafts and dispatches context-aware communications evaluated against brand tone and legal playbooks.',
      },
      {
        title: 'Self-Healing Execution Loops',
        desc: 'Automatically re-tries transient API failures with exponential backoff and alerts on critical blockers.',
      },
    ],
    technicalSpecs: [
      { label: 'Reasoning Engine', value: 'Claude 3.5 Sonnet / GPT-4o' },
      { label: 'Orchestration Runtime', value: 'n8n Enterprise High-Availability' },
      { label: 'State Storage', value: 'PostgreSQL & Redis BullMQ' },
      { label: 'Average Decision Latency', value: '180 milliseconds' },
      { label: 'Compliance Standard', value: 'SOC2 Type II, HIPAA, GDPR' },
      { label: 'Deployment Model', value: 'Dedicated VPC or On-Premise' },
    ],
    caseStudy: {
      client: 'Global Logistics Provider',
      industry: 'Freight & Supply Chain',
      challenge: 'Manual entry of 2,400 daily bills of lading resulted in costly billing errors and 48-hour shipment clearance delays.',
      solution: 'Deployed 3 Digital FTEs to parse documentation, verify tariff codes, and sync shipping databases automatically.',
      results: [
        'Processing time slashed from 48 hours to under 3 minutes',
        '$340,000 in direct annual administrative costs eliminated',
        'Error rate plummeted from 6.8% to 0.02%',
      ],
    },
    supportedIntegrations: ['Salesforce', 'HubSpot', 'NetSuite', 'SAP', 'Zendesk', 'Slack', 'Shopify', 'Jira'],
    faq: [
      {
        q: 'How does a Digital FTE differ from simple Zapier automation?',
        a: 'Zapier requires brittle if-this-then-that triggers. A Digital FTE understands unstructured documents, evaluates nuanced edge cases, and self-corrects errors like a human colleague.',
      },
      {
        q: 'Can human staff review decisions before they are applied?',
        a: 'Yes, our "Human-in-the-Loop" threshold mechanism can pause execution and prompt a manager on Slack for approval whenever confidence is below 98%.',
      },
    ],
  },

  'voice-agents': {
    id: 'voice-agents',
    slug: 'voice-agents',
    title: 'Sub-300ms Conversational Voice Agents',
    tagline: 'Ultra-Low Latency Telephony for Lead Capture & Support',
    metric: '<280ms',
    metricLabel: 'Round-Trip Audio Latency (RTT)',
    category: 'Telephony AI',
    overview:
      'Our conversational voice agents achieve human-grade telephony turn-taking by eliminating intermediate audio file buffering. Utilizing bidirectional WebRTC and streaming neural token synthesis, AsNexa voice agents qualify leads, triage patient calls, and book appointments without awkward robotic pauses.',
    executiveSummary:
      'Never miss a revenue opportunity. AsNexa voice agents handle concurrent phone calls 24/7 with zero hold times, instant CRM capture, and sub-second natural interruption handling.',
    architectureDiagramSteps: [
      { step: '01', title: 'SIP Telephony Streaming', desc: 'Direct Twilio/SIP trunking transports Opus 48kHz audio via WebSockets.' },
      { step: '02', title: 'Real-Time VAD & STT', desc: 'Deepgram Nova-2 decodes speech into text tokens with <90ms latency.' },
      { step: '03', title: 'Direct Streaming LLM', desc: 'Generates conversational tokens with speculative turn-taking models.' },
      { step: '04', title: 'Neural Audio Synthesis', desc: 'Cartesia Sonic synthesizes lifelike acoustics with zero buffering.' },
    ],
    keyCapabilities: [
      {
        title: 'Barge-In & Interruption Detection',
        desc: 'Instantly stops speaking when the caller interrupts, acknowledging the caller with natural human inflection.',
      },
      {
        title: 'Direct Calendar & Appointment Booking',
        desc: 'Queries live Google Calendar or Calendly availability and books qualified slots during the phone conversation.',
      },
      {
        title: 'Live Warm Call Transfers',
        desc: 'Transfers high-intent callers to on-duty human executives with automated verbal dossier briefings.',
      },
      {
        title: 'Omnichannel Post-Call Sync',
        desc: 'Logs call recordings, structured summaries, and next action items into Salesforce and HubSpot within seconds.',
      },
    ],
    technicalSpecs: [
      { label: 'Transport Protocol', value: 'WebRTC / SIP Trunking (TLS)' },
      { label: 'Voice Synthesis Engine', value: 'Cartesia Sonic / ElevenLabs Turbo' },
      { label: 'Speech Recognition', value: 'Deepgram Nova-2 Streaming' },
      { label: 'Round-Trip Latency', value: '<280ms Glass-to-Glass' },
      { label: 'Simultaneous Channels', value: '1,000+ Concurrent Calls' },
      { label: 'Telephony Carrier', value: 'Twilio, Telnyx, Bandwidth, Vonage' },
    ],
    caseStudy: {
      client: 'Multi-Location Healthcare Network',
      industry: 'Healthcare & Clinical Intake',
      challenge: '35% of inbound patient appointment calls went to voicemail during peak hours, causing lost patient revenue.',
      solution: 'Implemented sub-300ms telephony agents to handle 100% of inbound calls, schedule visits, and send SMS reminders.',
      results: [
        '0 missed calls across 14 clinical locations',
        'Patient satisfaction scores increased by 42%',
        '$850,000 annualized captured appointment revenue',
      ],
    },
    supportedIntegrations: ['Twilio', 'Telnyx', 'Calendly', 'Epic EHR', 'AthenaHealth', 'HubSpot', 'Zendesk'],
    faq: [
      {
        q: 'Does it sound robotic or laggy?',
        a: 'No. At sub-280ms latency, it responds faster than most humans over a phone connection. It pauses naturally and uses dynamic breathing inflection.',
      },
      {
        q: 'Can it speak multiple languages?',
        a: 'Yes, our voice agents natively support English, Spanish, French, German, and Urdu/Hindi with native accent adaptation.',
      },
    ],
  },

  'governed-rag': {
    id: 'governed-rag',
    slug: 'governed-rag',
    title: 'Governed Enterprise RAG',
    tagline: 'Zero-Hallucination Knowledge Retrieval & Verification',
    metric: '0.00%',
    metricLabel: 'Hallucination Rate Guarantee',
    category: 'Enterprise Knowledge',
    overview:
      'AsNexa guarantees zero hallucinations by enforcing strict System of Record (KSoR) verification rubrics. Our dual-layer retrieval pairs dense vector search with deterministic BM25 keyword matching, evaluated by an independent critic agent before token output.',
    executiveSummary:
      'Enterprise RAG you can trust with confidential legal, clinical, and financial documentation. Every answer includes traceable citations to exact source paragraphs and pages.',
    architectureDiagramSteps: [
      { step: '01', title: 'Hierarchical Document Chunking', desc: 'Extracts tables, clauses, and metadata from PDFs, DOCX, and SQL records.' },
      { step: '02', title: 'Dual-Layer Search', desc: 'Combines dense vector embeddings with deterministic BM25 keyword matching.' },
      { step: '03', title: 'Cohere Rerank 3 Evaluation', desc: 'Reranks top chunks by semantic relevance and contextual alignment.' },
      { step: '04', title: 'KSoR Critic Validation', desc: 'Validates that every claim is directly substantiated before token release.' },
    ],
    keyCapabilities: [
      {
        title: 'Verifiable Document Citations',
        desc: 'Every generated output links directly to the source page, paragraph, and timestamped document version.',
      },
      {
        title: 'Strict KSoR Refusal Guardrails',
        desc: 'Transparently refuses to speculate when documentation does not explicitly support the question.',
      },
      {
        title: 'Role-Based Access Control (RBAC)',
        desc: 'Enforces department-level permissions so employees only retrieve data they are authorized to view.',
      },
      {
        title: 'Continuous Index Synchronization',
        desc: 'Automated delta pipelines re-index modified files from Google Drive, SharePoint, and Confluence within minutes.',
      },
    ],
    technicalSpecs: [
      { label: 'Vector Database', value: 'Qdrant / Pinecone Distributed' },
      { label: 'Reranker Model', value: 'Cohere Rerank 3' },
      { label: 'Keyword Matching', value: 'BM25 Sparse Inverted Index' },
      { label: 'Embedding Dimension', value: '1536 / 3072 Normalized' },
      { label: 'Citation Auditability', value: '100% Page & Paragraph Level' },
      { label: 'Search Latency', value: '<150ms End-to-End' },
    ],
    caseStudy: {
      client: 'Boutique Commercial Law Firm',
      industry: 'Legal & Compliance',
      challenge: 'Senior associates spent 18 hours per week manually searching thousands of previous litigation briefs for precedent clauses.',
      solution: 'Deployed Governed RAG indexing 12 years of case briefs with dual-layer BM25 verification.',
      results: [
        'Contract clause discovery time reduced by 94%',
        '100% citation accuracy across 85,000 legal documents',
        'Client billable efficiency increased by 3.2x',
      ],
    },
    supportedIntegrations: ['SharePoint', 'Google Drive', 'Confluence', 'Notion', 'PostgreSQL', 'Snowflake', 'Box'],
    faq: [
      {
        q: 'Is our company data used to train public AI models?',
        a: 'Never. We deploy with strict zero-data retention agreements on private dedicated endpoints. Your IP never leaves your security perimeter.',
      },
      {
        q: 'What formats can be indexed?',
        a: 'PDFs, scanned docs (via OCR), Word documents, Excel sheets, audio recordings, code repositories, and relational databases.',
      },
    ],
  },

  'workflow-automation': {
    id: 'workflow-automation',
    slug: 'workflow-automation',
    title: 'Workflow & CRM Automation',
    tagline: 'Resilient n8n Loops Connecting Your Entire SaaS Stack',
    metric: '25,000+',
    metricLabel: 'Automated Operations / Minute',
    category: 'Enterprise Integration',
    overview:
      'We engineer enterprise-grade n8n automation loops that connect Shopify, Stripe, Salesforce, HubSpot, Zendesk, and custom SQL databases into a unified, self-healing nervous system.',
    executiveSummary:
      'Stop copying and pasting data across browser tabs. Automate orders, refunds, customer onboarding, and financial reconciliation with automated dead-letter retries.',
    architectureDiagramSteps: [
      { step: '01', title: 'Webhook Ingestion', desc: 'High-throughput event listeners capture triggers with HMAC signature validation.' },
      { step: '02', title: 'Payload Transformation', desc: 'Validates schemas, strips sensitive PII, and normalizes data structures.' },
      { step: '03', title: 'Branching Decision Logic', desc: 'Executes parallel conditions, fraud checks, and inventory calculations.' },
      { step: '04', title: 'Atomic Multi-App Dispatch', desc: 'Commits state changes across billing, shipping, and notification APIs.' },
    ],
    keyCapabilities: [
      {
        title: 'Shopify & E-Commerce Order Orchestration',
        desc: 'Automates fulfillment routing, warehouse allocation, and international customs documentation.',
      },
      {
        title: 'Automated Financial Reconciliation',
        desc: 'Matches Stripe payouts against bank deposits and QuickBooks ledger entries daily.',
      },
      {
        title: 'Lead Enrichment & Routing',
        desc: 'Enriches inbound leads with Clearbit/Apollo data and assigns accounts based on geographic territory.',
      },
      {
        title: 'Dead-Letter Queues & Failover',
        desc: 'If a 3rd party API goes down, executions are safely queued in Redis and re-attempted with exponential backoff.',
      },
    ],
    technicalSpecs: [
      { label: 'Orchestrator', value: 'Self-Hosted n8n Enterprise Cluster' },
      { label: 'Queue Engine', value: 'Redis BullMQ with Persistence' },
      { label: 'Throughput Capacity', value: '25,000 Ops / Minute' },
      { label: 'Uptime SLA', value: '99.98% High Availability' },
      { label: 'Webhook Security', value: 'Cryptographic HMAC Verification' },
      { label: 'Audit Logging', value: 'Tamper-Evident Immutable Logs' },
    ],
    caseStudy: {
      client: '8-Figure D2C E-Commerce Brand',
      industry: 'Retail & Consumer Goods',
      challenge: 'Manual returns, exchanges, and inventory sync errors resulted in 400+ weekly customer support complaints.',
      solution: 'Engineered an end-to-end n8n workflow connecting Shopify, ShipStation, Gorgias, and Stripe.',
      results: [
        'Returns processed in 12 seconds with automatic label dispatch',
        'Customer support ticket volume reduced by 64%',
        '$120,000 annual labor savings in warehouse operations',
      ],
    },
    supportedIntegrations: ['Shopify', 'Stripe', 'HubSpot', 'Salesforce', 'QuickBooks', 'ShipStation', 'Zendesk', 'Gorgias'],
    faq: [
      {
        q: 'Do you use self-hosted or cloud n8n?',
        a: 'We deploy hardened, self-hosted n8n clusters in your cloud (AWS/GCP) so you never pay per-task subscription fees.',
      },
      {
        q: 'How do you handle API rate limits?',
        a: 'Our middleware automatically throttles traffic, implements token-bucket algorithms, and caches frequent queries.',
      },
    ],
  },

  'bi-dashboards': {
    id: 'bi-dashboards',
    slug: 'bi-dashboards',
    title: 'AI Business Intelligence Dashboards',
    tagline: 'Real-Time Operational Telemetry & Predictive Briefings',
    metric: 'Real-Time',
    metricLabel: 'Telemetry Streaming & Synthesis',
    category: 'Analytics & Intelligence',
    overview:
      'Turn fragmented operational data into instant strategic clarity. AsNexa builds custom executive dashboards that aggregate metrics across revenue, churn, pipeline, and inventory, utilizing LLMs to synthesize automated daily briefings and anomaly alerts.',
    executiveSummary:
      'No more waiting until the end of the month for reports. Get real-time answers to natural language questions like "Why did customer churn increase in Europe this week?" in seconds.',
    architectureDiagramSteps: [
      { step: '01', title: 'Data Lake Ingestion', desc: 'Streams events from Stripe, PostgreSQL, Google Ads, and Mixpanel.' },
      { step: '02', title: 'Columnar Aggregation', desc: 'ClickHouse and DuckDB calculate high-velocity metric rollups.' },
      { step: '03', title: 'Anomaly Detection Models', desc: 'Flags statistically significant variances exceeding 2 standard deviations.' },
      { step: '04', title: 'Executive Briefing Dispatch', desc: 'Synthesizes bulleted leadership summaries delivered to Slack each morning.' },
    ],
    keyCapabilities: [
      {
        title: 'Natural Language SQL Queries',
        desc: 'Ask complex analytical questions in plain English and receive instant chart visualizations.',
      },
      {
        title: 'Automated Daily Executive Briefings',
        desc: 'Generates concise summaries of top revenue drivers, friction points, and operational bottlenecks at 8:00 AM.',
      },
      {
        title: 'Predictive Churn & LTV Modeling',
        desc: 'Identifies accounts exhibiting churn risk signals 30 days before contract renewal.',
      },
      {
        title: 'Unified Cross-Platform Telemetry',
        desc: 'Combines marketing ad spend, sales pipeline velocity, and customer support metrics into a single view.',
      },
    ],
    technicalSpecs: [
      { label: 'Columnar Analytics DB', value: 'ClickHouse / DuckDB' },
      { label: 'Query Engine', value: 'FastAPI with Semantic SQL Agents' },
      { label: 'Visualization Layer', value: 'Apache Superset / Custom React' },
      { label: 'Notification Channel', value: 'Slack, Microsoft Teams, Email' },
      { label: 'Data Freshness', value: 'Sub-Minute Continuous Streaming' },
      { label: 'Security Model', value: 'Column-Level Encryption & RBAC' },
    ],
    caseStudy: {
      client: 'B2B SaaS Scale-Up ($15M ARR)',
      industry: 'Enterprise Software',
      challenge: 'Leadership had to wait 10 days after month-end for fragmented spreadsheet reports from 4 departments.',
      solution: 'Deployed real-time BI dashboard with daily AI executive briefings dispatched directly to the founders Slack channel.',
      results: [
        'Decision cycle reduced from 10 days to real-time daily sync',
        'Detected $65,000 billing leak within 48 hours of occurrence',
        'Saved 120 leadership hours per quarter in report preparation',
      ],
    },
    supportedIntegrations: ['ClickHouse', 'PostgreSQL', 'Snowflake', 'BigQuery', 'Stripe', 'Google Analytics 4', 'Slack'],
    faq: [
      {
        q: 'Can non-technical executives query the dashboard?',
        a: 'Yes! They simply type questions in plain English like "Show me MRR growth by region for Q3" and get instant graphs.',
      },
    ],
  },

  'forward-deployed': {
    id: 'forward-deployed',
    slug: 'forward-deployed',
    title: 'Forward Deployed Engineering',
    tagline: 'Senior AI Systems Engineers Embedded in Your Team',
    metric: '2 Weeks',
    metricLabel: 'From Kickoff to Production Delivery',
    category: 'Engineering Services',
    overview:
      'We do not sell generic SaaS licenses and walk away. Our Forward Deployed Engineers (FDEs) join your GitHub/GitLab organizations, sprint rituals, and Slack channels as dedicated force multipliers, shipping production code from week one.',
    executiveSummary:
      'Scale your AI roadmap without the 6-month recruiting lag. Gain elite forward-deployed engineers experienced in sub-second voice, multi-agent frameworks, and deterministic enterprise pipelines.',
    architectureDiagramSteps: [
      { step: '01', title: 'Architecture Audit (Days 1-3)', desc: 'Inspects existing data models, API schemas, and technical bottlenecks.' },
      { step: '02', title: 'Sprint Integration (Week 1)', desc: 'Commits production PRs and sets up CI/CD evaluation pipelines.' },
      { step: '03', title: 'System Hardening (Week 2)', desc: 'Stress tests edge cases, latency benchmarks, and failover redundancy.' },
      { step: '04', title: 'Knowledge Transfer & Enablement', desc: 'Conducts architectural walkthroughs and full documentation handoff.' },
    ],
    keyCapabilities: [
      {
        title: 'Direct Repository Code Contributions',
        desc: 'We write clean, testable TypeScript, Python, and SQL code adhering to your internal engineering standards.',
      },
      {
        title: 'Zero Vendor Lock-In Guarantee',
        desc: 'All models, prompts, infrastructure scripts, and IP remain 100% owned by your company.',
      },
      {
        title: 'Production Evaluation CI/CD',
        desc: 'Sets up automated LLM evaluation harnesses to prevent regression before PR merges.',
      },
      {
        title: 'Weekly Leadership Architecture Reviews',
        desc: 'Provides strategic roadmaps, cost optimization recommendations, and security audits.',
      },
    ],
    technicalSpecs: [
      { label: 'Engineering Stack', value: 'Python, TypeScript, Node.js, Go' },
      { label: 'Infra & Cloud', value: 'Kubernetes, Docker, Terraform, AWS, GCP' },
      { label: 'Model Frameworks', value: 'LangGraph, LlamaIndex, vLLM, DeepSeek' },
      { label: 'Sprint Cadence', value: '1-to-2 Week Production Cycles' },
      { label: 'IP Ownership', value: '100% Client-Owned Work Product' },
      { label: 'Engagement Model', value: 'Full-Time Dedicated Embed' },
    ],
    caseStudy: {
      client: 'Series B FinTech Platform',
      industry: 'Financial Services',
      challenge: 'Wanted to launch an autonomous loan underwriting agent but lacked in-house LLM systems expertise, facing a 6-month hiring delay.',
      solution: 'Embedded 2 AsNexa Forward Deployed Engineers who built, evaluated, and shipped the underwriting engine in 4 weeks.',
      results: [
        'Feature shipped 5 months ahead of projected schedule',
        '99.6% deterministic scoring verified against 50,000 historic loans',
        'Full internal engineering team upskilled and enabled',
      ],
    },
    supportedIntegrations: ['GitHub', 'GitLab', 'AWS', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform', 'Datadog'],
    faq: [
      {
        q: 'How quickly can your engineers start?',
        a: 'We can onboard and join your Slack and GitHub within 3 to 5 business days of contract signing.',
      },
      {
        q: 'Who owns the intellectual property?',
        a: 'You own 100% of all code, prompts, configurations, and architecture artifacts developed during the engagement.',
      },
    ],
  },
};
