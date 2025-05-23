import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import "../../assets/css/header.css";
import {
  angleDownIcon,
  burgerMenu,
  callSvg,
  closeIcon,
} from "../../assets/svg/Svg";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const [screenWidth, setScreenWidth] = useState(window.screen.width);
  const resizeScreen = () => {
    setScreenWidth(window.innerWidth);
  };
  useEffect(() => {
    resizeScreen();
    window.addEventListener("resize", resizeScreen);
    return () => {
      window.removeEventListener("resize", resizeScreen);
    };
  });

  useEffect(() => {
    document.getElementById("triggerToOpen") !== null &&
      document
        .getElementById("triggerToOpen")
        .addEventListener("click", (event) => {
          document.getElementById("myNav").classList.add("enableMobileMenu");
        });

    document.getElementById("closeMenu") !== null &&
      document
        .getElementById("closeMenu")
        .addEventListener("click", (event) => {
          document.getElementById("myNav").classList.remove("enableMobileMenu");
        });
  }, []);
  return (
    <header className={`transition`}>
      <div id="myNav" className={`overlay`}>
        <button id="closeMenu" className="closebtn noBtn">
          {closeIcon}
        </button>
        <div className="overlay-content">
          <Navbar />
        </div>
      </div>
      <div className={`upperHeader pt20 pb20 `}>
        <div className="container-xl">
          <Row className="align-items-center">
            <Col lg={3} md={3} xs={6}>
              <Link to="/">
                <img
                  className="img-fluid mainLogo"
                  src={require("../../assets/img/main_logo.png")}
                  alt="logo"
                />
              </Link>
            </Col>

            <Col lg={9} md={9} xs={6}>
              {screenWidth < 1024 && (
                <div className="d-flex justify-content-end">
                  <button id="triggerToOpen" className="noBtn triggerMenu">
                    {burgerMenu}
                  </button>
                </div>
              )}

              {screenWidth > 1024 && (
                <div className="d-flex justify-content-end">
                  <div className="d-flex flex-wrap align-items-center">
                    <div className="mr25">
                      <p className="fw600 fs15 colorBlack mb0">
                        Hours Of Operation:
                      </p>
                      <p className="fw400 fs15  mb0">
                        Monday to Friday, <br />
                        8:00 am - 5:00 pm
                      </p>
                    </div>
                    <a
                      href="tel:210-571-1338"
                      className="colorBlack fw600 fs18 mr12"
                    >
                      {" "}
                      <span className="mr7">{callSvg}</span>210-571-1338
                    </a>
                    <a
                      href="https://www.healowpay.com/HealowPay/jsp/healow/login.jsp"
                      target="_blank"
                      className="btnTheme bgGreen  fMedium btnMob fw500 mr12"
                    >
                      Pay Online{" "}
                    </a>
                    <Link
                      to="https://mycw192.ecwcloud.com/portal24523/jsp/100mp/login_otp.jsp"
                      target="_blank"
                      className="btnTheme bgBlue  mr12 fMedium btnMob fw500"
                    >
                      Patient Portal
                    </Link>
                    <Link
                      to="/contact-us"
                      className="btnTheme bgGreen mr0 fMedium btnMob fw500"
                    >
                      Book Appointment{" "}
                    </Link>
                  </div>
                </div>
              )}
            </Col>
          </Row>
        </div>
      </div>

      {screenWidth > 1024 && <Navbar />}
    </header>
  );
};

export default Header;

