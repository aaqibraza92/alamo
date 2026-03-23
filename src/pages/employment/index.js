import React from "react";
import BreadCrumb from "../../components/BreadCrumb";
import { Helmet } from "react-helmet";
import { Col, Container, Row } from "reactstrap";
import { Form } from "react-router-dom";
import EmploymentForm from "../contact-us/employment";

const Employment = () => {
    return (
        <>

              <Helmet>
                <title>Careers - Alamo Primary Care</title>
              </Helmet>

              <BreadCrumb
                title={
                <div>
                    <span className="colorBlue">Careers</span>{" "}
                </div>
                }
                bgImage={require("../../assets/img/contactus.png")}
             />



              <section className="formSectionA pt100 pb100 bgLightBluenew">
                <Container>
                <div className="wrapperContact">
                    <Row className="justify-content-center">
                    <Col lg={7}>
                        <div className="text-center mb30">
                        <h2 className="fw700 colorGreen text-capitalize mobFs28  fs50 "><span className="colorBlue">Get In</span>Touch</h2>
                        
                        </div>
                    </Col>
                    <Col lg={11}>
                        <EmploymentForm />

                    </Col>
                    </Row>


                </div>
                </Container>
            </section>
        </>
    );
};

export default Employment;

