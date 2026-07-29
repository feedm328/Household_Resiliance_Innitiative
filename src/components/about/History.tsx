import React, { useEffect, useRef } from 'react'
import { Award, Compass, HeartHandshake, ShieldCheck } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface MilestoneItem {
  id: number
  year: string
  title: string
  description: string
  icon: React.ReactNode
}

const History: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)

  const milestones: MilestoneItem[] = [
    {
      id: 1,
      year: '2017',
      title: 'WHERE IT BEGAN',
      description: 'The Household Resilience Initiative began in Bangor, Maine, when a small group of community members saw too many families struggling quietly and without enough support. What began as a local effort started simply: emergency food distributions, small financial grants, and neighbors helping neighbors through difficult moments. From the beginning, our purpose was clear: No family should have to face hardship alone.',
      icon: <Compass size={18} />
    },
    {
      id: 2,
      year: '2020',
      title: 'MEETING A MOMENT OF GREATER NEED',
      description: 'As the pandemic created unprecedented hardship for families across the country, the need for reliable support grew rapidly. We expanded the Household Resilience Fund, increased food and essential-needs assistance, and strengthened our community outreach efforts to help families navigate a period of extraordinary uncertainty. The experience reinforced something we already believed: When a crisis affects families, communities must be ready to respond together.',
      icon: <ShieldCheck size={18} />
    },
    {
      id: 3,
      year: '2022',
      title: 'BUILDING COMMUNITY HUBS',
      description: 'As our work continued to grow, we established local distribution hubs designed to bring support closer to the families who needed it. These hubs became more than places to receive food or essential supplies. They became points of connection — places where families could find information, access resources, meet caring volunteers, and feel connected to a community that cared about their well-being.',
      icon: <HeartHandshake size={18} />
    },
    {
      id: 4,
      year: 'TODAY',
      title: 'RESILIENCE IN ACTION',
      description: 'Today, the Household Resilience Initiative continues to expand its reach through a growing network of volunteers, community partners, supporters, and local initiatives. Our work is made possible through the collective efforts of families, volunteers, community partners, donors, and supporters who believe that helping one household can have a lasting impact far beyond that household alone. Because a family that receives support today may be better positioned to support someone else tomorrow.',
      icon: <Award size={18} />
    },
    {
      id: 5,
      year: 'THE FUTURE',
      title: 'WHERE WE ARE GOING',
      description: 'Our journey is still unfolding. We are working toward a future where families can access support sooner, communities can respond more effectively, and no household has to navigate a crisis without knowing where to turn. We will continue to grow our programs, strengthen local partnerships, expand volunteer involvement, and develop new ways to help families build stability and hope across the communities we serve. Our commitment remains the same: To show up. To listen. To help where we can. To walk alongside families as they rebuild. Because resilience starts at home. And when households grow stronger, communities everywhere grow stronger too.',
      icon: <Award size={18} />
    }
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      const nodes = document.querySelectorAll('.timeline-node')
      
      nodes.forEach((node) => {
        gsap.fromTo(node,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            scrollTrigger: {
              trigger: node,
              start: 'top 85%',
              toggleActions: 'play none none none',
            }
          }
        )
      })

      // Animate line fill
      const line = document.querySelector('.timeline-line')
      if (line) {
        gsap.fromTo(line,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: timelineRef.current,
              start: 'top 80%',
              end: 'bottom 80%',
              scrub: true,
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
            Our Journey
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-hri-green mt-1 mb-4">
            A History of Rebuilding
          </h2>
          <div className="w-16 h-[2px] bg-hri-gold mx-auto mb-6" />
          <p className="text-sm sm:text-base text-hri-green/70 leading-relaxed font-light">
            From emergency responses to systemic structures, see how we have evolved to secure communities and house hope.
          </p>
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative max-w-5xl mx-auto mt-12">
          {/* Vertical Center Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-hri-green/10 origin-top transform md:-translate-x-1/2" />
          
          {/* Animated Green/Gold Center Line */}
          <div className="timeline-line absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-hri-gold origin-top transform md:-translate-x-1/2 z-10" />

          {/* Timeline Nodes */}
          <div className="space-y-12">
            {milestones.map((node, index) => {
              const isEven = index % 2 === 0
              return (
                <div 
                  key={node.id} 
                  className={`timeline-node flex flex-col md:flex-row relative z-20 ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Badge (Circle in center) */}
                  <div className="absolute left-4 md:left-1/2 top-0 bg-hri-green text-hri-gold border-2 border-hri-gold w-10 h-10 flex items-center justify-center transform -translate-x-[19px] md:-translate-x-5 select-none shrink-0 shadow-lg">
                    {node.icon}
                  </div>

                  {/* Spacer for MD and above */}
                  <div className="hidden md:block w-1/2" />

                  {/* Card Content */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8">
                    <div className="bg-white border border-hri-green/10 p-8 text-left hover:shadow-lg transition-shadow relative">
                      {/* Ribbon banner indicating year */}
                      <span className="inline-block bg-hri-gold text-hri-green font-bold text-xs uppercase px-3 py-1 mb-4">
                        {node.year}
                      </span>
                      <h3 className="text-xl font-serif font-bold text-hri-green mb-2">
                        {node.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-hri-green/70 leading-relaxed font-light">
                        {node.description}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

        </div>

      </div>
    </section>
  )
}

export default History
