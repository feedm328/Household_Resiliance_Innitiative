import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ServiceCTA: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.cta-image',
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
          },
        }
      );

      gsap.fromTo(
        '.cta-text',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 75%',
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const images = [
    {
      src: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=256&auto=format&fit=crop',
      alt: 'Company Professional',
      className: 'top-12 left-10 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24',
    },
    {
      src: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=256&auto=format&fit=crop',
      alt: 'Company Professional',
      className: 'bottom-16 left-20 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20',
    },
    {
      src: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=256&auto=format&fit=crop',
      alt: 'Company Professional',
      className: 'top-32 left-1/5 w-10 h-10 sm:w-14 sm:h-14 hidden md:block',
    },
    {
      src: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=256&auto=format&fit=crop',
      alt: 'Company Professional',
      className: 'top-10 right-20 w-16 h-16 sm:w-20 sm:h-20 ',
    },
    {
      src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=256&auto=format&fit=crop',
      alt: 'Company Professional',
      className: 'bottom-20 right-10 w-14 h-14 sm:w-20 sm:h-20 ',
    },
    {
      src: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=256&auto=format&fit=crop',
      alt: 'Company Professional',
      className: 'top-40 right-1/5 w-12 h-12 sm:w-16 sm:h-16 hidden md:block',
    },
    {
      src: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?q=80&w=256&auto=format&fit=crop',
      alt: 'Company Professional',
      className: 'bottom-20 left-1/4 w-10 h-10 sm:w-14 sm:h-14 hidden md:block',
    },
    {
      src: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=256&auto=format&fit=crop',
      alt: 'Company Professional',
      className: 'bottom-24 right-1/4 w-8 h-8 sm:w-14 sm:h-14 hidden lg:block',
    },
  ];

  return (
    <section ref={containerRef} className="relative w-full py-24 bg-hri-cream-dark overflow-hidden flex items-center justify-center min-h-[500px]">
      {/* Floating Images */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`cta-image absolute shadow-lg hover:scale-105 transition-transform duration-300 ${img.className}`}
        >
          <img
            src={img.src}
            alt={img.alt}
            className="w-full h-full object-cover rounded-none"
          />
        </div>
      ))}

      {/* Central Content */}
      <div className="relative z-10 max-w-2xl mx-auto px-6 text-center flex flex-col items-center">
        <h2 className="cta-text text-3xl md:text-5xl font-serif font-bold text-hri-green-dark mb-6 tracking-tight">
          The Household Resilience Initiative Fund
        </h2>
        <p className="cta-text text-base text-gray-700 mb-8 mx-auto font-light leading-tight ">
          The Household Resilience Fund provides emergency financial assistance to families facing sudden hardship. Support may help with urgent needs such as rent, utilities, groceries, transportation, and other essential household expenses.
        </p>

        {/* Placeholder link since user forgot to include the specific one */}
        <a
          href="/apply-household/index.html"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-text inline-flex items-center justify-center px-8 py-3 bg-hri-green-dark text-white font-medium hover:bg-hri-green transition-colors rounded-none group shadow-md"
        >
          <span>Apply for Assistance</span>
          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </section>
  );
};

export default ServiceCTA;
