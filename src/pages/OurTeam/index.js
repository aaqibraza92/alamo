import React from "react";
import { Col, Container, Row } from "reactstrap";
import BreadCrumb from "../../components/BreadCrumb";
import TeamItems from "./TeamItems";
import { Helmet } from "react-helmet";
import CallToAction from "../../components/CallToAction";
<<<<<<< HEAD
import { Link } from "react-router-dom";
import bgImage from "../../assets/img/ourteamBG.png";
=======

>>>>>>> c6a4cec51c0ad5e7e340bed0fe1f690718f88e2b
const OurTeam = () => {
  return (
    <>
     <Helmet>
        <title>Our Team - Alamo </title>
      </Helmet>
      <BreadCrumb
        subTitle="Welcome to Alamo Primary Care"
        title={
          <div>
            <span className="colorBlue">Our</span>{" "}
            <span className="colorGreen">Team</span>{" "}
          </div>
        }
        bgImage={require("../../assets/img/team/hero_team.png")}
      />
  <section className="pt80 pb80 whatWeDo">
      <div className="container-xl">
        <Row className="align-items-center gy-3">
<<<<<<< HEAD
          <Col lg={6}>
=======
          <Col lg={7}>
>>>>>>> c6a4cec51c0ad5e7e340bed0fe1f690718f88e2b
            <img
              src={require("../../assets/img/team/team1.png")}
              className="img-fluid radius19"
              alt="what we do"
            />
          </Col>
<<<<<<< HEAD
          <Col lg={6} className="intro-content">
=======
          <Col lg={5} className="intro-content">
>>>>>>> c6a4cec51c0ad5e7e340bed0fe1f690718f88e2b
            <div className="bgWhite shadowContent radius10 pl15 pr15 pt60 pb60 text-center">
              <h2 className="colorBlue fw600 fs45 mobFs28 fBold mb30">
                Dr. Chewing Shinlong
              </h2>
              <h5 className="colorBlue fw400 fs24 mobFs58 fBold mb30">
              D.N.Sc. - M.B.B.S,Ph.D
              </h5>
         
<<<<<<< HEAD
              <p className="fs18 fw400 colorBlue w-80 m-auto">
=======
              <p className="fs18 fw400 colorBlue">
>>>>>>> c6a4cec51c0ad5e7e340bed0fe1f690718f88e2b
                Welcome to Alamo Primary Care, your trusted provider of
                comprehensive primary healthcare services in the heart of Alamo
                City. We are dedicated to delivering personalized, compassionate
                care that focuses on your overall well-being.
              </p>
<<<<<<< HEAD

              <div class="bglight radius10 p-3 mt20">
                  <Row>
                     <Col md={6} className="justify-content-center d-flex mobilecontentstart mb5">
                        <div className="d-flex">
                            <div className="mr10">
                            <img
                                src={require("../../assets/img/phone.png")}
                                className="img-fluid"
                                alt="Phone"
                              />
                              </div>
                              <div >
                                <Link className="text-start" to="TEL:0111111111">
                                 <p className="mb-0 colorBlue ">Cantact Now</p>
                                 <span className="fw500 colorGreen">+000 0000 000</span>
                               </Link>
                               </div>
                            </div>
                       
                     </Col>
                     <Col md={6} className="justify-content-center mobilecontentstart d-flex mb5">
                        <div className="d-flex">
                            <div className="mr10">
                            <img
                                src={require("../../assets/img/mail.png")}
                                className="img-fluid"
                                alt="Phone"
                              />
                              </div>
                              <div >
                                <Link className="text-start" to="mailto:chewing@gmail.com">
                                 <p className="mb-0 colorBlue ">Mail ID</p>
                                 <span className="fw500 colorGreen">chewing@gmail.com</span>
                               </Link>
                               </div>
                            </div>
                       
                     </Col>
                  </Row>
              </div>

=======
>>>>>>> c6a4cec51c0ad5e7e340bed0fe1f690718f88e2b
            </div>
          </Col>
        </Row>
      </div>
    </section>

<<<<<<< HEAD

    <section className="pt80 pb80 whatWeDo"
    style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="container-xl">
        <Row className="align-items-center gy-3 mobilereverse">
        <Col lg={6} className="intro-content">
            <div className="bgWhite  shadowContentRight radius10 pl15 pr15 pt60 pb60 text-center">
              <h2 className="colorBlue fw600 fs45 mobFs28 fBold mb30">
                Dr. Chewing Shinlong
              </h2>
              <h5 className="colorBlue fw400 fs24 mobFs58 fBold mb30">
              D.N.Sc. - M.B.B.S,Ph.D
              </h5>
         
              <p className="fs18 fw400 colorBlue w-80 m-auto">
                Welcome to Alamo Primary Care, your trusted provider of
                comprehensive primary healthcare services in the heart of Alamo
                City. We are dedicated to delivering personalized, compassionate
                care that focuses on your overall well-being.
              </p>

              <div class="bglight radius10 p-3 mt20">
                  <Row>
                     <Col md={6} className="justify-content-center d-flex mobilecontentstart mb5">
                        <div className="d-flex">
                            <div className="mr10">
                            <img
                                src={require("../../assets/img/phone.png")}
                                className="img-fluid"
                                alt="Phone"
                              />
                              </div>
                              <div >
                                <Link className="text-start" to="TEL:0111111111">
                                 <p className="mb-0 colorBlue ">Cantact Now</p>
                                 <span className="fw500 colorGreen">+000 0000 000</span>
                               </Link>
                               </div>
                            </div>
                       
                     </Col>
                     <Col md={6} className="justify-content-center d-flex mobilecontentstart mb5">
                        <div className="d-flex">
                            <div className="mr10">
                            <img
                                src={require("../../assets/img/mail.png")}
                                className="img-fluid"
                                alt="Phone"
                              />
                              </div>
                              <div >
                                <Link className="text-start" to="mailto:chewing@gmail.com">
                                 <p className="mb-0 colorBlue ">Mail ID</p>
                                 <span className="fw500 colorGreen">chewing@gmail.com</span>
                               </Link>
                               </div>
                            </div>
                       
                     </Col>
                  </Row>
              </div>

            </div>
          </Col>

          <Col lg={6}>
            <img
              src={require("../../assets/img/teamthree.png")}
              className="img-fluid radius19"
              alt="what we do"
            />
          </Col>
          
        </Row>
      </div>
    </section>

    <section className="pt80 pb80 whatWeDo">
      <div className="container-xl">
        <Row className="align-items-center gy-3">
          <Col lg={6}>
=======
    <section className="pt80 pb80 whatWeDo">
      <div className="container-xl">
        <Row className="align-items-center gy-3">
          <Col lg={7}>
>>>>>>> c6a4cec51c0ad5e7e340bed0fe1f690718f88e2b
            <img
              src={require("../../assets/img/team/team3.png")}
              className="img-fluid radius19"
              alt="what we do"
            />
          </Col>
<<<<<<< HEAD
          <Col lg={6} className="intro-content">
=======
          <Col lg={5} className="intro-content">
>>>>>>> c6a4cec51c0ad5e7e340bed0fe1f690718f88e2b
            <div className="bgWhite shadowContent radius10 pl15 pr15 pt60 pb60 text-center">
              <h2 className="colorBlue fw600 fs45 mobFs28 fBold mb30">
                Dr. Chewing Shinlong
              </h2>
              <h5 className="colorBlue fw400 fs24 mobFs58 fBold mb30">
              D.N.Sc. - M.B.B.S,Ph.D
              </h5>
         
<<<<<<< HEAD
              <p className="fs18 fw400 colorBlue w-80 m-auto">
=======
              <p className="fs18 fw400 colorBlue">
>>>>>>> c6a4cec51c0ad5e7e340bed0fe1f690718f88e2b
                Welcome to Alamo Primary Care, your trusted provider of
                comprehensive primary healthcare services in the heart of Alamo
                City. We are dedicated to delivering personalized, compassionate
                care that focuses on your overall well-being.
              </p>
<<<<<<< HEAD
              <div class="bglight radius10 p-3 mt20">
                  <Row>
                     <Col md={6} className="justify-content-center d-flex mobilecontentstart mb5">
                        <div className="d-flex">
                            <div className="mr10">
                            <img
                                src={require("../../assets/img/phone.png")}
                                className="img-fluid"
                                alt="Phone"
                              />
                              </div>
                              <div >
                                <Link className="text-start" to="TEL:0111111111">
                                 <p className="mb-0 colorBlue ">Cantact Now</p>
                                 <span className="fw500 colorGreen">+000 0000 000</span>
                               </Link>
                               </div>
                            </div>
                       
                     </Col>
                     <Col md={6} className="justify-content-center d-flex mobilecontentstart mb5">
                        <div className="d-flex">
                            <div className="mr10">
                            <img
                                src={require("../../assets/img/mail.png")}
                                className="img-fluid"
                                alt="Phone"
                              />
                              </div>
                              <div >
                                <Link className="text-start" to="mailto:chewing@gmail.com">
                                 <p className="mb-0 colorBlue ">Mail ID</p>
                                 <span className="fw500 colorGreen">chewing@gmail.com</span>
                               </Link>
                               </div>
                            </div>
                       
                     </Col>
                  </Row>
              </div>
=======
>>>>>>> c6a4cec51c0ad5e7e340bed0fe1f690718f88e2b
            </div>
          </Col>
        </Row>
      </div>
    </section>
    <CallToAction
<<<<<<< HEAD
        title="Get started with alamo primary care"
=======
        title="Get started with alamo primarycare"
>>>>>>> c6a4cec51c0ad5e7e340bed0fe1f690718f88e2b
        buttonName1="New-Patient-Registration"
        buttonName2="Book Appointment"
        link1="#"
        link2="#"
        bgImg={require("../../assets/img/about/Mask.png")}
        btnType="blue"
      />
   
    </>
  );
};

export default OurTeam;
