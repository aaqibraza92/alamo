import React, { useState } from "react";
import { Col, Row } from "reactstrap";
import Select from "react-select";
import axios from "axios";
import { CONTACT_FORM } from "../../helpers/apiurls";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";

const LookingForTalent = () => {
  const [therepy, settherepy] = useState("");
 const [loading, setloading] = useState(false);
  const [firstName, setfirstName] = useState("");
  const [address, setaddress] = useState("");
  const [cityState, setcityState] = useState("");
  const [phone, setphone] = useState("");
  const [email, setemail] = useState("");
  const [mesage, setmesage] = useState("");
  // const [empType, setempType] = useState("");
  const notify = (v) => toast(v);

  const onSubmitHandler = (e) => {

    const clearfeilds=()=>{
      settherepy('');
      // settitle('');
      setfirstName('');
      setaddress('');
      setcityState('');
      setphone('');
      setemail('');
      setmesage('');
      // setempType('');
    }
    const iData = new FormData();
    iData.append("informationplaceholder", mesage);
    // iData.append("Title", title);
    iData.append("First_Name", firstName);
    iData.append("House_Name", address);
    iData.append("citystate", cityState);
    iData.append("phone", phone);
    iData.append("your-email", email);
    iData.append("menu-684", therepy?.value);
    // iData.append("type", empType.value);



    const options = {
      method: "POST",
      headers: {
        // if file upload "Content-Type": "multipart/form-data",
        Accept: "application/json"
      },
    };

    setloading(true)

    axios.post(CONTACT_FORM + 109 + "/feedback", iData, options).then((res) => {
      if (res && res.status===200) {
        clearfeilds();
        notify(res?.data?.message);
        setloading(false);
      }
    });
  };

  return (
    <>
       <ToastContainer />
       <Row>
       <Col lg={4} md={4}>
        <div className="mb25">
          <input
            type="text"
            className="inputTheme w-100"
            placeholder="Full Name *"
            onChange={(e)=>setfirstName(e.target.value)} 
            value={firstName}
          />
        </div>
      </Col>

      <Col lg={4} md={4}>
        <div className="mb25">
          <input
            type="text"
            className="inputTheme w-100"
            placeholder="Contact Number *"
            onChange={(e)=> setphone(e.target.value)} 
            value={phone}
          />
        </div>
      </Col>
      <Col lg={4} md={4}>
        <div className="mb25">
          <input
            type="text"
            className="inputTheme w-100"
            placeholder="E-mail *"
            onChange={(e)=> setemail(e.target.value)} 
            value={email}
          />
        </div>
      </Col>

      <Col lg={4} md={4}>
      <div className="mb25">
          <input
            type="text"
            className="inputTheme w-100"
            placeholder="Address *"
            onChange={(e)=>setaddress(e.target.value)} 
            value={address}
          />
        </div>
    
      </Col>
      <Col lg={4} md={4}>
      <div className="mb25">
          <input
            type="text"
            className="inputTheme w-100"
            placeholder="City / State *"
            onChange={(e)=>setcityState(e.target.value)} 
            value={cityState}
          />
        </div>
    
      </Col>

      <Col lg={4} md={4}>
        <div className="mb25">
          <Select
            classNamePrefix="themeSelect"
            className="themeSelect"
            options={[
              { value: " Myers Cocktail", label: "Myers Cocktail" },
              { value: "Alamo Myers cocktail", label: "Alamo Myers cocktail" },
              { value: "Reboot", label: "Reboot" },
              { value: "Recovery & Performance", label: "Recovery & Performance" },
              { value: "Alleviate", label: "Alleviate" },
              { value: "Immunity", label: "Immunity" },
              { value: "Inner Beauty", label: "Inner Beauty" },
              { value: "Pure Hydration", label: "Pure Hydration" }

            ]}
            value={therepy}
            placeholder={<div>Choose IV therapy *</div>}
            onChange={(e) => settherepy(e)}
          />
        </div>
      </Col>
      
     

     
      <Col lg={12} md={12}>
        <div className="mb25">
          <input
            type="text"
            className="inputTheme w-100"
            placeholder="Any other information/concerns"
            onChange={(e)=> setmesage(e.target.value)} 
            value={mesage}
          />
        </div>
      </Col>

      

      <Col lg={12}>
       

        <div className="text-center">
          <button onClick={onSubmitHandler} className="  btnTheme Inria border10 bglandling fs20  letterspace1 w-50">{loading ? "Submitting..." : "Submit"}</button>
        </div>
      </Col>
    </Row>
    </>
 
  );
};

export default LookingForTalent;
