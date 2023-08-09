import React from 'react'
import HomeBanner from './HomeBanner'
import PractiseAreas from './PractiseAreas'
import '../../assets/css/home.css'
import WhatWeDo from './WhatWeDo'
import WhyChosseUs from './WhyChosseUs'
import Testomonial from './Testomonial'
import Counter from './Counter'
import { Helmet } from "react-helmet";
import ImageContent from './ImageContent'
import CallToAction from './CallToAction'
import CallToActionFirst from './CallToActionFirst'

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Home - Alamo</title>
      </Helmet>
    <main>
    <HomeBanner/>
   
    <ImageContent/>
    <CallToActionFirst/>
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
