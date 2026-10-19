import type { SkillCategory } from '@/types/portfolio'
import { TechPill } from './TechPill'

interface SkillGroupProps {
  category: SkillCategory
}

export function SkillGroup({ category }: SkillGroupProps) {
  return (
    <div className="p-5 sm:p-6 rounded-xl border border-neutral-200/80 dark:border-neutral-800/80 bg-neutral-50/40 dark:bg-neutral-900/40 transition-colors">
      <h3 className="text-base font-semibold text-neutral-900 dark:text-neutral-100">
        {category.name}
      </h3>
      <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">
        {category.description}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <TechPill key={skill} name={skill} />
        ))}
      </div>
    </div>
  )
}
