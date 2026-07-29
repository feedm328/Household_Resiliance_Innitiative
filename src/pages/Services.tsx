import React, { useEffect } from 'react'
import SEO from '@/components/shared/SEO'
import ProgramList from '@/components/services/ProgramList'
import ServiceFAQ from '@/components/services/ServiceFAQ'
// import ServiceCTA from '@/components/services/ServiceCTA'

const Services: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="flex flex-col w-full min-h-screen">
      <SEO 
        title="Resilience Services - The Household Resilience Initiative" 
        description="We provide structural housing engineering, robust weatherproofing materials, localized response hubs, and certified vocational training workshops."
      />
      {/* Visual Header */}
      <div 
        className="bg-hri-green text-hri-cream py-24 px-6 border-b border-hri-gold text-left relative overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=1920&auto=format&fit=crop')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-hri-green/95 via-hri-green/85 to-hri-green-dark/95 z-0" />
        <div className="max-w-7xl mx-auto relative z-10">
          <span className="text-hri-gold uppercase tracking-[0.2em] font-bold text-xs">
            What We Do
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-hri-cream mt-2">
            Resilience Services & Programs
          </h1>
          <div className="w-16 h-[2px] bg-hri-gold mt-4 mb-4" />
          <p className="text-sm sm:text-base text-hri-cream/70 max-w-2xl leading-relaxed font-light">
            Practical support for difficult seasons. A stronger foundation for what comes next.
          </p>
        </div>
      </div>
      <ProgramList />
      {/* <ServiceCTA /> */}
      <ServiceFAQ />
    </div>
  )
}

export default Services
