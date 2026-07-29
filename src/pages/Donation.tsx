import React, { useState, useEffect, useRef } from 'react'
import SEO from '@/components/shared/SEO'
import DonationForm from '@/components/donation/DonationForm'
import SponsorshipPrograms from '@/components/donation/SponsorshipPrograms'
import DonorWall from '@/components/donation/DonorWall'

const Donation: React.FC = () => {
  const [formAmount, setFormAmount] = useState<number | string>(100)
  const [formKey, setFormKey] = useState(0)
  const formSectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleSelectSponsorship = (amount: number) => {
    setFormAmount(amount)
    setFormKey((prev) => prev + 1)
    
    if (formSectionRef.current) {
      formSectionRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="flex flex-col w-full min-h-screen">
      <SEO 
        title="Secure Giving - The Household Resilience Initiative" 
        description="Every dollar contributed goes directly toward structural roof timbers, concrete post bases, emergency hub gear, and trades toolkit sourcing."
      />
      {/* Visual Header */}
      <div 
        className="bg-hri-green text-hri-cream py-24 px-6 border-b border-hri-gold text-left relative overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=1920&auto=format&fit=crop')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-hri-green/95 via-hri-green/85 to-hri-green-dark/95 z-0" />
        <div className="max-w-7xl mx-auto relative z-10">
          <span className="text-hri-gold uppercase tracking-[0.2em] font-bold text-xs">
            Direct Financial Support
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-hri-cream mt-2">
            Secure Donation Portal
          </h1>
          <div className="w-16 h-[2px] bg-hri-gold mt-4 mb-4" />
          <p className="text-sm sm:text-base text-hri-cream/70 max-w-2xl leading-relaxed font-light">
            Every dollar contributed goes directly toward structural roof timbers, concrete post bases, emergency hub gear, and trades toolkit sourcing.
          </p>
        </div>
      </div>

      {/* Donation Form Section */}
      <div ref={formSectionRef} className="py-20 px-6 bg-hri-cream border-b border-hri-gold/20">
        <DonationForm key={formKey} initialAmount={formAmount} />
      </div>

      <SponsorshipPrograms onSelectSponsorship={handleSelectSponsorship} />
      <DonorWall />
    </div>
  )
}

export default Donation
