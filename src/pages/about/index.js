import React, { useRef, useState } from "react";
import Counter from "../home/Counter";
import Testomonial from "../home/Testomonial";
import BreadCrumb from "../../components/BreadCrumb";
import { Col, Container, Row } from "reactstrap";
import { Helmet } from "react-helmet";
import ImageContent from "../home/ImageContent";
import CallToAction from "../../components/CallToAction";
const AboutUs = () => {
  const videoRef = useRef(null);
  const [playStatus,setplayStatus]=useState(false);

  const playPauseToggle=(status)=>{
    if(playStatus===false){
        videoRef.current.play();
        setplayStatus(true);

    }else{
        videoRef.current.pause()
        setplayStatus(false);
    }
  }
  return (
    <>
      <Helmet>
        <title>About Us - Alamo </title>
      </Helmet>
      <BreadCrumb
        subTitle="Welcome to Alamo Primary Care"
        title={
          <div>
            <span className="colorBlue">About</span>{" "}
            <span className="colorGreen">Us</span>{" "}
          </div>
        }
        bgImage={require("../../assets/img/about/hero_about.png")}
      />
   <ImageContent
          img={require("../../assets/img/about/abt.png")}
          title={
            <div>
              <div className="colorGreen"> Exceptional Care</div>
              Tailored to Your Needs
            </div>
          }
          content="Welcome to Alamo Primary Care, your trusted provider of comprehensive primary healthcare services in the heart of Alamo City. We are dedicated to delivering personalized, compassionate care that focuses on your overall well-being."
        />
            <CallToAction title="Get started with alamo primarycare"
        buttonName1="New-Patient-Registration"
        buttonName2="Book Appointment"
        link1="#"
        link2="#"
        bgImg={require('../../assets/img/about/Mask.png')}
        btnType="blue"
        />
           <section className="servicearea pt100 pb100 text-center bgWhite">
      <div className="container-xl">
      <h2 className="colorBlue fs50 fw600 mb20">
              <span className="colorGreen">Watch Our</span> Video
            </h2>
            <div className="videoWrapper">
          <video className="img-fluid" ref={videoRef} poster="https://images.pexels.com/photos/14547917/pexels-photo-14547917.jpeg">
            <source src='http://techslides.com/demos/sample-videos/small.mp4' type="video/mp4" />
          </video>

          <button onClick={() => playPauseToggle()}>{
            playStatus ? '' : <svg width="70" height="70" viewBox="0 0 148 148" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_3_470)">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M74 0.5C114.59 0.5 147.5 33.4099 147.5 74C147.5 114.59 114.59 147.5 74 147.5C33.4099 147.5 0.5 114.59 0.5 74C0.5 33.4099 33.4099 0.5 74 0.5ZM100.163 78.5459C103.907 76.1294 103.895 73.4377 100.163 71.2964L61.4868 49.0693C58.4363 47.1553 55.2542 48.2798 55.3379 52.2634L55.4575 97.1841C55.7207 101.503 58.1851 102.687 61.8218 100.689L100.163 78.5459ZM74 15.4297C106.348 15.4297 132.57 41.6523 132.57 74C132.57 106.348 106.348 132.57 74 132.57C41.6523 132.57 15.4297 106.348 15.4297 74C15.4297 41.6523 41.6523 15.4297 74 15.4297Z" fill="white"/>
            </g>
            <defs>
            <clipPath id="clip0_3_470">
            <rect width="147" height="147" fill="white" transform="translate(0.5 0.5)"/>
            </clipPath>
            </defs>
            </svg>
          }</button>
        </div>

        </div>
        </section>
      {/* <section className="pt80 pb80">
        <Container>
          <Row className="gy-3 gx-5 align-items-center">
            <Col lg={7} md={7} className="intro-content-second">
              <h2 className="colorBlue fs36  mobFs28 fBold mb30">
                {" "}
                The Best and Brightest in Life Sciences. Working for You.
              </h2>
              <hr className="wp-block-separator has-alpha-channel-opacity"></hr>
              <p className="colorPara">
                At Unicon Pharma, we know you want to be a successful,
                innovative leader in your industry, capable of bringing
                life-changing medicines, therapies, and products to market. In
                order to do that, you need the best and brightest talent in Life
                Sciences working for you. But the problem is, these candidates
                are difficult to identify, whether in-house or externally. We
                believe you deserve a hiring partner who truly understands your
                business and who empowers you to hire with confidence.
              </p>
              <p className="colorBlue fontItalic">
                We focus exclusively on Life Sciences—nothing else.
              </p>
              <p className="colorPara">
                From our inception, we’ve maintained a singular focus on working
                with Life Science companies and the industry’s leading
                candidates. We leverage our experienced, customer-facing team,
                vast network of 90,000+ Life Sciences professionals, and
                relationship-first approach to become your trusted advisor and
                empower you to achieve your hiring and business goals. We’ll
                work closely with you to listen to your needs, consult you on
                the most strategic solution, and partner with you to deliver
                that solution. So, contact us today, stop settling for subpar
                talent and instead partner with the industry experts and focus
                more on what you do best: growing your business in an effort to
                improve quality of life for communities around the world.
              </p>
            </Col>

            <Col lg={5} md={5} className="text-end">
              <img
                src={require("../../assets/img/about.png")}
                className="img-fluid"
                alt=""
              />
            </Col>
          </Row>
        </Container>
      </section>
      <Testomonial />
      <Counter /> */}
    </>
  );
};

export default AboutUs;


