
// import Auth from "../Auth/Auth";
// import AuthHelper from "../Auth/AuthHelper";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
// import { loginInformation } from "../../store/authentication/tokenInfo/actions";
import HomePage from "../../pages/home";
import Header from "../../components/header";
import Footer from "../../components/footer";
import PageNotFound from "../../pages/404";
import AboutUs from "../../pages/about";
import WhatWeDoPage from "../../pages/What-we-do";
import OurTeam from "../../pages/OurTeam";
import SingleTeam from "../../pages/OurTeam/SingleTeam";
import PreclinicalScientific from "../../pages/home/services/PreclinicalScientific";
import ContactUs from "../../pages/contact-us";
import Blogs from "../../pages/blogs";
// import CoreValues from "../../pages/Core-values";
import ClinicalOperations from "../../pages/home/services/ClinicalOperations";
import Biometrics from "../../pages/home/services/Biometrics";
import RegulatoryAffairs from "../../pages/home/services/RegulatoryAffairs";
import DrugSafetyPV from "../../pages/home/services/DrugSafetyPV";
import MedicalAffairs from "../../pages/home/services/MedicalAffairs";
import QualityCompliance from "../../pages/home/services/QualityCompliance";
import Validation from "../../pages/home/services/Validation";
import Weightlossprogram from "../../pages/weightloss-program";
import BlogSingle from "../../pages/blogs/BlogSingle";
import BlogCategory from "../../pages/Category";
import PrivacyPolicy from "../../pages/privacyPolicy";
import Service from "../../pages/services";
import Thankyou from "../../pages/thank-you";
import Blog from "../../pages/blogs";
import Ivtherapy from "../../pages/iv-therapy";

const GetRoute = ({ isprivate: isPrivate, page: Page, ...rest }) => {

  const location= useLocation();
  var LoggedIn = false;
  // if (Auth.isUserLoggedIn()) {
  //   LoggedIn = true;
  // }
  if (isPrivate && !LoggedIn) {
   // return <Navigate to="/" />;
  } else {
    return (
      <>
        {!rest.hideHeaderFooter && (
          <Header />
        
        )}
        <div className="contentWrapper">
          <Page {...rest} />
        </div>
        {!rest.hideHeaderFooter && (
          <Footer footer={rest.footer || false} />
        )}
      </>
    );
  }
};

let RouterList = [

  {
    element: <GetRoute isprivate={false} role="Default" page={HomePage} />,
    path: "/",
    isAdmin: false,
  },
  {
    element: <GetRoute isprivate={false} role="Default" page={AboutUs} />,
    path: "/about-us",
    isAdmin: false,
  },
  {
    element: <GetRoute isprivate={false} role="Default" page={WhatWeDoPage} />,
    path: "/what-we-do",
    isAdmin: false,
  },
  {
    element: <GetRoute isprivate={false} role="Default" page={Thankyou} />,
    path: "/thank-you",
    isAdmin: false,
  },
  {
    element: <GetRoute isprivate={false} role="Default" page={OurTeam} />,
    path: "/our-team",
    isAdmin: false,
  },
  {
    element: <GetRoute isprivate={false} role="Default" page={SingleTeam} />,
    path: "/team/:slug",
    isAdmin: false,
  },
  {
    element: <GetRoute isprivate={false} role="Default" page={Blog} />,
    path: "/blog",
    isAdmin: false,
  },
  {
    element: <GetRoute isprivate={false} role="Default" page={BlogSingle} />,
    path: "/blog/:slug/",
    isAdmin: false,
  },
  {
    element: <GetRoute isprivate={false} role="Default" page={BlogCategory} />,
    path: "/category/:name/",
    isAdmin: false,
  },
  {
    element: <GetRoute isprivate={false} role="Default" page={Ivtherapy} />,
    path: "/iv-therapy",
    isAdmin: false,
  },
  {
    element: <GetRoute isprivate={false} role="Default" page={Weightlossprogram} />,
    path: "/weightloss-program",
    isAdmin: false,
  },
  {
    element: <GetRoute isprivate={false} role="Default" page={Biometrics} />,
    path: "/biometrics",
    isAdmin: false,
  },
  {
    element: <GetRoute isprivate={false} role="Default" page={RegulatoryAffairs} />,
    path: "/regulatory-affairs",
    isAdmin: false,
  },
  {
    element: <GetRoute isprivate={false} role="Default" page={DrugSafetyPV} />,
    path: "/drug-safety-pv",
    isAdmin: false,
  },
  {
    element: <GetRoute isprivate={false} role="Default" page={MedicalAffairs} />,
    path: "/medical-affairs",
    isAdmin: false,
  },
  {
    element: <GetRoute isprivate={false} role="Default" page={QualityCompliance} />,
    path: "/quality-compliance",
    isAdmin: false,
  },
  {
    element: <GetRoute isprivate={false} role="Default" page={Validation} />,
    path: "/validation",
    isAdmin: false,
  },
  {
    element: <GetRoute isprivate={false} role="Default" page={ContactUs} />,
    path: "/contact-us",
    isAdmin: false,
  },
  
 
  {
    element: <GetRoute isprivate={false} role="Default" page={PrivacyPolicy} />,
    path: "/privacy-policy",
    isAdmin: false,
  },
  {
    element: <GetRoute isprivate={false} role="Default" page={Service} />,
    path: "/services",
    isAdmin: false,
  },


  {
    element: (
      <GetRoute isprivate={false} role="Default" page={PageNotFound} hideHeaderFooter={true} />
    ),
    path: "*",
    isAdmin: false,
    
  },
  
];

export default RouterList;
