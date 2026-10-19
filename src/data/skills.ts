import type { SkillCategory } from '@/types/portfolio'

export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    name: 'Frontend & Mobile Architecture',
    description: 'Modern, high-performance web and mobile user interfaces built with type safety.',
    skills: [
      'TypeScript',
      'React.js',
      'Next.js (App Router)',
      'React Native',
      'Angular',
      'Tailwind CSS',
      'Figma-to-Code',
      'Accessible & Responsive UI',
    ],
  },
  {
    id: 'architecture',
    name: 'Architecture & System Design',
    description: 'Foundational structures designed for modularity, maintainability, and scale.',
    skills: [
      'Microfrontend Architecture',
      'Component-Driven Design',
      'RESTful API Design',
      'Type-Safe Contracts',
      'State Management Architecture',
      'Performance Optimization',
    ],
  },
  {
    id: 'backend',
    name: 'Backend & Data Systems',
    description: 'Robust server-side services, data modeling, and realtime synchronization.',
    skills: [
      'Node.js',
      'NestJS',
      'REST APIs',
      'Supabase',
      'Firebase (Realtime)',
      'SQL Databases',
      'Authentication Flows',
    ],
  },
  {
    id: 'domain',
    name: 'Domain Expertise & Practices',
    description: 'Specialized business domains and disciplined engineering workflows.',
    skills: [
      'Fintech & Digital Banking',
      'KYC & Digital Onboarding',
      'Double-Entry Bookkeeping',
      'WebRTC Video Streaming',
      'A/B Testing & User Analytics',
      'Agile / Scrum & Code Review',
    ],
  },
]
