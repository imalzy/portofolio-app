import { useMemo, useState } from 'react'
import { Search } from 'lucide-react'
import type { ProjectCategory } from '@/types/portfolio'
import { projects } from '@/data/projects'
import { SEOHead } from '@/components/common/SEOHead'
import { PageContainer } from '@/components/layout/PageContainer'
import { PageHeader } from '@/components/common/PageHeader'
import { ProjectFilters } from '@/components/projects/ProjectFilters'
import { getAvailableCategories } from '@/lib/project-utils'
import { ProjectGrid } from '@/components/projects/ProjectGrid'

export function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All Projects')
  const [searchQuery, setSearchQuery] = useState('')

  // Dynamically calculate only categories that have configured projects
  const availableCategories = useMemo(() => getAvailableCategories(projects), [])

  // Calculate project counts per category
  const projectCounts = useMemo(() => {
    const counts: Record<string, number> = {
      'All Projects': projects.length,
    }
    projects.forEach((p) => {
      counts[p.category] = (counts[p.category] || 0) + 1
    })
    return counts
  }, [])

  // Filter projects based on category and search query
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        selectedCategory === 'All Projects' || project.category === selectedCategory

      const matchesSearch =
        !searchQuery.trim() ||
        project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.technologies.some((t) =>
          t.toLowerCase().includes(searchQuery.toLowerCase())
        )

      return matchesCategory && matchesSearch
    })
  }, [selectedCategory, searchQuery])

  return (
    <PageContainer>
      <SEOHead
        title="Projects & Architecture"
        description="A directory of software engineering projects, system architectures, and technical case studies by Imal Zaya Harahap."
      />

      <PageHeader
        eyebrow="ENGINEERING PORTFOLIO"
        title="Projects & Case Studies"
        description="Real production systems, enterprise banking platforms, and full-stack applications with deep architectural breakdowns."
      />

      <div className="py-10 space-y-8">
        {/* Search Bar & Category Filters */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <ProjectFilters
            categories={availableCategories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            projectCounts={projectCounts}
          />

          {/* Quick Search */}
          <div className="relative w-full md:w-64 mb-8 md:mb-0">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search tech, stack..."
              className="w-full pl-9 pr-3.5 py-1.5 text-xs rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 transition-colors"
            />
          </div>
        </div>

        {/* Project Grid */}
        <ProjectGrid
          projects={filteredProjects}
          emptyMessage={
            searchQuery
              ? `No projects matched "${searchQuery}". Try clearing your search.`
              : 'No projects found in this category.'
          }
        />
      </div>
    </PageContainer>
  )
}
