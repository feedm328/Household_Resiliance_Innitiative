import React, { useEffect } from 'react'
import SEO from '@/components/shared/SEO'
import MissionVision from '@/components/about/MissionVision'
import History from '@/components/about/History'
import NoFamilyAlone from '@/components/about/NoFamilyAlone'
import Team from '@/components/about/Team'
import Partners from '@/components/about/Partners'

const About: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="flex flex-col w-full min-h-screen">
      <SEO 
        title="About Us - The Household Resilience Initiative" 
        description="Discover the mission, core values, history, and the professional team behind our resilience programs."
      />
      {/* Visual Header */}
      <div 
        className="bg-hri-green text-hri-cream py-24 px-6 border-b border-hri-gold text-left relative overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=1920&auto=format&fit=crop')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-hri-green/95 via-hri-green/85 to-hri-green-dark/95 z-0" />
        <div className="max-w-7xl mx-auto relative z-10">
          <span className="text-hri-gold uppercase tracking-[0.2em] font-bold text-xs">
            Learn Our Background
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-hri-cream mt-2">
            Who We Are
          </h1>
          <div className="w-16 h-[2px] bg-hri-gold mt-4 mb-4" />
          <p className="text-sm sm:text-base text-hri-cream/70 max-w-2xl leading-relaxed font-light">
                Building Stronger Households. Strengthening Communities. Creating Lasting Hope.
          </p>
        </div>
      </div>

      <MissionVision />
      <History />
      <NoFamilyAlone />
      <Team />
      <Partners />
    </div>
  )
}

export default About
