import React from 'react'
import HomeBanner from './HomeBanner'
import '../../assets/css/home.css'
import WhatWeDo from './WhatWeDo'
import { Helmet } from "react-helmet";
import ImageContent from './ImageContent'
import CallToAction from './CallToAction'
import CallToActionFirst from './CallToActionFirst'
import OurTeam from './OurTeam'
import OurServices from './OurServices'

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Alamo Primary Care | Top Primary Care Services In Westover Hills, San Antonio</title>
        <meta name="description" content="Alamo Primary Care offers premier primary healthcare services in Westover Hills, San Antonio. Our expert team provides personalized and comprehensive care to meet your unique needs. Schedule an appointment today for exceptional healthcare you can trust." />
      </Helmet>
    <main>
    <HomeBanner/>
   
    <ImageContent/>
    <CallToActionFirst/>
    <OurServices/>
    {/* <OurTeam/> */}
    <CallToAction/>
    {/* <PractiseAreas/> */}
    {/* <WhyChosseUs/> */}
    {/* <Testomonial/> */}
    {/* <Counter/> */}
    <WhatWeDo/>
    </main>
    </>

     
  )
}

export default HomePage
