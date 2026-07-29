import React, { useState, useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { ShieldCheck, CreditCard, Heart, CheckCircle2 } from 'lucide-react'
import gsap from 'gsap'

interface FormState {
  fullName: string
  email: string
  cardNumber: string
  expiry: string
  cvc: string
}

interface DonationFormProps {
  initialAmount?: number | string
}

const DonationForm: React.FC<DonationFormProps> = ({ initialAmount = 100 }) => {
  const location = useLocation()
  
  // States
  const [frequency, setFrequency] = useState<'one-time' | 'monthly'>('one-time')
  const [amount, setAmount] = useState<number | string>(initialAmount)
  const [formData, setFormData] = useState<FormState>({
    fullName: '',
    email: '',
    cardNumber: '',
    expiry: '',
    cvc: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)

  // Refs for animations
  const formBoxRef = useRef<HTMLDivElement>(null)
  const successBoxRef = useRef<HTMLDivElement>(null)

  const presetAmounts = [25, 50, 100, 250, 500]

  // Check if navigation passed a preselected amount
  useEffect(() => {
    if (location.state && (location.state as any).amount) {
      setAmount((location.state as any).amount)
    }
  }, [location])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Mock network request
    setTimeout(() => {
      setIsSubmitting(false)
      
      // GSAP animate form out and success screen in
      if (formBoxRef.current) {
        gsap.to(formBoxRef.current, {
          y: -20,
          opacity: 0,
          duration: 0.4,
          onComplete: () => {
            setSuccess(true)
            setTimeout(() => {
              if (successBoxRef.current) {
                gsap.fromTo(successBoxRef.current,
                  { scale: 0.95, opacity: 0 },
                  { scale: 1, opacity: 1, duration: 0.5 }
                )
              }
            }, 50)
          }
        })
      }
    }, 1500)
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* SUCCESS SCREEN */}
      {success ? (
        <div 
          ref={successBoxRef}
          className="bg-white border-2 border-hri-gold p-8 sm:p-12 text-center"
        >
          <div className="w-16 h-16 bg-hri-green/5 text-hri-gold border border-hri-gold flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 size={36} />
          </div>
          <h3 className="font-serif text-3xl font-bold text-hri-green mb-4">
            Thank You for Your Support
          </h3>
          <div className="w-16 h-[2px] bg-hri-gold mx-auto mb-6" />
          <p className="text-sm sm:text-base text-hri-green/75 leading-relaxed font-light mb-8 max-w-md mx-auto">
            Your transaction of <strong>${amount}</strong> was simulated successfully. A receipt summary has been sent to <strong>{formData.email}</strong>. Together, we are building resilience.
          </p>
          <button
            onClick={() => {
              setSuccess(false)
              setFormData({ fullName: '', email: '', cardNumber: '', expiry: '', cvc: '' })
              setAmount(100)
            }}
            className="bg-hri-green text-hri-cream hover:bg-hri-gold hover:text-hri-green px-8 py-3.5 text-xs font-bold uppercase tracking-wider transition-colors duration-300"
          >
            Submit Another Donation
          </button>
        </div>
      ) : (
        /* FORM SCREEN */
        <div 
          ref={formBoxRef}
          className="bg-white border border-hri-green/10 p-6 sm:p-10 text-left shadow-lg"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Header info */}
            <div className="flex justify-between items-center border-b border-hri-green/10 pb-4 mb-4">
              <h2 className="font-serif text-2xl font-bold text-hri-green">Secure Giving</h2>
              <div className="flex items-center gap-1.5 text-hri-gold text-xs font-semibold uppercase tracking-wider">
                <ShieldCheck size={14} />
                <span>128-bit SSL Secured</span>
              </div>
            </div>

            {/* Frequency Selector */}
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setFrequency('one-time')}
                className={`py-3 text-xs sm:text-sm font-bold uppercase tracking-wider border transition-all duration-300 ${
                  frequency === 'one-time'
                    ? 'bg-hri-green text-hri-cream border-hri-green'
                    : 'bg-white text-hri-green border-hri-green/15 hover:border-hri-gold/50'
                }`}
              >
                Give One-Time
              </button>
              <button
                type="button"
                onClick={() => setFrequency('monthly')}
                className={`py-3 text-xs sm:text-sm font-bold uppercase tracking-wider border transition-all duration-300 ${
                  frequency === 'monthly'
                    ? 'bg-hri-green text-hri-cream border-hri-green'
                    : 'bg-white text-hri-green border-hri-green/15 hover:border-hri-gold/50'
                }`}
              >
                Give Monthly
              </button>
            </div>

            {/* Amount Selector */}
            <div className="space-y-2">
              <label className="text-[10px] uppercase font-bold tracking-widest text-hri-green/60 block">
                Select Amount (USD)
              </label>
              
              <div className="grid grid-cols-5 gap-2">
                {presetAmounts.map((amt) => (
                  <button
                    key={amt}
                    type="button"
                    onClick={() => setAmount(amt)}
                    className={`py-3 text-xs font-bold transition-all duration-300 ${
                      amount === amt
                        ? 'bg-hri-gold text-hri-green border border-hri-gold'
                        : 'bg-hri-cream text-hri-green border border-hri-green/10 hover:border-hri-gold/40'
                    }`}
                  >
                    ${amt}
                  </button>
                ))}
              </div>

              {/* Custom Input */}
              <div className="relative mt-2">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-hri-green/50 font-bold">$</span>
                <input
                  type="number"
                  placeholder="Enter custom amount"
                  value={presetAmounts.includes(Number(amount)) ? '' : amount}
                  onChange={(e) => setAmount(e.target.value ? Number(e.target.value) : '')}
                  className="w-full bg-hri-cream border border-hri-green/15 text-hri-green pl-8 pr-4 py-3 text-sm font-semibold focus:outline-none focus:border-hri-gold focus:bg-white"
                />
              </div>
            </div>

            {/* Personal Details */}
            <div className="space-y-4">
              <label className="text-[10px] uppercase font-bold tracking-widest text-hri-green/60 block">
                Donor Information
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  required
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full bg-hri-cream border border-hri-green/15 text-hri-green px-4 py-3 text-sm focus:outline-none focus:border-hri-gold focus:bg-white"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-hri-cream border border-hri-green/15 text-hri-green px-4 py-3 text-sm focus:outline-none focus:border-hri-gold focus:bg-white"
                />
              </div>
            </div>

            {/* Credit Card Details */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <label className="text-[10px] uppercase font-bold tracking-widest text-hri-green/60 block">
                  Payment Details
                </label>
                <div className="flex gap-1.5 text-hri-green/40">
                  <CreditCard size={14} />
                </div>
              </div>

              <input
                type="text"
                name="cardNumber"
                placeholder="Card Number (e.g. 4111 2222 3333 4444)"
                required
                maxLength={19}
                value={formData.cardNumber}
                onChange={handleInputChange}
                className="w-full bg-hri-cream border border-hri-green/15 text-hri-green px-4 py-3 text-sm focus:outline-none focus:border-hri-gold focus:bg-white"
              />

              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="expiry"
                  placeholder="MM / YY"
                  required
                  maxLength={5}
                  value={formData.expiry}
                  onChange={handleInputChange}
                  className="w-full bg-hri-cream border border-hri-green/15 text-hri-green px-4 py-3 text-sm focus:outline-none focus:border-hri-gold focus:bg-white text-center"
                />
                <input
                  type="text"
                  name="cvc"
                  placeholder="CVC"
                  required
                  maxLength={4}
                  value={formData.cvc}
                  onChange={handleInputChange}
                  className="w-full bg-hri-cream border border-hri-green/15 text-hri-green px-4 py-3 text-sm focus:outline-none focus:border-hri-gold focus:bg-white text-center"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-hri-gold text-hri-green hover:bg-hri-gold/90 text-sm font-bold uppercase tracking-wider py-4 transition-colors duration-300 flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <span>Simulating Transaction...</span>
              ) : (
                <>
                  <Heart size={16} />
                  <span>Finalize Donation of ${amount}</span>
                </>
              )}
            </button>

          </form>
        </div>
      )}
    </div>
  )
}

export default DonationForm
