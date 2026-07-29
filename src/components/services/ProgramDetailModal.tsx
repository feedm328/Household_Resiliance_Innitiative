import React, { useEffect, useRef } from 'react'
import { X, CheckCircle2 } from 'lucide-react'
import gsap from 'gsap'
import type { ProgramData } from './types'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  program: ProgramData | null
}

const ProgramDetailModal: React.FC<ModalProps> = ({ isOpen, onClose, program }) => {
  const overlayRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      
      const ctx = gsap.context(() => {
        // Overlay fade in
        gsap.fromTo(overlayRef.current, 
          { opacity: 0 }, 
          { opacity: 1, duration: 0.3 }
        )
        // Content scale / slide up
        gsap.fromTo(contentRef.current,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.4, ease: 'power2.out' }
        )
      })
      return () => ctx.revert()
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen || !program) return null

  const handleClose = () => {
    gsap.to(contentRef.current, {
      y: 30,
      opacity: 0,
      duration: 0.25,
      onComplete: () => {
        gsap.to(overlayRef.current, {
          opacity: 0,
          duration: 0.2,
          onComplete: onClose
        })
      }
    })
  }

  return (
    <div 
      ref={overlayRef}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={handleClose}
    >
      <div 
        ref={contentRef}
        className="w-full max-w-2xl bg-hri-cream border-2 border-hri-gold p-6 sm:p-8 relative text-left shadow-2xl overflow-y-auto max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 text-hri-green hover:text-hri-gold transition-colors p-1"
          aria-label="Close details"
        >
          <X size={20} />
        </button>

        {/* Tag */}
        <span className="inline-block bg-hri-green text-hri-gold text-[10px] uppercase font-bold tracking-widest px-3 py-1 mb-4">
          {program.tag}
        </span>

        {/* Title */}
        <h3 className="text-2xl sm:text-3xl font-serif font-bold text-hri-green mb-4">
          {program.title}
        </h3>

        {/* Info summary row */}
        {(program.duration || program.impact) && (
          <div className="grid grid-cols-2 gap-4 border-y border-hri-green/10 py-4 mb-6">
            {program.duration && (
              <div>
                <span className="block text-[10px] uppercase font-bold text-hri-green/50 tracking-wider">Project Timeline</span>
                <span className="text-sm font-semibold text-hri-green">{program.duration}</span>
              </div>
            )}
            {program.impact && (
              <div>
                <span className="block text-[10px] uppercase font-bold text-hri-green/50 tracking-wider">Primary Impact Goal</span>
                <span className="text-sm font-semibold text-hri-green">{program.impact}</span>
              </div>
            )}
          </div>
        )}

        {/* Long Description */}
        <div className="mb-6">
          <h4 className="text-xs uppercase font-bold tracking-wider text-hri-gold mb-2">Scope of Operations</h4>
          <div className="text-sm text-hri-green/80 font-light">
            {program.longDescription}
          </div>
        </div>

        {/* Materials & Resources List */}
        {program.materials && program.materials.length > 0 && (
          <div>
            <h4 className="text-xs uppercase font-bold tracking-wider text-hri-gold mb-3">Key Resources Channeled</h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-hri-green/80 font-light">
              {program.materials.map((mat, i) => (
                <li key={i} className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-hri-gold shrink-0" />
                  <span>{mat}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Modal Bottom Call to Action */}
        <div className="mt-8 pt-6 border-t border-hri-green/10 flex justify-end">
          <button 
            onClick={handleClose}
            className="border border-hri-green text-hri-green hover:bg-hri-green hover:text-hri-cream px-6 py-2.5 text-xs font-bold uppercase tracking-wider transition-colors duration-300"
          >
            Close Details
          </button>
        </div>

      </div>
    </div>
  )
}

export default ProgramDetailModal
