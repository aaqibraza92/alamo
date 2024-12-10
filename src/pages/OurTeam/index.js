import React, { useEffect, useState } from "react";
import { Col, Row } from "reactstrap";
import BreadCrumb from "../../components/BreadCrumb";
import bgImage from "../../assets/img/ourteamBG.png";
import CallToAction from "../../components/CallToAction";
import { Helmet } from "react-helmet";
import axios from "axios";
import { HOME_URL, TEAM_URL } from "../../helpers/apiurls";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

const OurTeam = () => {
  const [loading, setloading] = useState(false);

  const [postData, setPostData] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const navigation = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setcurrentPage] = useState(
    searchParams.get("page") ? searchParams.get("page") : 1
  );
  useEffect(() => {
    loadTeamData();
  }, [currentPage]);

  const loadTeamData = async () => {
    const options = {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    };

    await axios.get(`${HOME_URL + TEAM_URL}?per_page=25&page=${currentPage}`, options).then((res) => {

      if (res && res.status === 200) {
        setPostData(res?.data);
        setloading(true);
        setTotalPage(res?.headers["x-wp-totalpages"]);
        setTotalCount(res?.headers["x-wp-total"]);
        if (currentPage !== 1) {
          navigation(`/blogs/?page=${currentPage}`);
        }

      }
    });
  };

  return (
    <>
      <Helmet>
        <title>Meet Our Expert - Alamo </title>
      </Helmet>
      <BreadCrumb
        subTitle="Welcome to Alamo Primary Care"
        title={
          <div>
            <span className="colorBlue">Meet </span>{" "}
            <span className="colorGreen">Our Expert</span>{" "}
          </div>
        }
        bgImage={require("../../assets/img/team/hero_team.png")}
      />

      {/* {
        loading ? postData.length > 0 && postData.map((e, i) => (
          i % 2 ? <section key={i} className="pt80 pb80 whatWeDo"
            style={{ backgroundImage: `url(${bgImage})` }}>
            <div className="container-xl">
              <Row className="align-items-center gy-3 mobilereverse">
                <Col lg={6} className="intro-content">
                  <div className="bgWhite  shadowContentRight radius10 pl15 pr15 pt60 pb60 text-center">
                    <h2 className="colorBlue fw600 fs45 mobFs28 fBold mb30">
                      {e?.title?.rendered}
                    </h2>
                    <h5 className="colorBlue fw400 fs24 mobFs58 fBold mb30">
                      {e?.acf?.position}
                    </h5>

                    <div className="fs18 fw400 colorBlue w-80 m-auto" dangerouslySetInnerHTML={{ __html: e?.content?.rendered }} />

                    <div class="bglight radius10 p-3 mt20">
                      <Row>
                        <Col md={6} className="justify-content-center d-flex mobilecontentstart mb5">
                          <div className="d-flex">
                            <div className="mr10">
                              <img
                                src={require("../../assets/img/phone.png")}
                                className="img-fluid"
                                alt="Phone"
                              />
                            </div>
                            <div >
                              <Link className="text-start" to={`tel:${e?.acf?.position}`}>
                                <p className="mb-0 colorBlue ">Contact Now</p>
                                <span className="fw500 colorGreen"> {e?.acf?.mobile}</span>
                              </Link>
                            </div>
                          </div>

                        </Col>
                        <Col md={6} className="justify-content-center d-flex mobilecontentstart mb5">
                          <div className="d-flex">
                            <div className="mr10">
                              <img
                                src={require("../../assets/img/mail.png")}
                                className="img-fluid"
                                alt="Phone"
                              />
                            </div>
                            <div >
                              <Link className="text-start" to={`mailto:${e?.acf?.email}`}>
                                <p className="mb-0 colorBlue ">Mail ID</p>
                                <span className="fw500 colorGreen">{e?.acf?.email}</span>
                              </Link>
                            </div>
                          </div>

                        </Col>
                      </Row>
                    </div>

                  </div>
                </Col>

                <Col lg={6}>
                  <img
                    src={e?.x_featured_media_original}
                    className="img-fluid radius19"
                    alt="what we do"
                  />
                </Col>

              </Row>
            </div>
          </section> :
            <section key={i} className="pt80 pb80 whatWeDo">
              <div className="container-xl">
                <Row className="align-items-center gy-3">
                  <Col lg={6}>
                    <img
                      src={e?.x_featured_media_original}
                      className="img-fluid radius19"
                      alt="what we do"
                    />
                  </Col>
                  <Col lg={6} className="intro-content">
                    <div className="bgWhite shadowContent radius10 pl15 pr15 pt60 pb60 text-center">
                      <h2 className="colorBlue fw600 fs45 mobFs28 fBold mb30">
                        {e?.title?.rendered}
                      </h2>
                      <h5 className="colorBlue fw400 fs24 mobFs58 fBold mb30">
                        {e?.acf?.position}
                      </h5>
                      <div className="fs18 fw400 colorBlue w-80 m-auto" dangerouslySetInnerHTML={{ __html: e?.content?.rendered }} />


                      <div class="bglight radius10 p-3 mt20">
                        <Row>
                          <Col md={6} className="justify-content-center d-flex mobilecontentstart mb5">
                            <div className="d-flex">
                              <div className="mr10">
                                <img
                                  src={require("../../assets/img/phone.png")}
                                  className="img-fluid"
                                  alt="Phone"
                                />
                              </div>
                              <div >
                                <Link className="text-start" to={`tel:${e?.acf?.position}`}>
                                  <p className="mb-0 colorBlue ">Contact Now</p>
                                  <span className="fw500 colorGreen">    {e?.acf?.mobile} </span>
                                </Link>
                              </div>
                            </div>

                          </Col>
                          <Col md={6} className="justify-content-center mobilecontentstart d-flex mb5">
                            <div className="d-flex">
                              <div className="mr10">
                                <img
                                  src={require("../../assets/img/mail.png")}
                                  className="img-fluid"
                                  alt="Phone"
                                />
                              </div>
                              <div >
                                <Link className="text-start" to={`mailto:${e?.acf?.email}`}>
                                  <p className="mb-0 colorBlue ">Mail ID</p>
                                  <span className="fw500 colorGreen">{e?.acf?.email} </span>
                                </Link>
                              </div>
                            </div>

                          </Col>
                        </Row>
                      </div>

                    </div>
                  </Col>
                </Row>
              </div>
            </section>

        )) : <div className="container-xl mt80 mb80">
          <Row>
            <Col md={6}>
              <div class="skeleton" style={{ height: '450px' }}>  </div>
            </Col>
            <Col md={6}>
              <div class="skeleton" style={{ height: '450px' }}>  </div>
            </Col>
            <Col md={6}>
              <div class="skeleton" style={{ height: '450px' }}>  </div>
            </Col>
            <Col md={6}>
              <div class="skeleton" style={{ height: '450px' }}>  </div>
            </Col>
          </Row>
        </div>
      } */}


<div className="bgWhite pt100 pb100 imgCont mobPb30">
<div className="container-xl">
          <Row className="align-items-start gy-4">
            <Col lg={4} md={4}>
              <div>
              <img
                className="img-fluid radius10"
                src={require("../../assets/img/DrVishalProfileImage.jpg")}
                alt="banner"
              />
              </div>
              <div className="border-bottom mt-5 pb-3">
                {/* <h4 className=" fs24 fs700  colorBlue ">Profile:</h4> */}
                <p className="fs16 colorBlue fw400 tabfs15 mobFs15 mb10">Dr. Vishal Nemarugommula, MD<br></br>  Family Medicine Physician. <br></br>
Founder, Alamo Primary Care  <br></br>
17+ years of Medical Experience
                  </p>
              </div>

              <div className="border-bottom pb-3">
                <h4 className="mt-3 fs24 fs700  colorBlue ">Education & Experience:</h4>
                <p className="fs16 colorBlue fw400 tabfs15 mobFs15 mb10">Wayne State University School of <br></br> Medicine, Michigan <br></br>
MPH, University of North Texas Health <br></br> Science Center in Fort Worth, Texas <br></br>
Adjunct Faculty, Department of Medicine. <br></br>The University of Incarnate Word
</p>
              </div>

              <div className="pb-3 border-bottom">
                <h4 className="mt-3 fs24 fs700  colorBlue ">Certifications:</h4>
                <p className="fs16 colorBlue fw400 tabfs15 mobFs15 mb10">American Board of Family Medicine</p>
              </div>
            </Col>

            <Col lg={8} md={8}>
              <div className=" m-auto w-80">
   
              <div className="pb-3">
               
                <p className="fs16 colorBlue fw400 tabfs15 mobFs15 mb10 text-justify">Dr. Vishal founded Alamo Primary Care in San Antonio. His specialties include general primary care for all ages, acute illness medical care, chronic disease management for diabetes, hypertension, renal and heart conditions, hospital medicine, psychiatry illness management, preventive care checkups, men’s & women’s health services, geriatric care, weight loss management, hormone imbalance management. Along with acute and chronic disease management, he performs a variety of in-office procedures such as knee, elbow, and shoulder joint injections, trigger point injections, skin biopsies, cryotherapy for skin lesions, pelvic and pap exams, and hormonal implantations.</p>
                <p className="fs16 colorBlue fw400 tabfs15 mobFs15 mb10 text-justify">With a deep passion for healing and a commitment to helping people achieve their healthiest selves, Dr. Vishal has dedicated his life to the medical field. Over the past 17 years, he has treated and cared for patients in hospitals and clinics, gaining invaluable experience and fostering compassion with each case.</p>
                <p className="fs16 colorBlue fw400 tabfs15 mobFs15 mb10 text-justify">Having studied at reputed universities, Dr. Vishal has acquired a wealth of knowledge and expertise, ensuring his patients receive the best care. His commitment to excellence led him to found <b>Alamo Primary Care</b>, where he offers specialized services to cater to a wide range of health needs.</p>
                <p className="fs16 colorBlue fw400 tabfs15 mobFs15 mb10 text-justify">He focuses on empowering individuals to take control of their health and well-being through personalized, attentive, and comprehensive care. Whether seeking preventive care, managing an ongoing condition, or embarking on a path to better health, his expertise and genuine dedication to patient care provide a foundation for healing and lasting wellness.</p>
                <p className="fs16 colorBlue fw400 tabfs15 mobFs15 mb10 text-justify">Dr. Vishal truly believes that “Health and Wellness are like two hands that have to clap together to make music. Medicine will be prime to empower patients and help them achieve their health objectives and goals at every stage and age in life”</p>
                <p className="fs16 colorBlue fw400 tabfs15 mobFs15 mb10 text-justify">Dr. Vishal, in his free time, loves to travel, play tennis, spend time with his family, and his 2 boys, and cook. </p>
              
              </div>
              </div>
           
            </Col>
          </Row>
        </div>
    </div>

      <CallToAction
        title="We Treat All Patients From Age 16."
        buttonName1="New-Patient-Registration"
        buttonName2="Book Appointment"
        link1="/contact-us"
        link2="/contact-us"
        bgImg={require("../../assets/img/about/Mask.png")}
        btnType="blue"
      />

    </>
  );
};

export default OurTeam;
