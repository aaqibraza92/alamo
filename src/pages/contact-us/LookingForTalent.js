import React, { useState } from "react";
import { Col, Row } from "reactstrap";
import Select from "react-select";
import axios from "axios";
import { CONTACT_FORM } from "../../helpers/apiurls";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const LookingForTalent = () => {
  const navigate = useNavigate();
  const [loading, setloading] = useState(false);
  const [therepy, settherepy] = useState("");
  const [firstName, setfirstName] = useState("");
  const [address, setaddress] = useState("");
  const [cityState, setcityState] = useState("");
  const [phone, setphone] = useState("");
  const [email, setemail] = useState("");
  const [mesage, setmesage] = useState("");
  const notify = (v) => toast(v);

  const [validations, setValidations] = React.useState({
    therepy: "",
    firstName: "",
    address: "",
    cityState: "",
    phone: "",
    email: "",
  });

  const clearVal=()=>{
    setValidations({...validations,
      therepy: "",
      firstName: "",
      address: "",
      cityState: "",
      phone: "",
      email: "",
    })
  }
  const clearfeilds = () => {
    settherepy("");
    setfirstName("");
    setaddress("");
    setcityState("");
    setphone("");
    setemail("");
    setmesage("");
  };
  const validateAll = () => {
    const validations = {
      therepy: "",
      firstName: "",
      address: "",
      cityState: "",
      phone: "",
      email: "",
    };
    let isValid = true;

    if (!firstName) {
      validations.firstName = "Full Name is required";
      isValid = false;
    }
    if (!address) {
      validations.address = "Address is required";
      isValid = false;
    }

    if (!email) {
      validations.email = "Email is required";
      isValid = false;
    }

    if (email && !/\S+@\S+\.\S+/.test(email)) {
      validations.email = "Email format must be as example@mail.com";
      isValid = false;
    }
    if (!phone) {
      validations.phone = "Phone number is required";
      isValid = false;
    }
    if (!cityState) {
      validations.cityState = "City/State is required";
      isValid = false;
    }
    if (!therepy?.value) {
      validations.therepy = "IV Therepy is required";
      isValid = false;
    }


    if (!isValid) {
      setValidations(validations);
    }

    return isValid;
  };

  const onSubmitHandler = (e) => {
    const isValid = validateAll();
    if (!isValid) {
      return false;
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

    const options = {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
    };

    setloading(true);

    axios.post(CONTACT_FORM + 125 + "/feedback", iData, options).then((res) => {
      if (res && res.status === 200) {
        clearfeilds();
        notify(res?.data?.message);
        setloading(false);
        clearVal()
        navigate("/thank-you");
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
              onChange={(e) => setfirstName(e.target.value)}
              value={firstName}
              name="firstName"
            />
            {validations?.firstName && (
              <div className="validation">
                {validations?.firstName.replace("_", " ")}
              </div>
            )}
          </div>
        </Col>

        <Col lg={4} md={4}>
          <div className="mb25">
            <input
              type="text"
              className="inputTheme w-100"
              placeholder="Contact Number *"
              onChange={(e) => setphone(e.target.value)}
              value={phone}
              name="phone"
            />

            {validations?.phone && (
              <div className="validation">
                {validations?.phone.replace("_", " ")}
              </div>
            )}
          </div>
        </Col>
        <Col lg={4} md={4}>
          <div className="mb25">
            <input
              type="text"
              className="inputTheme w-100"
              placeholder="E-mail *"
              onChange={(e) => setemail(e.target.value)}
              value={email}
              name="email"
            />
               {validations?.email && (
              <div className="validation">
                {validations?.email.replace("_", " ")}
              </div>
            )}
          </div>
        </Col>

        <Col lg={4} md={4}>
          <div className="mb25">
            <input
              type="text"
              className="inputTheme w-100"
              placeholder="Address *"
              onChange={(e) => setaddress(e.target.value)}
              value={address}
            />
                 {validations?.address && (
              <div className="validation">
                {validations?.address.replace("_", " ")}
              </div>
            )}
          </div>
        </Col>
        <Col lg={4} md={4}>
          <div className="mb25">
            <input
              type="text"
              className="inputTheme w-100"
              placeholder="City / State *"
              onChange={(e) => setcityState(e.target.value)}
              value={cityState}
              name="cityState"
            />
                   {validations?.cityState && (
              <div className="validation">
                {validations?.cityState.replace("_", " ")}
              </div>
            )}
          </div>
        </Col>

        <Col lg={4} md={4}>
          <div className="mb25">
            <Select
              classNamePrefix="themeSelect"
              className="themeSelect"
              options={[
                { value: " Myers Cocktail", label: "Myers Cocktail" },
                {
                  value: "Alamo Myers cocktail",
                  label: "Alamo Myers cocktail",
                },
                { value: "Reboot", label: "Reboot" },
                {
                  value: "Recovery & Performance",
                  label: "Recovery & Performance",
                },
                { value: "Alleviate", label: "Alleviate" },
                { value: "Immunity", label: "Immunity" },
                { value: "Inner Beauty", label: "Inner Beauty" },
                { value: "Pure Hydration", label: "Pure Hydration" },
              ]}
              value={therepy}
              placeholder={<div>Choose IV therapy *</div>}
              onChange={(e) => settherepy(e)}
              name="therepy"
            />
                     {validations?.therepy && (
              <div className="validation">
                {validations?.therepy.replace("_", " ")}
              </div>
            )}
          </div>
        </Col>

        <Col lg={12} md={12}>
          <div className="mb25">
            <input
              type="text"
              className="inputTheme w-100"
              placeholder="Any other information/concerns"
              onChange={(e) => setmesage(e.target.value)}
              value={mesage}
            />
            
          </div>
        </Col>
                 
        <Col lg={12}>
          <div className="text-center">
            <button
              onClick={onSubmitHandler}
              className="  btnTheme Inria border10 bglandling fs20  letterspace1 w-50"
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default LookingForTalent;
