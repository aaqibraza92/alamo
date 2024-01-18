import React from "react";
// import BreadCrumb from "../../../components/BreadCrumb";
import { Helmet } from "react-helmet";
import BreadCrumb from "../../components/BreadCrumb";
import HomeBanner from "./homeBanner";
import { Col, Container, Row } from "reactstrap";
import { Link } from "react-router-dom";
import LookingForTalent from "../contact-us/LookingForTalent";


const Ivtherapy = () => {
  return (
    <>
      <Helmet>
        <title>IV therapy | Alamo Primary Care</title>
      </Helmet>
      
     <HomeBanner />

     <div className="landingbannernew pt120 pb120">
     <div className="container-xl">
          <Row className="align-items-center  mobilereverse">
           

            <Col lg={7} md={12} className="m-auto">
              <div className="text-center">
   
              <p className="fs25 mobFs18 Inria colorGrey1">
              IV Therapy is a way to give the nutrition directly into the blood stream to repair, replenish & recover from the inside. 
                </p>
                <p className="fs25 mobFs18 Inria colorGrey1">
                It begins with a simple consultation with the doctor who prescribes the therapy as needed.
                </p>
              </div>
           
            </Col>
          </Row>
        </div>
      </div>


      <div className="lamdingthird pt70 pb70 bgColornew pbnone">
         <Container>
             <Row>
                <Col md={12} className="pb-3">
                <h1 className="fs40 text-caps text-white fw700 tabfs24 mobFs30 mt-0  fSemiBold">
                        IV THERAPY
                        </h1>
                </Col>
             </Row>

             <Row>
                
             <Col md={3} xs={6}>
                  <div className="bgimagefirst bgcolorblue boxpadding text-center">
                  <img
                    className="img-fluid pb-3"
                    src={require("../../assets/img/shield.png")}
                    alt="banner"
                    />

                    <h3 className="Inria text-white pb-3 mobFs18">MYERS <br></br> COCKTAIL</h3>
                    <p className="Inria text-white mobFs14">BOOST ENERGY & IMMUNE SYSTEM NATURALLY</p>
                  </div>
                </Col>
                <Col md={3} xs={6}>
                  <div className="bgimagefirst bgcolorpink boxpadding text-center">
                  <img
                    className="img-fluid pb-3"
                    src={require("../../assets/img/Group1153.png")}
                    alt="banner"
                    />

                    <h3 className="Inria text-white pb-3 mobFs18">ULTIMATE <br></br> MYERS <br></br>  COCKTAIL</h3>
                    <p className="Inria text-white mobFs14">ULTIMATE IMMUNE SYSTEM BOOST NATURALLY</p>
                  </div>
                </Col>


                <Col md={3} xs={6}>
                  <div className="bgimagefirst bgcolorgreen boxpadding text-center">
                  <img
                    className="img-fluid pb-3"
                    src={require("../../assets/img/synchronization.png")}
                    alt="banner"
                    />

                    <h3 className="Inria text-white pb-3 mobFs18">REBOOT</h3>
                    <p className="Inria text-white mobFs14">REPLENISH & REHYDRATE NATURALLY</p>
                  </div>
                </Col>

                <Col md={3} xs={6}>
                  <div className="bgimagefirst bgcolorlightb boxpadding text-center">
                  <img
                    className="img-fluid pb-3"
                    src={require("../../assets/img/recovery.png")}
                    alt="banner"
                    />

                    <h3 className="Inria text-white pb-3 mobFs18">RECOVERY &  <br></br> PERFORMANCE</h3>
                    <p className="Inria text-white mobFs14">ENHANCE ATHELETIC RECOVERY & PERFORMANCE</p>
                  </div>
                </Col>
             </Row>

             <Row className="ptland40">
             <Col md={3} xs={6}>
                  <div className="bgimagefirst bgcolorbluenew boxpadding text-center">
                  <img
                    className="img-fluid pb-3"
                    src={require("../../assets/img/navel.png")}
                    alt="banner"
                    />

                    <h3 className="Inria text-white pb-3 mobFs18">ALLEVIATE</h3>
                    <p className="Inria text-white mobFs14">REDUCE ABDOMINAL DISCOMFORTS</p>
                  </div>
                </Col>



                <Col md={3} xs={6}>
                  <div className="bgimagefirst bgcolorpinknew boxpadding text-center">
                  <img
                    className="img-fluid pb-3"
                    src={require("../../assets/img/Vectornew.png")}
                    alt="banner"
                    />

                    <h3 className="Inria text-white pb-3 mobFs18">IMMUNITY </h3>
                    <p className="Inria text-white mobFs14">IMMUNE RESPONSE POWER BOOSTER</p>
                  </div>
                </Col>


                <Col md={3} xs={6}>
                  <div className="bgimagefirst bgcolorpinknewone boxpadding text-center">
                  <img
                    className="img-fluid pb-3"
                    src={require("../../assets/img/flower.png")}
                    alt="banner"
                    />

                    <h3 className="Inria text-white pb-3 mobFs18">INNER <br></br> BEAUTY</h3>
                    <p className="Inria text-white mobFs14">REVITALIZE SKIN, HAIR & NAILS WITH B-COMPLEX VITAMINS</p>
                  </div>
                </Col>

                <Col md={3} xs={6}>
                  <div className="bgimagefirst bgcolorpinknewpure boxpadding text-center">
                  <img
                    className="img-fluid pb-3"
                    src={require("../../assets/img/Group1213.png")}
                    alt="banner"
                    />

                    <h3 className="Inria text-white pb-3 mobFs18">PURE   <br></br> HYDRATION</h3>
                    <p className="Inria text-white mobFs14">REPLENISH THE BODY’S HYDRATION NEEDS</p>
                  </div>
                </Col>
             </Row>

         </Container>
      </div>

      <div className="bgbottomlanding bgColornew">
          <Container>
             <Row>
                <Col className="m-auto" md={10}>
                
                <img
              src={require("../../assets/img/browngirl.png")}
              className="img-fluid"
              alt="what we do"
            />
            </Col>
                </Row>
          </Container>
      </div>


      <section className="pt80 pb80 whatWeDo">
      <div className="container-xl">
        <Row className="align-items-center">
          
          <Col lg={10} className="m-auto">
            <div className="bgWhite shadowContentnew radius10 pl60 pr60 pt60 pb60">
              <h2 className="text-center fw600 fs45 mobFs28 fBold mb30">
                <div className="Inria">GET IN TOUCH WITH US</div>
                
              </h2>
              <LookingForTalent />
            </div>
          </Col>
        </Row>
      </div>
    </section>
      
     
     
    </>
  );
};

export default Ivtherapy;
