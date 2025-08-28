// @ts-nocheck

import TechHero from '../components/Technology/TechHero'
import TechFeatures from '../components/Technology/TechFeatures'
import TechAbout from '../components/Technology/TechAbout'
import TechGrid from '../components/Technology/TechGrid'
import TechBenefits from '../components/Technology/TechBenefits'
import TechUseCase from '../components/Technology/TechUseCase'
import TechHow from '../components/Technology/TechHow'

import TechFaq from '../components/Technology/TechFaq'
import CTASection from '../components/Homepage/CTA'

const Technology = () => {
  return (
    <div>
      <TechHero />
      <TechAbout />
      <TechFeatures />
      <TechGrid />
      <TechBenefits />
      <TechUseCase />
      <TechHow />
      <CTASection />
      <TechFaq />
       
    </div>
  )
}

export default Technology
