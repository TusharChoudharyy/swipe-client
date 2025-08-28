// @ts-nocheck

import Aboutclient from "../components/Aboutpage/Aboutclient"
import AboutCounter from "../components/Aboutpage/AboutCounter"
import AboutCTA from "../components/Aboutpage/AboutCTA"
import AboutGlobal from "../components/Aboutpage/AboutGlobal"
import AboutHero from "../components/Aboutpage/AboutHero"
import AboutOurmission from "../components/Aboutpage/AboutOurmission"
import AboutOurStory from "../components/Aboutpage/AboutOurStory"

const About = () => {
  return (
    <div>
      <AboutHero />
      <AboutOurmission />
      {/* <AboutOurStory /> */}
      <AboutCounter />
      <Aboutclient />
      <AboutGlobal />
      <AboutCTA />
      
    </div>
  )
}

export default About
