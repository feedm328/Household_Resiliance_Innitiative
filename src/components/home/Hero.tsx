import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'

import HomeHeroImg from '@/assets/home-hero.jpeg'

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const buttonsRef = useRef<HTMLDivElement>(null)
  const logoRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Create a timeline for hero entrance
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      tl.fromTo(containerRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1.2 }
      )

      if (logoRef.current) {
        tl.fromTo(logoRef.current,
          { scale: 0.8, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.8 },
          '-=0.8'
        )
      }

      if (titleRef.current) {
        // Splitting words or direct animation
        tl.fromTo(titleRef.current,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 1 },
          '-=0.5'
        )
      }

      if (subtitleRef.current) {
        tl.fromTo(subtitleRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          '-=0.7'
        )
      }

      if (buttonsRef.current) {
        tl.fromTo(buttonsRef.current.children,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, stagger: 0.15 },
          '-=0.5'
        )
      }
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative min-h-[85vh] flex items-center bg-hri-green text-hri-cream py-20 px-6 overflow-hidden border-b-4 border-hri-gold bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${HomeHeroImg})` }}
    >
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-hri-green/95 via-hri-green/50 to-hri-green-dark/95 z-0" />
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#B38F4D_1px,transparent_1px),linear-gradient(to_bottom,#B38F4D_1px,transparent_1px)] bg-[size:4rem_4rem] z-0" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">

        {/* Text Content */}
        <div className="lg:col-span-7 flex flex-col text-left">
          <span className="text-hri-gold uppercase tracking-[0.25em] font-bold text-xs sm:text-sm mb-4">
            The Household Resilience Initiative
          </span>
          <h1
            ref={titleRef}
            className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-hri-cream leading-tight mb-6"
          >
            Stronger Homes.<br />
            Resilient Communities.<br />
            <span className="text-hri-gold">Lasting Hope.</span>
          </h1>
          <p
            ref={subtitleRef}
            className="text-base sm:text-lg text-hri-cream/80 max-w-xl mb-10 leading-relaxed font-light"
          >
            The first months of crisis are often the hardest for a family, when one unexpected blow can threaten everything they’ve built.          </p>
          <div
            ref={buttonsRef}
            className="flex flex-wrap gap-4"
          >
            <Link
              to="/donation"
              className="bg-hri-gold text-hri-green hover:bg-hri-gold/90 font-bold uppercase tracking-wider px-8 py-4 text-sm transition-all shadow-lg hover:translate-y-[-2px] duration-300"
            >
              Donate Now
            </Link>
            <Link
              to="/about"
              className="border border-hri-gold text-hri-cream hover:bg-hri-cream hover:text-hri-green font-bold uppercase tracking-wider px-8 py-4 text-sm transition-all hover:translate-y-[-2px] duration-300"
            >
              Our Mission
            </Link>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero
