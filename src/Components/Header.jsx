import React, { useEffect, useState } from "react";
import "./Header.css";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-scroll";
import { useCookies } from "react-cookie";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import AlertBox from "./alertBox/AlertBox";

const Header = () => {
  const [hideShowToggle, setHideShowToggle] = useState(false);
  const [navbar, setnavbar] = useState(false);
  const [activeNavLink, setActiveNavLink] = useState("Home");
  const [cookies, setCookies] = useCookies(["login"]);
  const [login, setLogin] = useState(cookies.log || false);
  const navigate = useNavigate();
  useEffect(() => {
    let data = cookies.login;
    setLogin(data);
    // console.log(data);
  });
  const menuToggleHandler = (e) => {
    setHideShowToggle(!hideShowToggle);
    // console.log(hideShowToggle);
  };
  const activeNavLinkHandler = (e) => {
    setActiveNavLink(e.target.innerHTML);
    // console.log(e.target.innerHTML);
  };
  const changeBackgroundHandler = () => {
    if (window.scrollY >= 100) {
      setnavbar(true);
    } else setnavbar(false);
  };
  window.addEventListener("scroll", changeBackgroundHandler);

  const Logout = () => {
    setCookies("login", "false");
    setLogin(false);
    navigate("/login");
  };
  return (
    <>
      <div
        className={
          navbar
            ? " active  header__main__container "
            : "header__main__container "
        }
      >
        <div className="right-side-container">
          <div>
            <img
              className="logo"
              src="https://trydo.rainbowit.net/assets/images/logo/logo-symbol-dark.png"
              alt="logo "
            />
          </div>
          <div className="nav-links-container">
            <ul className="nav_links">
              <Link
                activeClass="active-btn-color"
                spy
                smooth={true}
                to="home"
                style={{ textDecoration: "none" }}
                onClick={activeNavLinkHandler}
              >
                <li
                  className={
                    activeNavLink === "Home"
                      ? "nav__item "
                      : "nav__item color-white"
                  }
                >
                  <span>Home</span>
                </li>
              </Link>

              <Link
                activeClass="active-btn-color"
                spy
                smooth={true}
                to="about"
                style={{ textDecoration: "none", color: "white" }}
                onClick={activeNavLinkHandler}
              >
                <li
                  className={
                    activeNavLink === "About"
                      ? "nav__item"
                      : "nav__item color-white"
                  }
                >
                  <span>About</span>
                </li>
              </Link>
              <Link
                activeClass="active-btn-color"
                spy
                smooth={true}
                to="service"
                style={{ textDecoration: "none" }}
                onClick={activeNavLinkHandler}
              >
                <li
                  className={
                    activeNavLink === "Service"
                      ? "nav__item"
                      : "nav__item color-white"
                  }
                >
                  <span>Service</span>
                </li>
              </Link>
              <Link
                activeClass="active-btn-color"
                spy
                smooth={true}
                to="portfolio"
                style={{ textDecoration: "none" }}
                onClick={activeNavLinkHandler}
              >
                <li
                  className={
                    activeNavLink === "Portfolio"
                      ? "nav__item"
                      : "nav__item color-white"
                  }
                >
                  <span>Portfolio</span>
                </li>
              </Link>
              <Link
                activeClass="active-btn-color"
                spy
                smooth={true}
                to="blog"
                style={{ textDecoration: "none" }}
                onClick={activeNavLinkHandler}
              >
                <li
                  className={
                    activeNavLink === "Blog"
                      ? "nav__item"
                      : "nav__item color-white"
                  }
                >
                  <span>Blog</span>
                </li>
              </Link>
              <Link
                activeClass="active-btn-color"
                spy
                smooth={true}
                to="contact"
                style={{ textDecoration: "none" }}
                onClick={activeNavLinkHandler}
              >
                <li
                  className={
                    activeNavLink === "Contact"
                      ? "nav__item"
                      : "nav__item color-white"
                  }
                >
                  <span>Contact</span>
                </li>
              </Link>
            </ul>
          </div>
        </div>

        <div className="left-side-container">
          <div className="social__logo">
            <i>
              <FacebookOutlinedIcon
                fontSize="small"
                className="logo-hover-effect"
              />
            </i>
            <i>
              <LinkedInIcon fontSize="small" className="logo-hover-effect" />
            </i>
            <i>
              <InstagramIcon fontSize="small" className="logo-hover-effect" />
            </i>
            <i>
              <TwitterIcon fontSize="small" className="logo-hover-effect" />
            </i>
          </div>
          {/* <div className="buy-btn-container">
            <button className="buy__btn">Buy Now</button>
          </div> */}
          <div className="menu-icon-container">
            {hideShowToggle ? null : (
              <i className="menu-icon" onClick={menuToggleHandler}>
                <MenuRoundedIcon fontSize="large" />
              </i>
            )}
          </div>
          <i className="login-out-icon">
            {/* <LoginIcon /> */}
            {login ? (
              <button className="buy__btn" onClick={Logout}>
                Logout
                {/* <LogoutIcon
                  sx={{ color: "white" }}
                  titleAccess="Logout"
                  onClick={Logout}
                /> */}
              </button>
            ) : (
              <RouterLink to="/login">
                <button className="buy__btn">
                  {/* <LoginIcon sx={{ color: "white" }} titleAccess="Login" /> */}
                  Login
                </button>
              </RouterLink>
            )}
          </i>
        </div>
        <div className={hideShowToggle ? "not-menu-bar" : "menu-bar"}>
          <div className="button-close">
            <i className="menu-icon" onClick={menuToggleHandler}>
              <CloseRoundedIcon fontSize="large" />
            </i>
          </div>
          <div className="menu-toogle-data-container">
            <ul className="nav_links toggle-menu-items">
              <Link
                activeClass="active-btn-color"
                spy
                smooth={true}
                to="home"
                style={{ textDecoration: "none" }}
                onClick={activeNavLinkHandler}
              >
                <li
                  className={
                    activeNavLink === "Home"
                      ? "nav__item toggle-item"
                      : "nav__item color-white toggle-item"
                  }
                >
                  <span>Home</span>
                </li>
              </Link>

              <Link
                activeClass="active-btn-color"
                spy
                smooth={true}
                to="about"
                style={{ textDecoration: "none", color: "white" }}
                onClick={activeNavLinkHandler}
              >
                <li
                  className={
                    activeNavLink === "About"
                      ? "nav__item  toggle-item"
                      : "nav__item color-white toggle-item"
                  }
                >
                  <span>About</span>
                </li>
              </Link>
              <Link
                activeClass="active-btn-color"
                spy
                smooth={true}
                to="service"
                style={{ textDecoration: "none" }}
                onClick={activeNavLinkHandler}
              >
                <li
                  className={
                    activeNavLink === "Service"
                      ? "nav__item toggle-item"
                      : "nav__item color-white toggle-item"
                  }
                >
                  <span>Service</span>
                </li>
              </Link>
              <Link
                activeClass="active-btn-color"
                spy
                smooth={true}
                to="portfolio"
                style={{ textDecoration: "none" }}
                onClick={activeNavLinkHandler}
              >
                <li
                  className={
                    activeNavLink === "Portfolio"
                      ? "nav__item toggle-item"
                      : "nav__item color-white toggle-item"
                  }
                >
                  <span>Portfolio</span>
                </li>
              </Link>
              <Link
                activeClass="active-btn-color"
                spy
                smooth={true}
                to="blog"
                style={{ textDecoration: "none" }}
                onClick={activeNavLinkHandler}
              >
                <li
                  className={
                    activeNavLink === "Blog"
                      ? "nav__item toggle-item"
                      : "nav__item color-white toggle-item"
                  }
                >
                  <span>Blog</span>
                </li>
              </Link>
              <Link
                activeClass="active-btn-color"
                spy
                smooth={true}
                to="contact"
                style={{ textDecoration: "none" }}
                onClick={activeNavLinkHandler}
              >
                <li
                  className={
                    activeNavLink === "Contact"
                      ? "nav__item toggle-item"
                      : "nav__item color-white toggle-item"
                  }
                >
                  <span>Contact</span>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
      {login ? null : <AlertBox />}
    </>
  );
};

export default Header;
