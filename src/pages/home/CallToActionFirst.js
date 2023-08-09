import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import bgImage from  '../../assets/img/bgImg.png';


const CallToActionFirst = () => {
  return (
    <section className="text-center bgImage pt100 pb100"   style={{ backgroundImage: `url(${bgImage})` }} >
      <Container>

      <div className="pt60 pb60">
      <Row>
        <Col lg={4} md={4} xl={4}>
            <div className="text-center serList bgWhite position-relative pl40 pr40 pb20 transition">
              <div className="iconWrapper d-flex align-items-center justify-content-center">
                <img src={require('../../assets/img/s1.svg').default} className="img-fluid" alt="" />
              </div>
              <p className="mb0 fs20 fw400 colorBlue">
              Our mission is to provide exceptional healthcare services to individuals and families of all ages, promoting preventive care and empowering you to make informed decisions about your health.
              </p>
            </div>
        </Col>
        <Col lg={4} md={4} xl={4}>
            <div className="text-center serList bgWhite position-relative pl40 pr40 pb20 transition">
              <div className="iconWrapper d-flex align-items-center justify-content-center">
                <img src={require('../../assets/img/s2.svg').default} className="img-fluid" alt="" />
              </div>
              <p className="mb0 fs20 fw400 colorBlue">
              Our state-of-the-art facility is equipped with advanced technology and staffed by a team of experienced healthcare professionals who are committed to your comfort and satisfaction.
              </p>
            </div>
        </Col>
        <Col lg={4} md={4} xl={4}>
            <div className="text-center serList bgWhite position-relative pl40 pr40 pb20 transition">
              <div className="iconWrapper d-flex align-items-center justify-content-center">
                <img src={require('../../assets/img/s3.svg').default} className="img-fluid" alt="" />
              </div>
              <p className="mb0 fs20 fw400 colorBlue">
              We strive to create a warm and welcoming environment where you can feel at ease while receiving the highest quality of care.
              </p>
            </div>
        </Col>
      </Row>
   
      </div>
     
      </Container>
    </section>
  );
};

export default CallToActionFirst;
