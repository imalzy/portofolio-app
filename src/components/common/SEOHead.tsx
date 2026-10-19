import { Helmet } from 'react-helmet-async'
import { siteConfig } from '@/config/site'

interface SEOHeadProps {
  title?: string
  description?: string
  canonicalUrl?: string
  ogType?: 'website' | 'article'
  keywords?: string[]
}

export function SEOHead({
  title,
  description = siteConfig.description,
  canonicalUrl,
  ogType = 'website',
  keywords = siteConfig.keywords,
}: SEOHeadProps) {
  const fullTitle = title ? `${title} — ${siteConfig.name}` : siteConfig.title
  const currentUrl = canonicalUrl || siteConfig.url

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="author" content={siteConfig.author} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={currentUrl} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />

      {/* Canonical */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
    </Helmet>
  )
}
