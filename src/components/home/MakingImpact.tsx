import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import MakingImpactImg from '@/assets/making-impact.jpeg'

gsap.registerPlugin(ScrollTrigger)

interface AccordionItem {
  title: string
  content: string
}

const MakingImpact: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const items: AccordionItem[] = [
    {
      title: 'Emergency Financial Assistance',
      content: 'Through our flagship Household Resilience Fund, we provide direct cash support to help families cover urgent needs such as rent, utilities, groceries, and medical expenses. This includes base assistance plus additional support for each child under 17. Fast, dignified help when it matters most.',
    },
    {
      title: 'Food Security & Household Essentials',
      content: 'We distribute weekly groceries, fresh produce, diapers, baby formula, hygiene items, and cleaning supplies. No family should have to choose between paying bills and feeding their children.',
    },
    {
      title: 'Housing Stability & Prevention',
      content: 'We work to prevent evictions, provide short-term rental assistance, and connect families with longer-term housing solutions so children can stay in their schools and communities.',
    },
    {
      title: 'Resource Navigation & Referrals',
      content: 'Our team helps families access government benefits, job training programs, mental health services, legal aid, and other critical resources they may not know exist.',
    },
    {
      title: 'Community Connection & Emotional Support',
      content: 'We create safe spaces for parents to share their stories, reduce isolation, and build relationships. We believe healing happens in community not in silence.',
    },
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.impact-image',
        { x: -30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 75%',
          },
        }
      )
      gsap.fromTo(
        '.impact-header',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 75%',
          },
        }
      )
      gsap.fromTo(
        '.impact-accordion-item',
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          delay: 0.4,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.impact-accordion-list',
            start: 'top 80%',
          },
        }
      )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={containerRef} className="py-24 px-6 bg-hri-cream border-b border-hri-gold/20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Image Side - Left */}
          <div className="impact-image relative group overflow-hidden rounded-sm shadow-lg h-[400px] lg:h-[650px]">
            <img 
              src={MakingImpactImg} 
              alt="Making an Impact" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-hri-green/10 group-hover:bg-transparent transition-colors duration-500" />
            <div className="absolute top-0 right-0 w-32 h-32 bg-hri-gold/20 -translate-y-16 translate-x-16 rounded-full blur-3xl mix-blend-multiply" />
          </div>

          {/* Content & Accordion Side - Right */}
          <div className="flex flex-col">
            {/* Header */}
            <div className="impact-header mb-5 text-left flex flex-col gap-4">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-hri-green">
                Making a Real Difference Together
              </h2>
              <p className="text-sm text-hri-green/70 leading-relaxed font-light ">
                Every family deserves a safe, stable home where they can heal and grow even after life knocks them down. At the Household Resilience Initiatives, we stand with families during their hardest seasons. We don’t just offer temporary help we provide compassionate, practical support that helps households rebuild stronger foundations.
              </p>
              <Link
                to="/reports"
                className="inline-flex w-fit items-center gap-2 bg-hri-green text-hri-cream hover:bg-hri-green-light border border-hri-gold px-6 py-3 text-xs font-bold uppercase tracking-wider transition-all duration-300"
              >
                See Our Impact Areas
                <span>&rarr;</span>
              </Link>
            </div>

            {/* Accordion */}
            <div className="impact-accordion-list flex flex-col">
              {items.map((item, index) => (
                <div
                  key={index}
                  className="impact-accordion-item border-b border-hri-green/10"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full flex items-center justify-between py-5 text-left group cursor-pointer"
                  >
                    <span className={`text-base sm:text-lg font-semibold transition-colors duration-200 ${
                      openIndex === index ? 'text-hri-gold' : 'text-hri-green group-hover:text-hri-gold'
                    }`}>
                      {item.title}
                    </span>
                    <ChevronDown
                      size={20}
                      className={`text-hri-gold transition-transform duration-300 shrink-0 ml-4 ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openIndex === index ? 'max-h-60 pb-5' : 'max-h-0'
                    }`}
                  >
                    <p className="text-sm text-hri-green/70 leading-relaxed font-light pr-8">
                      {item.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default MakingImpact
