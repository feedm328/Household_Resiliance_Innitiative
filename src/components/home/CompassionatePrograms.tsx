import React from 'react'
import FamilyHopeImg from '@/assets/mission.jpeg'

const CompassionatePrograms: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-white border-b border-hri-gold/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Text Content Side */}
          <div className="order-2 lg:order-1 text-left">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-hri-green mb-6 leading-tight">
              Through compassionate programs, we provide:
            </h2>
            
            <ul className="space-y-4 mb-8 text-sm sm:text-base text-hri-green/80 font-light leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="text-hri-gold mt-1">•</span>
                <span><strong>Emergency financial assistance</strong> via the Household Resilience Fund (base support + additional help for each child under 17)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-hri-gold mt-1">•</span>
                <span><strong>Food and Housing essentials</strong></span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-hri-gold mt-1">•</span>
                <span><strong>Resource navigation and referrals</strong></span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-hri-gold mt-1">•</span>
                <span><strong>Emotional support and community connection</strong></span>
              </li>
            </ul>

            <div className="space-y-6">
              <p className="text-lg font-serif italic text-hri-green font-semibold border-l-4 border-hri-gold pl-4">
                No family should have to choose between survival and stability.
              </p>
              
              <p className="text-sm sm:text-base text-hri-green/70 leading-relaxed font-light">
                Whether you are a parent trying to hold your household together or a community member who wants to help, we are here with open hearts and open hands.
              </p>

              <div className="pt-4 border-t border-hri-green/10">
                <div className="text-sm sm:text-base text-hri-green font-medium leading-relaxed flex flex-wrap gap-2">
                  <span className='bg-hri-green p-2 text-white'>Every family deserves dignity.</span> <br/>
                  <span className='bg-hri-gold p-2 text-hri-green'>Every child deserves security.</span><br/>
                  <span className='bg-hri-green p-2 text-white'>Every home deserves a chance to heal.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Image Side */}
          <div className="order-1 lg:order-2 relative group overflow-hidden h-[400px] lg:h-[600px] rounded-sm shadow-xl">
            <img 
              src={FamilyHopeImg} 
              alt="Family Hope" 
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

export default CompassionatePrograms
