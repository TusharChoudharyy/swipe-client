// @ts-nocheck
import MediaBuyingHero from '../components/MediaBuying/MediaBuyingHero'
import MediaBuyingAbout from '../components/MediaBuying/MediaBuyingAbout'
import MediaBuyingBenefits from '../components/MediaBuying/MediaBuyingBenefits'
import MediaBuyingUseCase from '../components/MediaBuying/MediaBuyingUseCases'
import MediaBuyingFaq from '../components/MediaBuying/MediaBuyingFaq'

import CTASection from '../components/Homepage/CTA'
import MediaBuyingAtSwipe from '../components/MediaBuying/MediaBuyingAtSwipe'


const MediaBuying = () => {
  return (
    <div>
      <MediaBuyingHero />
      <MediaBuyingAbout />
      <MediaBuyingBenefits />
      <MediaBuyingUseCase />
      <MediaBuyingAtSwipe />
      <CTASection />
      
      <MediaBuyingFaq />
    
      {/* <MediaBuyingIntro /> */}
      
    </div>
  )
}

export default MediaBuying
