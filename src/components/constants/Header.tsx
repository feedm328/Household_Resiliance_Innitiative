import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import LogoImg from '@/assets/hri-logo.jpeg'

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Reports & Transparency', path: '/reports' },
    { name: 'Contact Us', path: '/contact' },
  ]

  const isActive = (path: string) => {
    return location.pathname === path
  }

  return (
    <header className="sticky top-0 w-full bg-hri-cream border-b border-hri-gold/20 shadow-md z-40">
      <div className="mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo and Brand */}
          <Link to="/" className="flex items-center gap-3">
            <img src={LogoImg} alt="HRI Logo" className="h-14 w-14 border border-hri-green object-contain" />
            <div className="flex flex-col">
              <span className="font-serif text-lg font-bold text-hri-green leading-tight tracking-tight max-w-[12rem] md:max-w-3xl">
                The Household Resilience Initiative
              </span>
              <span className="text-[10px] uppercase text-hri-gold font-bold tracking-tight hidden sm:inline">
                Stronger Homes. Resilience Communities. Lasting Hope.
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative py-2 text-sm font-semibold tracking-tighter uppercase transition-all duration-300 group ${isActive(link.path) ? 'text-hri-gold' : 'text-hri-green hover:text-hri-gold'
                  }`}
              >
                {link.name}
                <span
                  className={`absolute bottom-0 left-0 w-full h-[2px] bg-hri-gold transform transition-transform duration-300 origin-left ${isActive(link.path) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                />
              </Link>
            ))}
          </nav>

          {/* Call to Action Button */}
          <div className="hidden lg:block">
            <Link
              to="/donation"
              className="bg-hri-green text-hri-cream hover:bg-hri-green-light border border-hri-gold hover:border-hri-gold/80 px-6 py-4 text-xs font-bold uppercase tracking-wider transition-all duration-300"
            >
              Donate Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-hri-green hover:text-hri-gold focus:outline-none p-2"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={30} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div
        className={`lg:hidden fixed inset-y-0 right-0 w-full sm:w-80 bg-hri-cream shadow-2xl border-l border-hri-gold/20 transform transition-transform duration-300 ease-in-out z-50 ${isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="flex justify-between items-center h-24 px-6 border-b border-hri-gold/20">
          <Link to="/" onClick={() => setIsOpen(false)} className="flex items-center gap-2">
            <img src={LogoImg} alt="HRI Logo" className="h-14 w-14 object-contain border border-hri-green" />
            <span className="font-serif text-lg leading-tight font-bold text-hri-green max-w-[13rem]">
              The Household Resilience Initiative
            </span>
          </Link>
          <button
            onClick={() => setIsOpen(false)}
            className="text-hri-green hover:text-hri-gold p-2"
            aria-label="Close menu"
          >
            <X size={32} />
          </button>
        </div>

        <div className="px-6 py-8 flex flex-col gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`text-base font-bold uppercase tracking-wider py-2 border-b border-hri-green/10 ${isActive(link.path) ? 'text-hri-gold border-hri-gold' : 'text-hri-green hover:text-hri-gold'
                }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/donation"
            onClick={() => setIsOpen(false)}
            className="w-full bg-hri-green text-hri-cream hover:bg-hri-green-light border border-hri-gold text-center py-3 text-sm font-bold uppercase tracking-wider mt-4"
          >
            Donate Now
          </Link>
        </div>
      </div>

      {/* Mobile overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="lg:hidden fixed inset-0 bg-black/40 z-40 transition-opacity"
        />
      )}
    </header>
  )
}

export default Header
