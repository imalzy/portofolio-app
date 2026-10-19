import { Link } from 'react-router-dom'
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink as ExternalIcon,
  Code2,
  CheckCircle2,
  Target,
  AlertTriangle,
  Lightbulb,
  Cpu,
  Trophy,
} from 'lucide-react'
import type { ProjectItem } from '@/types/portfolio'
import { projects } from '@/data/projects'
import { ExternalLink } from '@/components/common/ExternalLink'
import { TechPill } from '@/components/skills/TechPill'

interface ProjectCaseStudyProps {
  project: ProjectItem
}

export function ProjectCaseStudy({ project }: ProjectCaseStudyProps) {
  const cs = project.caseStudy

  // Resolve related projects
  const relatedProjects = (cs?.relatedProjectSlugs || [])
    .map((slug) => projects.find((p) => p.slug === slug))
    .filter((p): p is ProjectItem => Boolean(p))

  return (
    <article className="max-w-4xl mx-auto space-y-12 sm:space-y-16">
      {/* Back Link */}
      <div>
        <Link
          to="/projects"
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Projects</span>
        </Link>
      </div>

      {/* Header Banner */}
      <header className="space-y-6 pb-8 border-b border-neutral-200 dark:border-neutral-800">
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
            {project.category}
          </span>
          {project.status && (
            <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20">
              {project.status}
            </span>
          )}
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-950 dark:text-neutral-50 leading-tight">
          {project.name}
        </h1>

        <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
          {project.summary}
        </p>

        {/* Quick meta grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-5 rounded-xl bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200/80 dark:border-neutral-800 text-xs">
          <div>
            <span className="font-semibold text-neutral-500 dark:text-neutral-400 block uppercase tracking-wider mb-1">
              Engineering Role
            </span>
            <span className="font-medium text-neutral-900 dark:text-neutral-100">
              {project.role}
            </span>
          </div>

          <div>
            <span className="font-semibold text-neutral-500 dark:text-neutral-400 block uppercase tracking-wider mb-1">
              Primary Technologies
            </span>
            <div className="flex flex-wrap gap-1 mt-1">
              {project.technologies.map((t) => (
                <span key={t} className="font-mono text-[11px] text-neutral-700 dark:text-neutral-300">
                  {t} ·
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Action Buttons (Rendered only when valid URLs exist) */}
        {(project.liveUrl || project.repositoryUrl || project.docUrl) && (
          <div className="flex flex-wrap items-center gap-3 pt-2">
            {project.liveUrl && (
              <ExternalLink
                href={project.liveUrl}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium rounded-lg bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors shadow-xs"
              >
                <span>Live Site</span>
                <ExternalIcon className="w-3.5 h-3.5" />
              </ExternalLink>
            )}

            {project.repositoryUrl && (
              <ExternalLink
                href={project.repositoryUrl}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium rounded-lg bg-neutral-100 text-neutral-900 dark:bg-neutral-800 dark:text-neutral-100 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors border border-neutral-200 dark:border-neutral-700"
              >
                <Code2 className="w-3.5 h-3.5" />
                <span>Source Code</span>
              </ExternalLink>
            )}

            {project.docUrl && (
              <ExternalLink
                href={project.docUrl}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium rounded-lg bg-neutral-100 text-neutral-900 dark:bg-neutral-800 dark:text-neutral-100 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors border border-neutral-200 dark:border-neutral-700"
              >
                <span>Documentation</span>
                <ExternalIcon className="w-3.5 h-3.5" />
              </ExternalLink>
            )}
          </div>
        )}
      </header>

      {/* Case study content */}
      {cs ? (
        <div className="space-y-12 sm:space-y-16">
          {/* 1. Overview */}
          {cs.overview && (
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-neutral-100 tracking-tight">
                1. Overview
              </h2>
              <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
                {cs.overview}
              </p>
            </section>
          )}

          {/* 2. Problem and Context */}
          {cs.problemAndContext && (
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-neutral-100 tracking-tight">
                2. Problem & Context
              </h2>
              <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
                {cs.problemAndContext}
              </p>
            </section>
          )}

          {/* 3. Product Goals */}
          {cs.productGoals && cs.productGoals.length > 0 && (
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-neutral-100 tracking-tight flex items-center gap-2">
                <Target className="w-5 h-5 text-indigo-500" />
                <span>3. Product Goals</span>
              </h2>
              <ul className="space-y-2.5">
                {cs.productGoals.map((goal, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-neutral-700 dark:text-neutral-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{goal}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* 4. My Role */}
          {cs.myRole && (
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-neutral-100 tracking-tight">
                4. My Role & Ownership
              </h2>
              <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
                {cs.myRole}
              </p>
            </section>
          )}

          {/* 5. Technical Challenges */}
          {cs.technicalChallenges && cs.technicalChallenges.length > 0 && (
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-neutral-100 tracking-tight flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-amber-500" />
                <span>5. Technical Challenges</span>
              </h2>
              <div className="space-y-3">
                {cs.technicalChallenges.map((challenge, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-lg bg-amber-50/40 dark:bg-amber-950/20 border border-amber-200/50 dark:border-amber-900/30 text-xs sm:text-sm text-neutral-800 dark:text-neutral-200 leading-relaxed"
                  >
                    {challenge}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* 6. Architecture & Technical Decisions */}
          {cs.architectureAndDecisions && cs.architectureAndDecisions.length > 0 && (
            <section className="space-y-6">
              <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-neutral-100 tracking-tight flex items-center gap-2">
                <Cpu className="w-5 h-5 text-indigo-500" />
                <span>6. Architecture & Technical Decisions</span>
              </h2>
              <div className="space-y-4">
                {cs.architectureAndDecisions.map((dec, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 space-y-2"
                  >
                    <h3 className="text-base font-semibold text-neutral-900 dark:text-neutral-100">
                      {dec.title}
                    </h3>
                    <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                      {dec.description}
                    </p>
                    {dec.tradeoffs && (
                      <p className="pt-2 text-xs font-mono text-neutral-500 dark:text-neutral-400 border-t border-neutral-200/60 dark:border-neutral-800/60">
                        <span className="font-semibold text-neutral-700 dark:text-neutral-300">Trade-offs considered: </span>
                        {dec.tradeoffs}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* 7. Implementation */}
          {cs.implementation && cs.implementation.length > 0 && (
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-neutral-100 tracking-tight">
                7. Implementation Highlights
              </h2>
              <ul className="space-y-2 text-sm text-neutral-700 dark:text-neutral-300 list-disc list-outside pl-5">
                {cs.implementation.map((item, idx) => (
                  <li key={idx} className="leading-relaxed pl-1">
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* 8. Key Features */}
          {cs.keyFeatures && cs.keyFeatures.length > 0 && (
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-neutral-100 tracking-tight">
                8. Key Features
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {cs.keyFeatures.map((feature, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-lg border border-neutral-200/70 dark:border-neutral-800/80 bg-white dark:bg-neutral-900 text-xs sm:text-sm text-neutral-800 dark:text-neutral-200"
                  >
                    • {feature}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* 9. Results & Impact */}
          {cs.resultsAndImpact && cs.resultsAndImpact.length > 0 && (
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-neutral-100 tracking-tight flex items-center gap-2">
                <Trophy className="w-5 h-5 text-indigo-500" />
                <span>9. Results & Verified Impact</span>
              </h2>
              <div className="p-5 rounded-xl bg-emerald-50/40 dark:bg-emerald-950/20 border border-emerald-200/60 dark:border-emerald-900/30 space-y-2.5">
                {cs.resultsAndImpact.map((result, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-emerald-950 dark:text-emerald-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{result}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* 10. Lessons Learned */}
          {cs.lessonsLearned && cs.lessonsLearned.length > 0 && (
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-neutral-100 tracking-tight flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-indigo-500" />
                <span>10. Lessons Learned</span>
              </h2>
              <div className="space-y-3">
                {cs.lessonsLearned.map((lesson, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-lg bg-neutral-100/60 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed"
                  >
                    {lesson}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* 11. Technology Stack Breakdown */}
          <section className="space-y-4 pt-4 border-t border-neutral-200 dark:border-neutral-800">
            <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-neutral-100 tracking-tight">
              11. Full Technology Stack
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <TechPill key={t} name={t} size="md" />
              ))}
            </div>
          </section>

          {/* 12. Related Projects */}
          {relatedProjects.length > 0 && (
            <section className="space-y-6 pt-8 border-t border-neutral-200 dark:border-neutral-800">
              <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-neutral-100 tracking-tight">
                12. Related Case Studies
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {relatedProjects.map((rel) => (
                  <Link
                    key={rel.id}
                    to={`/projects/${rel.slug}`}
                    className="group p-5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/40 dark:bg-neutral-900/40 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors"
                  >
                    <span className="text-[11px] font-mono text-neutral-500 dark:text-neutral-400 uppercase tracking-wider block mb-1">
                      {rel.category}
                    </span>
                    <h4 className="text-sm font-bold text-neutral-900 dark:text-neutral-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors flex items-center justify-between">
                      <span>{rel.name}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </h4>
                    <p className="mt-2 text-xs text-neutral-600 dark:text-neutral-400 line-clamp-2">
                      {rel.summary}
                    </p>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      ) : (
        <div className="p-8 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 text-center space-y-3">
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            {project.description}
          </p>
          <div className="flex flex-wrap justify-center gap-1.5 pt-2">
            {project.technologies.map((t) => (
              <TechPill key={t} name={t} />
            ))}
          </div>
        </div>
      )}
    </article>
  )
}
