import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import LiveChat from './components/LiveChat'
import LiveActivity from './components/LiveActivity'
import Home from './pages/Home'
import HowItWorks from './pages/HowItWorks'
import ServiceAreas from './pages/ServiceAreas'
import FAQ from './pages/FAQ'
import Contact from './pages/Contact'
import Roadmap from './pages/Roadmap'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/service-areas" element={<ServiceAreas />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/quote" element={<Navigate to="/contact" replace />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/roadmap" element={<Roadmap />} />
        </Routes>
      </main>
      <Footer />
      {/* Global floating widgets */}
      <LiveChat />
      <LiveActivity />
    </div>
  )
}
