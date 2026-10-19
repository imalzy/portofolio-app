import React from 'react'
import { ExternalLink as ExternalIcon } from 'lucide-react'
import { getSafeExternalLinkProps, isValidUrl } from '@/lib/external-links'

interface ExternalLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  showIcon?: boolean
  children: React.ReactNode
}

export function ExternalLink({
  href,
  showIcon = false,
  children,
  className = '',
  ...props
}: ExternalLinkProps) {
  if (!isValidUrl(href)) {
    return <span className={className}>{children}</span>
  }

  const safeProps = getSafeExternalLinkProps(href)

  return (
    <a {...safeProps} {...props} className={className}>
      {children}
      {showIcon && !href.startsWith('mailto:') && !href.startsWith('tel:') && (
        <ExternalIcon className="inline-block w-3 h-3 ml-1 opacity-70" aria-hidden="true" />
      )}
    </a>
  )
}
