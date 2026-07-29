import React, { useState, useEffect, useRef } from 'react'
import { Heart, ShoppingCart, Home, Compass, Users2 } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ProgramDetailModal from './ProgramDetailModal'
import type { ProgramData } from './types'

gsap.registerPlugin(ScrollTrigger)


const ProgramList: React.FC = () => {
  const [selectedProgram, setSelectedProgram] = useState<ProgramData | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const containerRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  const programs: ProgramData[] = [
    {
      id: 1,
      title: 'The Household Resilience Fund',
      tag: 'Financial Relief',
      description: 'When a crisis cannot wait, timely support can make all the difference.',
      longDescription: (
        <div className="space-y-4">
          <p>The Household Resilience Fund provides emergency financial assistance to families facing sudden hardship. Support may help with urgent needs such as rent, utilities, groceries, transportation, and other essential household expenses.</p>
          <p>Eligible families may receive base assistance, with additional support available for qualifying children under 17.</p>
          <p>A small measure of stability today can create the breathing room a family needs to rebuild tomorrow.</p>
        </div>
      ),
      icon: <Heart size={24} className="text-hri-gold" />
    },
    {
      id: 2,
      title: 'Food & Household Essentials',
      tag: 'Basic Needs',
      description: 'No parent should have to choose between paying a bill and feeding their family.',
      longDescription: (
        <div className="space-y-4">
          <p>Through food and essential-needs distributions, we help provide fresh produce, pantry staples, diapers, formula, hygiene products, and cleaning supplies to families facing financial strain.</p>
          <p>These are more than supplies. They are practical tools that help families get through difficult seasons with dignity.</p>
        </div>
      ),
      icon: <ShoppingCart size={24} className="text-hri-gold" />
    },
    {
      id: 3,
      title: 'Housing Stability Support',
      tag: 'Housing',
      description: 'A home is more than a roof. It is a place where families rest, recover, and rebuild.',
      longDescription: (
        <div className="space-y-4">
          <p>Our housing stability support helps families facing housing insecurity through eviction prevention, short-term rental assistance, housing guidance, and connections to longer-term solutions.</p>
          <p>Our goal is simple: help families remain safely housed and connected to their communities whenever possible.</p>
        </div>
      ),
      icon: <Home size={24} className="text-hri-gold" />
    },
    {
      id: 4,
      title: 'Resource Navigation',
      tag: 'Guidance',
      description: 'Sometimes the hardest part is knowing where to begin.',
      longDescription: (
        <div className="space-y-4">
          <p>Our team helps families identify and connect with resources that may support their next step — including public benefits, employment and job-training opportunities, legal services, mental-health resources, healthcare, and other community programs.</p>
          <p>We don’t just point families toward a resource. We help them find the way there.</p>
        </div>
      ),
      icon: <Compass size={24} className="text-hri-gold" />
    },
    {
      id: 5,
      title: 'Community Connection',
      tag: 'Community',
      description: 'Resilience grows in community.',
      longDescription: (
        <div className="space-y-4">
          <p>Through support groups, volunteer outreach, community events, and local partnerships, we help reduce isolation and create stronger connections between families and the people around them.</p>
          <p>Because when neighbors show up for one another, communities become more than places where people live — they become places where people can heal, belong, and grow.</p>
        </div>
      ),
      icon: <Users2 size={24} className="text-hri-gold" />
    }
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (cardsRef.current) {
        gsap.fromTo(cardsRef.current.children,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.2,
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

  const openDetails = (program: ProgramData) => {
    setSelectedProgram(program)
    setIsModalOpen(true)
  }

  return (
    <section ref={containerRef} className="py-20 px-6 bg-hri-cream border-b border-hri-gold/20">
      <div className="max-w-7xl mx-auto">
        
        {/* Intro Section: WHAT WE DO */}
        <div className="mb-16 text-left max-w-7xl mx-auto">
          {/* <span className="text-hri-gold uppercase tracking-[0.15em] font-bold text-xs block mb-2">
            What We Do
          </span> */}
          <h2 className="text-3xl md:text-4xl font-serif font-bold max-w-3xl text-hri-green mb-6 leading-tight">
          </h2>
          <div className="space-y-2 text-hri-green/80 max-w-5xl font-light leading-relaxed">
            <p>
              When a family is facing hardship, the need is rarely just one thing. It may be an unexpected bill, an empty refrigerator, the threat of losing housing, or simply not knowing where to turn.
            </p>
            <p>
              The Household Resilience Initiative brings compassionate, practical support together in one place — helping families navigate immediate challenges while building a path toward lasting stability.
            </p>
            <p>
              Our programs are designed around a simple belief: every family deserves to be treated with dignity, heard without judgment, and supported with care.
            </p>
          </div>
        </div>

        <div className="mb-10 text-left">
          <h3 className="text-2xl font-serif font-bold text-hri-green uppercase tracking-wide">
            Our Core Programs
          </h3>
          <div className="w-16 h-[2px] bg-hri-gold  mt-4" />
        </div>

        {/* Grid of Programs */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program) => (
            <div 
              key={program.id}
              className="bg-white border border-hri-green/10 hover:border-hri-gold/50 p-8 text-left hover:shadow-xl transition-all duration-300 relative group flex flex-col justify-between"
            >
              {/* Gold Top highlight */}
              <div className="absolute top-0 left-0 w-0 h-[3px] bg-hri-gold group-hover:w-full transition-all duration-300" />
              
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="bg-hri-green/5 p-3 shrink-0">
                    {program.icon}
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-hri-gold bg-hri-gold/5 border border-hri-gold/20 px-2.5 py-0.5">
                    {program.tag}
                  </span>
                </div>

                <h3 className="text-xl font-serif font-bold text-hri-green mb-3 group-hover:text-hri-gold transition-colors">
                  {program.title}
                </h3>
                
                <p className="text-sm text-hri-green/70 leading-relaxed font-light mb-6">
                  {program.description}
                </p>
              </div>

              <div className="pt-4 border-t border-hri-green/5">
                <button
                  onClick={() => openDetails(program)}
                  className="bg-hri-green text-hri-cream hover:bg-hri-gold hover:text-hri-green font-bold text-xs uppercase tracking-wider py-2.5 px-6 transition-colors duration-300"
                >
                  View Program Details &rarr;
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal rendering */}
        <ProgramDetailModal 
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          program={selectedProgram}
        />

      </div>
    </section>
  )
}

export default ProgramList
