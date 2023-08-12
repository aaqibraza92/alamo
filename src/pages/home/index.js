import React from "react";
import HomeBanner from "./HomeBanner";
import "../../assets/css/home.css";
import WhatWeDo from "./WhatWeDo";
import { Helmet } from "react-helmet";
import ImageContent from "./ImageContent";
import CallToActionFirst from "./CallToActionFirst";
import OurTeam from "./OurTeam";
import OurServices from "./OurServices";
import CallToAction from "../../components/CallToAction";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Home - Alamo</title>
      </Helmet>
      <main>
        <HomeBanner />

        <ImageContent
          img={require("../../assets/img/left_img.png")}
          title={
            <div>
              <div className="colorGreen"> Exceptional Care</div>
              Tailored to Your Needs
            </div>
          }
          content="Welcome to Alamo Primary Care, your trusted provider of comprehensive primary healthcare services in the heart of Alamo City. We are dedicated to delivering personalized, compassionate care that focuses on your overall well-being."
        />
        <CallToActionFirst />
        <OurServices />
        <OurTeam />
        <CallToAction title="We Treat All Patients From Age 16."
        buttonName1="New-Patient-Registration"
        buttonName2="Book Appointment"
        link1="#"
        link2="#"
        bgImg={require('../../assets/img/bgImg.png')}
        />
        {/* <PractiseAreas/> */}
        {/* <WhyChosseUs/> */}
        {/* <Testomonial/> */}
        {/* <Counter/> */}
        <WhatWeDo />
      </main>
    </>
  );
};

export default HomePage;
