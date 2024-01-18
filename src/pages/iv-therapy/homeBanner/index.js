import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";


const HomeBanner = () => {

  return (
        <div className="position-relative landingbanner pt150 pb150">
            <Container>
                <Row>
                    <Col lg={6} md={12}>
                    <div className="text-center">
                        <p className="fs15  text-caps colorGrey1  Inria tabfs15  letterspace2">
                        NOW OFFERING
                        </p>
                        <h1 className="fs60 fw700 tabfs24 mobFs25  mt-0 fSemiBold  colorWhite mb-0">
                        Nutrient
                        </h1>
                        <h1 className="fs60 text-caps  colorGrey1 fw700 tabfs30 mobFs24 mt-0   fSemiBold    mb-0">
                        IV THERAPY
                        </h1>
                        <p className="fs20  Inria text-caps colorWhite  tabfs15  letterspace2">
                        REPAIR | REPLENISH | RECOVER
                        </p>

                        <div className="pt-3">
                        <Link
                            className="btnTheme Inria border10 bglandling fs20  letterspace1 mr12 fMedium btnMob"
                            to="/contact-us"
                        >
                            BOOK APPOINTMENT
                        </Link>
                        </div>
                    </div>
                    </Col>
                </Row>
            </Container>
        
        </div>

        

    
  );
};

export default HomeBanner;
