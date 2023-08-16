import React, { useState } from "react";
import { Col, Form, Row } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { CONTACT_FORM } from "../../helpers/apiurls";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const LookingForJob = () => {
  const [firstName, setfirstName] = useState("");
  const [lname, setlname] = useState("");
  const [company, setcompany] = useState("");
  const [phone, setphone] = useState("");
  const [email, setemail] = useState("");
  const [location, setlocation] = useState("");
  const [insuranceName, setinsuranceName] = useState("");
  const [holderName, setholderName] = useState("");
  const [dob, setdob] = useState("");
  const [policyNumber, setpolicyNumber] = useState("");
  const [policyEmployer, setpolicyEmployer] = useState("");

  const [mesage, setmesage] = useState("");
  const [jobType, setjobType] = useState("");
  const [resume, setresume] = useState("");
  const [fileName, setfileName] = useState("");
  const notify = (v) => toast(v);

  console.log();

  const uploadHandle = (e) => {
    setresume(e.target.files[0]);
    setfileName(e.target.files[0].name);
  };

  const clearfeilds = () => {
    setfirstName("");
    setlname("");
    setcompany("");
    setphone("");
    setemail("");
    setmesage("");
    setjobType("");
    setresume("");
  };
  const [validations, setValidations] = React.useState({
    first_name: "",
    lname: "",
    company: "",
    phone: "",
    email: "",
    mesage: "",
    jobType: "",
    resume: "",
  });
  const validateAll = () => {
    const validations = {
      first_name: "",
      lname: "",
      company: "",
      phone: "",
      email: "",
      mesage: "",
      jobType: "",
      resume: "",
    };
    let isValid = true;

    if (!firstName) {
      validations.first_name = "First name is required";
      isValid = false;
    }
    if (!lname) {
      validations.lname = "Last name is required";
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
      validations.phone = "Phone is required";
      isValid = false;
    }
    if (!mesage) {
      validations.mesage = "Mesage is required";
      isValid = false;
    }
    if (!jobType) {
      validations.jobType = "Job Type is required";
      isValid = false;
    }
    if (!resume) {
      validations.resume = "Please upload resume, Pdf or image format";
      isValid = false;
    }
    if (!isValid) {
      setValidations(validations);
    }

    return isValid;
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const isValid = validateAll();
    if (!isValid) {
      return false;
    }

    const iData = new FormData();
    iData.append("FirstName", firstName);
    iData.append("LastName", lname);
    iData.append("company", company);
    iData.append("phone", phone);
    iData.append("email", email);
    iData.append("mesage", mesage);
    iData.append("job_type", jobType.value);
    iData.append("file-65", resume);

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
        Accept: "application/json",
      },
    };

    axios.post(CONTACT_FORM + 8 + "/feedback", iData, options).then((res) => {
      if (res && res.status === 200) {
        clearfeilds();
        notify(res?.data?.message);
      }
    });
  };

  return (
    <>
      <ToastContainer />
      <Form onSubmit={onSubmitHandler}>
        <Row>
          <Col lg={4} md={4}>
            <div className="mb25">
              <input
                type="text"
                className="inputTheme w-100"
                placeholder="First Name *"
                onChange={(e) => setfirstName(e.target.value)}
                value={firstName}
                name="first_name"
              />
              {validations?.first_name && (
                <div className="validation">
                  {validations?.first_name.replace("_", " ")}
                </div>
              )}
            </div>
          </Col>
          <Col lg={4} md={4}>
            <div className="mb25">
              <input
                type="text"
                className="inputTheme w-100"
                placeholder="Last Name *"
                onChange={(e) => setlname(e.target.value)}
                value={lname}
                name="lname"
              />
              {validations?.lname && (
                <div className="validation">
                  {validations?.lname.replace("_", " ")}
                </div>
              )}
            </div>
          </Col>
          <Col lg={4} md={4}>
            <div className="mb25">
              <input
                type="text"
                className="inputTheme w-100"
                placeholder="Phone Number *"
                onChange={(e) => setphone(e.target.value)}
                value={phone}
                name="lname"
              />
              {validations?.phone && (
                <div className="validation">
                  {validations?.phone.replace("_", " ")}
                </div>
              )}
            </div>
          </Col>
          <Col lg={6} md={6}>
            <div className="mb25">
              <input
                type="text"
                className="inputTheme w-100"
                placeholder="E-mail *"
                onChange={(e) => setemail(e.target.value)}
                value={email}
                name="lname"
              />
              {validations?.email && (
                <div className="validation">
                  {validations?.email.replace("_", " ")}
                </div>
              )}
            </div>
          </Col>
          <Col lg={6} md={6}>
            <div className="mb25">
              <input
                type="text"
                className="inputTheme w-100"
                placeholder="Geo location"
                onChange={(e) => setlocation(e.target.value)}
                value={location}
                name="lname"
              />
              {validations?.location && (
                <div className="validation">
                  {validations?.location.replace("_", " ")}
                </div>
              )}
            </div>
          </Col>
          <Col lg={12} md={4} className="formborder mb-3">
            <div className="border-bottom bCenter"></div>
            <div className="boxSub text-center">
              <h3 className="colorGreen fw600 mb-0">Insurance details</h3>
            </div>
          </Col>
          <Col lg={4} md={4}>
            <div className="mb25">
              <input
                type="text"
                className="inputTheme w-100"
                placeholder="Primary Insurance Name*"
                onChange={(e) => setinsuranceName(e.target.value)}
                value={insuranceName}
                name="insuranceName"
              />
              {validations?.insuranceName && (
                <div className="validation">
                  {validations?.insuranceName.replace("_", " ")}
                </div>
              )}
            </div>
          </Col>
          <Col lg={4} md={4}>
            <div className="mb25">
              <input
                type="text"
                className="inputTheme w-100"
                placeholder="Policy holder’s Name*"
                onChange={(e) => setholderName(e.target.value)}
                value={holderName}
                name="holderName"
              />
              {validations?.holderName && (
                <div className="validation">
                  {validations?.holderName.replace("_", " ")}
                </div>
              )}
            </div>
          </Col>
          <Col lg={4} md={4}>
            <div className="mb25">
              <DatePicker
                selected={dob}
                onChange={(dob) => setdob(dob)}
                dateFormat="yyyy-M-dd"
                className="inputTheme w-100"
                name="dob"
                locale="es"
                minDate={new Date()}
                placeholderText="Policy holder’s DOB*"
              />

              {validations?.dob && (
                <div className="validation">
                  {validations?.dob.replace("_", " ")}
                </div>
              )}
            </div>
          </Col>
          <Col lg={4} md={4}>
            <div className="mb25">
              <input
                type="text"
                className="inputTheme w-100"
                placeholder="Policy holder’s SS#*"
                onChange={(e) => setpolicyNumber(e.target.value)}
                value={policyNumber}
                name="lname"
              />
              {validations?.policyNumber && (
                <div className="validation">
                  {validations?.policyNumber.replace("_", " ")}
                </div>
              )}
            </div>
          </Col>
          <Col lg={4} md={4}>
            <div className="mb25">
              <input
                type="text"
                className="inputTheme w-100"
                placeholder="Policy holder’s Employer"
                onChange={(e) => setpolicyEmployer(e.target.value)}
                value={policyEmployer}
                name="policyEmployer"
              />
              {validations?.policyEmployer && (
                <div className="validation">
                  {validations?.policyEmployer.replace("_", " ")}
                </div>
              )}
            </div>
          </Col>

          <Col lg={11}>
            <div className="d-flex mb15">
              <input
                type="checkbox"
                id="term1"
                name="term1"
                value="I hereby assign all medical and/or in-office
                    surgical/procedure benefits to include major medical
                    benefits to which I am entitled, including Medicare, private
                    insurance, and other health plans to Alamo Primary Care."
              />
              <div>
                <label for="term1">
                  {" "}
                  <p className="fs14 colorBlue ml10 mb0">
                    I hereby assign all medical and/or in-office
                    surgical/procedure benefits to include major medical
                    benefits to which I am entitled, including Medicare, private
                    insurance, and other health plans to Alamo Primary Care.
                  </p>
                </label>
              </div>
            </div>

            <div className="d-flex">
              <input
                type="checkbox"
                id="term2"
                name="term2"
                value="This assignment is valid as an original. I understand that I am
              financially responsible for all charges whether or not paid by
              insurance. I hereby authorize said assignee to release all
              information to secure payment."
              />
              <div>
                <label for="term2">
                  {" "}
                  <p className="fs14 colorBlue ml10 mb0">
                    This assignment is valid as an original. I understand that I
                    am financially responsible for all charges whether or not
                    paid by insurance. I hereby authorize said assignee to
                    release all information to secure payment.
                  </p>
                </label>
              </div>
            </div>
            <p className="fs14 colorBlue text-center"></p>
          </Col>

          <Col lg={12}>
            <div className="mt30 d-flex justify-content-center">
              <div></div>
              <button
                type="submit"
                className="noBtn fs25 fw700 bgBlue btnTheme w-50"
              >
                Submit Now
              </button>
            </div>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default LookingForJob;
