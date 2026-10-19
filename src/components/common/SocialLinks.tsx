import { Mail, Globe } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './Icons'
import { socialLinks } from '@/data/socialLinks'
import { ExternalLink } from './ExternalLink'

interface SocialLinksProps {
  className?: string
  iconOnly?: boolean
  showLabels?: boolean
}

export function SocialLinks({ className = '', iconOnly = false, showLabels = true }: SocialLinksProps) {
  const visibleLinks = socialLinks.filter((link) => link.visible && Boolean(link.url))

  if (visibleLinks.length === 0) return null

  const getIcon = (platform: string) => {
    switch (platform) {
      case 'github':
        return <GithubIcon className="w-4 h-4" aria-hidden="true" />
      case 'linkedin':
        return <LinkedinIcon className="w-4 h-4" aria-hidden="true" />
      case 'email':
        return <Mail className="w-4 h-4" aria-hidden="true" />
      default:
        return <Globe className="w-4 h-4" aria-hidden="true" />
    }
  }

  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      {visibleLinks.map((link) => (
        <ExternalLink
          key={link.id}
          href={link.url}
          aria-label={link.label}
          className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-neutral-600 dark:text-neutral-400 bg-neutral-100/80 dark:bg-neutral-800/80 hover:text-neutral-900 dark:hover:text-white border border-neutral-200/80 dark:border-neutral-700/80 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
        >
          {getIcon(link.platform)}
          {(!iconOnly || showLabels) && <span>{link.label}</span>}
        </ExternalLink>
      ))}
    </div>
  )
}
