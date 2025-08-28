// @ts-nocheck

import VerificationHero from '../components/Verification/VerificationHero'
import VerificationAbout from '../components/Verification/VerificationAbout'
import VerificationBenefits from '../components/Verification/VerificationBenefits'
import VerificationGrid from '../components/Verification/VerificationGrid'
import VerificationUseCase from '../components/Verification/VerificationUseCases'
import VerificationHow from '../components/Verification/VerificationHow'
import Verificationfaq from '../components/Verification/VerificationFaq'
import CTASection from '../components/Homepage/CTA'
import TransactionalA2PHero from '../components/TransactionalA2P/TransA2PHero'

const Verification = () => {
  return (
    <div>
      <TransactionalA2PHero />
      {/* <VerificationHero /> */}
      <VerificationAbout />
      <VerificationGrid />
      <VerificationBenefits />
      <VerificationUseCase />
      <VerificationHow />
      <CTASection />
      <Verificationfaq />
    </div>
  )
}

export default Verification
