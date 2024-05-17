import React from 'react'
import HeroSection from './pageComponents/homeCompnents/HeroSection'
import Services from './pageComponents/homeCompnents/Services'
import Trusted from './pageComponents/homeCompnents/Trusted'
import NewsLetter from './pageComponents/homeCompnents/NewsLetter'

import FeatureProducts from './pageComponents/homeCompnents/FeatureProducts'

function Home() {
  return (
    <div className='w-screen pr-2'>


    <HeroSection />
    <Trusted />
    <FeatureProducts />
    <Services />
    <NewsLetter />
    
    </div>
  )
}

export default Home