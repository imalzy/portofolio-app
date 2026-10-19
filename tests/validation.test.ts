import { describe, it, expect } from 'vitest'
import { contactSchema } from '@/lib/validation'

describe('Contact Form Validation Schema (Zod)', () => {
  it('accepts valid contact payloads', () => {
    const validData = {
      name: 'Sarah Connor',
      email: 'sarah@example.com',
      subject: 'Frontend Architecture Project',
      message: 'We are looking for a Senior Architect to lead our fintech product.',
    }

    const result = contactSchema.safeParse(validData)
    expect(result.success).toBe(true)
  })

  it('rejects short names or empty fields', () => {
    const invalidData = {
      name: 'A',
      email: 'valid@example.com',
      subject: 'Valid Subject',
      message: 'Valid message exceeding minimum characters.',
    }

    const result = contactSchema.safeParse(invalidData)
    expect(result.success).toBe(false)
    if (!result.success) {
      expect(result.error.issues[0].path[0]).toBe('name')
    }
  })

  it('rejects invalid email formats', () => {
    const invalidData = {
      name: 'Alex Johnson',
      email: 'not-an-email',
      subject: 'Product Discussion',
      message: 'We have a web application we would like to collaborate on.',
    }

    const result = contactSchema.safeParse(invalidData)
    expect(result.success).toBe(false)
    if (!result.success) {
      expect(result.error.issues[0].path[0]).toBe('email')
    }
  })

  it('rejects messages shorter than 10 characters', () => {
    const invalidData = {
      name: 'Alex Johnson',
      email: 'alex@example.com',
      subject: 'Inquiry',
      message: 'Short',
    }

    const result = contactSchema.safeParse(invalidData)
    expect(result.success).toBe(false)
    if (!result.success) {
      expect(result.error.issues[0].path[0]).toBe('message')
    }
  })
})
