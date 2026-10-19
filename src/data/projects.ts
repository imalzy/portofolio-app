import type { ProjectItem } from '@/types/portfolio'

export const projects: ProjectItem[] = [
  {
    id: 'bank-mandiri-digital-onboarding',
    slug: 'bank-mandiri-digital-onboarding',
    name: 'Bank Mandiri Customer Digital Onboarding & WebRTC Identity Engine',
    summary:
      'National-scale digital account opening and live video KYC system for Indonesia’s largest financial institution.',
    description:
      'Engineered customer digital onboarding and account-opening applications (join.bankmandiri.co.id, kopra.co.id) using TypeScript and Angular. Integrated enterprise WebRTC video call infrastructure with Avaya and Cisco telecommunication gateways to replace in-branch visits with secure digital verification.',
    category: 'Web Applications',
    role: 'Frontend Developer & WebRTC Integration Specialist',
    technologies: [
      'TypeScript',
      'Angular',
      'WebRTC',
      'Avaya Integration',
      'Cisco WebRTC Gateway',
      'Bootstrap',
      'REST APIs',
    ],
    liveUrl: 'https://join.bankmandiri.co.id',
    featured: true,
    displayOrder: 1,
    status: 'Production',
    caseStudy: {
      overview:
        'As part of PT Bank Mandiri’s digital transformation initiative, the bank needed to transition retail and commercial account creation from physical branches into a seamless, 100% remote digital onboarding experience. The mission was to build a secure, highly resilient web application capable of guiding customers through identity document capture and live video verification with banking officers at national volume.',
      problemAndContext:
        'Prior to this system, opening a bank account required customers to physically visit a branch to verify national identity credentials (KTP). The core challenge was building a web-based video verification pipeline that functioned reliably across thousands of consumer device models, varying mobile browser versions (iOS Safari, Android Chrome, Samsung Internet), and unstable cellular network connections across Indonesia.',
      productGoals: [
        'Enable 100% digital account opening without in-person branch verification.',
        'Integrate real-time two-way WebRTC audio/video calls between customers and bank verification agents.',
        'Maintain zero client-side memory leaks during high-concurrency registration spikes.',
        'Strictly comply with national banking security, cryptographic protocols, and WCAG accessibility guidelines.',
      ],
      myRole:
        'Frontend Developer responsible for customer-facing digital onboarding views, WebRTC telecommunications integration (Avaya and Cisco backbones), media permission state management, and client performance stabilization.',
      technicalChallenges: [
        'Device Permission Handling: Different mobile operating systems and in-app webviews handled camera/microphone constraints inconsistently, leading to premature call aborts.',
        'Variable Bandwidth Degradation: Users on 3G and 4G networks experienced packet drops, audio jitter, and connection drops during live video streaming.',
        'State Recovery: If a network disconnection occurred mid-call, the onboarding session had to recover smoothly without forcing the applicant to restart document entry.',
      ],
      architectureAndDecisions: [
        {
          title: 'Decoupled WebRTC Telephony Gateway',
          description:
            'Created an abstracted telephony service wrapper over Avaya and Cisco SDKs. This shielded the UI layer from protocol-specific socket events and allowed seamless signaling failover.',
          tradeoffs:
            'Added an upfront abstraction layer to maintain, but eliminated tight coupling and enabled isolated testing of video call state machines.',
        },
        {
          title: 'Adaptive Media Constraint Throttling',
          description:
            'Implemented real-time WebRTC RTCPeerConnection stats monitoring. When bandwidth degradation or frame drops were detected, the client dynamically lowered video resolution and framerate to prioritize uninterrupted voice and document clarity.',
          tradeoffs:
            'Occasional lower video fidelity under poor signal, but guaranteed call completion without session termination.',
        },
        {
          title: 'Strict Finite State Machine (FSM) for Onboarding Stages',
          description:
            'Modeled the entire onboarding lifecycle (Pre-checks → Document OCR → Queue → Active Video Verification → Digital Signature → Complete) as an explicit state machine, preventing illegal step transitions.',
        },
      ],
      implementation: [
        'Configured cross-browser media constraints with fallback candidate negotiation (STUN/TURN) for enterprise firewalls.',
        'Engineered an in-browser camera capture viewport with canvas-based edge guidance to ensure clean photo identification snapshots.',
        'Implemented rigorous memory cleanup routines, properly disposing media tracks and peer connections upon call teardown to prevent SPA memory accumulation.',
      ],
      keyFeatures: [
        'Real-time peer-to-peer and MCU-assisted video call with bank verification officers.',
        'Document and portrait photo capture with live edge alignment feedback.',
        'Interactive queue position indicator with real-time WebSocket status updates.',
        'Encrypted session token handover with strict expiration policies.',
      ],
      resultsAndImpact: [
        'Successfully transitioned millions of retail account openings to 100% digital workflows.',
        'Maintained 99.9% client-side uptime across major Indonesian ISPs and mobile networks.',
        'Replaced manual branch KYC with an average remote verification duration of under 5 minutes.',
      ],
      lessonsLearned: [
        'Mobile web browser camera APIs require defensive programming and graceful degradation, especially regarding permissions caching on iOS Safari.',
        'In enterprise banking applications, clear user feedback during waiting queues is as critical to conversion as the technical speed of the video stream.',
      ],
      relatedProjectSlugs: ['paper-id-kyc-redesign', 'ledger-one-core'],
    },
  },
  {
    id: 'paper-id-kyc-redesign',
    slug: 'paper-id-kyc-redesign',
    name: 'Paper.id KYC & Enterprise Financial Workflow Architecture',
    summary:
      'Re-architected business verification (KYC) workflows and core dashboards for Indonesia’s leading B2B invoicing platform.',
    description:
      'Redesigned existing KYC and core dashboard workflows on Paper.id, introducing maintainable frontend patterns, modular form states, and systematic A/B testing that directly informed feature direction and reduced verification drop-off.',
    category: 'Full-Stack Applications',
    role: 'Frontend Engineer & Workflow Architect',
    technologies: [
      'TypeScript',
      'React.js',
      'Next.js',
      'Tailwind CSS',
      'A/B Testing Frameworks',
      'State Machine',
      'REST APIs',
    ],
    liveUrl: 'https://paper.id',
    featured: true,
    displayOrder: 2,
    status: 'Production',
    caseStudy: {
      overview:
        'Paper.id is Indonesia’s leading B2B invoicing, billing, and supply-chain financing platform. To unlock higher transaction limits and financing features, business owners must submit comprehensive corporate legal documents (KYC). The existing onboarding flow suffered from high drop-off rates, fragile monolithic form state, and recurring regression bugs.',
      problemAndContext:
        'Business verification involved multiple document tiers: national ID, tax identification (NPWP), corporate deeds, bank statements, and business permits. The legacy implementation coupled view rendering with network calls and lacked structured validation, making maintenance painful and feature evolution slow.',
      productGoals: [
        'Re-architect the KYC user journey into clear, bite-sized steps that minimize cognitive overload.',
        'Eliminate recurring regression bugs by decoupling validation logic from presentation components.',
        'Implement structured A/B testing to empirically validate UX improvements against actual merchant completion rates.',
      ],
      myRole:
        'Frontend Engineer responsible for workflow re-architecture, modular state management, A/B testing implementation, and cross-functional alignment with Product Managers and Designers.',
      technicalChallenges: [
        'Complex Multi-Document State: Merchants frequently interrupted the submission process and resumed later on different devices, requiring reliable state recovery.',
        'File Upload Reliability: Handling multi-megabyte PDF and image uploads over variable network bandwidth with instant client-side compression and validation.',
        'A/B Testing Without Layout Shifts: Serving distinct onboarding variants without causing noticeable layout shifts or flashing during hydration.',
      ],
      architectureAndDecisions: [
        {
          title: 'Decoupled Step Machine with Schema Validation',
          description:
            'Separated form fields into isolated, step-specific schemas. Each step validated its local inputs independently while synchronizing with a centralized draft store.',
          tradeoffs:
            'Requires strict schema definitions for each phase, but guarantees that invalid payloads never reach backend endpoints.',
        },
        {
          title: 'Client-Side Media Compression Pipeline',
          description:
            'Introduced canvas-based image resizing and PDF size checks before initiating chunked S3/cloud uploads, reducing upload failures by over 40%.',
        },
        {
          title: 'Hypothesis-Driven A/B Testing Engine',
          description:
            'Integrated client-side feature flag and variant evaluation that recorded micro-conversions (field focus, drop-offs, upload errors) to guide product enhancements.',
        },
      ],
      implementation: [
        'Built reusable document uploaders with live previews, error state recovery, and retry mechanisms.',
        'Standardized API error response transformation so backend validation codes mapped directly to field-level UI alerts.',
        'Refactored shared dashboard layout components, boosting code reuse across billing and invoicing modules.',
      ],
      keyFeatures: [
        'Progressive multi-tier business verification flow with auto-save capabilities.',
        'Real-time document format and dimension validation with client-side compression.',
        'Dynamic requirement checklists tailored to business entity types (PT, CV, Individual).',
        'Real-time verification status tracker connected to webhook notifications.',
      ],
      resultsAndImpact: [
        'Significantly decreased KYC abandonment rates through step-by-step guidance and A/B validated layouts.',
        'Substantially reduced recurring regression bugs across KYC and dashboard modules.',
        'Established maintainability-focused component standards adopted across the frontend engineering team.',
      ],
      lessonsLearned: [
        'Quantitative data from A/B tests prevents subjective design debates and grounds technical decisions in real user behavior.',
        'Complex forms should treat draft saving as a first-class architectural concern rather than an afterthought.',
      ],
      relatedProjectSlugs: ['bank-mandiri-digital-onboarding', 'ledger-one-core'],
    },
  },
  {
    id: 'wedding-market-platform',
    slug: 'wedding-market-platform',
    name: 'weddingMarket Multi-Vendor Marketplace & Mobile Platform',
    summary:
      'End-to-end wedding vendor marketplace platform built from scratch across web (Next.js) and mobile (React Native).',
    description:
      'Architected the entire frontend foundation, component library, and API integration layer as the sole frontend engineer. Successfully launched web and mobile platforms, onboarding 572 vendors within the launch window.',
    category: 'Full-Stack Applications',
    role: 'Sole Frontend Engineer & Mobile Architect',
    technologies: [
      'Next.js',
      'React Native',
      'TypeScript',
      'Tailwind CSS',
      'REST APIs',
      'Mobile Architecture',
      'Figma-to-Code',
    ],
    featured: true,
    displayOrder: 3,
    status: 'Production',
    caseStudy: {
      overview:
        'weddingMarket is a comprehensive digital marketplace connecting couples with verified wedding venues, photographers, caterers, and decorators. The project required architecting and shipping both a high-performance customer web portal and a native mobile application simultaneously from the ground up.',
      problemAndContext:
        'The founding team needed to launch an MVP quickly to capture vendor partnerships before wedding peak season. As the sole frontend engineer, I was responsible for delivering a scalable web experience and a smooth mobile experience with zero prior codebase.',
      productGoals: [
        'Build and launch web (Next.js) and mobile (React Native) platforms from scratch.',
        'Establish a shared design language and reusable component catalog.',
        'Enable seamless vendor onboarding and catalog management.',
        'Reach production readiness within an aggressive 4-month build timeline.',
      ],
      myRole:
        'Sole Frontend Engineer responsible for frontend architecture, component design systems, mobile app build, API contracts, and launch execution.',
      technicalChallenges: [
        'Cross-Platform Consistency: Maintaining visual parity and predictable behavior between Next.js on web and React Native on iOS/Android.',
        'Media-Heavy Catalogs: Vendor portfolios contained dozens of high-resolution images that could degrade mobile scroll performance and web Core Web Vitals.',
        'Solo Delivery Velocity: Building two complete platforms simultaneously required hyper-efficient abstractions and clean code organization.',
      ],
      architectureAndDecisions: [
        {
          title: 'Shared Domain Logic & Type Definitions',
          description:
            'Created unified TypeScript data contracts and API client logic reused across both the Next.js web application and the React Native mobile repository.',
          tradeoffs:
            'Ensured 100% contract parity, eliminating data discrepancies between web and mobile.',
        },
        {
          title: 'Optimized Image Delivery with Progressive Loading',
          description:
            'Engineered responsive image loaders with blur hashes and native lazy loading on web, and memory-cached image viewers on React Native.',
        },
        {
          title: 'Atomic Component Architecture',
          description:
            'Designed a modular UI component library in Tailwind CSS and React Native primitives, allowing rapid composition of complex vendor profile pages.',
        },
      ],
      implementation: [
        'Constructed search and filtering systems for categories, pricing, locations, and vendor availability.',
        'Implemented vendor store dashboards for package creation, image galleries, and inquiry management.',
        'Configured CI build pipelines and optimized web bundles for fast mobile browser access.',
      ],
      keyFeatures: [
        'Multi-vendor directory with location-based filtering and instant search.',
        'Rich vendor storefronts with high-resolution media galleries and package pricings.',
        'Direct inquiry and quotation request workflows.',
        'Vendor administration portal for order tracking and portfolio updates.',
      ],
      resultsAndImpact: [
        'Successfully onboarded 572 wedding vendors during the initial launch campaign.',
        'Shipped web and mobile platforms on schedule within the 4-month build window.',
        'Achieved excellent Core Web Vitals and 60 FPS smooth scrolling across mobile devices.',
      ],
      lessonsLearned: [
        'Sharing data types and API models between web and React Native cuts development time by nearly a third.',
        'When building solo, investing in strict type safety upfront prevents countless runtime regressions downstream.',
      ],
      relatedProjectSlugs: ['ledger-one-core', 'lapang-data-design-system'],
    },
  },
  {
    id: 'ledger-one-core',
    slug: 'ledger-one-core',
    name: 'LedgerOne Double-Entry Bookkeeping & Financial Audit Engine',
    summary:
      'Double-entry bookkeeping backend and interface engineered with NestJS and TypeScript to guarantee ledger integrity.',
    description:
      'Architected a double-entry bookkeeping application from scratch, designing the relational schema and API layer in NestJS/TypeScript to guarantee ledger integrity, mathematical debit/credit balancing, and immutable audit trails.',
    category: 'Full-Stack Applications',
    role: 'Fullstack Architect & Systems Designer',
    technologies: [
      'NestJS',
      'TypeScript',
      'Node.js',
      'PostgreSQL',
      'REST APIs',
      'Clean Architecture',
      'ACID Transactions',
    ],
    featured: true,
    displayOrder: 4,
    status: 'Production',
    caseStudy: {
      overview:
        'LedgerOne was conceived to provide modern SMEs with a reliable, audit-proof financial bookkeeping engine. In financial software, minor rounding inaccuracies or race conditions can compromise auditability. The objective was to engineer a rock-solid double-entry ledger where every transaction strictly balances.',
      problemAndContext:
        'Many simple accounting tools use single-entry records or naive balance updates that lack an audit trail. LedgerOne required an enterprise-grade double-entry foundation where money can never be created or destroyed, only transferred across accounts with immutable historical receipts.',
      productGoals: [
        'Guarantee mathematical balance: Sum of Debits must strictly equal Sum of Credits for every journal entry.',
        'Ensure zero race conditions during concurrent account balance mutations.',
        'Provide immutable transaction history for regulatory compliance and audit trails.',
      ],
      myRole:
        'Fullstack Architect responsible for database schema modeling, NestJS domain service architecture, transaction isolation logic, and type-safe API endpoints.',
      technicalChallenges: [
        'Concurrency & Race Conditions: Simultaneous debits and credits on shared accounts could cause inconsistent balances without strict locking mechanisms.',
        'Decimal Precision: Floating-point arithmetic errors in JavaScript could introduce cent-level discrepancies in high-volume calculations.',
        'Historical Immutability: Preventing accidental updates or deletions of verified financial journal entries.',
      ],
      architectureAndDecisions: [
        {
          title: 'Strict Double-Entry Schema Design',
          description:
            'Modeled accounts, journal entries, and journal items with explicit debit/credit constraints. Implemented database triggers and application-level invariant validators.',
        },
        {
          title: 'Integer-Based Cent Accounting (Fixed-Point Arithmetic)',
          description:
            'Stored all monetary amounts as 64-bit integers in the smallest currency unit (e.g., cents/rupiah), completely eliminating floating-point math rounding flaws.',
        },
        {
          title: 'Pessimistic Locking within ACID Database Transactions',
          description:
            'Wrapped journal creation in atomic database transactions with row-level locks on impacted accounts, ensuring serialized balance recalculation under high load.',
        },
      ],
      implementation: [
        'Structured the NestJS backend following Clean Architecture with strict separation between controllers, use-cases, and repository abstractions.',
        'Engineered an append-only transaction ledger where corrections require offsetting reversing entries rather than destructive updates.',
        'Built comprehensive automated integration test suites simulating concurrent transfer operations.',
      ],
      keyFeatures: [
        'Double-entry journal creation with real-time balance invariant verification.',
        'Hierarchical Chart of Accounts (Assets, Liabilities, Equity, Revenue, Expenses).',
        'Automated trial balance, balance sheet, and profit-and-loss reporting generation.',
        'Immutable cryptographic audit trail for historical adjustments.',
      ],
      resultsAndImpact: [
        '100% ledger audit integrity verified under simulated multi-threaded concurrent stress testing.',
        'Zero financial drift or discrepancy across tens of thousands of test transactions.',
        'Delivered a modular codebase capable of serving as the financial core for downstream billing platforms.',
      ],
      lessonsLearned: [
        'Never use floating point numbers for currency calculations—fixed-point integer representations save countless debugging hours.',
        'In fintech architectures, immutability and audit logs are not optional features; they are foundational requirements.',
      ],
      relatedProjectSlugs: ['bank-mandiri-digital-onboarding', 'paper-id-kyc-redesign'],
    },
  },
  {
    id: 'lapang-data-design-system',
    slug: 'lapang-data-design-system',
    name: 'Lapang Data Enterprise Component Library & Next.js Foundation',
    summary:
      'Shared modular component system and Next.js 14 application architecture adopted across multiple engineering teams.',
    description:
      'Owned frontend architecture for scalable web applications built on Next.js 14 and TypeScript. Designed and built a modular component library that unified UI consistency across 3 distinct feature streams.',
    category: 'Web Applications',
    role: 'Frontend Engineer & System Architect',
    technologies: [
      'Next.js 14',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'App Router',
      'Component Architecture',
    ],
    featured: false,
    displayOrder: 5,
    status: 'Production',
    caseStudy: {
      overview:
        'Lapang Data operates data analytics and enterprise management products. As the company grew, multiple engineering squads built redundant UI elements, resulting in inconsistent styling, duplicated effort, and slower release cycles. The goal was to establish a centralized frontend foundation and reusable component system.',
      problemAndContext:
        'Three separate feature teams were shipping divergent button styles, modals, data tables, and form inputs. Code reviews were bogged down by stylistic inconsistencies, and upgrading third-party packages frequently broke client layouts.',
      productGoals: [
        'Unify the company’s digital design tokens into a composable React/Next.js component library.',
        'Optimize Next.js 14 App Router boundaries between Server Components and Client Components.',
        'Establish strict TypeScript standards and automated linting across feature repositories.',
      ],
      myRole:
        'Frontend Engineer owning component architecture, design system translation from Figma, and engineering guidelines.',
      technicalChallenges: [
        'Hydration Optimization: Preventing unnecessary client bundle bloat by keeping components pure and rendering them on the server where feasible.',
        'Accessibility: Ensuring all custom dropdowns, dialogs, and navigation elements adhered to WCAG keyboard navigation and screen-reader requirements.',
      ],
      architectureAndDecisions: [
        {
          title: 'Composable Headless Component Primitives',
          description:
            'Built accessible component primitives styled with Tailwind CSS utility tokens, avoiding tightly coupled CSS-in-JS dependencies.',
        },
        {
          title: 'Strict Server/Client Boundary Guidelines',
          description:
            'Restricted client components strictly to interactive leaves, allowing data tables and static layouts to render as fast Server Components.',
        },
      ],
      implementation: [
        'Created over 30 reusable components (data tables with sorting, modal dialogs, date pickers, form controls).',
        'Authored interactive documentation and usage examples for onboarding new engineers.',
        'Enforced strict TypeScript contracts for all component prop interfaces.',
      ],
      keyFeatures: [
        '30+ accessible UI components with full keyboard and screen-reader support.',
        'Zero-runtime Tailwind CSS styling with dark/light mode token integration.',
        'Type-safe props with thorough autocomplete and documentation.',
      ],
      resultsAndImpact: [
        'Eliminated duplicate UI code across 3 separate engineering squads.',
        'Accelerated sprint velocity by providing pre-built, tested building blocks for new feature requests.',
        'Reduced client-side hydration payload size across key analytical dashboards.',
      ],
      lessonsLearned: [
        'A component library succeeds when it solves real developer pain points rather than imposing rigid, dogmatic rules.',
      ],
      relatedProjectSlugs: ['wedding-market-platform', 'paper-id-kyc-redesign'],
    },
  },
  {
    id: 'medly-ai-telegram',
    slug: 'medly-ai-telegram',
    name: 'Medly AI Automated Telegram Bot Services',
    summary:
      'High-throughput Node.js backend services powering conversational command routing and external AI API integrations.',
    description:
      'Built Node.js backend services powering a Telegram bot, handling command routing, asynchronous message processing, and third-party AI API integrations with high reliability.',
    category: 'Personal Projects',
    role: 'Backend Developer',
    technologies: ['Node.js', 'TypeScript', 'Telegram Bot API', 'REST APIs', 'AI Integration'],
    featured: false,
    displayOrder: 6,
    status: 'Live',
    caseStudy: {
      overview:
        'Medly AI is a conversational productivity tool accessible via Telegram. The backend handles real-time user commands, routes prompts to specialized AI models, and returns structured responses with low latency.',
      problemAndContext:
        'Telegram bots must respond quickly to prevent user timeouts, even when downstream AI models take several seconds to stream inferences.',
      productGoals: [
        'Implement resilient asynchronous command processing.',
        'Integrate third-party LLM APIs with error handling and rate limit backoff.',
        'Maintain low operational overhead and reliable uptime.',
      ],
      myRole: 'Backend Developer designing the service layer, webhook handling, and API integration.',
      technicalChallenges: [
        'Handling burst traffic spikes during peak hours without dropping webhook events.',
        'Managing third-party API rate limits and connection timeouts gracefully.',
      ],
      architectureAndDecisions: [
        {
          title: 'Asynchronous Webhook Queue',
          description:
            'Acknowledged Telegram webhooks immediately to prevent retries, then processed user prompts via an internal worker pipeline.',
        },
      ],
      implementation: [
        'Designed modular command handlers with input validation.',
        'Integrated exponential backoff and circuit breaking for external API requests.',
      ],
      keyFeatures: [
        'Automated command parsing and context-aware prompt formulation.',
        'Inline keyboard navigation and interactive responses.',
        'Real-time streaming feedback indicators.',
      ],
      resultsAndImpact: [
        'Zero lost webhook requests during traffic spikes.',
        'Sub-second response initiation across all supported bot commands.',
      ],
      lessonsLearned: [
        'External API dependencies should always be wrapped with timeouts and fallbacks.',
      ],
      relatedProjectSlugs: ['ledger-one-core'],
    },
  },
]
