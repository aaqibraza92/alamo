import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet';
import BreadCrumb from '../../components/BreadCrumb';
import { Col,Container,Row } from 'reactstrap';
import bgImage from "../../assets/img/ourteamBG.png";
import { Link } from 'react-router-dom';




const Weightlossprogram = () => {

  return (
    <>
   <Helmet>
        <title>Weightloss Program - Alamo Primary Care </title>
      </Helmet>
      <BreadCrumb
        // subTitle="Welcome to Alamo Primary Care"
        title={
          <div>
            <span className="colorBlue">Weightloss </span>{" "}
            <span className="colorGreen">Program</span>{" "}
          </div>
        }
        bgImage={require("../../assets/img/about/hero_about.png")}
      />



      <div className="bgWhite pt100 imgCont mobPb30">
      <div className="container-xl">
                <Row className="align-items-center gy-4 mobilereverse">
                  <Col lg={6} md={6}>
                    <div>
                    <img
                      className="img-fluid"
                      src={require("../../assets/img/servicesTwo.png")}
                      alt="banner"
                    />
                    </div>
                  </Col>
      
                  <Col lg={6} md={6}>
                    <div className="pl30 pr15 m-auto w-80">
         
                    <h3 className="fs50 fw700 tabfs24 mobFs38 mt0 mobmb0 mobmr0  text-start colorBlue ml0 mb20">
                    <span className="colorGreen"> Medically-Supervised </span>Weight Loss Program in San Antonio</h3>
                    <i className="fs16 colorBlue fw400 tabfs15 mobFs15">Achieve Your Goals Safely with Semaglutide, Trizepatide, and Personalized Care</i>
                <p className="fs16 colorBlue fw400 tabfs15 mobFs15 mb10 mt-3">
                If you’ve tried but have been unsuccessful at losing weight on your own, a medically supervised weight loss program can help. Alamo Primary Care’s board-certified physician and personnel are trained to treat people who are overweight or obese, as well as people with obesity-related diseases. We help you work toward achieving your weight loss goals while lowering your risk for chronic medical conditions. </p>
             
                    </div>
                 
                  </Col>
                </Row>
              </div>
          </div>



           <section className="bgLightBlue pt80 pb80">
                <Container>
                  <Row className="align-items-center mobilereverse">
                    <Col lg={6}>
                      <img
                        src={require("../../assets/img/about/clinic.jpg")}
                        className="img-fluid radius10"
                        alt="what we do"
                      />
                    </Col>
                    <Col lg={6} className="intro-content">
                      <div className="bgWhite shadowContent radius10 pl60 pr60 pt60 pb60">
                      <h3 className="colorBlue fw600 fs45 mobFs28 fBold mb30">
                      <span className="colorGreen"> Your Path to a Healthier </span> You Starts Here </h3>
                      <p className="fs16 colorBlue fw400 tabfs15 mobFs15 mb10">
                      At Alamo Primary Care, we believe sustainable weight loss is about more than just numbers on a scale—it’s about empowering you with medical expertise, advanced tools, and unwavering support. Our FDA-approved, medically-supervised program combines cutting-edge medications like Semaglutide and Trizepatide with tailored plans to help you transform your health</p>
                    
                      </div>
                    </Col>
                  </Row>
                </Container>
              </section>




              <section className="pt80 pb80 mobPt50 mobPb50 bgcolorblueGradinat"   style={{ backgroundImage: `url(${bgImage})` }} >

<Container>
    <Row>
    <Col lg={12} md={12}>
        <div className="">
        
                    <h3 className="fs50 fw700 tabfs24 mobFs38 mt0 mobmb0 mobmr0  text-start text-white  ml0 mb20">
                      <span className="colorGreen"> Why Choose Alamo’s  </span> Weight Loss Program? </h3>
                      <i className="fs16 text-white fw400 tabfs15 mobFs15">Medical Expertise Meets Personalized Care</i>
                      
                      <p className="fs16 text-white fw400 tabfs15 mobFs15  text-justify mt-3">
                      Our board-certified provider and healthcare personnel designed a plan just for you integrating:</p>

                      <ul className="text-white pl10">
                         <li><b>Clinically-Proven Medications:</b> Semaglutide and Trizepatide, GLP-1 agonists shown to reduce appetite and support significant weight loss</li>
                         <li><b>Advanced Testing :</b> Includes the InBody Composition Test — a quick, non-invasive test that breaks down your weight into muscle, fat, and water for precise tracking.</li>
                         <li><b>Ongoing Supervision :</b> Regular check-ins with our medical team ensure your journey is safe, effective, and adjusted as needed.</li>
                      </ul>
                  </div>
    
      </Col>
    </Row>


    <Row>
    <Col lg={12} md={12}>
        <div className="mt-4">
        
                    <h3 className="fs50 fw700 tabfs24 mobFs38 mt0 mobmb0 mobmr0  text-start text-white  ml0 mb20">
                      <span className="colorGreen">Program Highlights  </span> (CCAMP)</h3>
                      <ul className="text-white position-relative listv"> 
                        <li>
                        Clinically-Proven Medications
                        </li>
                        <ul className="text-white listnone">
                            <li>Semaglutide and Trizepatide : Prescribed and dispensed via our trusted pharmacy partner for convenience.</li>
                        </ul>
                        </ul>

                        <ul className="text-white position-relative listv"> 
                        <li>
                        Convenient Care
                        </li>
                        <ul className="text-white listnone">
                            <li>Skip the pharmacy run—prescriptions are shared directly with you.</li>
                        </ul>
                        </ul>

                        <ul className="text-white position-relative listv"> 
                        <li>
                        Advanced Labs & InBody Testing
                        </li>
                        <ul className="text-white listnone">
                            <li>Track real results with detailed body composition analysis.</li>
                        </ul>
                        </ul>

                        <ul className="text-white position-relative listv"> 
                        <li>
                        Medically-Supervised Safety
                        </li>
                        <ul className="text-white listnone">
                            <li>Regular monitoring to address challenges and celebrate wins.</li>
                        </ul>
                        </ul>

                        <ul className="text-white position-relative listv"> 
                        <li>
                        Personalized Support
                        </li>
                        <ul className="text-white listnone">
                            <li>Nutrition guidance, accountability, and adjustments tailored to your progress.
                            </li>
                        </ul>
                        </ul>
                  </div>
    
      </Col>
    </Row>
</Container>

</section>


<div className="bgLightBlue pt80 pb80 pt70 pb70 mobPb30">
      <div className="container-xl">
                <Row className="align-items-start gy-4">
                  <Col md={12}>
                    <h3 className="fs50 fw700 tabfs24 mobFs38 mt0 mobmb0 mobmr0  text-center colorBlue ml0 mb20">
                    <span className="colorGreen"> Program Structure </span>& Pricing</h3>
                  </Col>

                  <Col md={4}>
                   <div className="threeBox">
                   <h3 className="fs25 fw700 tabfs24 mobFs38 mt0 mobmb0 mobmr0  text-start colorBlue ml0 mb20">
                    1. Initial Consultation & Kickstart </h3>

                     <ul>
                      <li>Comprehensive medical evaluation</li>
                      <li>InBody Composition Test</li>
                      <li>1-month prescription for Semaglutide/Trizepatide</li>
                     </ul>
                   </div>
                  </Col>

                  <Col md={4}>
                  <div className="threeBox">
                  <h3 className="fs25 fw700 tabfs24 mobFs38 mt0 mobmb0 mobmr0  text-start colorBlue ml0 mb20">
                  2. Monthly Renewals
                  </h3>

                     <ul>
                      <li>Prescription refill & virtual check-in</li>
                     </ul>
                     </div>
                  </Col>

                  <Col md={4}>
                  <div className="threeBox">
                  <h3 className="fs25 fw700 tabfs24 mobFs38 mt0 mobmb0 mobmr0  text-start colorBlue ml0 mb20">
                  3. Quarterly Progress Deep Dive </h3>

                     <ul>
                      <li>In-person visit with provider</li>
                      <li>Updated lab review</li>
                      <li>Prescription adjustment (if needed)</li>
                     </ul>
                     </div>
                  </Col>


                  <Col md={12}>
                  <p className="fs18  fw400 tabfs15 mobFs15  text-center mt-3">
                     Continue with quarterly check-ins until you reach your goal!
                    </p>

                    <div className="d-flex justify-content-center align-items-center flex-wrap">
                             
                              <Link className="btnTheme borderGreen fs20 fw500 bgGreen mb15  fMedium btnMob pt20 pb20 " to="/contact-us">
                              Learn more about pricing structure
                              </Link>
                            </div>

                  </Col>

                </Row>
              </div>
          </div>

         <section className="pt80 pb80 whatWeDo">
               <div className="container-xl">
                 <Row className="align-items-center gy-3">
                   <Col lg={6}>
                     <img
                       src={require("../../assets/img/tailored.png")}
                       className="img-fluid radius19"
                       alt="what we do"
                     />
                   </Col>
                   <Col lg={6} className="intro-content">
                     <div className="bgWhite shadowContent radius10 pl60 pr60 pt60 pb60">
                       <h2 className="colorGreen fw600 fs45 mobFs28 fBold mb30">
                         <div className="colorBlue">Take the First Step Today, San Antonio!</div>
                         Let’s Get Started!
                       </h2>
                       <p className="fs18 fw400 colorBlue mb25">
                       Say goodbye to guesswork and hello to a science-backed, compassionate approach. </p>
                       <Link to="/contact-us" className="btnTheme bgGreen mr0 fMedium btnMob fw500">Call Or Book Online </Link>
                       <a href="tel:210-571-1338" className="btnTheme bgBlue mr0 fMedium btnMob fw500 ml15">Call Us </a>

                       <p className="fs18 fw400 colorBlue mt-5">
                       Limited appointments available—secure your spot now!
                       </p>

                       <p className="fs18 fw700 colorBlue mb-0"><b>Disclaimer:</b></p>
                       <p className="fs16 fw400 colorBlue mb-0">Results vary based on individual health factors.</p>
                       <p className="fs16 fw400 colorBlue mb-0">A consultation with our medical team is required to confirm eligibility.
                       </p>
                       <p className="fs16 fw400 colorBlue mb-0">Prescriptions are valid for 4 weeks.
                       </p>
                     </div>
                   </Col>
                 </Row>
               </div>
             </section>
     
    </>
 
  )
}

export default Weightlossprogram;


