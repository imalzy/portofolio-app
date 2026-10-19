import type { ProjectItem } from '@/types/portfolio'
import { ProjectCard } from './ProjectCard'

interface ProjectGridProps {
  projects: ProjectItem[]
  emptyMessage?: string
}

export function ProjectGrid({
  projects,
  emptyMessage = 'No projects found in this category.',
}: ProjectGridProps) {
  if (projects.length === 0) {
    return (
      <div className="text-center py-16 px-4 rounded-xl border border-dashed border-neutral-200 dark:border-neutral-800">
        <p className="text-sm text-neutral-500 dark:text-neutral-400">{emptyMessage}</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  )
}
