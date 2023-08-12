import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import { contactType } from "../../store/slices/UserSlices";

const ImageContent = (props) => {
  console.log(props);
  const dispatch = useDispatch();

  return (
    <div className="bgWhite pt100">
      <Container>
        <Row className="align-items-center">
          <Col lg={7} md={7}>
            <div>
              <img className="img-fluid w-100" src={props?.img} alt="banner" />
            </div>
          </Col>

          <Col lg={5} md={5}>
            <div className="pl30 pr15">
              <h3 className="fs50 fw600 tabfs24 mobFs38 mobwidth50 mt0 mobmb0 mobmr0 fSemiBold text-start colorBlue ml0 mb20">
                {props?.title}
              </h3>
              <p className="fs15 colorBlue fw400 tabfs15 mobFs15 mb10">
                {props?.content}
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ImageContent;
