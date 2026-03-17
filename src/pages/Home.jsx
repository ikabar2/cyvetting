import TrustBadges from '../components/TrustBadges'
import SEO from '../components/SEO'
import { useEffect } from 'react'
import Hero from '../components/Hero'
import Ticker from '../components/Ticker'
import Services from '../components/Services'
import AboutSection from '../components/About'
import Locations from '../components/Locations'
import CTA from '../components/CTA'

export default function Home() {
  useEffect(() => { window.scrollTo(0, 0) }, [])
  return (
    <>
      <SEO
        canonical="/"
      />
      <Hero />
      <Ticker />
      <TrustBadges />
      <Services />
      <AboutSection />
      <Locations />
      <CTA />
    </>
  )
}
