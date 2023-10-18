import React from "react";
import BreadCrumb from "../../components/BreadCrumb";
import Counter from "../home/Counter";
import { Col, Container, Row } from "reactstrap";
import "../../assets/css/about.css";
import { Helmet } from "react-helmet";
const Thankyou = () => {
  return (
    <>
      <Helmet>
        <title>Thank-You - Alamo Primary Care</title>
      </Helmet>
     
      <section className="pt80 pb80">
        <Container>
          <Row className="m-auto justify-content-center text-center">
              <Col lg={6} md={6}>
                <div className="thankBox pt60 pb60">
                  <h3>Thank you for your request.</h3>
                <h3>Our team will get back to you soon.</h3>
                </div>
              </Col>
          </Row>
        </Container>
      </section>

     
    </>
  );
};

export default Thankyou;
