import React, { useEffect } from 'react'
import SEO from '@/components/shared/SEO'
import ContactForm from '@/components/contact/ContactForm'
import OfficeDetails from '@/components/contact/OfficeDetails'
import FAQ from '@/components/contact/FAQ'

const Contact: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="flex flex-col w-full min-h-screen">
      <SEO 
        title="Contact Us - The Household Resilience Initiative" 
        description="Have questions about volunteering, donating, or applying for structural house repairs? Reach out to our operators directly."
      />
      {/* Visual Header */}
      <div 
        className="bg-hri-green text-hri-cream py-24 px-6 border-b border-hri-gold text-left relative overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1920&auto=format&fit=crop')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-hri-green/95 via-hri-green/85 to-hri-green-dark/95 z-0" />
        <div className="max-w-7xl mx-auto relative z-10">
          <span className="text-hri-gold uppercase tracking-[0.2em] font-bold text-xs">
            Connect With Our Office
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-hri-cream mt-2">
            Contact Information
          </h1>
          <div className="w-16 h-[2px] bg-hri-gold mt-4 mb-4" />
          <p className="text-sm sm:text-base text-hri-cream/70 max-w-2xl leading-relaxed font-light">
            Have questions about volunteering, donating, or applying for structural house repairs? Reach out to our operators directly.
          </p>
        </div>
      </div>

      {/* Main Grid Contact Section */}
      <div className="py-20 px-6 bg-white border-b border-hri-gold/20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Form Side */}
          <div className="lg:col-span-7">
            <h2 className="font-serif text-2xl font-bold text-hri-green mb-6 text-left">
              Send Us a Message
            </h2>
            <ContactForm />
          </div>

          {/* Contact details side */}
          <div className="lg:col-span-5">
            <h2 className="font-serif text-2xl font-bold text-hri-green mb-6 text-left">
              Office Channels
            </h2>
            <OfficeDetails />
          </div>
        </div>
      </div>

      <FAQ />
    </div>
  )
}

export default Contact
