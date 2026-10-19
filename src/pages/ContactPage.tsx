import { SEOHead } from '@/components/common/SEOHead'
import { PageContainer } from '@/components/layout/PageContainer'
import { PageHeader } from '@/components/common/PageHeader'
import { ContactForm } from '@/components/contact/ContactForm'
import { DirectContact } from '@/components/contact/DirectContact'

export function ContactPage() {
  return (
    <PageContainer>
      <SEOHead
        title="Contact & Collaboration"
        description="Connect with Imal Zaya Harahap to discuss engineering leadership, full-stack development, and technical consulting."
      />

      <PageHeader
        eyebrow="COMMUNICATION"
        title="Let's Connect"
        description="Whether you have an upcoming digital product, need frontend architecture guidance, or want to explore full-time engineering roles, I welcome your inquiry."
      />

      <div className="py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Direct Details (Left / 5 cols) */}
          <div className="lg:col-span-5">
            <DirectContact />
          </div>

          {/* Contact Form (Right / 7 cols) */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </PageContainer>
  )
}
