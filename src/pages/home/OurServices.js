import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { Col, Container, Row } from "reactstrap";

const OurServices = () => {
  var SliderSettings = {
    dots: false,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: "",
    nextArrow: "",
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          adaptiveHeight: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true,
          arrows: false,
        },
      },
          {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 10,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        },
      },
    ],
  };

  var SliderSettings2 = {
    dots: false,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    prevArrow: "",
    nextArrow: "",
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          adaptiveHeight: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true,
          arrows: false,
        },
      },
          {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 10,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        },
      },
    ],
  };
  return (
    <section className="servicearea pt100 pb100 mobPb50 mobPt50 text-center bgLightBlue">
      <div className="container-xl">
        <Row className="justify-content-center mb45 gy-3">
          <Col lg={6}>
            <h2 className="colorBlue fs50 fw600 mb20">
              <span className="colorGreen">Our</span> Services
            </h2>

            <p className="colorBlue fs15 fw400 mb20">
              Comprehensive Services for Your Health Needs
            </p>
            <p className="colorBlue fs15 fw400 mb20">
              At Alamo Primary Care, we offer a wide range of primary care
              services to address all aspects of your health. 
            </p>
          </Col>
        </Row>

        <Slider className="parentSl mb20 mobMb30" {...SliderSettings}>
<<<<<<< HEAD

           

=======
>>>>>>> c6a4cec51c0ad5e7e340bed0fe1f690718f88e2b
          <div className="pl10 pr10">
          <div className="radius10 position-relative mainSerWrap transition">
              <img
                src={require("../../assets/img/si11.jpg")}
                className="w-100 radius10"
                alt=""
              />
<<<<<<< HEAD
              <div className="w-100 default radius10 blueGrd posUp position-absolute h-100 d-flex flex-column pl30 pr30 pb30 transition">
=======
              <div className="w-100 default radius10 blueGrd posUp position-absolute h-100 d-flex flex-column pl30 pr30 transition">
>>>>>>> c6a4cec51c0ad5e7e340bed0fe1f690718f88e2b
                <div className="h-100 d-flex align-items-end">
                  <div className="text-start pb20">
                    <div className="mb20">
                      <img src={require("../../assets/img/si1.png")} alt="" />
                    </div>
                    <h4 className="colorWhite fs24 fw600">
                      Routine check-ups<br></br> and preventive care
                    </h4>
                  </div>
                </div>
              </div>
<<<<<<< HEAD

             

              <div className="w-100 onHover radius10 blueGrd posUp img-hvr hvr-6 position-absolute h-100 d-flex flex-column pl30 pr30 transition">
                <div className="h-100 d-flex align-items-center  transition">
=======
              <div className="w-100 onHover radius10 blueGrd posUp position-absolute h-100 d-flex flex-column pl30 pr30 transition">
                <div className="h-100 d-flex align-items-center">
>>>>>>> c6a4cec51c0ad5e7e340bed0fe1f690718f88e2b
                  <div className="text-start">
                    <div className="mb20">
                      <img src={require("../../assets/img/si1.png")} alt="" />
                    </div>
                    <h4 className="colorWhite fs24 fw600 mb20">
<<<<<<< HEAD
                    Routine check-ups<br></br> and preventive care
=======
                      Routine check-ups and preventive care
>>>>>>> c6a4cec51c0ad5e7e340bed0fe1f690718f88e2b
                    </h4>
                    <p className="colorWhite fs15 fw400 mb20">
                      At Alamo Primary Care, we offer a wide range of primary care
                      services to address all aspects of your health. Our services
                      include:
                    </p>
                    <div className="mt40">
                      <Link
                        className="btnTheme btnWhite fw600 fs16 pt15 pb15 mr12 fMedium btnMob"
                        to="#"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pl10 pr10">
          <div className="radius10 position-relative mainSerWrap transition">
              <img
<<<<<<< HEAD
                src={require("../../assets/img/Quality.jpg")}
                className="w-100 radius10"
                alt=""
              />
              <div className="w-100 default radius10 blueGrd posUp position-absolute h-100 d-flex flex-column pl30 pb30 pr30 transition">
=======
                src={require("../../assets/img/si11.jpg")}
                className="w-100 radius10"
                alt=""
              />
              <div className="w-100 default radius10 blueGrd posUp position-absolute h-100 d-flex flex-column pl30 pr30 transition">
>>>>>>> c6a4cec51c0ad5e7e340bed0fe1f690718f88e2b
                <div className="h-100 d-flex align-items-end">
                  <div className="text-start pb20">
                    <div className="mb20">
                      <img src={require("../../assets/img/si1.png")} alt="" />
                    </div>
                    <h4 className="colorWhite fs24 fw600">
<<<<<<< HEAD
                    Immunizations and<br></br>  vaccinations
=======
                      Routine check-ups and preventive care
>>>>>>> c6a4cec51c0ad5e7e340bed0fe1f690718f88e2b
                    </h4>
                  </div>
                </div>
              </div>
              <div className="w-100 onHover radius10 blueGrd posUp position-absolute h-100 d-flex flex-column pl30 pr30 transition">
                <div className="h-100 d-flex align-items-center">
                  <div className="text-start">
                    <div className="mb20">
                      <img src={require("../../assets/img/si1.png")} alt="" />
                    </div>
                    <h4 className="colorWhite fs24 fw600 mb20">
<<<<<<< HEAD
                    Immunizations and <br></br>  vaccinations
=======
                      Routine check-ups and preventive care
>>>>>>> c6a4cec51c0ad5e7e340bed0fe1f690718f88e2b
                    </h4>
                    <p className="colorWhite fs15 fw400 mb20">
                      At Alamo Primary Care, we offer a wide range of primary care
                      services to address all aspects of your health. Our services
                      include:
                    </p>
                    <div className="mt40">
                      <Link
                        className="btnTheme btnWhite fw600 fs16 pt15 pb15 mr12 fMedium btnMob"
                        to="#"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
</div>

<div className="pl10 pr10">
<div className="radius10 position-relative mainSerWrap transition">
              <img
<<<<<<< HEAD
                src={require("../../assets/img/Chronicdiseasemanagement.jpg")}
                className="w-100 radius10"
                alt=""
              />
              <div className="w-100 default radius10 blueGrd posUp position-absolute h-100 d-flex flex-column pl30 pb30 pr30 transition">
                <div className="h-100 d-flex align-items-end">
                  <div className="text-start pb20">
                    <div className="mb20">
                      <img src={require("../../assets/img/homeservicesthree.png")} alt="" />
                    </div>
                    <h4 className="colorWhite fs24 fw600">
                    Chronic disease <br></br> management
=======
                src={require("../../assets/img/si11.jpg")}
                className="w-100 radius10"
                alt=""
              />
              <div className="w-100 default radius10 blueGrd posUp position-absolute h-100 d-flex flex-column pl30 pr30 transition">
                <div className="h-100 d-flex align-items-end">
                  <div className="text-start pb20">
                    <div className="mb20">
                      <img src={require("../../assets/img/si1.png")} alt="" />
                    </div>
                    <h4 className="colorWhite fs24 fw600">
                      Routine check-ups and preventive care
>>>>>>> c6a4cec51c0ad5e7e340bed0fe1f690718f88e2b
                    </h4>
                  </div>
                </div>
              </div>
              <div className="w-100 onHover radius10 blueGrd posUp position-absolute h-100 d-flex flex-column pl30 pr30 transition">
                <div className="h-100 d-flex align-items-center">
                  <div className="text-start">
                    <div className="mb20">
<<<<<<< HEAD
                      <img src={require("../../assets/img/homeservicesthree.png")} alt="" />
                    </div>
                    <h4 className="colorWhite fs24 fw600 mb20">
                    Chronic disease <br></br> management
=======
                      <img src={require("../../assets/img/si1.png")} alt="" />
                    </div>
                    <h4 className="colorWhite fs24 fw600 mb20">
                      Routine check-ups and preventive care
>>>>>>> c6a4cec51c0ad5e7e340bed0fe1f690718f88e2b
                    </h4>
                    <p className="colorWhite fs15 fw400 mb20">
                      At Alamo Primary Care, we offer a wide range of primary care
                      services to address all aspects of your health. Our services
                      include:
                    </p>
                    <div className="mt40">
                      <Link
                        className="btnTheme btnWhite fw600 fs16 pt15 pb15 mr12 fMedium btnMob"
                        to="#"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
</div>
<<<<<<< HEAD


        </Slider>
 
        <Slider className="parentSl newslide" {...SliderSettings2}>
=======
        </Slider>
 
        <Slider className="parentSl" {...SliderSettings2}>
>>>>>>> c6a4cec51c0ad5e7e340bed0fe1f690718f88e2b
        <div className="pl10 pr10">
        <div className="radius10 position-relative mainSerWrap transition">
              <img
                src={require("../../assets/img/demo_1.jpg")}
                className="w-100 radius10"
                alt=""
              />
<<<<<<< HEAD
              <div className="w-100 default radius10 blueGrd posUp position-absolute h-100 d-flex flex-column pl30 pb30 pr30 transition">
                <div className="h-100 d-flex align-items-end">
                  <div className="text-start pb20">
                    <div className="mb20">
                      <img src={require("../../assets/img/Womenshealthservices.png")} alt="" />
                    </div>
                    <h4 className="colorWhite fs24 fw600">
                    Women's health services
=======
              <div className="w-100 default radius10 blueGrd posUp position-absolute h-100 d-flex flex-column pl30 pr30 transition">
                <div className="h-100 d-flex align-items-end">
                  <div className="text-start pb20">
                    <div className="mb20">
                      <img src={require("../../assets/img/si1.png")} alt="" />
                    </div>
                    <h4 className="colorWhite fs24 fw600">
                      Routine check-ups and preventive care
>>>>>>> c6a4cec51c0ad5e7e340bed0fe1f690718f88e2b
                    </h4>
                  </div>
                </div>
              </div>
              <div className="w-100 onHover radius10 blueGrd posUp position-absolute h-100 d-flex flex-column pl30 pr30 transition">
                <div className="h-100 d-flex align-items-center">
                  <div className="text-start">
                    <div className="mb20">
<<<<<<< HEAD
                      <img src={require("../../assets/img/Womenshealthservices.png")} alt="" />
                    </div>
                    <h4 className="colorWhite fs24 fw600 mb20">
                    Women's health services
=======
                      <img src={require("../../assets/img/si1.png")} alt="" />
                    </div>
                    <h4 className="colorWhite fs24 fw600 mb20">
                      Routine check-ups and preventive care
>>>>>>> c6a4cec51c0ad5e7e340bed0fe1f690718f88e2b
                    </h4>
                    <p className="colorWhite fs15 fw400 mb20">
                      At Alamo Primary Care, we offer a wide range of primary care
                      services to address all aspects of your health. Our services
                      include:
                    </p>
                    <div className="mt40">
                      <Link
                        className="btnTheme btnWhite fw600 fs16 pt15 pb15 mr12 fMedium btnMob"
                        to="#"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pl10 pr10">
          <div className="radius10 position-relative mainSerWrap transition">
              <img
                src={require("../../assets/img/demo_1.jpg")}
                className="w-100 radius10"
                alt=""
              />
<<<<<<< HEAD
              <div className="w-100 default radius10 blueGrd posUp position-absolute h-100 d-flex flex-column pl30 pb30 pr30 transition">
                <div className="h-100 d-flex align-items-end">
                  <div className="text-start pb20">
                    <div className="mb20">
                      <img src={require("../../assets/img/Geriatriccare.png")} alt="" />
                    </div>
                    <h4 className="colorWhite fs24 fw600">
                    Geriatric care
=======
              <div className="w-100 default radius10 blueGrd posUp position-absolute h-100 d-flex flex-column pl30 pr30 transition">
                <div className="h-100 d-flex align-items-end">
                  <div className="text-start pb20">
                    <div className="mb20">
                      <img src={require("../../assets/img/si1.png")} alt="" />
                    </div>
                    <h4 className="colorWhite fs24 fw600">
                      Routine check-ups and preventive care
>>>>>>> c6a4cec51c0ad5e7e340bed0fe1f690718f88e2b
                    </h4>
                  </div>
                </div>
              </div>
              <div className="w-100 onHover radius10 blueGrd posUp position-absolute h-100 d-flex flex-column pl30 pr30 transition">
                <div className="h-100 d-flex align-items-center">
                  <div className="text-start">
                    <div className="mb20">
<<<<<<< HEAD
                      <img src={require("../../assets/img/Geriatriccare.png")} alt="" />
                    </div>
                    <h4 className="colorWhite fs24 fw600 mb20">
                    Geriatric care
=======
                      <img src={require("../../assets/img/si1.png")} alt="" />
                    </div>
                    <h4 className="colorWhite fs24 fw600 mb20">
                      Routine check-ups and preventive care
>>>>>>> c6a4cec51c0ad5e7e340bed0fe1f690718f88e2b
                    </h4>
                    <p className="colorWhite fs15 fw400 mb20">
                      At Alamo Primary Care, we offer a wide range of primary care
                      services to address all aspects of your health. Our services
                      include:
                    </p>
                    <div className="mt40">
                      <Link
                        className="btnTheme btnWhite fw600 fs16 pt15 pb15 mr12 fMedium btnMob"
                        to="#"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </Slider>
    
      </div>
    </section>
  );
};

export default OurServices;
