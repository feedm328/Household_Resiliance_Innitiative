import React, { useEffect, useRef } from 'react'
import { Users2, Sparkles, Heart, Home } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import FamilyImg from '@/assets/mission.jpeg'

gsap.registerPlugin(ScrollTrigger)

interface ValueItem {
  id: number
  title: string
  description: React.ReactNode
  icon: React.ReactNode
}

const MissionVision: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const leftColRef = useRef<HTMLDivElement>(null)
  const rightColRef = useRef<HTMLDivElement>(null)

  const valuesData: ValueItem[] = [
    {
      id: 1,
      title: 'Compassion with Dignity',
      description: (
        <div className="space-y-2">
          <p>We believe every family deserves to be treated with respect.</p>
          <p>We meet people where they are, listen to their circumstances, and respond with compassion rather than judgment. Asking for help should never mean losing one’s dignity.</p>
          <p>Support should remind people of their worth not make them feel defined by their hardship.</p>
        </div>
      ),
      icon: <Heart size={20} className="text-hri-gold" />
    },
    {
      id: 2,
      title: 'Solidarity over Spectators',
      description: (
        <div className="space-y-2">
          <p>We do not believe in simply standing on the sidelines of someone else’s hardship.</p>
          <p>We walk alongside families as they navigate difficult moments helping them identify immediate needs, connect with resources, and find a path forward.</p>
          <p>Sometimes progress happens one month at a time. One bill at a time. One meal at a time.</p>
          <p>And sometimes, it begins with simply knowing that someone is there.</p>
        </div>
      ),
      icon: <Users2 size={20} className="text-hri-gold" />
    },
    {
      id: 3,
      title: 'Immediate Help. Lasting Resilience.',
      description: (
        <div className="space-y-2">
          <p>Emergency assistance matters. But lasting stability often requires more than a single intervention.</p>
          <p>That is why our work combines immediate support with connections to resources, housing stability, community networks, and longer-term opportunities.</p>
          <p>We help families get through the crisis in front of them while supporting the foundation they need for what comes next.</p>
        </div>
      ),
      icon: <Sparkles size={20} className="text-hri-gold" />
    },
    {
      id: 4,
      title: 'Family Unity Matters',
      description: (
        <div className="space-y-2">
          <p>We believe families should have every opportunity to remain together, safe, and connected to their communities.</p>
          <p>Our work is centered on protecting the dignity of the household and recognizing the strength that exists within families themselves.</p>
          <p>We do not believe families need to be “fixed.”</p>
          <p>We believe families often need support, opportunity, and someone willing to stand beside them while they rebuild.</p>
        </div>
      ),
      icon: <Home size={20} className="text-hri-gold" />
    }
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (leftColRef.current && rightColRef.current) {
        gsap.fromTo(leftColRef.current,
          { x: -50, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: leftColRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none',
            }
          }
        )

        gsap.fromTo(rightColRef.current.children,
          { x: 50, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: rightColRef.current,
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
    <section ref={containerRef} className="py-20 px-6 bg-white border-b border-hri-gold/20 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        
        {/* Left Column: Mission & Vision */}
        <div ref={leftColRef} className="lg:col-span-6 flex flex-col gap-10 text-left">
          
          {/* Who We Are */}
          <div>
            <div className="space-y-4">
              <p className="text-sm sm:text-base text-hri-green/80 font-light leading-relaxed">
                The Household Resilience Initiative was founded on a simple but powerful belief: when families have the support they need during difficult seasons, they have a stronger chance to recover, rebuild, and thrive.
              </p>
              <p className="text-sm sm:text-base text-hri-green/80 font-light leading-relaxed">
                Hardship can affect any family, anywhere. A job can be lost. A medical emergency can change everything. A sudden expense can place an entire household under pressure. When those moments happen, families should not have to face them alone.
              </p>
              <p className="text-sm sm:text-base text-hri-green/80 font-light leading-relaxed">
                We exist to help families navigate those moments with compassion, dignity, and practical support while working toward something greater than temporary relief: a stronger, more stable future.
              </p>
            </div>
          </div>

          {/* Our Mission */}
          <div>
            <h2 className="text-3xl font-serif font-bold text-hri-green mb-4">Our Mission</h2>
            <div className="space-y-4">
              <p className="text-sm sm:text-base text-hri-green/80 font-light leading-relaxed">
                Our mission is to support families experiencing hardship by providing compassionate assistance, practical resources, and meaningful connections that help households move from crisis toward stability.
              </p>
              <p className="text-sm sm:text-base text-hri-green/80 font-light leading-relaxed">
                We meet families where they are — without judgment and help them take the next step forward.
              </p>
              <p className="text-sm sm:text-base text-hri-green/80 font-light leading-relaxed">
                Through emergency financial assistance, food and household essentials, housing stability support, resource navigation, community connection, and volunteer-led outreach, we work to ensure that families have access to the support they need during life’s most difficult seasons.
              </p>
              <p className="text-sm sm:text-base text-hri-green/80 font-light leading-relaxed">
                We believe support should do more than help a family survive today. It should help create the foundation for a stronger tomorrow.
              </p>
            </div>
          </div>

          {/* Our Vision */}
          <div>
            <h2 className="text-3xl font-serif font-bold text-hri-green mb-4">Our Vision</h2>
            <div className="space-y-4">
              <p className="text-sm sm:text-base text-hri-green/80 font-light leading-relaxed">
                We envision a future where every family has the opportunity to live with safety, dignity, stability, and hope.
              </p>
              <p className="text-sm sm:text-base text-hri-green/80 font-light leading-relaxed">
                A future where no parent has to choose between keeping the lights on and putting food on the table. Where a temporary crisis does not become a permanent setback. Where children can grow up in homes surrounded by stability, care, and opportunity.
              </p>
              <p className="text-sm sm:text-base text-hri-green/80 font-light leading-relaxed">
                Our vision is a future where communities recognize that the strength of a community is deeply connected to the well-being of the households within it.
              </p>
              <p className="text-sm sm:text-base text-hri-green/80 font-light leading-relaxed">
                Because when families are stronger, communities become stronger.
              </p>
              <p className="text-sm sm:text-base text-hri-green/80 font-light leading-relaxed">
                And when communities come together, resilience becomes possible.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Core Values */}
        <div ref={rightColRef} className="lg:col-span-6 text-left flex flex-col gap-6">
          <div className="mb-2">
            <span className="text-hri-gold uppercase tracking-[0.15em] font-bold text-xs">
              Commitments
            </span>
            <h2 className="text-3xl font-serif font-bold text-hri-green mt-1">
              What We Believe
            </h2>
            <div className="w-12 h-[2px] bg-hri-gold mt-3" />
          </div>

          {valuesData.map((val) => (
            <div 
              key={val.id} 
              className="bg-hri-cream border-l-4 border-hri-gold p-6 relative"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="shrink-0 bg-hri-green text-hri-cream p-1.5">
                  {val.icon}
                </div>
                <h3 className="font-serif font-bold text-lg text-hri-green">
                  {val.title}
                </h3>
              </div>
              <div className="text-xs sm:text-sm text-hri-green/70 font-light pl-11">
                {val.description}
              </div>
            </div>
          ))}

        </div>
      </div>

      {/* Image */}
      <div className="relative overflow-hidden mt-4">
        <img 
          src={FamilyImg} 
          alt="Family receiving support from HRI" 
          className="w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-hri-green/40 to-transparent rounded-xl" />
      </div>

    </section>
  )
}

export default MissionVision
