import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import { contactType } from "../../store/slices/UserSlices";

const ImageContent = () => {
  const dispatch= useDispatch();

  const contactTypeHandle=(v)=>{
    dispatch(contactType(v));
  }
 
  return (
<div className="bgWhite pt60">
        <Container>
          <Row className="align-items-center">
            <Col lg={7} md={7}>
              <div>
              <img
        className="img-fluid w-100"
        src={require("../../assets/img/left_img.png")}
        alt="banner"
      />
              </div>
            </Col>

            <Col lg={5} md={5}>
              <div className="pl30 pr15">
   
<h3 className="fs50 fw600 tabfs24 mobFs38 mobwidth50 mt0 mobmb0 mobmr0 fSemiBold text-start colorBlue ml0 mb20">

<div className="colorGreen"> Exceptional Care</div> 
Tailored to Your 
Needs
                </h3>
              <p className="fs15 colorBlue fw400 tabfs15 mobFs15 mb10">
            Welcome to Alamo Primary Care, your trusted provider of comprehensive primary healthcare services in the heart of Alamo City. We are dedicated to delivering personalized, compassionate care that focuses on your overall well-being.
                </p>
              </div>
           
            </Col>
          </Row>
        </Container>
    </div>
  );
};

export default ImageContent;
