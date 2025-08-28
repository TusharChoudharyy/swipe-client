// @ts-nocheck
import Aboutsection from '../components/Homepage/Aboutsection'
import Contactsection from '../components/Homepage/Contactsection'
import Hero from '../components/Homepage/Hero'
import Services from '../components/Homepage/Services'
// import Industryuse from '../components/Homepage/Industryuse'
import Brands from '../components/Homepage/Brands'
import CTA from '../components/Homepage/CTA'
import Blogs from '../components/Homepage/Blogs'

const Homepage = () => {
  return (
    <div>
      <Hero />
      <Aboutsection />
      <Services />
      {/* <Industryuse /> */}
      <Brands />
      <CTA />
      <Contactsection />
      <Blogs />
    </div>
  )
}

export default Homepage