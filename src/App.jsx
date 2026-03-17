import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { useEffect } from 'react'
import Cursor from './components/Cursor'
import StructuredData from './components/StructuredData'
import Nav from './components/Nav'
import Footer from './components/Footer'

import Home          from './pages/Home'
import ServiceSOC2   from './pages/ServiceSOC2'
import ServiceM365   from './pages/ServiceM365'
import ServiceVendor from './pages/ServiceVendor'
import ServiceHIPAA  from './pages/ServiceHIPAA'
import ServicePCI      from './pages/ServicePCI'
import ServiceGDPR     from './pages/ServiceGDPR'
import ServiceISO27001 from './pages/ServiceISO27001'
import About         from './pages/About'
import Results       from './pages/Results'
import Blog          from './pages/Blog'
import Contact       from './pages/Contact'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <Cursor />
      <Nav />
      <Routes>
        <Route path="/"                  element={<Home />} />
        <Route path="/services/soc2"     element={<ServiceSOC2 />} />
        <Route path="/services/m365"     element={<ServiceM365 />} />
        <Route path="/services/vendor"   element={<ServiceVendor />} />
        <Route path="/services/hipaa"    element={<ServiceHIPAA />} />
        <Route path="/services/pci"      element={<ServicePCI />} />
        <Route path="/services/gdpr"     element={<ServiceGDPR />} />
        <Route path="/services/iso27001" element={<ServiceISO27001 />} />
        <Route path="/about"             element={<About />} />
        <Route path="/results"           element={<Results />} />
        <Route path="/blog"              element={<Blog />} />
        <Route path="/contact"           element={<Contact />} />
        <Route path="/privacy-policy"    element={<PrivacyPolicy />} />
        <Route path="/terms-of-service"  element={<TermsOfService />} />
      </Routes>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <StructuredData />
        <AppRoutes />
      </BrowserRouter>
    </HelmetProvider>
  )
}
