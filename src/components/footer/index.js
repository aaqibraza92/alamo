/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import "../../assets/css/footer.css";
import {
  callSvg,
  envelopSvg,
  fb,
  globleSvg,
  linkdin,
  linkdinColor,
  locationSvg,
  twitter,
} from "../../assets/svg/Svg";

const Footer = () => {
  return (
    <footer>
      <Container>
        <div className="text-center">
          <Row className="justify-content-center bDivi mb60 pb30">
            <Col lg={8}>
            <h2 className="colorWhite fs50 fw600 mb20">
        Contact Us
            </h2>
            <p className="colorWhite fs20 fw600 mb20">
            Schedule an Appointment or Reach Out to Us
            </p>
            <p className="colorWhite fs15 fw400 mb40">
            We look forward to serving you at Alamo Primary Care. Contact us today to schedule an appointment or if you have any questions or concerns. Our friendly staff is here to assist you.
            </p>
            </Col>
          </Row>
    

         
       
        </div>
        <Row className="gy-5">
          <Col lg={3} md={3} xl={3}>
            <h3 className="colorWhite fs30 fw500  mb40 text-uppercase">
              About Us
            </h3>
            <p className="fs15 colorWhite fw400">
              Exceptional Care Tailored to Your Needs
            </p>
            <p className="fs15 colorWhite fw400">
              Welcome to Alamo Primary Care, your trusted provider of
              comprehensive primary healthcare services in the heart of Alamo
              City. We are dedicated to delivering personalized, compassionate
              care that focuses on your overall well-being.
            </p>
          </Col>
          <Col lg={3} md={3} xl={3}>
            <h3 className="colorWhite fs30 fw500  mb40 text-uppercase">
              Get IN TOUCH
            </h3>
            <ul className="noUl">
            <li className="mb12">
                <div className="d-flex">
                  <span className="mr12">{callSvg}</span>
                  <a
                    href="tel:848-666-0101"
                    className="colorWhite fs15 fRegular itemLightwhite"
                  >
                    848-666-0101
                  </a>
                </div>
              </li>
 <li className="mb12">
                <div className="d-flex">
                  <span className="mr12">{globleSvg}</span>
                  <Link
                    to="/"
                    className="colorWhite fs15 fRegular itemLightwhite"
                  >
                 www.alamo.com
                  </Link>
                </div>
              </li>
              <li className="mb12">
                <div className="d-flex">
                  <span className="mr12">{envelopSvg}</span>
                  <a
                    href="mailto:potranco.clinic@alamoprimarycare.com"
                    className="colorWhite fs15 fRegular itemLightwhite"
                  >
                 potranco.clinic@alamoprimarycare.com
                  </a>
                </div>
              </li>

            
              <li className="mb0">
                <div className="d-flex">
                  <span className="mr12">{locationSvg}</span>
                  <a
                    href="tel:848-666-0101"
                    className="colorWhite fs15 fRegular itemLightwhite"
                  >
              12047 FM 1957, San Antonio, <br/>
 TX - 78253
                  </a>
                </div>
              </li>
            </ul>
          </Col>
          <Col lg={3} md={3} xl={3}>
            <h3 className="colorWhite fs30 fw500  mb40 text-uppercase">
              useful link
            </h3>
            
            <ul className="noUl">
              <li className="mb8">
                <Link
                  to="/about-us"
                  className="colorWhite fs15 fRegular itemLightwhite"
                >
                Home
                </Link>
              </li>
              <li className="mb8">
                <Link
                  to="/preclinical-scientific"
                  className="colorWhite fs15 fRegular itemLightwhite"
                >
               About Us
                </Link>
              </li>
              <li className="mb8">
                <Link
                  to="/our-team"
                  className="colorWhite fs15 fRegular itemLightwhite"
                >
               Services
                </Link>
              </li>
              <li className="mb8">
                <Link
                  to="/blogs"
                  className="colorWhite fs15 fRegular itemLightwhite"
                >
              Meet Our Team
                </Link>
              </li>
              <li className="mb8">
                <Link
                  to="/contact-us"
                  className="colorWhite fs15 fRegular itemLightwhite"
                >
               Patient Resources
                </Link>
              </li>
              <li>
                <Link
                  to="/contact-us"
                  className="colorWhite fs15 fRegular itemLightwhite"
                >
              Contact Us
                </Link>
              </li>
            </ul>
          </Col>

          <Col lg={3} md={3} xl={3}>
            <h3 className="colorWhite fs30 fw500 mb40 text-uppercase">
              Newsletter
            </h3>
            <p className="fs15 colorWhite fw400">
              Our newsletters contain useblog posts, case studies "how to"s and
              ways to help you grow your business
            </p>
            <div>
              <div className="mb12">
              <input className="themeInput" type="email" placeholder="Enter email address"/>
              </div>
             
              <button className="btnTheme bgGreen mr0 fMedium btnMob fw400 w-100 d-block text-uppercase rounded-0">
            Send Now
            </button>
            </div>
       
          </Col>
        </Row>

        <div className="copyright mt50 pt20 pb20">
          <Row className="align-items-center">
            <Col lg={6}>
              <p className="colorWhite fs14 fRegular itemLightwhite mb0 opacity55">
                Copyright {new Date().getFullYear()}. All Rights Reserved |
                Designed & Developed by Emporia Agency
              </p>
            </Col>
            <Col lg={6}>
              <div className="d-flex justify-content-lg-end">
                <Link
                  to="/#"
                  className="colorWhite fs14 fRegular itemLightwhite mb0 mr10 opacity55"
                >
                  Terms & Condition /
                </Link>
                <Link
                  to="#"
                  className="colorWhite fs14 fRegular itemLightwhite mb0 mr10 opacity55"
                >
                  Privacy Policy /
                </Link>
                <Link
                  to="#"
                  className="colorWhite fs14 fRegular itemLightwhite mb0 opacity55"
                >
                  Help
                </Link>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
