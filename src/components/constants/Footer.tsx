import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { MapPin, Mail, ChevronRight, ArrowUp } from 'lucide-react'
import LogoImg from '@/assets/hri-logo.jpeg'
import CandidImg from '@/assets/candid.jpeg'
import CharityNavigatorImg from '@/assets/charity navigator.jpeg'

const Footer: React.FC = () => {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail('')
      setTimeout(() => setSubscribed(false), 5000)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-hri-green text-hri-cream border-t-2 border-hri-gold pt-16 pb-8 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Info */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <img src={LogoImg} alt="HRI Logo" className="h-16 w-16 bg-hri-cream p-1 object-contain" />
              <div className="flex flex-col">
                <span className="font-serif text-lg font-bold text-hri-gold leading-tight tracking-wide">
                  The Household Resilience Initiative
                </span>
                <span className="text-[10px] uppercase text-hri-cream/60 tracking-wider">
                  Stronger Homes. Resilient Communities. Lasting Hope.
                </span>
              </div>
            </div>
            <p className="text-sm text-hri-cream/70 leading-relaxed font-light mt-2">
              We stand beside families facing hardship, providing practical support, compassionate guidance, and lasting resources to help every household move from crisis toward stability, rebuild with dignity, and move forward with hope.            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-bold text-hri-gold border-b border-hri-gold/20 pb-2 mb-6">
              Quick Navigation
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Services', path: '/services' },
                { name: 'Reports & Transparency', path: '/reports' },
                { name: 'Donation', path: '/donation' },
                { name: 'Contact Us', path: '/contact' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="flex items-center gap-1 text-hri-cream/70 hover:text-hri-gold transition-colors group"
                  >
                    <ChevronRight size={14} className="text-hri-gold group-hover:translate-x-1 transition-transform" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="font-serif text-lg font-bold text-hri-gold border-b border-hri-gold/20 pb-2 mb-6">
              Get In Touch
            </h3>
            <ul className="space-y-4 text-sm text-hri-cream/70">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-hri-gold capitalize mt-1 shrink-0" />
                <span>1185 Hammond St, Ste 3<br />Bangor, ME 04401</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-hri-gold mt-1 shrink-0" />
                <div className="flex flex-col gap-1">
                  <a href="mailto:householdresilience@gmail.com" className="hover:text-hri-gold transition-colors">
                    householdresilience@gmail.com
                  </a>
                  <a href="mailto:Info@householdresilience.org" className="hover:text-hri-gold transition-colors">
                    info@householdresilience.org
                  </a>
                  <a href="mailto:Support@householdresilience.org" className="hover:text-hri-gold transition-colors">
                    support@householdresilience.org
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Newsletter subscription */}
          <div>
            <h3 className="font-serif text-lg font-bold text-hri-gold border-b border-hri-gold/20 pb-2 mb-6">
              Newsletter Signup
            </h3>
            <p className="text-sm text-hri-cream/70 mb-4 font-light leading-relaxed">
              Stay informed with our monthly impact newsletters and event schedules.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Enter email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-hri-green-dark border border-hri-gold/40 text-hri-cream px-4 py-2 text-sm focus:outline-none focus:border-hri-gold"
                required
              />
              <button
                type="submit"
                className="w-full bg-hri-gold text-hri-green font-bold text-xs uppercase tracking-wider py-2.5 hover:bg-hri-gold/90 transition-colors"
              >
                {subscribed ? 'Subscribed!' : 'Subscribe'}
              </button>
            </form>
          </div>
        </div>

        <div className="mt-8 flex flex-col md:flex-row justify-start items-start gap-8 md:gap-16">
          <div className="flex flex-col items-start gap-2">
            <div className="flex items-center gap-6">
              <img src={CandidImg} alt="Candid" className="h-24 object-contain bg-white rounded p-1" />
              <img src={CharityNavigatorImg} alt="Charity Navigator" className="h-24 object-contain bg-white rounded p-1" />
            </div>
          </div>
        </div>

        {/* Footer bottom bar */}
        <div className="border-t border-hri-cream/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-base text-hri-cream/50 gap-4">
          <div className="text-center md:text-left leading-relaxed max-w-xl">
            Copyright ©️ 2026 The Household Resilience Initiative. All rights reserved. The Household Resilience Initiative is a 501 (c)(3) non-profit recognition by the IRS. Tax ID Number: 20-8623416
          </div>
          <div className="flex items-center gap-6">
            <Link to="/about" className="hover:text-hri-gold transition-colors">Privacy Policy</Link>
            <Link to="/contact" className="hover:text-hri-gold transition-colors">Terms of Use</Link>
            <button
              onClick={scrollToTop}
              className="bg-hri-green-dark hover:bg-hri-gold border border-hri-gold/40 hover:border-hri-green text-hri-cream hover:text-hri-green p-2 transition-all cursor-pointer"
              aria-label="Scroll to top"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
