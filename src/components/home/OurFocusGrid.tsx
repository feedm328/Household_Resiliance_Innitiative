import React, { useEffect, useRef, useState, useCallback } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ChildCareImg from '@/assets/fc-childcare.jpeg'
import EconomicSecurityImg from '@/assets/fc-economic-security.jpeg'
import ChildWelfareImg from '@/assets/fc-child-welfare.jpeg'
import PhysicalHealthImg from '@/assets/fc-physical-health.jpeg'
import EarlyDevelopmentImg from '@/assets/fc-early-develoment.jpeg'
gsap.registerPlugin(ScrollTrigger)

interface FocusCard {
  title: string
  description: string
  image: string
}

const OurFocusGrid: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)
  const [selectedCard, setSelectedCard] = useState<FocusCard | null>(null)

  const focusItems: FocusCard[] = [
    {
      title: 'Child Care',
      description: 'We support parents who are trying to work or attend appointments by connecting them with reliable childcare resources and emergency help so they dont have to leave their children unsupervised.',
      image: ChildCareImg
    },
    {
      title: 'Economic Security',
      description: 'Through our flagship Household Resilience Fund, we offer emergency financial help base support plus additional assistance for each child under 17 so families can catch their breath, stabilize, and begin rebuilding.',
      image: EconomicSecurityImg
    },
    {
      title: 'Child Welfare',
      description: 'We focus on keeping families together. Through counseling, financial assistance, and practical support, we help prevent unnecessary separation and strengthen the bonds that matter most.',
      image: ChildWelfareImg
    },
    {
      title: 'Physical Health & Nutrition',
      description: 'We provide nutritious food, household groceries, and essentials so no child goes to bed hungry and no parent has to choose between feeding their family and paying the bills.',
      image: PhysicalHealthImg
    },
    {
      title: 'Early Development',
      description: 'We help young children get the nurturing start they need through parenting resources, early learning support, and basic supplies that make a real difference in those critical first years.',
      image: EarlyDevelopmentImg
    },
    // {
    //   title: 'Housing Stability',
    //   description: 'We assist families in avoiding eviction, provide short-term rental support, and connect them with long-term housing solutions to ensure a stable environment.',
    //   image: HousingImg
    // }
  ]

  const openModal = useCallback((card: FocusCard) => {
    setSelectedCard(card)
    document.body.style.overflow = 'hidden'
  }, [])

  const closeModal = useCallback(() => {
    setSelectedCard(null)
    document.body.style.overflow = ''
  }, [])

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal()
    }
    if (selectedCard) {
      window.addEventListener('keydown', handleKeyDown)
    }
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedCard, closeModal])

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (gridRef.current) {
        gsap.fromTo(
          gridRef.current.children,
          { opacity: 0, y: 40, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.08,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: gridRef.current,
              start: 'top 80%',
            },
          }
        )
      }
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <>
      <section ref={containerRef} className="py-24 px-6 bg-hri-cream relative overflow-hidden border-b border-hri-gold/20">
        {/* Decorative gold accent corners */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-hri-gold/10 -translate-x-16 -translate-y-16 rotate-45" />
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-hri-gold/10 translate-x-16 translate-y-16 rotate-45" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-left mb-12">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-hri-green max-w-3xl mb-4">
              Our Focus, Helping Families Stay Together Through Life's Hardest Moments
            </h2>
            <p className="text-sm sm:text-base text-hri-green/70 leading-relaxed font-light max-w-4xl">
              At the Household Resilience Initiatives, we believe every family deserves a safe, stable home where children can thrive and parents can breathe easier. We meet families exactly where they are in moments of crisis, uncertainty, and quiet struggle and walk with them toward strength and hope. Here's how we support families every day.</p>
          </div>

          {/* Image Grid */}
          <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {focusItems.map((item, index) => (
              <div
                key={index}
                className="relative overflow-hidden group cursor-pointer h-72 sm:h-96 shadow-sm hover:shadow-md transition-all duration-300"
                onClick={() => openModal(item)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-xl md:text-2xl font-sans font-bold text-white mb-2 leading-tight">
                    {item.title}
                  </h3>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-hri-gold group-hover:text-white transition-colors duration-300">
                    Read More
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Modal Overlay ── */}
      {selectedCard && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={selectedCard.title}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-[fadeIn_0.25s_ease]"
            onClick={closeModal}
          />

          {/* Modal Card */}
          <div className="relative bg-white max-w-5xl w-full max-h-[90vh] overflow-hidden flex flex-col md:flex-row animate-[modalSlideUp_0.35s_ease]">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-white/90 hover:bg-white text-hri-green shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
              aria-label="Close modal"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal Image */}
            <div className="w-full md:w-1/2 h-96 md:h-auto overflow-hidden shrink-0 relative">
              <img
                src={selectedCard.image}
                alt={selectedCard.title}
                className="w-full h-full object-cover absolute inset-0"
              />
            </div>

            {/* Modal Content */}
            <div className="w-full md:w-1/2 p-8 sm:p-12 md:p-28 flex flex-col justify-center overflow-y-auto max-h-[50vh] md:max-h-none bg-white">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-hri-green mb-6 leading-tight">
                {selectedCard.title}
              </h3>
              <div className="w-12 h-1 bg-hri-gold mb-8 shrink-0" />
              <p className="text-base sm:text-lg text-hri-green/80 leading-relaxed font-light">
                {selectedCard.description}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Modal keyframe animations */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes modalSlideUp {
          from { opacity: 0; transform: translateY(24px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </>
  )
}

export default OurFocusGrid