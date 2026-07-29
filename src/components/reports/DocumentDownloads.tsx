import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Doc1Img from '@/assets/doc-1.jpeg'
import Doc2Img from '@/assets/doc-2.png'
import Doc3Img from '@/assets/doc-3.png'

gsap.registerPlugin(ScrollTrigger)

const DocumentDownloads: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (gridRef.current) {
        gsap.fromTo(gridRef.current.children,
          { opacity: 0, scale: 0.97, y: 30 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            scrollTrigger: {
              trigger: gridRef.current,
              start: 'top 85%',
              toggleActions: 'play none none none',
            }
          }
        )
      }
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={containerRef} className="py-20 px-6 bg-white border-b border-hri-gold">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-hri-gold uppercase tracking-[0.2em] font-bold text-xs">
            Public Disclosure
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-hri-green mt-1 mb-4">
            Document Center
          </h2>
          <div className="w-16 h-[2px] bg-hri-gold mx-auto mb-6" />
          <p className="text-sm sm:text-base text-hri-green/70 leading-relaxed font-light">
            Access our complete list of publications, financial evaluations, building guides, and roadmap documentation.
          </p>
        </div>

        {/* Documents Grid */}
        <div ref={gridRef} className="grid grid-cols-1 gap-6 max-w-7xl mx-auto">
          <div className="bg-hri-cream border border-hri-green/10 hover:border-hri-gold/50 p-2 hover:shadow-lg transition-all duration-300 group overflow-hidden">
            <img src={Doc3Img} alt="Document 3" className="w-full object-contain" />
          </div>
          <div className="bg-hri-cream border border-hri-green/10 hover:border-hri-gold/50 p-2 hover:shadow-lg transition-all duration-300 group overflow-hidden">
            <img src={Doc1Img} alt="Document 1" className="w-full object-contain" />
          </div>
          <div className="bg-hri-cream border border-hri-green/10 hover:border-hri-gold/50 p-2 hover:shadow-lg transition-all duration-300 group overflow-hidden">
            <img src={Doc2Img} alt="Document 2" className="w-full object-contain" />
          </div>
        </div>

      </div>
    </section>
  )
}

export default DocumentDownloads
