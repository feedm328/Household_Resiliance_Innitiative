import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ImpactImg from '@/assets/impact-image.jpeg'

gsap.registerPlugin(ScrollTrigger)

interface StatItem {
  id: number
  targetValue: number
  suffix: string
  label: string
  description: string
}

const ImpactSummary: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const statsListRef = useRef<HTMLDivElement>(null)

  const statsData: StatItem[] = [
    {
      id: 1,
      targetValue: 1450,
      suffix: '+',
      label: 'FAMILIES SUPPORTED',
      description: 'Emergency financial assistance, food, and resources provided to households in crisis.'
    },
    {
      id: 2,
      targetValue: 5200,
      suffix: '+',
      label: 'LIVES IMPACTED',
      description: 'Individuals and families receiving help to stabilize, stay housed, and rebuild with dignity.'
    },
    {
      id: 3,
      targetValue: 240,
      suffix: '+',
      label: 'COMMUNITY PROJECTS',
      description: 'Food distributions, clothing drives, resource events, and local outreach across Maine.'
    },
    {
      id: 4,
      targetValue: 88,
      suffix: '%',
      label: 'FUND EFFICIENCY',
      description: 'Resources channeled directly to families and on-the-ground support with minimal overhead.'
    }
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      const counters = document.querySelectorAll('.stat-counter')
      
      counters.forEach((counter) => {
        const target = parseInt(counter.getAttribute('data-target') || '0', 10)
        const countObj = { val: 0 }
        
        gsap.to(countObj, {
          val: target,
          duration: 2.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: counter,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
          onUpdate: () => {
            counter.textContent = Math.floor(countObj.val).toString()
          }
        })
      })

      // Animate card entry
      if (statsListRef.current) {
        gsap.fromTo(statsListRef.current.children,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            scrollTrigger: {
              trigger: statsListRef.current,
              start: 'top 80%',
            }
          }
        )
      }
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={containerRef} className="py-20 px-6 bg-hri-green text-hri-cream border-b border-hri-gold">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-8 text-left">
            <span className="text-hri-gold uppercase tracking-[0.2em] font-bold text-xs sm:text-sm block mb-4">
              Our Track Record
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-hri-cream">
              Measuring Our Impact
            </h2>
            <div className="w-16 h-[2px] bg-hri-gold mt-4 mb-4 lg:mb-0" />
          </div>
          <div className="lg:col-span-4 text-left lg:text-right">
            <p className="text-sm text-hri-cream/70 font-light leading-relaxed">
              We hold ourselves accountable to strict benchmarks of structural stability, individual support efficiency, and transparency.
            </p>
          </div>
        </div>

<div className="flex flex-col w-full gap-8 md:flex-row md:items-stretch md:justify-between">
        {/* impact image */}
        <div className='border border-hri-gold w-full md:w-1/2 overflow-hidden flex'>
          <img src={ImpactImg} alt="Impact Image" className='w-full h-full object-cover flex-grow' />
        </div>

        {/* Stats Grid */}
        <div ref={statsListRef} className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full md:w-1/2">
          {statsData.map((stat) => (
            <div 
              key={stat.id} 
              className="bg-hri-green-dark/45 border border-hri-gold/20 hover:border-hri-gold/60 p-8 text-left transition-all duration-300 relative"
            >
              {/* Top Accent line */}
              <div className="absolute top-0 left-0 w-8 h-[2px] bg-hri-gold" />
              
              <div className="flex items-baseline mb-4 text-hri-gold">
                <span 
                  className="stat-counter text-4xl sm:text-5xl font-serif font-bold leading-none"
                  data-target={stat.targetValue}
                >
                  0
                </span>
                <span className="text-2xl sm:text-3xl font-serif font-semibold">
                  {stat.suffix}
                </span>
              </div>
              
              <h3 className="text-base font-serif font-bold text-hri-cream mb-2 uppercase tracking-wider">
                {stat.label}
              </h3>
              
              <p className="text-xs sm:text-sm text-hri-cream/60 leading-relaxed font-light">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
        </div>

      </div>
    </section>
  )
}

export default ImpactSummary
