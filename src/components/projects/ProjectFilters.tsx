import type { ProjectCategory } from '@/types/portfolio'

interface ProjectFiltersProps {
  categories: ProjectCategory[]
  selectedCategory: ProjectCategory
  onSelectCategory: (category: ProjectCategory) => void
  projectCounts: Record<string, number>
}

export function ProjectFilters({
  categories,
  selectedCategory,
  onSelectCategory,
  projectCounts,
}: ProjectFiltersProps) {
  return (
    <div className="flex flex-wrap items-center gap-2 mb-8" role="tablist" aria-label="Project Categories">
      {categories.map((category) => {
        const isSelected = selectedCategory === category
        const count = projectCounts[category] ?? 0

        return (
          <button
            key={category}
            role="tab"
            aria-selected={isSelected}
            onClick={() => onSelectCategory(category)}
            className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${
              isSelected
                ? 'bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-950 font-semibold shadow-xs'
                : 'bg-neutral-100/80 text-neutral-600 dark:bg-neutral-900 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-200/60 dark:hover:bg-neutral-800'
            }`}
          >
            <span>{category}</span>
            <span
              className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                isSelected
                  ? 'bg-neutral-800 text-neutral-300 dark:bg-neutral-200 dark:text-neutral-800'
                  : 'bg-neutral-200/80 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400'
              }`}
            >
              {count}
            </span>
          </button>
        )
      })}
    </div>
  )
}
