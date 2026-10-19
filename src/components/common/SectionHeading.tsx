import React from 'react'

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  description?: string
  action?: React.ReactNode
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  action,
  className = '',
}: SectionHeadingProps) {
  return (
    <div className={`flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-12 ${className}`}>
      <div className="max-w-2xl">
        {eyebrow && (
          <span className="block mb-2 text-xs font-semibold tracking-wider text-indigo-600 dark:text-indigo-400 uppercase">
            {eyebrow}
          </span>
        )}
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
          {title}
        </h2>
        {description && (
          <p className="mt-2 text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
            {description}
          </p>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  )
}
