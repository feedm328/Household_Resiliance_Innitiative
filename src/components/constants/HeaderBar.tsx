import React, { useState, useEffect } from 'react'
import { Phone, Mail, Heart } from 'lucide-react'
import { Link } from 'react-router-dom'

const HeaderBar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div 
      className={`w-full bg-hri-green text-hri-cream px-2 md:px-6 text-xs flex justify-between items-center border-b border-hri-green/20 relative z-40 transition-all duration-500 overflow-hidden ${
        isScrolled ? 'max-h-0 opacity-0 py-0' : 'max-h-[50px] opacity-100 py-2'
      }`}
    >
      {/* Contact info */}
      <div className="flex items-center gap-6">
        <a href="tel:+1234567890" className="hidden lg:flex items-center gap-2 hover:text-hri-gold transition-colors">
          <Phone size={12} className="text-hri-gold" />
         <a href="tel:+1 3122855760" className="hidden sm:inline">+1 3122855760</a>
        </a>
        <a href="mailto:info@householdresilience.org" className="hidden lg:flex items-center gap-2 hover:text-hri-gold transition-colors">
          <Mail size={12} className="text-hri-gold" />
          <span>householdresilienceinitiative@gmail.com</span>
        </a>
      </div>

      {/* Campaign / Social Links */}
      <div className="flex items-center justify-between md:justify-center gap-6">
        <div className="flex items-center gap-2 text-hri-cream/80">
          <Heart size={12} className="hidden md:flex text-hri-gold animate-pulse" />
          <span>From Hardship to Hope — One Household at a Time</span>
        </div>

        <Link to="/donation" className="bg-hri-gold text-hri-green px-3 py-1 font-semibold uppercase tracking-wider text-[10px] hover:bg-hri-gold/90 transition-all ml-2">
          Donate
        </Link>
      </div>
    </div>
  )
}

export default HeaderBar
