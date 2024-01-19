import React, { useState } from "react";
import "./alert-box.css";
const AlertBox = () => {
  const [isAlertVisible, setIsAlertVisible] = useState(true);
  setTimeout(() => {
    setIsAlertVisible(false);
  }, 3000);
  return (
    <div>
      {isAlertVisible && (
        <div className="alert-container">
          <div className="alert-inner">
            Please Register/Login to see Contain.
          </div>
        </div>
      )}
    </div>
  );
};

export default AlertBox;
