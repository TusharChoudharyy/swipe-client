// @ts-nocheck

import PromoHero from '../components/Promotional/PromoHero'
import PromoAbout from '../components/Promotional/PromoAbout'
import PromoGrid from '../components/Promotional/PromoGrid'
import PromoBenefits from '../components/Promotional/PromoBenefits'
import PromoHow from '../components/Promotional/PromoHow'

import PromoUseCases from '../components/Promotional/PromoUseCases'
import PromoFaq from '../components/Promotional/PromoFaq'
import CTASection from '../components/Homepage/CTA'

const Promotional = () => {
  return (
    <div>
      <PromoHero />
      <PromoAbout />
      <PromoGrid />
      <PromoBenefits />
      <PromoUseCases />
      <PromoHow />
      <CTASection />
      <PromoFaq />
    </div>
  )
}

export default Promotional
