import { z } from 'zod'

export const contactSchema = z.object({
  name: z.string().trim().min(2, 'Please enter your name (minimum 2 characters).'),
  email: z.string().trim().email('Please enter a valid email address.'),
  subject: z.string().trim().min(3, 'Please enter a subject (minimum 3 characters).'),
  message: z.string().trim().min(10, 'Please write a message with at least 10 characters.'),
})

export type ContactFormData = z.infer<typeof contactSchema>
