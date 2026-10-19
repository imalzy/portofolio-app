export function isValidUrl(url: string | null | undefined): boolean {
  if (!url || typeof url !== 'string') return false
  const trimmed = url.trim()
  if (!trimmed) return false

  // Allow safe mailto and tel links
  if (trimmed.startsWith('mailto:') || trimmed.startsWith('tel:')) {
    return true
  }

  // Prevent dangerous schemes
  if (trimmed.startsWith('javascript:') || trimmed.startsWith('data:')) {
    return false
  }

  try {
    const parsed = new URL(trimmed)
    return parsed.protocol === 'http:' || parsed.protocol === 'https:'
  } catch {
    // If relative path like '/resume.pdf'
    if (trimmed.startsWith('/') || trimmed.startsWith('#')) {
      return true
    }
    return false
  }
}

export function getSafeExternalLinkProps(url: string | null | undefined) {
  if (!isValidUrl(url) || !url) {
    return null
  }

  const isMailOrTel = url.startsWith('mailto:') || url.startsWith('tel:')
  const isInternal = url.startsWith('/') || url.startsWith('#')

  if (isInternal || isMailOrTel) {
    return {
      href: url,
    }
  }

  return {
    href: url,
    target: '_blank',
    rel: 'noopener noreferrer',
  }
}
