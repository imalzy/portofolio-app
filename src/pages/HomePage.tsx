import { Link } from 'react-router-dom'
import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  Cpu,
  Layers,
  Users2,
  Sparkles,
} from 'lucide-react'
import { profile } from '@/data/profile'
import { projects } from '@/data/projects'
import { skillCategories } from '@/data/skills'
import { socialLinks } from '@/data/socialLinks'
import { SEOHead } from '@/components/common/SEOHead'
import { PageContainer } from '@/components/layout/PageContainer'
import { StatusBadge } from '@/components/common/StatusBadge'
import { SectionHeading } from '@/components/common/SectionHeading'
import { SocialLinks } from '@/components/common/SocialLinks'
import { ProjectCard } from '@/components/projects/ProjectCard'
import { ExperienceTimeline } from '@/components/experience/ExperienceTimeline'
import { SkillGroup } from '@/components/skills/SkillGroup'
import { ExternalLink } from '@/components/common/ExternalLink'

export function HomePage() {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 4)
  const linkedin = socialLinks.find((s) => s.platform === 'linkedin')

  const highlights = [
    {
      icon: Layers,
      title: 'Product Development',
      description:
        'Building complete web and mobile products from ground-zero implementation to production delivery.',
    },
    {
      icon: Cpu,
      title: 'Frontend Architecture',
      description:
        'Establishing scalable directory structures, headless component systems, and maintainable UI foundations.',
    },
    {
      icon: Code2,
      title: 'API Integration',
      description:
        'Connecting frontend applications with REST/realtime backends, handling asynchronous states defensively.',
    },
    {
      icon: Users2,
      title: 'Cross-functional Leadership',
      description:
        'Collaborating directly with product designers, managers, and backend engineers in agile sprints.',
    },
  ]

  return (
    <PageContainer>
      <SEOHead title="Home" />

      {/* Hero Section */}
      <section className="pt-6 pb-16 sm:pt-12 sm:pb-24 border-b border-neutral-200/80 dark:border-neutral-800/80">
        <div className="max-w-3xl space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-semibold tracking-wider text-indigo-600 dark:text-indigo-400 uppercase">
              {profile.eyebrow}
            </span>
            {profile.availability && (
              <StatusBadge label={profile.availability} variant="success" />
            )}
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-950 dark:text-neutral-50 leading-[1.12]">
            {profile.headline}
          </h1>

          <p className="text-base sm:text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed font-normal">
            {profile.shortBio}
          </p>

          {/* Call to Actions */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-neutral-900 dark:bg-white dark:text-neutral-950 hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors shadow-xs"
            >
              <span>Explore My Work</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-neutral-800 dark:text-neutral-200 bg-neutral-100 dark:bg-neutral-900 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors border border-neutral-200 dark:border-neutral-800"
            >
              <span>Get in Touch</span>
            </Link>

            {profile.resumeUrl && (
              <ExternalLink
                href={profile.resumeUrl}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
              >
                <span>Resume (PDF)</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </ExternalLink>
            )}
          </div>

          {/* Social Links */}
          <div className="pt-4 border-t border-neutral-100 dark:border-neutral-900">
            <SocialLinks />
          </div>
        </div>
      </section>

      {/* Professional Focus Highlights */}
      <section className="py-14 sm:py-20 border-b border-neutral-200/80 dark:border-neutral-800/80">
        <SectionHeading
          eyebrow="ENGINEERING CAPABILITIES"
          title="Core Architectural Focus"
          description="Disciplined engineering practices applied from initial prototype to enterprise scale."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl border border-neutral-200/70 dark:border-neutral-800/70 bg-neutral-50/40 dark:bg-neutral-900/30 transition-colors"
            >
              <div className="w-9 h-9 rounded-lg bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-neutral-900 dark:text-neutral-100 mb-4">
                <item.icon className="w-4 h-4 text-indigo-500" />
              </div>
              <h3 className="text-base font-semibold text-neutral-900 dark:text-neutral-100">
                {item.title}
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-14 sm:py-20 border-b border-neutral-200/80 dark:border-neutral-800/80">
        <SectionHeading
          eyebrow="TECHNICAL PORTFOLIO"
          title="Featured Production Work"
          description="Engineering case studies illustrating architecture decisions, trade-offs, and verified impact."
          action={
            <Link
              to="/projects"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-neutral-900 dark:text-neutral-100 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* Experience Preview */}
      <section className="py-14 sm:py-20 border-b border-neutral-200/80 dark:border-neutral-800/80">
        <SectionHeading
          eyebrow="CAREER TIMELINE"
          title="Professional Experience"
          description="A track record of designing and delivering production systems across banking, fintech, and digital products."
          action={
            <Link
              to="/experience"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-neutral-900 dark:text-neutral-100 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              <span>Full Experience History</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          }
        />

        <ExperienceTimeline limit={3} compact={true} />
      </section>

      {/* Technical Focus Matrix */}
      <section className="py-14 sm:py-20 border-b border-neutral-200/80 dark:border-neutral-800/80">
        <SectionHeading
          eyebrow="SKILLS & PROFICIENCY"
          title="Technical Focus & Tooling"
          description="Technologies and architectural patterns utilized to build scalable, maintainable products."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {skillCategories.map((category) => (
            <SkillGroup key={category.id} category={category} />
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 sm:py-24 text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="inline-flex items-center justify-center p-2 rounded-full bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 mb-2">
            <Sparkles className="w-4 h-4" />
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-100">
            Have a product to build or an engineering challenge to solve?
          </h2>

          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
            I'm open to discussing software projects, engineering opportunities, and technical collaborations.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold text-white bg-neutral-900 dark:bg-white dark:text-neutral-950 hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors shadow-xs"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            {linkedin && (
              <ExternalLink
                href={linkedin.url}
                showIcon
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold text-neutral-800 dark:text-neutral-200 bg-neutral-100 dark:bg-neutral-900 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors border border-neutral-200 dark:border-neutral-800"
              >
                <span>Connect on LinkedIn</span>
              </ExternalLink>
            )}
          </div>
        </div>
      </section>
    </PageContainer>
  )
}
