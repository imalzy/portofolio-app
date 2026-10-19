import { Link } from 'react-router-dom'
import { profile } from '@/data/profile'
import { navigationRoutes } from '@/data/navigation'
import { SocialLinks } from '@/components/common/SocialLinks'

const currentYear = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="mt-auto border-t border-neutral-200 dark:border-neutral-800/80 bg-neutral-50/50 dark:bg-neutral-950/40 py-12 transition-colors">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Identity */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
              {profile.fullName}
            </h3>
            <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-sm">
              {profile.title}. Focused on resilient frontend architecture, full-stack product engineering, and scalable web platforms.
            </p>
            {profile.location && (
              <p className="text-xs text-neutral-500 dark:text-neutral-500">
                Based in {profile.location}
              </p>
            )}
          </div>

          {/* Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-900 dark:text-neutral-100">
              Navigation
            </h4>
            <ul className="space-y-2">
              {navigationRoutes.map((route) => (
                <li key={route.path}>
                  <Link
                    to={route.path}
                    className="text-xs text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white transition-colors"
                  >
                    {route.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-900 dark:text-neutral-100">
              Connect & Inquiries
            </h4>
            <p className="text-xs text-neutral-600 dark:text-neutral-400">
              Available for high-impact engineering projects, consulting, and full-time technical leadership.
            </p>
            <div className="pt-1">
              <SocialLinks iconOnly={false} />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-neutral-200/60 dark:border-neutral-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 dark:text-neutral-500">
          <p>© {currentYear} {profile.fullName}. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            <span>Built with React, TypeScript & Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
