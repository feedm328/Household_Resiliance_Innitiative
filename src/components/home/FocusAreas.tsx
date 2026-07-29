import React, { useEffect, useRef } from 'react'
import { ShieldCheck } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import HousingImg from '@/assets/housing-repair.png'
import CommunityImg from '@/assets/community-support.png'
import ChildLearningImg from '@/assets/child-learning.png'

gsap.registerPlugin(ScrollTrigger)

interface FocusItem {
  id: number
  title: string
  description: string
  image: string
  tag: string
}

const FocusAreas: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  const focusData: FocusItem[] = [
    {
      id: 1,
      title: 'Stronger Homes',
      tag: 'Infrastructure',
      description: 'We execute critical housing repairs, roof reconstruction, insulation reinforcement, and sanitation plumbing updates to safeguard families from structural hazards.',
      image: HousingImg
    },
    {
      id: 2,
      title: 'Resilient Communities',
      tag: 'Disaster Prep',
      description: 'We build local capacity by setting up community hubs, preparing neighborhood action groups, and supplying disaster response tools and emergency supplies.',
      image: CommunityImg
    },
    {
      id: 3,
      title: 'Lasting Hope',
      tag: 'Livelihoods',
      description: 'We offer vocational workshops, financial education programs, and educational scholarships to ensure individuals are equipped to thrive long-term.',
      image: ChildLearningImg
    }
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (cardsRef.current) {
        gsap.fromTo(
          cardsRef.current.children,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none',
            }
          }
        )
      }
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={containerRef} className="py-20 px-6 bg-hri-cream border-b border-hri-gold/20">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-hri-gold/40 text-hri-gold text-xs uppercase tracking-widest font-bold mb-4">
            <ShieldCheck size={14} />
            <span>Our Core Focus</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-hri-green mb-4">
            How We Build Resilience
          </h2>
          <div className="w-16 h-[2px] bg-hri-gold mx-auto mb-6" />
          <p className="text-sm sm:text-base text-hri-green/70 leading-relaxed font-light">
            Through targeted structural interventions and localized capability building, we lay the foundations for sustainable, independent growth.
          </p>
        </div>

        {/* Focus Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {focusData.map((item) => (
            <div 
              key={item.id} 
              className="bg-white border border-hri-green/10 hover:border-hri-gold/50 p-8 flex flex-col items-start text-left hover:shadow-xl transition-all duration-300 relative group"
            >
              {/* Gold Top Border Hover Accent */}
              <div className="absolute top-0 left-0 w-0 h-[3px] bg-hri-gold group-hover:w-full transition-all duration-300" />
                <img src={item.image} alt={item.title} className="w-full object-cover mb-3" />
              <span className="text-[10px] uppercase font-bold tracking-widest text-hri-gold/80 mb-2">
                {item.tag}
              </span>
              <h3 className="text-xl font-serif font-bold text-hri-green mb-4">
                {item.title}
              </h3>
              <p className="text-sm text-hri-green/70 leading-relaxed font-light mb-6 flex-grow">
                {item.description}
              </p>
              
              <div className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-hri-green group-hover:text-hri-gold transition-colors">
                <span>Learn Details</span>
                <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default FocusAreas
