// @ts-nocheck

import AffiliateModelsHero from '../components/AffiliateModels/AffiliateModelsHero'

import AffiliateModelsAbout from '../components/AffiliateModels/AffiliateModelsAbout'
import AffiliateModelsFeatures from '../components/AffiliateModels/AffiliateModelsFeatures'
import AffiliateModelsBenefits from '../components/AffiliateModels/AffiliateModelsBenefits'
import AffiliateModelsUseCase from '../components/AffiliateModels/AffiliateModelsUseCase'
import AffiliateModelsWorking from '../components/AffiliateModels/AffiliateModelsWorking'

import CTASection from '../components/Homepage/CTA'

const AffiliateModels = () => {
  return (
    <div>
      <AffiliateModelsHero />
      <AffiliateModelsAbout />
      <AffiliateModelsFeatures />
      <AffiliateModelsBenefits />
      <AffiliateModelsUseCase />
      <AffiliateModelsWorking />
      <CTASection />
    </div>
  )
}

export default AffiliateModels
