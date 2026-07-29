import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Issue1Img from '@/assets/issue-1.png'
import Issue2Img from '@/assets/issue-2.png'
import Issue3Img from '@/assets/issue-3.png'
import Issue4Img from '@/assets/champion2.jpeg'

interface IssueCardData {
  id: number
  tag?: string
  title: string
  description: string
  image: string
  theme: 'light' | 'dark'
  buttonText?: string
  buttonLink?: string
}

const issueData: IssueCardData[] = [
  {
    id: 1,
    title: "We Provide Shelter, Love and Hope to Families Facing Homelessness",
    description: "The Household Resilience Initiative builds a bridge to hope for families experiencing homelessness, including survivors of human trafficking and youths through unconditional love, absolute respect, and relentless support.",
    image: Issue4Img,
    theme: 'dark'
  },
  {
    id: 2,
    tag: 'KNOW THE ISSUES',
    title: "Families with children are losing ground in one of the country's most important housing assistance programs",
    description: "Families with children are receiving a shrinking share of Housing Choice Vouchers.",
    image: Issue1Img,
    theme: 'light'
  },
  {
    id: 3,
    title: "Your gift to the Household Resilience Initiative will help give children the best possible start in life.",
    description: "Supporting a child in their first 1,000 days is a gift that can last a lifetime!",
    image: Issue2Img,
    theme: 'dark',
    buttonText: 'DONATE',
    buttonLink: '/donation'
  },
  {
    id: 4,
    title: "The Journey Home: A Roadmap to Ending Youth Homelessness",
    description: "We have a plan to end youth homelessness as we know it. We're calling it the Journey Home. Learn more about our strategic vision and the three pathways we'll focus on: Prevention, Intervention, and Restoration.",
    image: Issue3Img,
    theme: 'light'
  },

]

const IssueCards: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-white border-t border-hri-green/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {issueData.map((card) => (
            <div
              key={card.id}
              className={`flex flex-col group border border-gray-200 ${card.theme === 'dark' ? 'bg-hri-green border-hri-green' : 'bg-white'}`}
            >
              <div className="w-full h-72 lg:h-80 overflow-hidden bg-gray-100">
                <img
                  src={card.image}
                  alt={card.title}
                  className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${card.theme === 'dark' ? 'object-top' : ''} ${card.id === 3 ? 'object-top' : ''}`}
                />
              </div>
              <div className="pt-8 pb-10 px-6 text-left flex flex-col flex-grow">
                {card.tag && (
                  <span className={`text-xs font-bold tracking-[0.2em] uppercase mb-4 ${card.theme === 'dark' ? 'text-white' : 'text-black'}`}>
                    {card.tag}
                  </span>
                )}

                <h3 className={`text-2xl font-serif font-bold mb-4 leading-tight ${card.theme === 'dark' ? 'text-white font-sans font-medium md:text-3xl' : 'text-black'}`}>
                  {card.title}
                </h3>

                <p className={`text-base leading-relaxed ${card.theme === 'dark' ? 'text-white mb-8' : 'text-gray-800'}`}>
                  {card.description}
                </p>

                {card.buttonText && card.buttonLink && (
                  <div className="mt-auto pt-4">
                    <Link
                      to={card.buttonLink}
                      className={`inline-flex items-center justify-center font-bold uppercase tracking-wider px-6 py-3 text-sm transition-colors ${card.theme === 'dark'
                          ? 'bg-hri-gold text-hri-cream hover:bg-hri-gold-light'
                          : ''
                        }`}
                    >
                      {card.buttonText} <ArrowRight size={16} className="ml-2" />
                    </Link>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default IssueCards
