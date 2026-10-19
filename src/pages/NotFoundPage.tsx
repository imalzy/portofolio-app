import { Link } from 'react-router-dom'
import { Home, ArrowLeft } from 'lucide-react'
import { SEOHead } from '@/components/common/SEOHead'
import { PageContainer } from '@/components/layout/PageContainer'

export function NotFoundPage() {
  return (
    <PageContainer>
      <SEOHead title="Page Not Found" />

      <div className="py-24 sm:py-32 text-center max-w-lg mx-auto space-y-6">
        <span className="font-mono text-5xl sm:text-6xl font-extrabold text-neutral-300 dark:text-neutral-700 block">
          404
        </span>

        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
          Page Not Found
        </h1>

        <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
          The page or route you are attempting to reach does not exist, has been relocated, or is temporarily unavailable.
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold text-white bg-neutral-900 dark:bg-white dark:text-neutral-950 hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors shadow-xs"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>

          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold text-neutral-800 dark:text-neutral-200 bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors border border-neutral-200 dark:border-neutral-700"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Explore Projects</span>
          </Link>
        </div>
      </div>
    </PageContainer>
  )
}
