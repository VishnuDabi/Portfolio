import React, { useEffect, useState } from "react";
import "./HomeNew.css";

const HomeNew = () => {
  // const [text, setText] = useState("UI/UX Designer.");
  const randomData = ["UI/UX Designer.", "JS Developer.", "Content Writter."];

  const [index, setIndex] = useState(0);
  useEffect(() => {
    if (index === randomData.length) {
      setIndex(0);
    }
    setTimeout(() => {
      setIndex(index + 1);
    }, 2000);
  }, [index, randomData.length]);

  return (
    <div className="home-container" id="home">
      <div className="home-text-container">
        <h3>WELCOME TO MY WORLD</h3>

        <p>Hi, I’m Jone Doe</p>

        <span>
          {/* {"UI/UX Designer."} */}
          {randomData[index]}
        </span>
        <h1>based in USA.</h1>
      </div>
    </div>
  );
};

export default HomeNew;
