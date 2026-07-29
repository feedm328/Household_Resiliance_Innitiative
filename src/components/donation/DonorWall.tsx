import React, { useEffect, useRef } from 'react'
import { Award } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface DonorItem {
  id: number
  name: string
  amount: string
  type: string
  date: string
}

const DonorWall: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const listRef = useRef<HTMLDivElement>(null)

  const donorsList: DonorItem[] = [
    { id: 1, name: 'The Henderson Family Foundation', amount: '$5,000', type: 'Hub Partner', date: 'Jul 2026' },
    { id: 2, name: 'Apex Builders Collective', amount: '$1,500', type: 'Home Sponsor', date: 'Jun 2026' },
    { id: 3, name: 'Dr. Clara Vance', amount: '$300', type: 'Apprentice Sponsor', date: 'Jul 2026' },
    { id: 4, name: 'Anonymous Structural Partner', amount: '$1,500', type: 'Home Sponsor', date: 'Jul 2026' },
    { id: 5, name: 'David & Emily Montgomery', amount: '$500', type: 'Resilience Patron', date: 'Jun 2026' },
    { id: 6, name: 'Hope Civic Club', amount: '$300', type: 'Apprentice Sponsor', date: 'May 2026' },
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (listRef.current) {
        gsap.fromTo(listRef.current.children,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.1,
            scrollTrigger: {
              trigger: listRef.current,
              start: 'top 85%',
              toggleActions: 'play none none none',
            }
          }
        )
      }
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={containerRef} className="py-20 px-6 bg-white border-b border-hri-gold overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-hri-gold/40 text-hri-gold text-xs uppercase tracking-widest font-bold mb-4">
            <Award size={14} />
            <span>Honor Roll</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-hri-green mt-1 mb-4">
            Donor Wall of Resilience
          </h2>
          <div className="w-16 h-[2px] bg-hri-gold mx-auto mb-6" />
          <p className="text-sm sm:text-base text-hri-green/70 leading-relaxed font-light">
            We are deeply grateful to the corporate foundations, family trusts, and individuals financing these local structural transformations.
          </p>
        </div>

        {/* Wall Grid */}
        <div ref={listRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {donorsList.map((donor) => (
            <div 
              key={donor.id}
              className="bg-hri-cream border-l-4 border-hri-gold p-6 text-left hover:shadow-md transition-shadow relative"
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-serif font-bold text-base text-hri-green leading-snug">
                  {donor.name}
                </h3>
                <span className="text-xs font-bold text-hri-gold ml-3 whitespace-nowrap">
                  {donor.amount}
                </span>
              </div>
              <div className="flex justify-between items-center text-[10px] uppercase font-bold text-hri-green/50 tracking-wider">
                <span>{donor.type}</span>
                <span>{donor.date}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default DonorWall
