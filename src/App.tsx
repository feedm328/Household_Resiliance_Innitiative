import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import HeaderBar from '@/components/constants/HeaderBar'
import Header from '@/components/constants/Header'
import Footer from '@/components/constants/Footer'
import ScrollToTop from '@/components/constants/ScrollToTop'
import Home from '@/pages/Home'
import About from '@/pages/About'
import Services from '@/pages/Services'
import Reports from '@/pages/Reports'
import Donation from '@/pages/Donation'
import Contact from '@/pages/Contact'

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen bg-hri-cream text-hri-green relative selection:bg-hri-gold selection:text-hri-green">
          {/* Constant Header Elements */}
          <HeaderBar />
          <Header />

          {/* Dynamic Route Pages */}
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/donation" element={<Donation />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>

          {/* Constant Footer */}
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  )
}

export default App
