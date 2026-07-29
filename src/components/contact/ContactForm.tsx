import React, { useState, useRef } from 'react'
import { Send, CheckCircle2 } from 'lucide-react'
import gsap from 'gsap'

interface FormState {
  name: string
  email: string
  subject: string
  message: string
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)

  const formRef = useRef<HTMLDivElement>(null)
  const successRef = useRef<HTMLDivElement>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)

    // Simulate submission
    setTimeout(() => {
      setSubmitting(false)
      
      if (formRef.current) {
        gsap.to(formRef.current, {
          y: -15,
          opacity: 0,
          duration: 0.3,
          onComplete: () => {
            setSuccess(true)
            setTimeout(() => {
              if (successRef.current) {
                gsap.fromTo(successRef.current,
                  { scale: 0.96, opacity: 0 },
                  { scale: 1, opacity: 1, duration: 0.4 }
                )
              }
            }, 50)
          }
        })
      }
    }, 1200)
  }

  return (
    <div className="w-full">
      {success ? (
        <div 
          ref={successRef}
          className="bg-white border-2 border-hri-gold p-8 sm:p-12 text-center"
        >
          <div className="w-12 h-12 bg-hri-green/5 border border-hri-gold text-hri-gold flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 size={24} />
          </div>
          <h3 className="font-serif text-2xl font-bold text-hri-green mb-3">
            Message Sent Successfully
          </h3>
          <p className="text-sm text-hri-green/75 leading-relaxed font-light mb-6 max-w-sm mx-auto">
            Thank you, <strong>{formData.name}</strong>. Our communications coordinator will reply to your email address at <strong>{formData.email}</strong> within 24 working hours.
          </p>
          <button
            onClick={() => {
              setSuccess(false)
              setFormData({ name: '', email: '', subject: '', message: '' })
            }}
            className="border border-hri-green text-hri-green hover:bg-hri-green hover:text-hri-cream px-6 py-2 text-xs font-bold uppercase tracking-wider transition-colors duration-300"
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <div 
          ref={formRef}
          className="bg-white border border-hri-green/10 p-6 sm:p-8 shadow-md"
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-[10px] uppercase font-bold tracking-widest text-hri-green/55">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="e.g. John Doe"
                  className="w-full bg-hri-cream border border-hri-green/15 text-hri-green px-4 py-3 text-sm focus:outline-none focus:border-hri-gold focus:bg-white"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] uppercase font-bold tracking-widest text-hri-green/55">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="e.g. name@domain.com"
                  className="w-full bg-hri-cream border border-hri-green/15 text-hri-green px-4 py-3 text-sm focus:outline-none focus:border-hri-gold focus:bg-white"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-[10px] uppercase font-bold tracking-widest text-hri-green/55">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                required
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="How can we help you?"
                className="w-full bg-hri-cream border border-hri-green/15 text-hri-green px-4 py-3 text-sm focus:outline-none focus:border-hri-gold focus:bg-white"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[10px] uppercase font-bold tracking-widest text-hri-green/55">
                Message Description
              </label>
              <textarea
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Please describe your query here..."
                className="w-full bg-hri-cream border border-hri-green/15 text-hri-green px-4 py-3 text-sm focus:outline-none focus:border-hri-gold focus:bg-white resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full bg-hri-gold text-hri-green hover:bg-hri-gold/90 font-bold text-xs uppercase tracking-wider py-4 transition-all duration-300 flex items-center justify-center gap-2 mt-4"
            >
              {submitting ? (
                <span>Sending Message...</span>
              ) : (
                <>
                  <Send size={14} />
                  <span>Transmit Inquiry</span>
                </>
              )}
            </button>
          </form>
        </div>
      )}
    </div>
  )
}

export default ContactForm
