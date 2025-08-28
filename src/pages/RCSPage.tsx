// @ts-nocheck

import RCShero from '../components/RCS/RCShero'
import RCSabout from '../components/RCS/RCSabout'
import RCSgrid from '../components/RCS/RCSgrid'
import RCSbenefits from '../components/RCS/RCSbenefits'
import RCSusecases from '../components/RCS/RCSusecases'
import RCShow from '../components/RCS/RCShow'
import RCSfaq from '../components/RCS/RCSfaq'
import CTASection from '../components/Homepage/CTA'

const RCSPage = () => {
  return (
    <div>
        <RCShero />
        <RCSabout />
        <RCSgrid />
        <RCSbenefits />
        <RCSusecases />
        <RCShow />
        <CTASection />
        <RCSfaq />
    </div>
  )
}

export default RCSPage
