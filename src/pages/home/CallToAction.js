import React from "react";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import bgImage from  '../../assets/img/bgImg.png';


const CallToAction = () => {
  return (
    <section className="text-center bgImage pt100 pb100"   style={{ backgroundImage: `url(${bgImage})` }} >
      <Container>
      <div className="pt30 pb30">
      <h2 className="colorWhite fs50 fw600 mb60">
          We Treat All Patients From Age 16.
        </h2>
        <div className="d-flex justify-content-center align-items-center flex-wrap">
          <Link className="btnBorder btnTheme fs20 fw500 bgGreen mr15 fMedium btnMob pt20 pb20 pl30 pr30" to="#">
            New-Patient-Registration 
          </Link>
          <Link className="btnTheme borderGreen fs20 fw500 bgGreen  fMedium btnMob pt20 pb20 " to="#">
            Book Appointment
          </Link>
        </div>
      </div>
     
      </Container>
    </section>
  );
};

export default CallToAction;
