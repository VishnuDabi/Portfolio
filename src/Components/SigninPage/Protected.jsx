import React, { useEffect, useState } from "react";
import { Cookies, useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const Protected = (props) => {
  const { Component } = props;
  const navigate = useNavigate();
  const [login, setLogin] = useState(false);
  const [cookie, setCookies] = useCookies("login");

  useEffect(() => {
    let login = cookie.login;
    // console.log(login);
    setLogin(login);
    if (!login) {
      navigate("/login");
    }
  }, [cookie.login]);

  return (
    <>
      {" "}
      {login ? (
        <div>
          <Component />
        </div>
      ) : null}
    </>
  );
};

export default Protected;
