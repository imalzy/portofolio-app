interface TechPillProps {
  name: string
  size?: 'sm' | 'md'
  className?: string
}

export function TechPill({ name, size = 'sm', className = '' }: TechPillProps) {
  const sizeClasses = {
    sm: 'text-xs px-2.5 py-1',
    md: 'text-xs sm:text-sm px-3 py-1.5',
  }

  return (
    <span
      className={`inline-flex items-center font-mono font-medium rounded-md bg-neutral-100 dark:bg-neutral-800/80 text-neutral-800 dark:text-neutral-300 border border-neutral-200/80 dark:border-neutral-700/60 ${sizeClasses[size]} ${className}`}
    >
      {name}
    </span>
  )
}
