import React, { useState, useEffect } from 'react'
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import Impact1 from '@/assets/impact-1.jpeg'
import Impact2 from '@/assets/impact-2.jpeg'
import Impact3 from '@/assets/impact-3.jpeg'
import Impact4 from '@/assets/impact-4.jpeg'
import Impact5 from '@/assets/impact-5.jpeg'
import Impact6 from '@/assets/impact-6.jpeg'

interface Story {
  id: number
  title: string
  quote: string
  content: string
  author: string
  image: string
}

const stories: Story[] = [
  {
    id: 1,
    title: 'Emergency Financial Help',
    quote: "For the first time in weeks, my kids slept without worrying about rain.",
    content: "Last month, Maria lost her apartment after her hours were cut at work. With three children and nowhere to go, she found herself setting up a tent in the park. Through the Household Resilience Initiatives, we were able to provide emergency financial help from the Resilience Fund, food packages, and connect her with temporary housing support. Today, Maria is still in transition, but she has hope — and a plan.",
    author: "Maria",
    image: Impact1
  },
  {
    id: 2,
    title: 'Consistent Support',
    quote: "I didn't want to bother anyone.",
    content: "Mr. Thompson, a 68-year-old veteran living alone, had been struggling to get groceries after his health declined. When our volunteer James knocked on his door with a warm meal and supplies, Mr. Thompson's eyes filled with tears. Thanks to our food assistance program and regular check-ins, Mr. Thompson now receives consistent support. Small acts like this remind us that dignity matters, especially in our later years.",
    author: "Mr. Thompson",
    image: Impact2
  },
  {
    id: 3,
    title: 'Dedicated Volunteers',
    quote: "Seeing a mom leave with food and hope makes all the hours worth it.",
    content: "Meet Hannah, Marcus, and Elena — three dedicated volunteers who spend their weekends helping at our resource center. Whether sorting donations, packing food boxes, or greeting families with warm smiles, they bring energy and compassion to everything they do. Their commitment shows that real change often starts with young hearts willing to serve.",
    author: "Hannah",
    image: Impact3
  },
  {
    id: 4,
    title: 'Restoring Confidence',
    quote: "When a mom leaves here smiling with clothes that fit her kids, I know we've done something meaningful.",
    content: "Sarah manages our clothing and household goods distribution center with love and organization. Every week, she helps mothers like Jessica find clothes for job interviews, warm jackets for children, and basic essentials that many take for granted. For many families, a simple outfit can restore confidence and open new doors.",
    author: "Sarah",
    image: Impact4
  },
  {
    id: 5,
    title: 'Growing Stronger',
    quote: "We were scared we'd fall apart. Now we have hope that we can stay together and grow stronger.",
    content: "When Stacy gave birth to her third child, her family was already struggling with rising costs and unstable income. Feeling overwhelmed, she reached out for help. We provided emergency support through the Household Resilience Fund, baby supplies, and food assistance. Holding her newborn, Stacy smiled and shared her relief.",
    author: "Stacy",
    image: Impact5
  },
  {
    id: 6,
    title: 'Preventing Family Separation',
    quote: "We almost lost everything. Thanks to this help, we’re still together and fighting for our family’s future.",
    content: "Jamal and his wife Keisha were working hard to provide for their young daughter when unexpected car repairs and medical bills pushed them to the edge. Through our programs, we were able to offer financial assistance from the Resilience Fund and connect them with food support. Today, they stand together smiling: ‘We almost lost everything. Thanks to this help, we’re still together and fighting for our family’s future.",
    author: "Jamal and Keisha",
    image: Impact6
  }
]

const ImpactCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % stories.length)
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + stories.length) % stories.length)
  }

  // Auto scroll
  useEffect(() => {
    const timer = setInterval(handleNext, 6000)
    return () => clearInterval(timer)
  }, [])

  const currentStory = stories[currentIndex]

  return (
    <section className="py-24 px-6 bg-white border-b border-hri-gold/10 overflow-hidden relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="mb-12 text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-hri-green mb-3">
            Impact Stories
          </h2>
          <p className="text-sm sm:text-base text-hri-green/70 leading-relaxed font-light max-w-2xl mx-auto lg:mx-0">
            Discover real-world stories and learn about families who found hope through our programs.
          </p>
          <div className="w-16 h-[2px] bg-hri-gold mt-4 mx-auto lg:mx-0" />
        </div>

        {/* Story Content Carousel */}
        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch min-h-[500px]">
            {/* Image Side */}
            <div className="lg:col-span-6 relative overflow-hidden group rounded-sm shadow-xl h-64 sm:h-96 lg:h-auto">
              <img
                src={currentStory.image}
                alt={currentStory.title}
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
                key={currentStory.image}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-hri-green/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="bg-hri-green text-hri-cream text-xs font-bold uppercase tracking-wider px-3 py-1 inline-block shadow-md">
                  {currentStory.title}
                </span>
              </div>
            </div>

            {/* Content Side */}
            <div className="lg:col-span-6 flex flex-col justify-center gap-6 lg:pl-4">
              <Quote size={48} className="text-hri-gold/50" />
              <blockquote 
                key={currentStory.quote} 
                className="text-xl sm:text-2xl font-serif text-hri-green leading-relaxed italic animate-in fade-in slide-in-from-right-4 duration-500"
              >
                "{currentStory.quote}"
              </blockquote>
              
              <p 
                key={currentStory.content} 
                className="text-sm sm:text-base text-hri-green/70 leading-relaxed font-light animate-in fade-in slide-in-from-right-8 duration-500"
              >
                {currentStory.content}
              </p>
              
              <div className="mt-4 flex items-center justify-between border-t border-hri-green/10 pt-6">
                <p className="text-sm font-bold text-hri-green uppercase tracking-wider">
                  — {currentStory.author}
                </p>
                
                <div className="flex gap-2">
                  <button 
                    onClick={handlePrev}
                    className="p-2 border border-hri-green/20 hover:border-hri-gold hover:text-hri-gold text-hri-green transition-colors"
                    aria-label="Previous story"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button 
                    onClick={handleNext}
                    className="p-2 border border-hri-green/20 hover:border-hri-gold hover:text-hri-gold text-hri-green transition-colors"
                    aria-label="Next story"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center mt-10 gap-2">
          {stories.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === currentIndex ? 'w-8 bg-hri-gold' : 'w-2 bg-hri-green/20 hover:bg-hri-green/50'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ImpactCarousel
