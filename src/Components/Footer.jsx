import React from "react";
import "./Footer.css";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-container-right">
        <a href="https://trydo.rainbowit.net/home-one">
          <img
            className="footer-logo"
            src="https://trydo.rainbowit.net/assets/images/logo/logo.png"
            alt=""
          />
        </a>
      </div>
      <div className="footer-container-middle">
        <div className="footer-icons">
          <a href="https://www.facebook.com/">
            <i>
              <FacebookRoundedIcon
                className="footer-logo-hover-effect"
                sx={{ fontSize: "40px" }}
              />
            </i>
          </a>

          <a href="https://www.linkedin.com/">
            <i>
              <LinkedInIcon
                sx={{ fontSize: "40px" }}
                className="footer-logo-hover-effect"
              />
            </i>
          </a>
          <a href="https://www.instagram.com/">
            <i>
              <InstagramIcon
                sx={{ fontSize: "40px" }}
                className="footer-logo-hover-effect"
              />
            </i>
          </a>

          <a href="https://twitter.com/">
            <i>
              <TwitterIcon
                sx={{ fontSize: "40px" }}
                className="footer-logo-hover-effect"
              />
            </i>
          </a>
        </div>
      </div>
      <div className="footer-container-left">
        Copyright © 2022 Rainbow-Themes. All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
