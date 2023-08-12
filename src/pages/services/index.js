import React from "react";
import BreadCrumb from "../../components/BreadCrumb";
import ImageContent from "../home/ImageContent";
import CallToAction from "../../components/CallToAction";
import { Col, Container, Row } from "reactstrap";
import WhatWeDo from "../home/WhatWeDo";
import OurTeam from "../home/OurTeam";
import { Helmet } from "react-helmet";

let data=[
    {
        img: require('../../assets/img/service/sr1.png'),
        title: "Anywhere visits and same-day appointments",
        content: "There are many variations of passages of Lorem Ipsum available, but the majority"
    },
    {
        img: require('../../assets/img/service/sr2.png'),
        title: "Anywhere visits and same-day appointments",
        content: "There are many variations of passages of Lorem Ipsum available, but the majority"
    },
    {
        img: require('../../assets/img/service/sr3.png'),
        title: "Anywhere visits and same-day appointments",
        content: "There are many variations of passages of Lorem Ipsum available, but the majority"
    },
    {
        img: require('../../assets/img/service/sr4.png'),
        title: "Anywhere visits and same-day appointments",
        content: "There are many variations of passages of Lorem Ipsum available, but the majority"
    },
    {
        img: require('../../assets/img/service/sr5.png'),
        title: "Anywhere visits and same-day appointments",
        content: "There are many variations of passages of Lorem Ipsum available, but the majority"
    },
    {
        img: require('../../assets/img/service/sr6.png'),
        title: "Anywhere visits and same-day appointments",
        content: "There are many variations of passages of Lorem Ipsum available, but the majority"
    },
    {
        img: require('../../assets/img/service/sr7.png'),
        title: "Anywhere visits and same-day appointments",
        content: "There are many variations of passages of Lorem Ipsum available, but the majority"
    },
    {
        img: require('../../assets/img/service/sr8.png'),
        title: "Anywhere visits and same-day appointments",
        content: "There are many variations of passages of Lorem Ipsum available, but the majority"
    },

];

const Service = () => {
  return (
    <div>
         <Helmet>
        <title>Services - Alamo</title>
      </Helmet>
      <BreadCrumb
        subTitle="Welcome to Alamo Primary Care"
        title={
          <div>
            <span className="colorBlue">Our</span>{" "}
            <span className="colorGreen">Services</span>{" "}
          </div>
        }
        items={[
          { name: "Home", url: "/" },
          { name: "Our Story", url: "/" },
          { name: "Privacy Policy", url: "" },
        ]}
        bgImage={require("../../assets/img/service/service_hero.png")}
      />
      <ImageContent
        img={require("../../assets/img/service/lady.png")}
        title={
          <div>
            <div className="colorGreen">We want you</div>
            to be healthy and happy.
          </div>
        }
        content="Welcome to Alamo Primary Care, your trusted provider of comprehensive primary healthcare services in the heart of Alamo City. We are dedicated to delivering personalized, compassionate care that focuses on your overall well-being."
      />
        <CallToAction title="Get started with alamo primarycare"
        buttonName1="New-Patient-Registration"
        buttonName2="Book Appointment"
        link1="#"
        link2="#"
        bgImg={require('../../assets/img/bgImg.png')}
        />
        <section className="bgLightBlue pt80 pb80">
        <div className="container-xl">
            <h2 className="colorBlue fs50 fw600 mb60 text-center"><span className="colorGreen">Our</span> Services</h2>
            <Row className="gy-3">
            {
                data.map((e,i)=>(
                    <Col lg={3} md={3} key={i}>
                        <div className="bgWhite pt40 pb40 pl30 pr30 minH">
                        <div className="mb30">
                            <img src={e.img} className="img-fluid" alt="" />
                        </div>
                        <h4 className="fs24 fs700 mb30 colorBlue">
{e.title}
                        </h4>
                        <p className="fs16 fw400 colorBlue">
                            {e.content}
                        </p>
                        </div>
                    </Col>
                ))
            }
            </Row>
        
            </div>
        </section>

        <OurTeam className="servicePage" />
        <WhatWeDo />
    </div>
  );
};

export default Service;
