import { Briefcase, ArrowUpRight } from 'lucide-react'
import { profile } from '@/data/profile'
import { SEOHead } from '@/components/common/SEOHead'
import { PageContainer } from '@/components/layout/PageContainer'
import { PageHeader } from '@/components/common/PageHeader'
import { ExperienceTimeline } from '@/components/experience/ExperienceTimeline'
import { ExternalLink } from '@/components/common/ExternalLink'

export function ExperiencePage() {
  return (
    <PageContainer>
      <SEOHead
        title="Experience"
        description="Detailed chronological track record of engineering leadership, production deliveries, and architectural contributions."
      />

      <PageHeader
        eyebrow="CAREER RECORD"
        title="Professional Experience"
        description="A timeline of full-stack engineering roles, technical architecture decisions, and measurable outcomes across banking, fintech, and digital products."
      >
        {profile.resumeUrl && (
          <ExternalLink
            href={profile.resumeUrl}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold text-neutral-900 dark:text-neutral-100 bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors border border-neutral-200 dark:border-neutral-700"
          >
            <Briefcase className="w-3.5 h-3.5" />
            <span>Download Resume PDF</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
          </ExternalLink>
        )}
      </PageHeader>

      <div className="py-12">
        <ExperienceTimeline />
      </div>
    </PageContainer>
  )
}
