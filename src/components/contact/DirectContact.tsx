import { Mail, MapPin, Phone, Clock } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/common/Icons'
import { profile } from '@/data/profile'
import { socialLinks } from '@/data/socialLinks'
import { ExternalLink } from '@/components/common/ExternalLink'

export function DirectContact() {
  const linkedin = socialLinks.find((s) => s.platform === 'linkedin')
  const github = socialLinks.find((s) => s.platform === 'github')

  return (
    <div className="space-y-6">
      <div className="p-6 sm:p-7 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 space-y-5">
        <div>
          <h3 className="text-base font-bold text-neutral-900 dark:text-neutral-100">
            Direct Reach & Information
          </h3>
          <p className="mt-1 text-xs text-neutral-600 dark:text-neutral-400">
            Prefer direct channels? Reach out through any of the following verified touchpoints:
          </p>
        </div>

        <div className="space-y-4 text-xs sm:text-sm">
          {profile.email && (
            <div className="flex items-start gap-3">
              <Mail className="w-4 h-4 text-neutral-500 dark:text-neutral-400 shrink-0 mt-0.5" />
              <div>
                <span className="block text-[11px] font-semibold uppercase tracking-wider text-neutral-500">
                  Email
                </span>
                <ExternalLink
                  href={`mailto:${profile.email}`}
                  className="font-medium text-neutral-900 dark:text-neutral-100 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  {profile.email}
                </ExternalLink>
              </div>
            </div>
          )}

          {profile.phone && (
            <div className="flex items-start gap-3">
              <Phone className="w-4 h-4 text-neutral-500 dark:text-neutral-400 shrink-0 mt-0.5" />
              <div>
                <span className="block text-[11px] font-semibold uppercase tracking-wider text-neutral-500">
                  Phone / WhatsApp
                </span>
                <ExternalLink
                  href={`tel:${profile.phone.replace(/\s+/g, '')}`}
                  className="font-medium text-neutral-900 dark:text-neutral-100 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  {profile.phone}
                </ExternalLink>
              </div>
            </div>
          )}

          {linkedin && (
            <div className="flex items-start gap-3">
              <LinkedinIcon className="w-4 h-4 text-neutral-500 dark:text-neutral-400 shrink-0 mt-0.5" />
              <div>
                <span className="block text-[11px] font-semibold uppercase tracking-wider text-neutral-500">
                  LinkedIn
                </span>
                <ExternalLink
                  href={linkedin.url}
                  showIcon
                  className="font-medium text-neutral-900 dark:text-neutral-100 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  {linkedin.handle || 'in/imalzy'}
                </ExternalLink>
              </div>
            </div>
          )}

          {github && (
            <div className="flex items-start gap-3">
              <GithubIcon className="w-4 h-4 text-neutral-500 dark:text-neutral-400 shrink-0 mt-0.5" />
              <div>
                <span className="block text-[11px] font-semibold uppercase tracking-wider text-neutral-500">
                  GitHub
                </span>
                <ExternalLink
                  href={github.url}
                  showIcon
                  className="font-medium text-neutral-900 dark:text-neutral-100 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  {github.handle || 'github.com/imalzy'}
                </ExternalLink>
              </div>
            </div>
          )}

          {profile.location && (
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-neutral-500 dark:text-neutral-400 shrink-0 mt-0.5" />
              <div>
                <span className="block text-[11px] font-semibold uppercase tracking-wider text-neutral-500">
                  Location
                </span>
                <span className="text-neutral-700 dark:text-neutral-300">
                  {profile.location} (UTC+7 / WIB)
                </span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Response SLA / Availability note */}
      <div className="p-5 rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900/30 flex items-start gap-3 text-xs text-neutral-600 dark:text-neutral-400">
        <Clock className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
        <p className="leading-relaxed">
          I typically respond within 24 business hours. For urgent technical discussions, reach out directly via LinkedIn or email with a project brief.
        </p>
      </div>
    </div>
  )
}
