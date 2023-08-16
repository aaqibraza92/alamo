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
<<<<<<< HEAD
        title: "Routine check-ups and preventive care",
        // content: "There are many variations of passages of Lorem Ipsum available, but the majority"
    },
    {
        img: require('../../assets/img/service/sr2.png'),
        title: " Immunizations and vaccinations",
        // content: "There are many variations of passages of Lorem Ipsum available, but the majority"
    },
    {
        img: require('../../assets/img/service/sr3.png'),
        title: "Chronic disease management",
        // content: "There are many variations of passages of Lorem Ipsum available, but the majority"
    },
    {
        img: require('../../assets/img/service/sr4.png'),
        title: " Health screenings and diagnostic tests",
        // content: "There are many variations of passages of Lorem Ipsum available, but the majority"
    },
    {
        img: require('../../assets/img/service/sr5.png'),
        title: "Men’s health services",
        // content: "There are many variations of passages of Lorem Ipsum available, but the majority"
    },
    {
        img: require('../../assets/img/service/sr6.png'),
        title: "Women's health services",
        // content: "There are many variations of passages of Lorem Ipsum available, but the majority"
    },
    {
        img: require('../../assets/img/service/sr7.png'),
        title: "Geriatric care ",
        // content: "There are many variations of passages of Lorem Ipsum available, but the majority"
    },
   
=======
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
>>>>>>> c6a4cec51c0ad5e7e340bed0fe1f690718f88e2b

];

const Service = () => {
  return (
    <div>
         <Helmet>
        <title>Services - Alamo</title>
      </Helmet>
      <BreadCrumb
<<<<<<< HEAD
        // subTitle="Welcome to Alamo Primary Care"
=======
        subTitle="Welcome to Alamo Primary Care"
>>>>>>> c6a4cec51c0ad5e7e340bed0fe1f690718f88e2b
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
<<<<<<< HEAD
      {/* <ImageContent
=======
      <ImageContent
>>>>>>> c6a4cec51c0ad5e7e340bed0fe1f690718f88e2b
        img={require("../../assets/img/service/lady.png")}
        title={
          <div>
            <div className="colorGreen">We want you</div>
            to be healthy and happy.
          </div>
        }
        content="Welcome to Alamo Primary Care, your trusted provider of comprehensive primary healthcare services in the heart of Alamo City. We are dedicated to delivering personalized, compassionate care that focuses on your overall well-being."
<<<<<<< HEAD
      /> */}
        
        <section className="bgLightBlue pt80 pb80">
        <div className="container-xl">
            {/* <h2 className="colorBlue fs50 fw700  text-center"><span className="colorGreen">Our</span> Services</h2> */}
            <h4 className="text-center fs24 fs700  colorBlue w-80 m-auto pb40">Our dedicated team works collaboratively to develop personalized treatment that cater to your specific needs, ensuring you receive the highest level of care.</h4>
=======
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
>>>>>>> c6a4cec51c0ad5e7e340bed0fe1f690718f88e2b
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

<<<<<<< HEAD
        {/* <OurTeam className="servicePage" /> */}
        <WhatWeDo />
        <CallToAction title="Get started with alamo primary care"
        buttonName1="New-Patient-Registration"
        buttonName2="Book Appointment"
        link1="#"
        link2="#"
        bgImg={require('../../assets/img/bgImg.png')}
        />
=======
        <OurTeam className="servicePage" />
        <WhatWeDo />
>>>>>>> c6a4cec51c0ad5e7e340bed0fe1f690718f88e2b
    </div>
  );
};

export default Service;
