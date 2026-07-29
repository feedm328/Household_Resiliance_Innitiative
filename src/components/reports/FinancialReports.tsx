import React, { useEffect, useRef } from 'react'
import { FileSpreadsheet } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface StatementLine {
  id: number
  item: string
  amount: string
  pct: string
}

const FinancialReports: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  const incomeData: StatementLine[] = [
    { id: 1, item: 'Individual Online Donors', amount: '$485,000', pct: '39%' },
    { id: 2, item: 'Corporate Alliances & Grants', amount: '$373,500', pct: '30%' },
    { id: 3, item: 'Philanthropic Foundations', amount: '$261,450', pct: '21%' },
    { id: 4, item: 'Local Government Relief Matches', amount: '$125,000', pct: '10%' },
  ]

  const expenseData: StatementLine[] = [
    { id: 1, item: 'Direct Fammily Assistance(Resiliance Fund, Food & Essentiials)', amount: '$747,000', pct: ' 60%' },
    { id: 2, item: 'Housing Stability & Emergency Support', amount: '$186,750', pct: ' 15%' },
    { id: 3, item: 'Community Outreach & Volunteer Programs', amount: '$149,400', pct: '12%' },
    { id: 4, item: 'Operations, Admin & Acountability', amount: '$161,850', pct: '13%' },
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (contentRef.current) {
        gsap.fromTo(contentRef.current.children,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.2,
            scrollTrigger: {
              trigger: contentRef.current,
              start: 'top 85%',
              toggleActions: 'play none none none',
            }
          }
        )
      }
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={containerRef} className="py-20 px-6 bg-hri-cream border-b border-hri-gold/20 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-hri-gold/40 text-hri-gold text-xs uppercase tracking-widest font-bold mb-4">
            <FileSpreadsheet size={14} />
            <span>FY 2025 Statement</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-hri-green mb-4">
            Financial Balance Sheet
          </h2>
          <div className="w-16 h-[2px] bg-hri-gold mx-auto mb-6" />
          <p className="text-sm sm:text-base text-hri-green/70 leading-relaxed font-light">
            We operate with transparency and zero debt. Our total revenue for FY 2025 reached $1,245,000, fully allocated to programs that support families in crisis.          </p>
        </div>

        {/* Tables Container */}
        <div ref={contentRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Income Table */}
          <div className="bg-white border border-hri-green/10 p-6 sm:p-8">
            <h3 className="font-serif font-bold text-xl text-hri-green mb-6 border-b border-hri-gold/25 pb-3">
              Incoming Revenue
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-hri-green/10 text-[10px] uppercase font-bold text-hri-green/50 tracking-wider">
                    <th className="pb-3">Source Category</th>
                    <th className="pb-3 text-right">Amount (USD)</th>
                    <th className="pb-3 text-right">Share</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-hri-green/5 text-hri-green/85 font-light">
                  {incomeData.map((row) => (
                    <tr key={row.id} className="hover:bg-hri-cream/30">
                      <td className="py-3.5 font-medium">{row.item}</td>
                      <td className="py-3.5 text-right font-semibold">{row.amount}</td>
                      <td className="py-3.5 text-right text-hri-gold font-bold">{row.pct}</td>
                    </tr>
                  ))}
                  <tr className="font-bold border-t border-hri-green/20 text-hri-green">
                    <td className="py-4">Total Revenue</td>
                    <td className="py-4 text-right">$1,245,000</td>
                    <td className="py-4 text-right text-hri-gold">100%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Expense Table */}
          <div className="bg-white border border-hri-green/10 p-6 sm:p-8">
            <h3 className="font-serif font-bold text-xl text-hri-green mb-6 border-b border-hri-gold/25 pb-3">
              Program Outlays
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-hri-green/10 text-[10px] uppercase font-bold text-hri-green/50 tracking-wider">
                    <th className="pb-3">Operational Division</th>
                    <th className="pb-3 text-right">Amount (USD)</th>
                    <th className="pb-3 text-right">Share</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-hri-green/5 text-hri-green/85 font-light">
                  {expenseData.map((row) => (
                    <tr key={row.id} className="hover:bg-hri-cream/30">
                      <td className="py-3.5 font-medium">{row.item}</td>
                      <td className="py-3.5 text-right font-semibold">{row.amount}</td>
                      <td className="py-3.5 text-right text-hri-gold font-bold">{row.pct}</td>
                    </tr>
                  ))}
                  <tr className="font-bold border-t border-hri-green/20 text-hri-green">
                    <td className="py-4">Total Expenses</td>
                    <td className="py-4 text-right">$1,245,000</td>
                    <td className="py-4 text-right text-hri-gold">100%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default FinancialReports
