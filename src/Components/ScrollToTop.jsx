import React, { useState } from "react";
import "./ScrollToTop.css";

import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { animateScroll } from "react-scroll";
const ScrollToTop = () => {
  const [scrollView, SetScrollView] = useState(false);
  const scrollTopHandler = () => {
    animateScroll.scrollToTop();
  };
  const scrollChangeHandler = () => {
    if (window.scrollY >= 800) {
      SetScrollView(true);
    } else SetScrollView(false);
  };
  window.addEventListener("scroll", scrollChangeHandler);
  return (
    <>
      {scrollView ? (
        <KeyboardArrowUpIcon
          fontSize="large"
          titleAccess="Back To Top"
          className="scroll-to-top"
          onClick={scrollTopHandler}
        />
      ) : null}
    </>
  );
};

export default ScrollToTop;
