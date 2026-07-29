import React, { useEffect } from 'react'
import SEO from '@/components/shared/SEO'
import ImpactStats from '@/components/reports/ImpactStats'
import FinancialReports from '@/components/reports/FinancialReports'
import DocumentDownloads from '@/components/reports/DocumentDownloads'

const Reports: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="flex flex-col w-full min-h-screen">
      <SEO 
        title="Financial Integrity & Reports - The Household Resilience Initiative" 
        description="We are committed to absolute financial integrity. View our exact funding distribution, balance sheets, and audit handbooks."
      />
      {/* Visual Header */}
      <div 
        className="bg-hri-green text-hri-cream py-24 px-6 border-b border-hri-gold text-left relative overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1920&auto=format&fit=crop')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-hri-green/95 via-hri-green/85 to-hri-green-dark/95 z-0" />
        <div className="max-w-7xl mx-auto relative z-10">
          <span className="text-hri-gold uppercase tracking-[0.2em] font-bold text-xs">
            Financial Transparency
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-hri-cream mt-2">
            Reports & Transparency
          </h1>
          <div className="w-16 h-[2px] bg-hri-gold mt-4 mb-4" />
          <p className="text-sm sm:text-base text-hri-cream/70 max-w-2xl leading-relaxed font-light">
            We are committed to absolute financial integrity. View our exact funding distribution, balance sheets, and audit handbooks.
          </p>
        </div>
      </div>

      <ImpactStats />
      <DocumentDownloads />
      <FinancialReports />
      
    </div>
  )
}

export default Reports
