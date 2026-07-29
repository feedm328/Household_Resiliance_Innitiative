import React, { useEffect, useRef } from 'react'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface MemberItem {
  id: number
  name: string
  role: string
  bio: string
  initials: string
}

const Team: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  const teamMembers: MemberItem[] = [
    {
      id: 1,
      name: 'Michael Anderson',
      role: 'Chief Executive Officer & CO-FOUNDER',
      bio: 'Former shelter program manager at the Red Cross with 15+ years of humanitarian logistics experience.',
      initials: 'MA'
    },
    {
      id: 2,
      name: 'Jordan Lee',
      role: 'Chief operating officer',
      bio: 'Operations manager specializing in disaster shelter rehabilitation and municipal community building partnerships.',
      initials: 'JL'
    },
    {
      id: 3,
      name: 'Taylor Morgan',
      role: 'Chief program officer',
      bio: 'Expert in low-cost structural retrofitting and materials durability under severe tropical storm environments.',
      initials: 'TM'
    },
    {
      id: 4,
      name: 'Morgan Ellis',
      role: 'Chief Network Officer',
      bio: 'Trainer focused on women-led building collectives and community micro-finance resilience schemes.',
      initials: 'ME'
    }
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (gridRef.current) {
        gsap.fromTo(gridRef.current.children,
          { opacity: 0, scale: 0.95, y: 30 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'back.out(1.2)',
            scrollTrigger: {
              trigger: gridRef.current,
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
    <section ref={containerRef} className="py-20 px-6 bg-white border-b border-hri-gold/20">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-hri-gold uppercase tracking-[0.2em] font-bold text-xs">
            Leadership
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-hri-green mt-1 mb-4">
            Our Dedicated Team
          </h2>
          <div className="w-16 h-[2px] bg-hri-gold mx-auto mb-6" />
          <p className="text-sm sm:text-base text-hri-green/70 leading-relaxed font-light">
            Meet the engineers, organizers, and program specialists leading our structural interventions and capacity campaigns.
          </p>
        </div>

        {/* Team Grid */}
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div 
              key={member.id}
              className="bg-hri-cream border border-hri-green/10 hover:border-hri-gold/50 p-6 flex flex-col items-center hover:shadow-xl transition-all duration-300 relative group"
            >
              {/* Gold Top line */}
              <div className="absolute top-0 left-0 w-0 h-[3px] bg-hri-gold group-hover:w-full transition-all duration-300" />
              
              {/* Initials Circle (Sharp Box in our case!) */}
              <div className="w-24 h-24 bg-hri-green text-hri-gold flex items-center justify-center font-serif text-3xl font-bold border border-hri-gold/30 mb-6 shrink-0 relative overflow-hidden group-hover:bg-hri-gold group-hover:text-hri-green transition-colors duration-300">
                {member.initials}
              </div>

              <h3 className="text-lg font-serif font-bold text-hri-green mb-1 text-center">
                {member.name}
              </h3>
              
              <span className="text-xs uppercase font-semibold text-hri-gold tracking-wider mb-4 text-center">
                {member.role}
              </span>
              
              <p className="text-xs text-hri-green/70 leading-relaxed font-light text-center mb-6 flex-grow">
                {member.bio}
              </p>
              
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Team
