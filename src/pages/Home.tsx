import React, { useEffect } from 'react'
import SEO from '@/components/shared/SEO'
import Hero from '@/components/home/Hero'
import BeliefStatement from '@/components/home/BeliefStatement'
import CompassionatePrograms from '@/components/home/CompassionatePrograms'
// import FocusAreas from '@/components/home/FocusAreas'
import OurFocusGrid from '@/components/home/OurFocusGrid'
import ImpactStories from '@/components/home/ImpactStories'
import ImpactSummary from '@/components/home/ImpactSummary'
import MakingImpact from '@/components/home/MakingImpact'
import FeaturedCTA from '@/components/home/FeaturedCTA'
import QuickDonate from '@/components/home/QuickDonate'
import NoFamilyAlone from '@/components/about/NoFamilyAlone'
import IssueCards from '@/components/home/IssueCards'

const Home: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="flex flex-col w-full min-h-screen">
      <SEO 
        title="The Household Resilience Initiative - Stronger Homes" 
        description="Providing structural housing repairs, community support systems, and livelihood training to build sustainable, resilient environments for families in need."
      />
      <Hero />
      <BeliefStatement />
      <CompassionatePrograms />
      {/* <FocusAreas /> */}
      <ImpactStories />
      <MakingImpact /> 
      <OurFocusGrid />
      <ImpactSummary />
      <NoFamilyAlone />
      <IssueCards />
      <QuickDonate />
      <FeaturedCTA />
    </div>
  )
}

export default Home
