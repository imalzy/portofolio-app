export type ProjectCategory =
  | 'All Projects'
  | 'Web Applications'
  | 'Mobile Applications'
  | 'Full-Stack Applications'
  | 'Personal Projects'

export interface Profile {
  fullName: string
  displayName: string
  title: string
  headline: string
  eyebrow: string
  shortBio: string
  aboutBio: string[]
  location?: string
  availability?: string
  email?: string
  phone?: string
  resumeUrl?: string
  avatarUrl?: string
}

export type SocialPlatform =
  | 'github'
  | 'linkedin'
  | 'email'
  | 'website'
  | 'blog'
  | 'twitter'
  | 'other'

export interface SocialLink {
  id: string
  platform: SocialPlatform
  label: string
  url: string
  handle?: string
  featured: boolean
  visible: boolean
}

export interface SkillCategory {
  id: string
  name: string
  description: string
  skills: string[]
}

export interface ExperienceRecord {
  id: string
  company: string
  companyUrl?: string
  position: string
  startDate: string
  endDate: string
  isCurrent: boolean
  location?: string
  employmentType: 'Full-time' | 'Contract' | 'Freelance' | 'Part-time'
  productContext: string
  responsibilities: string[]
  contributions: string[]
  technologies: string[]
  achievements?: string[]
}

export interface CaseStudyDecision {
  title: string
  description: string
  tradeoffs?: string
}

export interface ProjectCaseStudyData {
  overview: string
  problemAndContext: string
  productGoals: string[]
  myRole: string
  technicalChallenges: string[]
  architectureAndDecisions: CaseStudyDecision[]
  implementation: string[]
  keyFeatures: string[]
  resultsAndImpact: string[]
  lessonsLearned: string[]
  relatedProjectSlugs?: string[]
}

export interface ProjectItem {
  id: string
  slug: string
  name: string
  summary: string
  description: string
  category: 'Web Applications' | 'Mobile Applications' | 'Full-Stack Applications' | 'Personal Projects'
  role: string
  technologies: string[]
  thumbnailUrl?: string
  repositoryUrl?: string
  liveUrl?: string
  docUrl?: string
  featured: boolean
  displayOrder: number
  status?: 'Production' | 'Live' | 'Archived' | 'Client Delivery'
  caseStudy?: ProjectCaseStudyData
}

export interface NavRoute {
  label: string
  path: string
  isExternal?: boolean
}

export interface SiteConfig {
  name: string
  title: string
  description: string
  url: string
  author: string
  ogImage?: string
  keywords: string[]
}
