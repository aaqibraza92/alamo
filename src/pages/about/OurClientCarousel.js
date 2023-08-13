import React from "react";
import Slider from "react-slick";
import { quote } from "../../assets/svg/Svg";

const OurClientCarousel = () => {
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
  return (
    <section className="bgLightBlue pt80 pb80">
      <div className="container-xl">
        <h2 className="colorGreen fw600 fs45 mobFs28 fBold mb30 text-center">
           What Are 
          <span className="colorBlue"> Saying Our Client</span>
        </h2>
        <Slider className="parentSl mb20 mobMb30" {...SliderSettings}>
          <div className="pl10 pr10 pt15 pb20">
          <div className="shadow  pt50 pb50 pl30 pr30 bgWhite mb50">
            <div className="mb20">
              {quote}
            </div>
            <p className="fs15 fw500 colorBlue">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took
            </p>
          </div>
          <div className="d-flex align-items-center">
            <div className="imgClient">
              <img src={require('../../assets/img/about/t1.png')} className="img-fluid" alt="" />

            </div>
            <div className="ml15">
              <h5 className="fs15 fw600 colorBlack ">
              John Smith
              </h5>
              <p className="fs15 fw400 colorBlack">
              Client
              </p>
            </div>
          </div>
          </div>

          <div className="pl10 pr10 pt15 pb20">
          <div className="shadow  pt50 pb50 pl30 pr30 bgWhite mb50">
            <div className="mb20">
              {quote}
            </div>
            <p className="fs15 fw500 colorBlue">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took
            </p>
          </div>
          <div className="d-flex align-items-center">
            <div className="imgClient">
              <img src={require('../../assets/img/about/t1.png')} className="img-fluid" alt="" />

            </div>
            <div className="ml15">
              <h5 className="fs15 fw600 colorBlack ">
              John Smith
              </h5>
              <p className="fs15 fw400 colorBlack">
              Client
              </p>
            </div>
          </div>
          </div>

          <div className="pl10 pr10 pt15 pb20">
          <div className="shadow  pt50 pb50 pl30 pr30 bgWhite mb50">
            <div className="mb20">
              {quote}
            </div>
            <p className="fs15 fw500 colorBlue">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took
            </p>
          </div>
          <div className="d-flex align-items-center">
            <div className="imgClient">
              <img src={require('../../assets/img/about/t1.png')} className="img-fluid" alt="" />

            </div>
            <div className="ml15">
              <h5 className="fs15 fw600 colorBlack ">
              John Smith
              </h5>
              <p className="fs15 fw400 colorBlack">
              Client
              </p>
            </div>
          </div>
          </div>
     
          </Slider>
        
      </div>
    </section>
  );
};

export default OurClientCarousel;
