import React, { useState, useEffect, useRef } from 'react'
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface FAQItem {
  id: number
  question: string
  answer: string
}

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  
  const containerRef = useRef<HTMLDivElement>(null)
  const listRef = useRef<HTMLDivElement>(null)

  const faqData: FAQItem[] = [
 {
      id: 1,
      question: 'How are families selected for assistance?',
      answer: 'Families may be referred by community partners, apply directly, or connect with us through community outreach. Each request is reviewed with care and compassion, with consideration given to the family’s circumstances, immediate needs, and available resources. Our goal is not to judge a family’s hardship. It is to understand how we may be able to help.'
    },
    {
      id: 2,
      question: 'Do families have to repay the assistance they receive?',
      answer: 'No. Assistance provided through the Household Resilience Fund and eligible program services is provided as grant support. Repayment is not required.'
    },
    {
      id: 3,
      question: 'Can community members volunteer or help?',
      answer: 'Absolutely. Volunteers are an essential part of our work. There are many ways to get involved, including helping with food distributions, clothing and essentials drives, community outreach, events, and other initiatives. Every hour given, every resource shared, and every act of kindness helps strengthen a household.'
    },
    {
      id: 4,
      question: 'Are your programs only for certain families?',
      answer: 'We support Maine families experiencing genuine hardship, with priority given to households facing urgent needs and those with children, older adults, or individuals with disabilities. Support is offered with compassion, dignity, and without judgment. Because a family’s hardest season should not have to become its permanent story.'
    }
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (listRef.current) {
        gsap.fromTo(listRef.current.children,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            scrollTrigger: {
              trigger: listRef.current,
              start: 'top 85%',
              toggleActions: 'play none none none',
            }
          }
        )
      }
    }, containerRef)

    return () => ctx.revert()
  }, [])

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section ref={containerRef} className="py-20 px-6 bg-hri-cream border-b border-hri-gold">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-hri-gold/40 text-hri-gold text-xs uppercase tracking-widest font-bold mb-4">
            <HelpCircle size={14} />
            <span>General FAQ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-hri-green mb-4">
            Frequently Answered Questions
          </h2>
          <div className="w-16 h-[2px] bg-hri-gold mx-auto" />
        </div>

        {/* FAQ Accordion List */}
        <div ref={listRef} className="space-y-4">
          {faqData.map((faq, index) => {
            const isOpen = activeIndex === index
            return (
              <div 
                key={faq.id}
                className="border border-hri-green/10 bg-white transition-all duration-300"
              >
                {/* Header Toggle */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                >
                  <span className="font-serif font-bold text-sm sm:text-base text-hri-green">
                    {faq.question}
                  </span>
                  <span className="text-hri-gold ml-4">
                    {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </span>
                </button>

                {/* Collapsible Content */}
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-60 border-t border-hri-green/10' : 'max-h-0'
                  }`}
                >
                  <p className="p-6 text-xs sm:text-sm text-hri-green/70 leading-relaxed font-light bg-hri-cream/35">
                    {faq.answer}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default FAQ
