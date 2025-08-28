// @ts-nocheck

import RichHero from '../components/RichMediaMarketing/RichHero'
import RichFeatures from '../components/RichMediaMarketing/RichFeatures'
import RichAbout from '../components/RichMediaMarketing/RichAbout'
import RichGrid from '../components/RichMediaMarketing/RichGrid'
import RichBenefits from '../components/RichMediaMarketing/RichBenefits'
import RichUseCase from '../components/RichMediaMarketing/RichUseCase'
import RichHow from '../components/RichMediaMarketing/RichHow'

import  RichFaq from '../components/RichMediaMarketing/RichFaq'
import CTASection from '../components/Homepage/CTA'

const RichMediaMarketing = () => {
  return (
    <div>
      <RichHero />
      <RichAbout />
      <RichFeatures />
      <RichGrid />
      <RichBenefits />
      <RichUseCase />
      <RichHow/>
      <CTASection />
      <RichFaq />
    </div>
  )
}

export default RichMediaMarketing
