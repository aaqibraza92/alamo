import React from "react";
import { Col, Container, Row } from "reactstrap";
import BreadCrumb from "../../components/BreadCrumb";
import TeamItems from "./TeamItems";
import { Helmet } from "react-helmet";
import CallToAction from "../../components/CallToAction";

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
          <Col lg={7}>
            <img
              src={require("../../assets/img/team/team1.png")}
              className="img-fluid radius19"
              alt="what we do"
            />
          </Col>
          <Col lg={5} className="intro-content">
            <div className="bgWhite shadowContent radius10 pl15 pr15 pt60 pb60 text-center">
              <h2 className="colorBlue fw600 fs45 mobFs28 fBold mb30">
                Dr. Chewing Shinlong
              </h2>
              <h5 className="colorBlue fw400 fs24 mobFs58 fBold mb30">
              D.N.Sc. - M.B.B.S,Ph.D
              </h5>
         
              <p className="fs18 fw400 colorBlue">
                Welcome to Alamo Primary Care, your trusted provider of
                comprehensive primary healthcare services in the heart of Alamo
                City. We are dedicated to delivering personalized, compassionate
                care that focuses on your overall well-being.
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </section>

    <section className="pt80 pb80 whatWeDo">
      <div className="container-xl">
        <Row className="align-items-center gy-3">
          <Col lg={7}>
            <img
              src={require("../../assets/img/team/team3.png")}
              className="img-fluid radius19"
              alt="what we do"
            />
          </Col>
          <Col lg={5} className="intro-content">
            <div className="bgWhite shadowContent radius10 pl15 pr15 pt60 pb60 text-center">
              <h2 className="colorBlue fw600 fs45 mobFs28 fBold mb30">
                Dr. Chewing Shinlong
              </h2>
              <h5 className="colorBlue fw400 fs24 mobFs58 fBold mb30">
              D.N.Sc. - M.B.B.S,Ph.D
              </h5>
         
              <p className="fs18 fw400 colorBlue">
                Welcome to Alamo Primary Care, your trusted provider of
                comprehensive primary healthcare services in the heart of Alamo
                City. We are dedicated to delivering personalized, compassionate
                care that focuses on your overall well-being.
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </section>
    <CallToAction
        title="Get started with alamo primarycare"
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
