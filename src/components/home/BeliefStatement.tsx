import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const BeliefStatement: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.belief-headline',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 75%',
          },
        }
      )
      gsap.fromTo(
        '.belief-body',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.3,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 75%',
          },
        }
      )
      gsap.fromTo(
        '.belief-cta',
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          delay: 0.5,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 75%',
          },
        }
      )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={containerRef} className="py-24 px-6 bg-white border-b border-hri-gold/10">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="belief-headline text-3xl sm:text-4xl lg:text-[2.75rem] font-serif font-bold text-hri-green leading-snug mb-8">
          Every family deserves a safe home, a strong foundation, and the chance to <span className="text-hri-gold italic">thrive</span> — not just survive.
        </h2>
        <p className="belief-body text-base sm:text-lg text-hri-green/70 leading-relaxed font-light max-w-2xl mx-auto mb-10">
          We are The Household Resilience Initiatives, dedicated to walking alongside families during their most difficult seasons.        </p>
        <div className="belief-cta flex flex-wrap justify-center gap-4">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 bg-hri-green text-hri-cream hover:bg-hri-green-light border border-hri-gold px-7 py-3 text-xs font-bold uppercase tracking-wider transition-all duration-300"
          >
            See Our Services
            <span>&rarr;</span>
          </Link>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 border border-hri-green text-hri-green hover:bg-hri-green hover:text-hri-cream px-7 py-3 text-xs font-bold uppercase tracking-wider transition-all duration-300"
          >
            Learn How You Can Help
            <span>&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default BeliefStatement
