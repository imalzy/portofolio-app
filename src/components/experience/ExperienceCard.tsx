import { Building2, Calendar, MapPin, Award } from 'lucide-react'
import type { ExperienceRecord } from '@/types/portfolio'
import { formatDateRange } from '@/lib/utils'
import { ExternalLink } from '@/components/common/ExternalLink'
import { TechPill } from '@/components/skills/TechPill'

interface ExperienceCardProps {
  record: ExperienceRecord
  compact?: boolean
}

export function ExperienceCard({ record, compact = false }: ExperienceCardProps) {
  return (
    <article className="group relative rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/50 p-6 sm:p-7 transition-all duration-200 hover:border-neutral-300 dark:hover:border-neutral-700">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 sm:gap-4 pb-4 border-b border-neutral-100 dark:border-neutral-800/80">
        <div>
          <h3 className="text-lg font-semibold text-neutral-950 dark:text-neutral-50 flex items-center gap-2">
            <span>{record.position}</span>
            {record.isCurrent && (
              <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                Current
              </span>
            )}
          </h3>

          <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-neutral-600 dark:text-neutral-400">
            <span className="font-medium text-neutral-900 dark:text-neutral-200 flex items-center gap-1.5">
              <Building2 className="w-3.5 h-3.5 opacity-70" />
              {record.companyUrl ? (
                <ExternalLink href={record.companyUrl} showIcon className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  {record.company}
                </ExternalLink>
              ) : (
                record.company
              )}
            </span>

            {record.location && (
              <span className="hidden sm:inline-flex items-center gap-1 text-xs text-neutral-500">
                <MapPin className="w-3 h-3 opacity-60" />
                {record.location}
              </span>
            )}
          </div>
        </div>

        <div className="flex items-center gap-1.5 text-xs font-mono text-neutral-500 dark:text-neutral-400 shrink-0">
          <Calendar className="w-3.5 h-3.5 opacity-70" />
          <span>{formatDateRange(record.startDate, record.endDate, record.isCurrent)}</span>
        </div>
      </div>

      {/* Product / Business Context */}
      <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
        {record.productContext}
      </p>

      {/* Engineering Contributions & Accomplishments */}
      {!compact && record.contributions.length > 0 && (
        <div className="mt-5 space-y-2">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
            Key Engineering Contributions
          </h4>
          <ul className="space-y-2 text-sm text-neutral-700 dark:text-neutral-300 list-disc list-outside pl-4">
            {record.contributions.map((contribution, idx) => (
              <li key={idx} className="leading-relaxed pl-1">
                {contribution}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Verified Achievements */}
      {!compact && record.achievements && record.achievements.length > 0 && (
        <div className="mt-4 p-3 rounded-lg bg-indigo-50/50 dark:bg-indigo-950/20 border border-indigo-100 dark:border-indigo-900/30">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-indigo-700 dark:text-indigo-400 mb-1">
            <Award className="w-3.5 h-3.5" />
            <span>Verified Impact & Metrics</span>
          </div>
          <ul className="space-y-1 text-xs text-indigo-950 dark:text-indigo-200">
            {record.achievements.map((item, idx) => (
              <li key={idx}>• {item}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Tech Stack */}
      <div className="mt-5 pt-4 border-t border-neutral-100 dark:border-neutral-800/80 flex flex-wrap gap-1.5">
        {record.technologies.map((tech) => (
          <TechPill key={tech} name={tech} size="sm" />
        ))}
      </div>
    </article>
  )
}
