import type { ProjectCategory, ProjectItem } from '@/types/portfolio'

export function getAvailableCategories(projects: ProjectItem[]): ProjectCategory[] {
  const allCategories: ProjectCategory[] = [
    'All Projects',
    'Web Applications',
    'Mobile Applications',
    'Full-Stack Applications',
    'Personal Projects',
  ]

  return allCategories.filter((cat) => {
    if (cat === 'All Projects') return true
    return projects.some((p) => p.category === cat)
  })
}
