import React from 'react'
import ChampionImg from '@/assets/champion.jpeg'

const NoFamilyAlone: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-hri-cream border-b border-hri-gold/20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Text Content */}
          <div className="order-2 lg:order-1 text-left">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-hri-green mb-6 leading-tight">
              No Family Has To Face Hardship Alone
            </h2>
            
            <p className="text-sm sm:text-base text-hri-green/80 font-light leading-relaxed mb-6">
              Every bag packed, every hand extended, and every conversation shared is a step toward restoring dignity, stability, and hope. These community distributions are more than food drives they are lifelines that tell families they are seen, valued, and supported.
            </p>
            
            <p className="text-sm sm:text-base text-hri-green/80 font-light leading-relaxed mb-6">
              We believe resilience grows when communities show up for one another. Thank you to our incredible volunteers and partners who make this work possible, one act of kindness at a time.
            </p>

            <div className="pt-6 border-t border-hri-green/10">
              <p className="text-lg font-serif italic text-hri-gold font-semibold">
                Together, we are building stronger households and brighter futures.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 relative group overflow-hidden h-[400px] lg:h-[500px] rounded-sm shadow-xl">
            <img 
              src={ChampionImg} 
              alt="Volunteers and Champions" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-hri-green/10 group-hover:bg-transparent transition-colors duration-500" />
            <div className="absolute top-0 right-0 w-32 h-32 bg-hri-gold/20 -translate-y-16 translate-x-16 rounded-full blur-3xl mix-blend-multiply" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-hri-green/20 translate-y-16 -translate-x-16 rounded-full blur-3xl mix-blend-multiply" />
          </div>

        </div>
      </div>
    </section>
  )
}

export default NoFamilyAlone
