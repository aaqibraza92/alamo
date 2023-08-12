import React from "react";
import { Link } from "react-router-dom";


const CallToAction = (props) => {
  return (
    <section className="text-center bgImage pt100 pb100"   style={{ backgroundImage: `url(${props?.bgImg})` }} >
      <div className="container-xl">
      <div className="pt30 pb30">
      <h2 className="colorWhite fs50 fw600 mb60 text-capitalize">
        {props?.title}
        </h2>
        <div className="d-flex justify-content-center align-items-center flex-wrap">
          <Link className={`${props.btnType==="blue" ? "btnBorder btnTheme fs20 fw500 bgGreen mr15 fMedium btnMob pt20 pb20 pl30 pr30" : "btnBorder btnTheme fs20 fw500 bgGreen mr15 fMedium btnMob pt20 pb20 pl30 pr30"} `} to={props?.link1}>
            {props?.buttonName1}
          </Link>
          <Link className={`${props.btnType==="blue" ? "btnBorder btnTheme fs20 fw500 bgGreen mr15 fMedium btnMob pt20 pb20 pl30 pr30" : "btnBorder btnTheme fs20 fw500 bgGreen mr15 fMedium btnMob pt20 pb20 pl30 pr30"} `}  to={props?.link2}>
            {props?.buttonName2}
          </Link>
        </div>
      </div>
     
      </div>
    </section>
  );
};

export default CallToAction;
