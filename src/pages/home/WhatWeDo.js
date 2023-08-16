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
    <section className="pt80 pb80 whatWeDo">
      <div className="container-xl">
        <Row className="align-items-center gy-3">
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
                <div className="colorBlue">Schedule an Appointment</div>
                 Or Reach Out to Us
              </h2>
              <p className="fs18 fw400 colorBlue">
              We look forward to serving you at Alamo Primary Care. Contact us today to schedule an appointment or if you have any questions or concerns. Our friendly staff is here to assist you.
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default WhatWeDo;
