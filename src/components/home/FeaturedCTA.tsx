import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import CommunityImg from '@/assets/community-support.jpeg'

gsap.registerPlugin(ScrollTrigger)

const FeaturedCTA: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.featured-text',
        { x: -50, opacity: 0 },
        {
          x: 0,
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
        '.featured-image',
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          delay: 0.2,
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
    <section ref={containerRef} className="relative bg-hri-green text-hri-cream overflow-hidden border-b-4 border-hri-gold">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-stretch min-h-[480px]">
        {/* Text Side */}
        <div className="featured-text flex flex-col justify-center py-20 px-8 lg:px-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-hri-cream leading-tight mb-8">
            Since 2017, we've helped <span className="text-hri-gold">over 5,200</span> families rebuild their foundation.
          </h2>
          <div className="flex flex-col gap-3">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 border border-hri-gold text-hri-cream hover:bg-hri-gold hover:text-hri-green px-6 py-3 text-xs font-bold uppercase tracking-wider transition-all duration-300 self-start"
            >
              Browse Our Programs
              <span>&rarr;</span>
            </Link>
            <Link
              to="/reports"
              className="inline-flex items-center gap-2 border border-hri-cream/30 text-hri-cream/80 hover:border-hri-cream hover:text-hri-cream px-6 py-3 text-xs font-bold uppercase tracking-wider transition-all duration-300 self-start"
            >
              Explore Our Impact Data
              <span>&rarr;</span>
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 border border-hri-cream/30 text-hri-cream/80 hover:border-hri-cream hover:text-hri-cream px-6 py-3 text-xs font-bold uppercase tracking-wider transition-all duration-300 self-start"
            >
              Learn Our Story
              <span>&rarr;</span>
            </Link>
          </div>
        </div>

        {/* Image Side */}
        <div className="featured-image relative hidden lg:block">
          <img
            src={CommunityImg}
            alt="Community members receiving support"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-hri-green via-hri-green/30 to-transparent" />
        </div>
      </div>
    </section>
  )
}

export default FeaturedCTA
