import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, AlertCircle } from 'lucide-react'
import { projects } from '@/data/projects'
import { SEOHead } from '@/components/common/SEOHead'
import { PageContainer } from '@/components/layout/PageContainer'
import { ProjectCaseStudy } from '@/components/projects/ProjectCaseStudy'

export function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return (
      <PageContainer>
        <SEOHead title="Project Not Found" />
        <div className="py-24 text-center max-w-md mx-auto space-y-4">
          <div className="w-12 h-12 rounded-full bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 mx-auto flex items-center justify-center">
            <AlertCircle className="w-6 h-6" />
          </div>
          <h1 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
            Case Study Not Found
          </h1>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
            The project case study you requested for "{slug}" does not exist or may have been renamed.
          </p>
          <div className="pt-2">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold text-white bg-neutral-900 dark:bg-white dark:text-neutral-950 hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors shadow-xs"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Projects Directory</span>
            </Link>
          </div>
        </div>
      </PageContainer>
    )
  }

  return (
    <PageContainer>
      <SEOHead
        title={project.name}
        description={project.summary}
        ogType="article"
        keywords={[...project.technologies, project.category, 'Software Engineering Case Study']}
      />

      <div className="py-6 sm:py-10">
        <ProjectCaseStudy project={project} />
      </div>
    </PageContainer>
  )
}
