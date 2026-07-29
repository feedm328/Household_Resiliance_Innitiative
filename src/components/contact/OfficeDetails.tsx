import React, { useEffect, useRef } from 'react'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const OfficeDetails: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(containerRef.current,
        { opacity: 0, x: 30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          }
        }
      )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={containerRef} className="space-y-8 text-left">

      {/* Contact Card */}
      <div className="bg-hri-green text-hri-cream border-l-4 border-hri-gold p-8 relative">
        <h3 className="font-serif text-xl font-bold text-hri-gold mb-6">
          Headquarters Office
        </h3>

        <ul className="space-y-4 text-sm font-light">
          <li className="flex items-start gap-4">
            <MapPin size={18} className="text-hri-gold shrink-0 mt-0.5" />
            <div>
              <strong className="block text-xs uppercase text-hri-cream/50 mb-0.5">Physical Address</strong>
              <span>1185 Hammond St, Ste 3 <br /> Bangor, ME 04401</span>
            </div>
          </li>

          <li className="flex items-start gap-4">
            <Phone size={18} className="text-hri-gold shrink-0 mt-0.5" />
            <div>
              <strong className="block text-xs uppercase text-hri-cream/50 mb-0.5">Phone Number</strong>
              <a href="tel:+1 3122855760" className="hover:text-hri-gold transition-colors">+1 3122855760</a>
            </div>
          </li>

          <li className="flex items-start gap-4">
            <Mail size={18} className="text-hri-gold shrink-0 mt-0.5" />
            <div>
              <strong className="block text-xs uppercase text-hri-cream/50 mb-0.5">Electronic Mail</strong>
              <a href="mailto:info@householdresilience.org" className="hover:text-hri-gold transition-colors">
                info@householdresilience.org
              </a>
            </div>
          </li>

          <li className="flex items-start gap-4">
            <Clock size={18} className="text-hri-gold shrink-0 mt-0.5" />
            <div>
              <strong className="block text-xs uppercase text-hri-cream/50 mb-0.5">Operating Hours</strong>
              <span>Monday – Friday: 08:00 AM – 05:00 PM EST</span>
            </div>
          </li>
        </ul>
      </div>
{/* 
      Mock Map Panel
      <div className="border border-hri-green/10 p-4 bg-white relative">
        <span className="text-[10px] uppercase font-bold tracking-widest text-hri-green/50 block mb-2">
          Operational Coverage Map
        </span>

        <div className="h-48 bg-hri-cream border border-hri-green/10 flex flex-col items-center justify-center text-center relative select-none">
          <Map size={36} className="text-hri-gold mb-2 animate-bounce" />
          <span className="font-serif font-bold text-sm text-hri-green">1185 Hammond St, Ste 3 <br /> Bangor, ME 04401</span>
          <span className="text-[10px] text-hri-green/50 mt-1">40.7128° N, 74.0060° W</span>

          Aesthetic grid overlay
          <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#132E27_1px,transparent_1px),linear-gradient(to_bottom,#132E27_1px,transparent_1px)] bg-[size:1rem_1rem]" />

        </div>
      </div> */}

    </div>
  )
}

export default OfficeDetails
