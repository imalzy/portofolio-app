import {
  Compass,
  CheckCircle,
  GraduationCap,
  Users,
  Award,
  Layers,
  Smartphone,
  Cpu,
  Boxes,
  Code2,
  Workflow,
} from 'lucide-react'
import { profile } from '@/data/profile'
import { SEOHead } from '@/components/common/SEOHead'
import { PageContainer } from '@/components/layout/PageContainer'
import { PageHeader } from '@/components/common/PageHeader'
import { SocialLinks } from '@/components/common/SocialLinks'

export function AboutPage() {
  const principles = [
    {
      title: 'Maintainability over unnecessary complexity',
      desc: 'Simple, explicit code is easier to audit, test, and refactor than clever abstractions that disguise business logic.',
    },
    {
      title: 'Reusable components with clear responsibilities',
      desc: 'A component should do one job well with a predictable API contract, clean props, and zero side-effect leakage.',
    },
    {
      title: 'Consistent and predictable application structure',
      desc: 'A predictable file structure ensures any engineer on a distributed team can locate, modify, and extend features seamlessly.',
    },
    {
      title: 'Reliable API communication and error handling',
      desc: 'Network states are inherently non-deterministic. Every request must account for loading, transient errors, rate limits, and recovery.',
    },
    {
      title: 'Accessibility and responsive design',
      desc: 'Digital products must be intuitive and fully accessible across all screen dimensions, keyboard navigations, and assistive devices.',
    },
    {
      title: 'Collaboration between engineering, product, and design',
      desc: 'Great software is born from cross-discipline alignment. I partner early with designers and PMs to clarify trade-offs.',
    },
    {
      title: 'Performance and user experience',
      desc: 'Fast rendering, optimized bundles, and snappy interactions directly drive user retention and business conversion.',
    },
  ]

  const capabilities = [
    {
      icon: Layers,
      title: 'Web Application Development',
      desc: 'Architecting scalable, production-grade SPAs and SSR applications with React, Next.js, and TypeScript.',
    },
    {
      icon: Smartphone,
      title: 'Mobile Application Development',
      desc: 'Delivering cross-platform iOS and Android apps using React Native and Ionic with native-grade performance.',
    },
    {
      icon: Cpu,
      title: 'Frontend Architecture',
      desc: 'Designing microfrontends, domain-driven module hierarchies, and resilient client-side state machines.',
    },
    {
      icon: Code2,
      title: 'API Integration & Realtime Data',
      desc: 'Connecting frontend clients to RESTful APIs, WebSockets, Firebase Realtime, and WebRTC streaming media.',
    },
    {
      icon: Boxes,
      title: 'UI Component Systems',
      desc: 'Creating accessible, design-token-driven component libraries from Figma specs adopted across multiple teams.',
    },
    {
      icon: Workflow,
      title: 'Product Engineering',
      desc: 'Taking ambiguous business requirements and translating them into auditable, testable, and reliable software.',
    },
  ]

  return (
    <PageContainer>
      <SEOHead
        title="About"
        description="Learn about Imal Zaya Harahap's background, engineering philosophy, and architectural approach."
      />

      <PageHeader
        eyebrow="PROFILE & PHILOSOPHY"
        title="About Me"
        description="Senior Full-Stack Engineer and Product Architect focused on building resilient digital systems across fintech, banking, and modern web products."
      />

      <div className="py-12 space-y-16 sm:space-y-20">
        {/* Editorial Introduction */}
        <section className="space-y-6">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 flex items-center gap-2">
            <Compass className="w-5 h-5 text-indigo-500" />
            <span>Engineering Approach & Background</span>
          </h2>

          <div className="prose prose-neutral dark:prose-invert max-w-none text-sm sm:text-base text-neutral-700 dark:text-neutral-300 space-y-4 leading-relaxed">
            {profile.aboutBio.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          <div className="pt-2">
            <SocialLinks />
          </div>
        </section>

        {/* Engineering Principles */}
        <section className="space-y-8 pt-8 border-t border-neutral-200/80 dark:border-neutral-800/80">
          <div>
            <span className="text-xs font-semibold tracking-wider text-indigo-600 dark:text-indigo-400 uppercase">
              GUIDING VALUES
            </span>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 mt-1">
              Engineering Principles
            </h2>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
              The foundational heuristics I rely on when designing systems, reviewing code, and making trade-offs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {principles.map((principle, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/40 dark:bg-neutral-900/30 space-y-2"
              >
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                  <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                    {principle.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 pl-6 leading-relaxed">
                  {principle.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* What I Do */}
        <section className="space-y-8 pt-8 border-t border-neutral-200/80 dark:border-neutral-800/80">
          <div>
            <span className="text-xs font-semibold tracking-wider text-indigo-600 dark:text-indigo-400 uppercase">
              CAPABILITIES
            </span>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 mt-1">
              What I Deliver
            </h2>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
              Technical specializations cultivated through production experience.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {capabilities.map((cap, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900/50 space-y-2"
              >
                <div className="w-8 h-8 rounded-lg bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-indigo-500 mb-3">
                  <cap.icon className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-neutral-900 dark:text-neutral-100">
                  {cap.title}
                </h3>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {cap.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Education & Mentoring */}
        <section className="space-y-8 pt-8 border-t border-neutral-200/80 dark:border-neutral-800/80">
          <div>
            <span className="text-xs font-semibold tracking-wider text-indigo-600 dark:text-indigo-400 uppercase">
              BACKGROUND & INSTRUCTION
            </span>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 mt-1">
              Education & Mentorship
            </h2>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
              Formal academic foundation and contributions to developer education.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Education */}
            <div className="p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/40 dark:bg-neutral-900/40 space-y-3">
              <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400">
                <GraduationCap className="w-5 h-5" />
                <h3 className="text-base font-bold text-neutral-900 dark:text-neutral-100">
                  Academic Degree
                </h3>
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                  STMIK–STIE Mikroskil, Medan
                </h4>
                <p className="text-xs font-mono text-neutral-500">2013 – 2017</p>
                <p className="text-xs text-neutral-600 dark:text-neutral-300">
                  Bachelor of Science in Computer Science (Teknik Informatika)
                </p>
                <p className="pt-2 text-xs text-neutral-500 leading-relaxed">
                  <span className="font-semibold text-neutral-700 dark:text-neutral-300">Thesis: </span>
                  Password Security Using Elliptic Curve Digital Signature Algorithm (ECDSA) and LSB Range of Byte Steganography with Pyramid Structure.
                </p>
              </div>
            </div>

            {/* Mentorship & Certifications */}
            <div className="p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/40 dark:bg-neutral-900/40 space-y-4">
              <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400">
                <Users className="w-5 h-5" />
                <h3 className="text-base font-bold text-neutral-900 dark:text-neutral-100">
                  Instruction & Mentorship
                </h3>
              </div>

              <div className="space-y-3 text-xs text-neutral-600 dark:text-neutral-300">
                <div>
                  <h4 className="font-semibold text-neutral-900 dark:text-neutral-100">
                    Binus Center Medan
                  </h4>
                  <p className="text-neutral-500 font-mono text-[11px]">Sep 2025 – Nov 2025</p>
                  <p>Education Mentor — Mastering Frontend with React.js; Web Development Masterclass.</p>
                </div>

                <div>
                  <h4 className="font-semibold text-neutral-900 dark:text-neutral-100">
                    Alterra Academy
                  </h4>
                  <p className="text-neutral-500 font-mono text-[11px]">Aug 2022 – Oct 2022</p>
                  <p>Education Mentor — Top-Tier Fullstack Academy (TFA) x SOFCO.</p>
                </div>

                <div className="pt-2 border-t border-neutral-200/60 dark:border-neutral-800/60 flex items-center gap-2">
                  <Award className="w-4 h-4 text-amber-500 shrink-0" />
                  <span>Certification: Build Scalable Apps with Microfrontend Architecture (Udemy)</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageContainer>
  )
}
