import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

interface PartnerItem {
  id: number
  name: string
}

const Partners: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const tickerRef = useRef<HTMLDivElement>(null)

  const partnersList: PartnerItem[] = [
    { id: 1, name: 'Global Shelter Coalition' },
    { id: 2, name: 'The Habitat Alliance' },
    { id: 3, name: 'Resilient Cities Foundation' },
    { id: 4, name: 'Universal Timber & Building' },
    { id: 5, name: 'Hope Engineering Corps' },
    { id: 6, name: 'Community Care Trust' },
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      const ticker = tickerRef.current
      if (ticker) {
        // Clone the content for seamless infinite scroll
        const clonedContent = ticker.innerHTML
        ticker.innerHTML = clonedContent + clonedContent
        
        const scrollWidth = ticker.scrollWidth / 2
        
        gsap.to(ticker, {
          x: -scrollWidth,
          duration: 20,
          ease: 'none',
          repeat: -1,
        })
      }
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={containerRef} className="py-16 px-6 bg-hri-green border-b border-hri-gold text-hri-cream overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h3 className="font-serif text-lg font-bold text-hri-gold uppercase tracking-[0.2em] text-center mb-8">
          Trusted Supporters & Alliances
        </h3>
        
        {/* Infinite Scroller Window */}
        <div className="relative w-full overflow-hidden py-4 border-y border-hri-gold/20">
          {/* Gradient overlays to fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-hri-green to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-hri-green to-transparent z-10 pointer-events-none" />
          
          <div 
            ref={tickerRef} 
            className="flex gap-16 whitespace-nowrap w-max items-center"
          >
            {partnersList.map((partner) => (
              <div 
                key={partner.id} 
                className="inline-flex items-center text-sm sm:text-base font-bold uppercase tracking-widest text-hri-cream/65 hover:text-hri-gold transition-colors px-6 border border-hri-gold/20 py-3 bg-hri-green-dark/30 hover:border-hri-gold/50 cursor-default"
              >
                {partner.name}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default Partners
