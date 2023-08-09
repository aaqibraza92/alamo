import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import { checkSvg } from "../../assets/svg/Svg";

let data = [
  "Temporary/Contract",
  "Contract-to-permanent / Full-Time",
  "Permanent/Full-Time",
  "Functional services (FSP)",
];
const WhatWeDo = () => {
  return (
    <section className="pt80 pb80">
      <Container>
        <Row className="align-items-center mobilereverse">
          <Col lg={7}>
            <img
              src={require("../../assets/img/tailored.png")}
              className="img-fluid radius19"
              alt="what we do"
            />
          </Col>
          <Col lg={5} className="intro-content">
            <div className="bgWhite shadowContent radius10 pl60 pr60 pt60 pb60">
              <h2 className="colorGreen fw600 fs45 mobFs28 fBold mb30">
                <div className="colorBlue">Exceptional Care</div>
                Tailored to Your Needs
              </h2>
              <p className="fs18 fw400 colorBlue">
                Welcome to Alamo Primary Care, your trusted provider of
                comprehensive primary healthcare services in the heart of Alamo
                City. We are dedicated to delivering personalized, compassionate
                care that focuses on your overall well-being.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WhatWeDo;