const Navbar = (props) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const loadWindowWidth = () => {
    setScreenWidth(window.innerWidth);
  };
  useEffect(() => {
    loadWindowWidth();
    window.addEventListener("resize", loadWindowWidth);
    return () => {
      window.removeEventListener("resize", loadWindowWidth);
    };
  }, []);
  const [stickyHeader, setstickyHeader] = useState("");
  const [isActiveMenu, setIsActiveMenu] = useState(false);
  const [isActiveMenu1, setIsActiveMenu1] = useState(false);
  useEffect(() => {
    document.addEventListener("scroll", () => {
      const isTop = window.scrollY;
      if (isTop > 200) {
        setstickyHeader("topDown");
      } else {
        setstickyHeader("topUp");
      }
    });
    document.querySelectorAll(".clickToClose").length > 0 &&
      document.querySelectorAll(".clickToClose").forEach((item) => {
        item.addEventListener("click", (event) => {
          document.getElementById("myNav").classList.remove("enableMobileMenu");
        });
      });
  }, []);

  const scrollOffset=(v)=>{
      const yOffset = -90; 
      const y = v.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
  }

  return (
    <div className={`navWrapper bgBlue mobileheader ${stickyHeader}`}>
      <Container>
        <ul className="noUl d-flex flex-wrap headerMenu mb0 align-items-center justify-content-between">
          <li>
            <Link to="/" className="colorWhite clickToClose">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about-us" className="colorWhite clickToClose">
              About Us
            </Link>
          </li>

          <li className={`${isActiveMenu ? "parentActive" : ""} position-relative`}>
            <Link
              onClick={
                screenWidth < 1024 ? () => {setIsActiveMenu(!isActiveMenu); setIsActiveMenu1(false)} : null
              }
              to={screenWidth < 1024 ? "#" : "/services"}
              className="colorWhite"
            >
              Services <span className="ml5 arrowDown">{angleDownIcon}</span>
            </Link>
            <ul
              className={`subMenu longMenu ${isActiveMenu ? "activeMenu" : ""}`}
            >
              {screenWidth < 1024 && (
                <li>
                  <Link to="/services" className="clickToClose">
                    All Services
                  </Link>
                </li>
              )}
             
             <li>
                <Link to="/services#service0" className="clickToClose">
                Telemedicine
                </Link>
              </li>

              <li>
                <Link to="/weightloss-program" className="clickToClose">
                  Weightloss Program
                </Link>
              </li>
              
              <li>
                <HashLink
                  smooth
                  to="/services#service1"
                  className="clickToClose"
                  // scroll={el => scrollOffset(el)}
                >
                  Chronic disease management
                </HashLink>
              </li>
              <li>
                <HashLink
                  smooth
                  to="/services#service2"
                  className="clickToClose"
                  // scroll={el => scrollOffset(el)}
                >
                  Health screenings and diagnostic tests
                </HashLink>
              </li>
              <li>
                <HashLink
                  smooth
                  to="/services#service3"
                  className="clickToClose"
                  // scroll={el => scrollOffset(el)}
                >
                  Routine check-ups and preventive care
                </HashLink>
              </li>
              
              <li>
                <HashLink
                  smooth
                  to="/services#service4"
                  className="clickToClose"
                  // scroll={el => scrollOffset(el)}
                >
                  In-office procedures
                </HashLink>
              </li>

              
              <li>
                <HashLink
                  smooth
                  to="/services#service5"
                  className="clickToClose"
                  // scroll={el => scrollOffset(el)}
                >
                  Geriatric care
                </HashLink>
              </li>
              <li>
                <HashLink
                  smooth
                  to="/services#service6"
                  className="clickToClose"
                  // scroll={el => scrollOffset(el)}
                >
                  Men’s Health Services
                </HashLink>
              </li>
              <li>
                <HashLink
                  smooth
                  to="/services#service7"
                  className="clickToClose"
                  // scroll={el => scrollOffset(el)}
                >
                  Women’s Health Services
                </HashLink>
              </li>
              <li>
                <Link to="/iv-therapy" className="clickToClose">
                  IV Therapy
                </Link>
              </li>
              <li>
                <Link
                  to="https://link.biote.info/wyu"
                  target="_blank"
                  className="clickToClose"
                >
                  Biote
                </Link>
              </li>

              <li>
                <HashLink
                  smooth
                  to="/services#service9"
                  className="clickToClose"
                  // scroll={el => scrollOffset(el)}
                >
                  Immunization and Vaccination
                </HashLink>
              </li>
              <li>
                <HashLink
                  smooth
                  to="/services#service10"
                  className="clickToClose"
                  // scroll={el => scrollOffset(el)}
                >
                  Referrals to specialists
                </HashLink>
              </li>
              <li>
                <HashLink
                  smooth
                  to="/services#service11"
                  className="clickToClose"
                  // scroll={el => scrollOffset(el)}
                >
                 Acute care visits
                </HashLink>
              </li>
             
             

            </ul>
          </li>

          <li className={`${isActiveMenu1 ? "parentActive" : ""} position-relative`}>
            <Link   onClick={
                screenWidth < 1024 ? () => {setIsActiveMenu1(!isActiveMenu1); setIsActiveMenu(false)} : null
              } to="#" className="colorWhite">
              Our Products{" "}
              <span className="ml5 arrowDown">{angleDownIcon}</span>
            </Link>
            <ul  className={`subMenu ${isActiveMenu1 ? "activeMenu" : ""}`}>
              <li>
                <Link
                  to="https://link.biote.info/wyu"
                  target="_blank"
                  className="clickToClose"
                >
                  Biote
                </Link>
              </li>
              <li>
                <Link
                  to="https://skinbetter.pro/alamoprimarycare"
                  target="_blank"
                  className="clickToClose"
                >
                  SkinBetter
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link to="/our-team" className="colorWhite clickToClose">
              Our Doctor
            </Link>
          </li>
          <li>
            <Link to="/blog" className="colorWhite clickToClose">
              Blog
            </Link>
          </li>

          <li>
            <Link to="/contact-us" className="colorWhite clickToClose">
              Contact Us
            </Link>
          </li>
          <li className="destop-none">
            <Link
              className="colorWhite clickToClose"
              to="https://www.healowpay.com/HealowPay/jsp/healow/login.jsp"
              target="_blank"
            >
              Pay Online{" "}
            </Link>
          </li>
          <li className="destop-none">
            <Link
              className="colorWhite clickToClose"
              to="https://mycw192.ecwcloud.com/portal24523/jsp/100mp/login_otp.jsp"
              target="_blank"
            >
              Patient Portal
            </Link>
          </li>
          <li className="destop-none">
            <Link className="colorWhite clickToClose" to="/contact-us">
              Book appointment
            </Link>
          </li>
        </ul>
      </Container>
    </div>
  );
};
