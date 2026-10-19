import { describe, it, expect } from 'vitest'
import { projects } from '@/data/projects'
import { getAvailableCategories } from '@/lib/project-utils'

describe('Project Data Integrity & Filtering', () => {
  it('ensures every project has a unique slug and id', () => {
    const ids = projects.map((p) => p.id)
    const slugs = projects.map((p) => p.slug)

    const uniqueIds = new Set(ids)
    const uniqueSlugs = new Set(slugs)

    expect(uniqueIds.size).toBe(projects.length)
    expect(uniqueSlugs.size).toBe(projects.length)
  })

  it('ensures all projects have required non-empty fields', () => {
    projects.forEach((project) => {
      expect(project.name.trim()).not.toBe('')
      expect(project.slug.trim()).not.toBe('')
      expect(project.summary.trim()).not.toBe('')
      expect(project.category).toBeDefined()
      expect(project.technologies.length).toBeGreaterThan(0)
    })
  })

  it('dynamically computes available categories based on active projects', () => {
    const categories = getAvailableCategories(projects)

    expect(categories).toContain('All Projects')
    expect(categories).toContain('Web Applications')
    expect(categories).toContain('Full-Stack Applications')
  })

  it('filters projects accurately by category', () => {
    const webProjects = projects.filter((p) => p.category === 'Web Applications')
    const fullStackProjects = projects.filter((p) => p.category === 'Full-Stack Applications')

    expect(webProjects.length).toBeGreaterThan(0)
    expect(fullStackProjects.length).toBeGreaterThan(0)

    webProjects.forEach((p) => {
      expect(p.category).toBe('Web Applications')
    })
  })

  it('resolves key case study project slugs correctly', () => {
    const bankMandiri = projects.find((p) => p.slug === 'bank-mandiri-digital-onboarding')
    const paperId = projects.find((p) => p.slug === 'paper-id-kyc-redesign')
    const weddingMarket = projects.find((p) => p.slug === 'wedding-market-platform')
    const ledgerOne = projects.find((p) => p.slug === 'ledger-one-core')

    expect(bankMandiri).toBeDefined()
    expect(bankMandiri?.caseStudy?.architectureAndDecisions.length).toBeGreaterThan(0)

    expect(paperId).toBeDefined()
    expect(paperId?.caseStudy?.productGoals.length).toBeGreaterThan(0)

    expect(weddingMarket).toBeDefined()
    expect(weddingMarket?.caseStudy?.resultsAndImpact.length).toBeGreaterThan(0)

    expect(ledgerOne).toBeDefined()
    expect(ledgerOne?.caseStudy?.technicalChallenges.length).toBeGreaterThan(0)
  })
})
