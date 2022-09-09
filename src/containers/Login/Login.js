import React from "react";
import LoginPanelLeft from "./LoginPanelLeft";
import LoginPanelRight from "./LoginPanelRight";
import "./login.css";
const Login = () => {
  return (
    <div className="login-container">
      <LoginPanelLeft />
      <LoginPanelRight />
    </div>
  );
};

export default Login;
