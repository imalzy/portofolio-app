import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { X, ArrowRight } from 'lucide-react'
import { navigationRoutes } from '@/data/navigation'
import { SocialLinks } from '@/components/common/SocialLinks'
import { ThemeToggle } from '@/components/common/ThemeToggle'

interface MobileNavProps {
  isOpen: boolean
  onClose: () => void
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }

    if (isOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 md:hidden" role="dialog" aria-modal="true" aria-label="Mobile Navigation">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-neutral-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-white dark:bg-neutral-900 p-6 shadow-2xl flex flex-col justify-between border-l border-neutral-200 dark:border-neutral-800">
        <div>
          <div className="flex items-center justify-between pb-6 border-b border-neutral-100 dark:border-neutral-800">
            <span className="text-sm font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
              Navigation
            </span>
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <button
                type="button"
                onClick={onClose}
                aria-label="Close menu"
                className="p-2 text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          <nav className="mt-6 flex flex-col gap-1">
            {navigationRoutes.map((route) => (
              <NavLink
                key={route.path}
                to={route.path}
                onClick={onClose}
                className={({ isActive }) =>
                  `px-3 py-2.5 rounded-lg text-sm font-medium transition-colors flex items-center justify-between ${
                    isActive
                      ? 'bg-neutral-100 dark:bg-neutral-800 text-neutral-950 dark:text-white font-semibold'
                      : 'text-neutral-600 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-800/50 hover:text-neutral-900 dark:hover:text-neutral-100'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{route.label}</span>
                    {isActive && <ArrowRight className="w-3.5 h-3.5 text-indigo-500" />}
                  </>
                )}
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="pt-6 border-t border-neutral-100 dark:border-neutral-800 space-y-4">
          <NavLink
            to="/contact"
            onClick={onClose}
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-white bg-neutral-900 dark:bg-white dark:text-neutral-950 rounded-lg hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors shadow-sm"
          >
            Let's Talk
          </NavLink>
          <div className="pt-2">
            <SocialLinks />
          </div>
        </div>
      </div>
    </div>
  )
}
