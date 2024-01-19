import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import "./signinPage.css";
import { Link } from "react-router-dom";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
const SigninPage = () => {
  const [cookie, setCookies] = useCookies(["submission"]);
  const [signinToken, setSigninToken] = useState([]);
  const [showPassword, setShowPassword] = useState(false);
  const [nameErr, setNameErr] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const [confirmPasswordErr, setConfirmPasswordErr] = useState("");
  // const [result, setResult] = useState(true);

  const [userData, setUserData] = useState({
    name: "",
    lastName: "",
    contact: "",
    email: "",
    confirmPassword: "",
    password: "",
  });
  useEffect(() => {
    const data = cookie.submission || [];
    // console.log(data);
    setSigninToken(data);
  }, [cookie.submission]);
  const onChangeHandler = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleSignIn = (event) => {
    event.preventDefault();
    let result = true;
    if (userData.name === "") {
      setNameErr("please enter your Name");
      result = false;
    } else {
      setNameErr("");
    }
    if (userData.email === "") {
      setEmailErr("please enter your Email Id");
      result = false;
    } else {
      setEmailErr("");
    }

    if (userData.password === "") {
      setPasswordErr("please enter password");
      result = false;
    } else {
      setPasswordErr("");
    }
    if (userData.confirmPassword === "") {
      setConfirmPasswordErr("please Confirm Your Password");
      result = false;
    } else {
      setConfirmPasswordErr("");
      if (userData.password !== userData.confirmPassword) {
        alert("Confirm Password not Matched");
        result = false;
      }
    }

    if (result) {
      setSigninToken([...signinToken, userData]);
      setCookies("submission", [...signinToken, userData], {
        path: "/",
      });
      alert("Sign up Succesfully. please Login below");
    }
  };

  return (
    <div className="main-container">
      <div className="signin-container">
        <header className="header">
          Tech Company <button>Our Social Media</button>
        </header>

        <form className="one">
          <p className="head">Sign Up!</p>
        </form>

        <form className="two" action="#">
          <label className="label" htmlFor="name">
            Name*:
          </label>
          <br />
          <input
            className="input-field"
            onChange={onChangeHandler}
            type="text"
            name="name"
            id="name"
            value={userData.name}
            placeholder="Enter your Name*"
          />
          <br />
          {nameErr && <span className="error-msg">{nameErr}</span>} <br />
          <label className="label" htmlFor="lastName">
            Last Name:
          </label>
          <br />
          <input
            className="input-field"
            onChange={onChangeHandler}
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Enter your Last Name"
            value={userData.lastName}
          />
          <br />
          <label className="label" htmlFor="contact">
            Contact No.:
          </label>
          <br />
          <input
            className="input-field"
            onChange={onChangeHandler}
            type="number"
            name="contact"
            id="contact"
            value={userData.contact}
            placeholder="Enter your Contact Number"
          />
          <br />
          <label className="label" htmlFor="email">
            Your email*
          </label>
          <br />
          <input
            className="input-field"
            onChange={onChangeHandler}
            type="email"
            name="email"
            value={userData.email}
            id="email"
            placeholder="Enter a valid email here*"
          />
          <br />
          {emailErr && <span className="error-msg">{emailErr}</span>} <br />
          <label className="label" htmlFor="password">
            Password*:
          </label>
          <br />
          <div className="show-pwd-container">
            <input
              className="input-field"
              onChange={onChangeHandler}
              type={showPassword ? "text" : "password"}
              name="password"
              value={userData.password}
              id="password"
              placeholder="Enter your password*"
            />
            {/* <br /> */}
            <i
              className="
            password-toggle"
              onClick={handleClickShowPassword}
            >
              {" "}
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </i>
          </div>
          {passwordErr && <span className="error-msg">{passwordErr}</span>}
          <br />
          <label className="label" htmlFor="confirmPassword">
            Confirm Password*:
          </label>
          <br />
          <input
            className="input-field"
            onChange={onChangeHandler}
            type="text"
            name="confirmPassword"
            id="confirmPassword"
            value={userData.confirmPassword}
            placeholder="Enter Confirm Password*"
          />
          <br />
          {confirmPasswordErr && (
            <span className="error-msg">{confirmPasswordErr}</span>
          )}
          <br />
          <div className="btn-conatiner">
            <input
              type="submit"
              value="SIGN UP"
              onClick={handleSignIn}
              className="btn"
            ></input>
            <Link to="/login">
              <button className="btn">already have an account? </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SigninPage;
