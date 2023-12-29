import React, { useEffect, useState } from "react";
import "../SigninPage/signinPage.css";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

import { Visibility, VisibilityOff } from "@mui/icons-material";

const Login = () => {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [emailErr, setEmailErr] = useState("");
  const [pwdErr, setpwdErr] = useState("");
  const [cookie, setCookies] = useCookies(["login"]);
  const [receivedData, setRecceivedData] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const data = cookie.submission || [];
    setRecceivedData(data);
    // console.log(receivedData);
  }, [cookie.submission]);
  useEffect(() => {
    let login = cookie.login;
    if (login) {
      navigate("/home");
    }
  }, [cookie.login]);
  const loginDataHandler = (event) => {
    setLoginData({ ...loginData, [event.target.name]: event.target.value });
  };
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const loginHandler = (event) => {
    event.preventDefault();
    if (loginData.email === "") {
      setEmailErr("Please Enter your Email Id");
      return;
    } else {
      setEmailErr("");
    }

    if (loginData.password === "") {
      setpwdErr("please enter your password");
      return;
    } else {
      setpwdErr("");
    }
    if (JSON.stringify(receivedData) === JSON.stringify([])) {
      alert("Your Data not Find. Please Go to Registration Page");
      setpwdErr("You Dont't Have an Account, Please Sign up first...");
      setEmailErr("You Dont't Have an Account, Please Sign up first...");
    } else {
      receivedData.forEach((item) => {
        let count = 0;
        if (
          item.email === loginData.email &&
          item.password === loginData.password
        ) {
          setCookies("login", "true");
          count++;
        }
        if (!count) {
          setpwdErr("invalid Password...");
          setEmailErr("invalid Email...");
        }
      });
    }
  };
  return (
    <div className="main-container ">
      <div className="signin-container">
        <header className="header">
          Tech Company <button>Our Social Media</button>
        </header>

        <form className="one">
          <p className="head">Login Please</p>
        </form>

        <form className="two" action="#">
          <label className="label" htmlFor="email">
            Your email
          </label>{" "}
          <br />
          <input
            className="input-field"
            id="email"
            value={loginData.email}
            name="email"
            onChange={loginDataHandler}
            placeholder="Enter a valid email here"
          />
          <br />
          {emailErr && <span className="error-msg">{emailErr}</span>} <br />
          <label className="label" htmlFor="password">
            Password:
          </label>
          <br />
          <div className="show-pwd-container">
            <input
              className="input-field"
              onChange={loginDataHandler}
              type={showPassword ? "text" : "password"}
              name="password"
              value={loginData.password}
              id="password"
              placeholder="Enter your password"
            />
            {/* <br /> */}
            <i className="password-toggle" onClick={handleClickShowPassword}>
              {" "}
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </i>
          </div>
          {pwdErr && <span className="error-msg">{pwdErr}</span>}
          <br /> <br />
          <div className=" login-btn-container">
            <Link to="/login">
              <input
                type="submit"
                onClick={loginHandler}
                value="LOGIN"
                className="login-btn"
              ></input>
            </Link>
            <Link to="/signin">
              <button className="btn">Don't have Account? Sign Up</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
