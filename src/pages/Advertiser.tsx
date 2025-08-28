// @ts-nocheck

import AdvertiserHero from '../components/Advertisers/AdvertiserHero'
import AdvertiserAbout from '../components/Advertisers/AdvertiserAbout'
import AdvertiserBenefits from '../components/Advertisers/AdvertiserBenefits'
import AdvertiserUseCase from '../components/Advertisers/AdvertiserUseCases'

import AdvertiserFaqs from '../components/Advertisers/Advertiserfaqs'
import AdvertiserWorking from '../components/Advertisers/AdvertiserWorking'
import AdvertiserGrid from '../components/Advertisers/AdvertiserGrid'
import CTASection from '../components/Homepage/CTA'

const Advertiser = () => {
  return (
    <div>
      <AdvertiserHero />
      <AdvertiserAbout />
      <AdvertiserBenefits />
      <AdvertiserGrid />
      <AdvertiserWorking />
      <AdvertiserUseCase />
       <CTASection />
      <AdvertiserFaqs />
      
    </div>
  )
}

export default Advertiser
