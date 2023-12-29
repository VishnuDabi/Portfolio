import React, { useEffect, useState } from "react";
import "./ContactNew.css";
import { useCookies } from "react-cookie";

const ContactNew = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    massage: "",
  }); // for current data storing

  const [finalSubmitData, setFinalSubmitData] = useState([]);
  const [nameError, setNameError] = useState(""); //for errors storing
  const [emailError, setEmailError] = useState("");
  const [subjectError, setSubjectError] = useState("");
  const [massageError, setMassageError] = useState("");

  const [submit, setSubmit] = useState(false); // to render a table of form data

  // const [storageData, setStorageData] = useState(
  //   JSON.parse(localStorage.getItem("formSubmission")) || []
  // );
  const [targetIndex, setTargetIndex] = useState();
  const [editMode, setEditMode] = useState(false);
  const [cookies, setCookies] = useCookies(["formSubmissions"]);
  // const [sessionStorageData, setSessionStorageData] = useState(
  //   JSON.parse(sessionStorage.getItem("obj")) || []
  // );
  const dataHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // useEffect(() => {
  //   if (JSON.stringify(finalSubmitData) === JSON.stringify([])) {
  //     setFinalSubmitData(sessionStorageData);
  //   }
  //   sessionStorage.setItem("obj", JSON.stringify(finalSubmitData));
  // });

  //  FOR COOKIE STORAGE DATA .............

  useEffect(() => {
    const storedSubmissions = cookies.formSubmissions || [];
    setFinalSubmitData(storedSubmissions);
  }, [cookies.formSubmissions]);

  const formSubmitHandler = (e) => {
    e.preventDefault();
    var result = true;

    if (formData.name === "") {
      setNameError("Please Enter a name");
      result = false;
    } else if (formData.name.length < 4) {
      setNameError("To Short name");
      result = false;
    } else {
      setNameError("");
    }

    if (formData.email === "") {
      setEmailError("Please Enter Email");
      result = false;
    } else if (
      !formData.email
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    ) {
      setEmailError("Invalid Email Id");
      result = false;
    } else {
      setEmailError("");
    }

    if (formData.subject === "") {
      setSubjectError("Please enter a Subject");
      result = false;
    } else if (formData.subject.length < 4) {
      setSubjectError("please enter atleast 4 words");
      result = false;
    } else {
      setSubjectError("");
    }

    if (formData.massage === "") {
      setMassageError("Please enter a Massage");
      result = false;
    } else if (formData.massage.length < 4) {
      setMassageError("Please enter atleat 4 words");
      result = false;
    } else {
      setMassageError("");
    }
    if (!editMode) {
      // for submit form data
      if (result === true) {
        setSubmit(true);

        //  FOR SET COOKIE DATA ..............

        setFinalSubmitData([...finalSubmitData, formData]);
        setCookies("formSubmissions", [...finalSubmitData, formData], {
          path: "/",
        });

        //  FOR SET SESSION STORAGE DATA .............

        // setSessionStorageData([...sessionStorageData, formData]);

        //  FOR SET LOCAL STORAGE  DATA ..............

        // localStorage.setItem(
        //   "formSubmission",
        //   JSON.stringify([...storageData, formData])
        // );

        // FOR STORAGEDATA STATE VARIABLE UPDATION ...............

        // setStorageData(
        //   JSON.parse(localStorage.getItem("formSubmission")) || []
        // );

        // console.log(storageData);

        // FOR CLEARING INPUT FIELD AFTER SUBMIT

        // setFormData({
        //   name: "",
        //   email: "",
        //   subject: "",
        //   massage: "",
        // });
      }
    }
    //  else {                                                        // for edited form data
    //   storageData[targetIndex] = formData;
    //   localStorage.setItem(
    //     "formSubmission",
    //     JSON.stringify([...storageData, formData])
    //   );

    //   setEditMode(false);
    // }
  };
  // function handleDelete(item, index) {
  //   let filterData = storageData.filter((value, valueIndex) => {
  //     console.log(item.name, value.name, index, valueIndex);
  //     return valueIndex !== index;
  //   });
  //   console.log(filterData);
  //   setStorageData(filterData);
  //   localStorage.setItem("formSubmission", JSON.stringify(filterData));
  // }
  // const handleEdit = (item, index) => {
  //   storageData.forEach((v, i) => {
  //     if (i === index) {
  //       setTargetIndex(index);

  //       setFormData({
  //         name: item.name,
  //         email: item.email,
  //         subject: item.subject,
  //         massage: item.massage,
  //       });
  //       setEditMode(true);
  //     }
  //   });
  // };

  return (
    <div className="contact-container" id="contact">
      <div className="contact-inner-container">
        <div className="contact-cards-container card">
          <div className="contact-form-title">
            <h1>Hire Me.</h1>
            <p>
              I am available for freelance work. Connect with me via phone:
              <span>01923 088574</span> or email: <span>admin@example.com</span>
            </p>
            <form method="post" onSubmit={formSubmitHandler}>
              <label htmlFor="#name" placeholder=""></label>
              <input
                type="text"
                onChange={dataHandler}
                value={formData.name}
                name="name"
                id="name"
                className="input-control"
                placeholder="Your Name*"
              />
              <br />
              {nameError && <span className="error-msg">{nameError}</span>}
              <label htmlFor="#email"></label>
              <input
                type="text"
                onChange={dataHandler}
                value={formData.email}
                name="email"
                id="email"
                className="input-control"
                placeholder="Your email*"
              />
              <br />
              {emailError && <span className="error-msg">{emailError}</span>}
              <label htmlFor="subject"></label>
              <input
                type="text"
                onChange={dataHandler}
                value={formData.subject}
                name="subject"
                id="subject"
                className="input-control"
                placeholder="Write a Subject"
              />
              <br />
              {subjectError && (
                <span className="error-msg">{subjectError}</span>
              )}
              <label htmlFor="massage"></label>
              <textarea
                onChange={dataHandler}
                value={formData.massage}
                name="massage"
                id="massage"
                className="input-control"
                placeholder="Your Massage"
                rows={20}
              />
              <br />
              {massageError && (
                <span className="error-msg">{massageError}</span>
              )}
              <div className="submit-form-btn-container">
                <button className="submit-form-btn" type="submit">
                  {editMode ? "Edit Now" : "Submit"}
                </button>
              </div>
            </form>

            {/* div for local storage data on state variable */}

            {/* <div>
              {submit ? (
                <table className="form-data">
                  <thead>
                    <tr>
                      <td>Name</td>
                      <td>Email</td>
                      <td>Subject</td>
                      <td>Massage</td>
                    </tr>
                  </thead>
                  <tbody>
                    {finalSubmitData.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td>{item.name}</td>
                          <td>{item.email}</td>
                          <td>{item.subject}</td>
                          <td>{item.massage}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              ) : null}
            </div> */}

            {/* div for localstorage to save data on webpage withcrtud operation*/}

            {/* <div>
              {
                <table className="form-data">
                  <thead>
                    <tr>
                      <td>Name</td>
                      <td>Email</td>
                      <td>Subject</td>
                      <td>Massage</td>
                    </tr>
                  </thead>
                  <tbody>
                    {storageData.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td>{item.name}</td>
                          <td>{item.email}</td>
                          <td>{item.subject}</td>
                          <td>{item.massage}</td>
                          <td>
                            <button
                              onClick={() => {
                                handleDelete(item, index);
                              }}
                            >
                              Delete
                            </button>
                          </td>
                          <td>
                            <button
                              onClick={() => {
                                handleEdit(item, index);
                              }}
                            >
                              Edit
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              }
            </div> */}

            {/* div for Cookie  to save data on Web browser*/}

            {/* <div>
              <table className="form-data">
                <caption>Cookie Data</caption>
                <thead>
                  <tr>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Subject</td>
                    <td>Massage</td>
                  </tr>
                </thead>
                <tbody>
                  {finalSubmitData.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.subject}</td>
                        <td>{item.massage}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div> */}
            <div>
              {/* <table className="form-data">
                <caption>session Data</caption>
                <thead>
                  <tr>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Subject</td>
                    <td>Massage</td>
                  </tr>
                </thead>
                <tbody>
                  {sessionStorageData.map((item, index) => {
                    return (
                      <tr key={index}>  
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.subject}</td>
                        <td>{item.massage}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table> */}
            </div>
          </div>
        </div>
        <div className="contact-cards-container card contact-container-image"></div>
      </div>
    </div>
  );
};

export default ContactNew;
