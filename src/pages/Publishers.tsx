// @ts-nocheck

import PublishersHero from '../components/Publishers/PublishersHero'
import PublisherBenefits from '../components/Publishers/PublishersBenefit'


import PublishersAbout from '../components/Publishers/PublishersAbout'
import PublishersGrid from '../components/Publishers/PublishersGrid'
import PublisherUseCase from '../components/Publishers/PublishersUseCase'
import PublishersWorking from '../components/Publishers/PublishersWorking'
import PublishersFaq from '../components/Publishers/PublishersFaq'
import CTASection from '../components/Homepage/CTA'

const Publishers = () => {
  return (
    <div>
      <PublishersHero />
      <PublishersAbout />
      <PublishersGrid />
      <PublisherBenefits />
      <PublisherUseCase />
      <PublishersWorking />
      <CTASection />
      <PublishersFaq />
    </div>
  )
}

export default Publishers
