import React, { useEffect, useRef } from 'react'
import { Landmark, Heart, Award } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface SponsorItem {
  id: number
  title: string
  amount: number
  description: string
  deliverables: string[]
  icon: React.ReactNode
}

interface SponsorshipProps {
  onSelectSponsorship: (amount: number) => void
}

const SponsorshipPrograms: React.FC<SponsorshipProps> = ({ onSelectSponsorship }) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  const sponsorships: SponsorItem[] = [
    {
      id: 1,
      title: 'Apprentice Toolkit Sponsor',
      amount: 300,
      description: 'Fund tools and training gear for one student in our Resilient Trades certification program.',
      deliverables: ['1 Professional Builders Toolbox', 'Safety Vest, Helmet, and Gloves', 'Resilient Framing Manual', 'Graduation Certificate support'],
      icon: <Award size={24} className="text-hri-gold" />
    },
    {
      id: 2,
      title: 'Structural Home Sponsor',
      amount: 1500,
      description: 'Fully sponsor the safety renovation of a severely compromised house structure.',
      deliverables: ['Concrete bases for foundation posts', 'Structural treated framing timber', 'Complete weatherized metal roofing sheets', 'Local professional carpenter labor hours'],
      icon: <Heart size={24} className="text-hri-gold" />
    },
    {
      id: 3,
      title: 'Resilience Hub Supporter',
      amount: 5000,
      description: 'Fund the emergency infrastructure supplies for a localized disaster safety safe-haven.',
      deliverables: ['Industrial overhead water filter unit', '1 Offgrid Solar Generator & Battery', 'Fully stocked trauma safety cabinet', 'Emergency satellite radio setup'],
      icon: <Landmark size={24} className="text-hri-gold" />
    }
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (gridRef.current) {
        gsap.fromTo(gridRef.current.children,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.2,
            scrollTrigger: {
              trigger: gridRef.current,
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
    <section ref={containerRef} className="py-20 px-6 bg-hri-cream border-b border-hri-gold/20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-hri-gold uppercase tracking-[0.2em] font-bold text-xs">
            Direct Financing
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-hri-green mt-1 mb-4">
            Targeted Sponsorship Projects
          </h2>
          <div className="w-16 h-[2px] bg-hri-gold mx-auto mb-6" />
          <p className="text-sm sm:text-base text-hri-green/70 leading-relaxed font-light">
            Direct your funds to specific project targets. Check our concrete sponsorship packages below to sponsor specific outcomes.
          </p>
        </div>

        {/* Grid */}
        <div ref={gridRef} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {sponsorships.map((item) => (
            <div 
              key={item.id}
              className="bg-white border border-hri-green/10 hover:border-hri-gold/50 p-8 text-left hover:shadow-xl transition-all duration-300 relative flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-center mb-6">
                  <div className="bg-hri-green/5 p-3 shrink-0">
                    {item.icon}
                  </div>
                  <span className="text-2xl font-serif font-bold text-hri-green">
                    ${item.amount.toLocaleString()}
                  </span>
                </div>

                <h3 className="text-xl font-serif font-bold text-hri-green mb-3">
                  {item.title}
                </h3>
                
                <p className="text-xs sm:text-sm text-hri-green/70 leading-relaxed font-light mb-6">
                  {item.description}
                </p>

                {/* Deliverables List */}
                <div className="space-y-2 mb-8">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-hri-gold block">
                    What this buys:
                  </span>
                  <ul className="space-y-1.5 text-xs text-hri-green/75 font-light">
                    {item.deliverables.map((del, index) => (
                      <li key={index} className="flex items-start gap-1.5">
                        <span className="text-hri-gold font-bold">•</span>
                        <span>{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <button
                  onClick={() => onSelectSponsorship(item.amount)}
                  className="w-full bg-hri-green text-hri-cream hover:bg-hri-gold hover:text-hri-green font-bold text-xs uppercase tracking-wider py-3.5 transition-colors duration-300"
                >
                  Select Package
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default SponsorshipPrograms
