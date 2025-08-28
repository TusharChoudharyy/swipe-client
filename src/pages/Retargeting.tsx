// @ts-nocheck
import RetargetingHero from '../components/Retargeting/RetargetingHero'
import RetargetingAbout from '../components/Retargeting/RetargetingAbout'
import RetargetingGrid from '../components/Retargeting/RetargetingGrid'
import RetargetingBenefits from '../components/Retargeting/RetargetingBenefits'
import RetargetingUseCase from '../components/Retargeting/RetargetingUseCase'
import RetargetingHow from '../components/Retargeting/RetargetingHow'

import RetargetingFaq from '../components/Retargeting/RetargetingFaq'
import CTASection from '../components/Homepage/CTA'

const Retargeting = () => {
  return (
    <div>
      <RetargetingHero />
      <RetargetingAbout />
      <RetargetingGrid />
      <RetargetingBenefits />
      <RetargetingUseCase />
      <RetargetingHow />
      <CTASection />
      <RetargetingFaq />
      {/* <RetargetingIntro /> */}
    </div>
  )
}

export default Retargeting
