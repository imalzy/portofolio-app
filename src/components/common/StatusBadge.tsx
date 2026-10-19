interface StatusBadgeProps {
  label: string
  variant?: 'success' | 'neutral' | 'indigo'
  className?: string
}

export function StatusBadge({ label, variant = 'success', className = '' }: StatusBadgeProps) {
  const styles = {
    success: 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/20',
    neutral: 'bg-neutral-100 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300 border-neutral-200 dark:border-neutral-700',
    indigo: 'bg-indigo-500/10 text-indigo-700 dark:text-indigo-400 border-indigo-500/20',
  }

  const dotStyles = {
    success: 'bg-emerald-500',
    neutral: 'bg-neutral-400',
    indigo: 'bg-indigo-500',
  }

  return (
    <span
      className={`inline-flex items-center gap-2 px-2.5 py-1 text-xs font-medium border rounded-full ${styles[variant]} ${className}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${dotStyles[variant]}`} />
      <span>{label}</span>
    </span>
  )
}
