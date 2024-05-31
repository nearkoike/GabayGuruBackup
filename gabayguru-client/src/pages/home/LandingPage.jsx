import React from 'react'
import Banner from '../../components/home/Banner'
import HowItWorks from '../../components/home/HowItWorks'
import BrowseTopics from '../../components/home/BrowseTopics'
import FeaturedMentors from '../../components/home/FeaturedMentors'
import FAQs from '../../components/home/FAQs'
import CTA from '../../components/home/CTA'

const LandingPage = () => {
  return (
    <div>
      <Banner/>
      <HowItWorks/>
      <BrowseTopics/>
      <FeaturedMentors/>
      <FAQs/>
      <CTA/>
    </div>
  )
}

export default LandingPage