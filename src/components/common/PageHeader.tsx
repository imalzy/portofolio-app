import React from 'react'

interface PageHeaderProps {
  eyebrow?: string
  title: string
  description?: string
  badge?: React.ReactNode
  children?: React.ReactNode
}

export function PageHeader({ eyebrow, title, description, badge, children }: PageHeaderProps) {
  return (
    <header className="pt-8 pb-10 sm:pt-12 sm:pb-14 border-b border-neutral-200 dark:border-neutral-800">
      <div className="max-w-3xl">
        <div className="flex flex-wrap items-center gap-3 mb-3">
          {eyebrow && (
            <span className="text-xs font-semibold tracking-wider text-indigo-600 dark:text-indigo-400 uppercase">
              {eyebrow}
            </span>
          )}
          {badge}
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50">
          {title}
        </h1>
        {description && (
          <p className="mt-4 text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
            {description}
          </p>
        )}
        {children && <div className="mt-6">{children}</div>}
      </div>
    </header>
  )
}
