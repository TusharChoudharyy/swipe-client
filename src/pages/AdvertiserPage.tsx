import AdvertiserAbout from "../components/Advertiser/AdvertiserAbout"
import AdvertiserBenefits from "../components/Advertiser/AdvertiserBenefits"
import AdvertiserCTA from "../components/Advertiser/AdvertiserCTA"
import AdvertiserFaqs from "../components/Advertiser/Advertiserfaqs"
import AdvertiserHero from "../components/Advertiser/AdvertiserHero"
import AdvertiserUseCase from "../components/Advertiser/AdvertiserUseCases"
import AdvertiserWorking from "../components/Advertiser/AdvertiserWorking"

const AdvertiserPage = () => {
  return (
    <div>
      <AdvertiserHero />
      <AdvertiserAbout />
      <AdvertiserBenefits />
      <AdvertiserUseCase />
      <AdvertiserWorking />
      <AdvertiserCTA />
      <AdvertiserFaqs />
    </div>
  )
}

export default AdvertiserPage
