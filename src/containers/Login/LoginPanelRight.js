import React from "react";
import image from "../../images/DRIP_20.png";
import "./login.css";
const LoginPanelRight = () => {
  return (
    <div className="column-right">
      <div className="image-container">
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default LoginPanelRight;
