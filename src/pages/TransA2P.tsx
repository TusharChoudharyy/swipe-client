// @ts-nocheck

import CTASection from '../components/Homepage/CTA'
import TransA2PAbout from '../components/TransactionalA2P/TransA2PAbout'
import TransA2PBenefits from '../components/TransactionalA2P/TransA2PBenefits'

import TransA2PFaq from '../components/TransactionalA2P/TransA2PFaq'
import TransA2PGrid from '../components/TransactionalA2P/TransA2PGrid'
import TransA2PHero from '../components/TransactionalA2P/TransA2PHero'

import TransA2PUseCase from '../components/TransactionalA2P/TransA2PUseCase'
import VerificationHero from '../components/Verification/VerificationHero'

const TransA2P = () => {
  return (
    <div>
      <VerificationHero />
      {/* <TransA2PHero /> */}
      <TransA2PAbout />
      <TransA2PGrid />
      <TransA2PBenefits />
      <TransA2PUseCase />
      <CTASection />

      <TransA2PFaq />
      {/* <TransA2PHow /> */}
    </div>
  )
}

export default TransA2P
