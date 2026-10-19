import { describe, it, expect } from 'vitest'
import { isValidUrl, getSafeExternalLinkProps } from '@/lib/external-links'

describe('URL Validation & Security Utilities', () => {
  it('identifies valid HTTP and HTTPS URLs', () => {
    expect(isValidUrl('https://linkedin.com/in/imalzy')).toBe(true)
    expect(isValidUrl('http://example.com')).toBe(true)
    expect(isValidUrl('https://join.bankmandiri.co.id')).toBe(true)
  })

  it('allows safe mailto and tel links', () => {
    expect(isValidUrl('mailto:imalzaya19@gmail.com')).toBe(true)
    expect(isValidUrl('tel:+6281534611922')).toBe(true)
  })

  it('allows relative paths such as resume or anchors', () => {
    expect(isValidUrl('/resume.pdf')).toBe(true)
    expect(isValidUrl('#overview')).toBe(true)
  })

  it('rejects unsafe schemes and malformed strings', () => {
    expect(isValidUrl('javascript:alert(1)')).toBe(false)
    expect(isValidUrl('data:text/html,test')).toBe(false)
    expect(isValidUrl('')).toBe(false)
    expect(isValidUrl(null)).toBe(false)
    expect(isValidUrl(undefined)).toBe(false)
    expect(isValidUrl('not a url')).toBe(false)
  })

  it('returns safe attributes for external links', () => {
    const props = getSafeExternalLinkProps('https://github.com/imalzy')
    expect(props).toEqual({
      href: 'https://github.com/imalzy',
      target: '_blank',
      rel: 'noopener noreferrer',
    })
  })

  it('does not force new tab for mailto or internal links', () => {
    const mailProps = getSafeExternalLinkProps('mailto:imalzaya19@gmail.com')
    expect(mailProps).toEqual({
      href: 'mailto:imalzaya19@gmail.com',
    })

    const internalProps = getSafeExternalLinkProps('/resume.pdf')
    expect(internalProps).toEqual({
      href: '/resume.pdf',
    })
  })
})
