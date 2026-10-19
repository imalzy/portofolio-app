import { Link } from 'react-router-dom'
import { ArrowUpRight, Code2, Layers } from 'lucide-react'
import type { ProjectItem } from '@/types/portfolio'
import { TechPill } from '@/components/skills/TechPill'
import { ExternalLink } from '@/components/common/ExternalLink'

interface ProjectCardProps {
  project: ProjectItem
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group flex flex-col justify-between rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/50 p-6 sm:p-7 transition-all duration-200 hover:border-neutral-300 dark:hover:border-neutral-700 hover:shadow-xs">
      <div>
        {/* Top meta */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className="text-xs font-mono font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
            {project.category}
          </span>
          {project.status && (
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] font-mono font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 border border-neutral-200/80 dark:border-neutral-700">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
              {project.status}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-50 tracking-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
          <Link to={`/projects/${project.slug}`} className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-xs">
            {project.name}
          </Link>
        </h3>

        {/* Role */}
        <p className="mt-1 text-xs font-medium text-indigo-600 dark:text-indigo-400">
          Role: {project.role}
        </p>

        {/* Summary */}
        <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
          {project.summary}
        </p>

        {/* Neutral intentional architecture placeholder preview */}
        <div className="mt-5 p-4 rounded-lg bg-neutral-50 dark:bg-neutral-950/60 border border-neutral-200/60 dark:border-neutral-800/60 text-xs text-neutral-500 dark:text-neutral-400 space-y-1.5">
          <div className="flex items-center gap-2 font-mono text-[11px] text-neutral-700 dark:text-neutral-300">
            <Layers className="w-3.5 h-3.5 text-indigo-500" />
            <span>Architecture & System Highlights</span>
          </div>
          <p className="line-clamp-2 text-[12px] leading-relaxed">
            {project.caseStudy?.architectureAndDecisions?.[0]?.description || project.description}
          </p>
        </div>

        {/* Technologies */}
        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 5).map((tech) => (
            <TechPill key={tech} name={tech} size="sm" />
          ))}
          {project.technologies.length > 5 && (
            <span className="text-[11px] font-mono text-neutral-400 self-center pl-1">
              +{project.technologies.length - 5} more
            </span>
          )}
        </div>
      </div>

      {/* Action footer */}
      <div className="mt-6 pt-4 border-t border-neutral-100 dark:border-neutral-800/80 flex items-center justify-between gap-4">
        <Link
          to={`/projects/${project.slug}`}
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-neutral-900 dark:text-neutral-100 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
        >
          <span>View Case Study</span>
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>

        <div className="flex items-center gap-3">
          {project.liveUrl && (
            <ExternalLink
              href={project.liveUrl}
              className="text-xs text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-200 transition-colors"
            >
              Live Site
            </ExternalLink>
          )}
          {project.repositoryUrl && (
            <ExternalLink
              href={project.repositoryUrl}
              className="inline-flex items-center gap-1 text-xs text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-200 transition-colors"
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>Source</span>
            </ExternalLink>
          )}
        </div>
      </div>
    </article>
  )
}
