// @ts-nocheck

import SMMHero from '../components/SocialMediaMarketing/SMMHero'

import SMMAbout from '../components/SocialMediaMarketing/SMMAbout'
import SMMGrid from '../components/SocialMediaMarketing/SMMGrid'
import SMMBenefits from '../components/SocialMediaMarketing/SMMBenefits'
import SMMUseCases from '../components/SocialMediaMarketing/SMMUseCases'
import SMMHow from '../components/SocialMediaMarketing/SMMHow'

import SMMFaq from '../components/SocialMediaMarketing/SMMFaq'
import CTASection from '../components/Homepage/CTA'

const SMM = () => {
  return (
    <div>
      <SMMHero />
      <SMMAbout />
      <SMMGrid />
      <SMMBenefits />
      <SMMUseCases />
      <SMMHow />
      <CTASection />
      <SMMFaq />
      {/* <SMMFeatures /> */}
    </div>
  )
}

export default SMM
