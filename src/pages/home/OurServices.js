import React from "react";
import { Col, Container, Row } from "reactstrap";

const OurServices = () => {
  return (
    <section className="servicearea pt100 pb100 text-center bgLightBlue">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6}>
            <h2 className="colorBlue fs50 fw600 mb20">
              <span className="colorGreen">Our</span> Services
            </h2>

            <p className="colorBlue fs15 fw400 mb20">
              Comprehensive Services for Your Health Needs
            </p>
            <p className="colorBlue fs15 fw400 mb20">
              At Alamo Primary Care, we offer a wide range of primary care
              services to address all aspects of your health. Our services
              include:
            </p>
          </Col>
        </Row>
        <Row>
          <Col lg={4}>
            <div className="radius10 position-relative">
              <img
                src={require("../../assets/img/si11.jpg")}
                className="w-100 radius10"
                alt=""
              />
              <div className="w-100 blueGrd posUp position-absolute h-100 d-flex flex-column pl30 pr30">
                <div className="h-100 d-flex align-items-end">
                  <div className="text-start">
                    <div className="mb20">
                      <img src={require("../../assets/img/si1.png")} alt="" />
                    </div>
                    <h4 className="colorWhite fs24 fw600">
                      Routine check-ups and preventive care
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default OurServices;
