// @ts-nocheck


import HowWeWork from '../components/Servicespage/HowWeWork'
import ServicesCoreGrid from '../components/Servicespage/ServicesCoreGrid'
import ServicesCTA from '../components/Servicespage/ServicesCTA'
import ServicesHero from '../components/Servicespage/ServicesHero'
import ServicesHighlights from '../components/Servicespage/ServicesHighlights'
import ServicesWeServe from '../components/Servicespage/ServicesWeServe'
import TrustedBrands from '../components/Servicespage/TrustedBrands'

const Servicespage = () => {
  return (
    <div>
      <ServicesHero />
      <TrustedBrands />
      <ServicesCoreGrid />
      <HowWeWork />
      <ServicesWeServe />
      <ServicesHighlights />
      <ServicesCTA />
    </div>
  )
}

export default Servicespage
