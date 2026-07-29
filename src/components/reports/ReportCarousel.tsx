import React, { useState, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface ReportSlide {
  id: number
  headline: string
  body: string
}

const slides: ReportSlide[] = [
  {
    id: 1,
    headline: '2,347+ families received essential holiday support',
    body: 'Each year, our programs provide food, gifts, financial assistance, and other necessities so families facing hardship can experience the warmth and joy of the holiday season. Through toy drives, meal distributions, and our Holiday Resilience Fund, we work to ensure that no child or parent is left without hope during this special time of year.\n\nBecause every family deserves to celebrate with dignity, love, and a sense of belonging.'
  },
  {
    id: 2,
    headline: '183,000+ meals provided to families facing hunger',
    body: 'For many households, consistent and nutritious meals are a daily struggle. When crisis hits — whether through job loss, medical bills, or unexpected hardship — food insecurity is often the first and most urgent challenge families face.\n\nThrough our meal distribution programs, food pantries, and emergency grocery support, the Household Resilience Initiatives works to ensure no family has to wonder where their next meal is coming from. We believe every child deserves a full plate and every parent deserves the peace of mind that comes with it.'
  },
  {
    id: 3,
    headline: 'Supporting families through crisis, year after year',
    body: 'Each year, unexpected disasters — from severe storms and flooding to house fires and other emergencies — disrupt lives and neighborhoods across Maine. When crisis strikes, the Household Resilience Initiatives is there.\n\nIn 2024, we responded to dozens of local emergencies, providing emergency financial assistance, food, essential supplies, and emotional support to families who lost homes, belongings, or stability. Whether the crisis was sudden or ongoing, we showed up with compassion, practical help, and hope.\n\nBecause when disaster hits, no family should have to face it alone.'
  },
  {
    id: 4,
    headline: '1,120+ families received emergency housing support',
    body: 'Losing a home is one of the most devastating experiences a family can face. When rent becomes impossible to pay due to job loss, medical bills, or unexpected crises, the Household Resilience Initiatives steps in with emergency rental assistance and eviction prevention support. Our goal is simple: keep families together in safe, stable housing so children can remain in their schools and parents can focus on rebuilding instead of surviving night by night.'
  },
  {
    id: 5,
    headline: '3,800+ children received essential items',
    body: 'Children should never have to go without the basics because their family is struggling. Through our children\'s support programs, we provide school supplies, seasonal clothing, diapers, personal care items, and other necessities so kids can feel confident, clean, and ready to learn. Every backpack filled and every pair of shoes given is a small but powerful reminder that these children are seen and valued.'
  },
  {
    id: 6,
    headline: '75 volunteer stations across 20 states',
    body: 'Our work is powered by the generosity of local volunteers who pack food boxes, distribute supplies, organize clothing drives, and show up for families in their darkest moments. These dedicated individuals turn compassion into action in towns and cities throughout the state. Because of them, families receive not only practical help but also the powerful message that they are not alone.'
  },
  {
    id: 7,
    headline: 'Over 6,500 instances of practical help provided',
    body: 'Crisis doesn\'t only happen during the holidays. From January to December, the Household Resilience Initiatives offers ongoing support — whether it\'s emergency financial aid, food assistance, resource navigation, or a listening ear. Families know that when life becomes overwhelming, help is available — with dignity and without judgment — giving them the strength to keep moving forward.'
  }
]

const SLIDE_INTERVAL = 7000

const ReportCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [progress, setProgress] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const goTo = useCallback((index: number) => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentIndex(index)
      setProgress(0)
      setIsTransitioning(false)
    }, 300)
  }, [])

  const handleNext = useCallback(() => {
    goTo((currentIndex + 1) % slides.length)
  }, [currentIndex, goTo])

  const handlePrev = useCallback(() => {
    goTo((currentIndex - 1 + slides.length) % slides.length)
  }, [currentIndex, goTo])

  // Auto-advance + progress bar
  useEffect(() => {
    const tick = 50 // ms per frame
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + (tick / SLIDE_INTERVAL) * 100
        if (next >= 100) {
          handleNext()
          return 0
        }
        return next
      })
    }, tick)
    return () => clearInterval(interval)
  }, [handleNext])

  const current = slides[currentIndex]

  return (
    <section className="py-24 px-6 bg-hri-cream relative overflow-hidden">
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-hri-green/40 text-hri-green text-xs uppercase tracking-widest font-bold mb-4">
            <span className="w-1.5 h-1.5 bg-hri-gold rounded-full" />
            Annual Impact
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-hri-green mb-3">
            The Numbers Behind Our Mission
          </h2>
          <div className="w-16 h-[2px] bg-hri-gold mx-auto mb-4" />
          <p className="text-sm sm:text-base text-hri-green/60 font-light max-w-2xl mx-auto leading-relaxed">
            Every number tells a story. Here is the measurable impact of your generosity and our collective commitment to family resilience.
          </p>
        </div>

        {/* Carousel Card */}
        <div className="relative bg-white/[0.06] backdrop-blur-sm border border-hri-gold/20 p-8 sm:p-12 md:p-16 min-h-[340px] flex flex-col justify-center">
          {/* Decorative corner accents */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-hri-green" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-hri-green" />

          {/* Slide counter */}
          <span className="absolute top-6 right-8 text-xs text-hri-green/90 tracking-widest font-mono">
            {String(currentIndex + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
          </span>

          {/* Slide content */}
          <div
            className={`transition-all duration-300 ease-in-out ${
              isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
            }`}
          >
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-hri-gold leading-tight mb-6">
              {current.headline}
            </h3>
            <div className="w-12 h-[2px] bg-hri-gold/40 mb-6" />
            {current.body.split('\n\n').map((paragraph, i) => (
              <p
                key={i}
                className="text-sm sm:text-base text-hri-green/80 leading-relaxed font-light mb-4 last:mb-0"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Controls Row */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Progress Indicators */}
          <div className="flex items-center gap-2 order-2 sm:order-1">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goTo(idx)}
                className="relative h-1.5 rounded-full overflow-hidden transition-all duration-300 cursor-pointer"
                style={{ width: idx === currentIndex ? 40 : 12 }}
                aria-label={`Go to slide ${idx + 1}`}
              >
                <span className="absolute inset-0 bg-hri-green/20 rounded-full" />
                {idx === currentIndex && (
                  <span
                    className="absolute inset-y-0 left-0 bg-hri-gold rounded-full transition-none"
                    style={{ width: `${progress}%` }}
                  />
                )}
                {idx !== currentIndex && (
                  <span className="absolute inset-0 bg-hri-green/20 rounded-full hover:bg-hri-green/40 transition-colors" />
                )}
              </button>
            ))}
          </div>

          {/* Nav Buttons */}
          <div className="flex gap-3 order-1 sm:order-2">
            <button
              onClick={handlePrev}
              className="group w-11 h-11 flex items-center justify-center border border-hri-green hover:border-hri-gold rounded-full text-hri-green hover:text-hri-gold transition-all duration-300 cursor-pointer"
              aria-label="Previous slide"
            >
              <ChevronLeft size={18} className="group-hover:-translate-x-0.5 transition-transform" />
            </button>
            <button
              onClick={handleNext}
              className="group w-11 h-11 flex items-center justify-center border border-hri-green hover:border-hri-gold rounded-full text-hri-green hover:text-hri-gold transition-all duration-300 cursor-pointer"
              aria-label="Next slide"
            >
              <ChevronRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ReportCarousel
