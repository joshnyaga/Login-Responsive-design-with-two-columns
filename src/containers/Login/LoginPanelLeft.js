import React, { useState } from "react";
import "./login.css";
import logo from "../../images/Frame.png";
import google from "../../images/Google.png";
import Input from "../../components/input/Input";
const LoginPanelLeft = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [deleteInput, setDeleteInput] = useState(false);
  return (
    <div className="column-left">
      <div className="logo">
        <img src={logo} alt="" />
        <div className="slogan">PNFT Market</div>
      </div>
      <div className="login-wrapper">
        <div className="headline">NFT Access</div>
        <div className="text-1 tagline-header">
          Please fill your detail to access your account.
        </div>
        <div className="form">
          {deleteInput ? (
            <Input
              label="Email"
              type="email"
              placeHolder="
"
            />
          ) : (
            <Input
              label="Email"
              type="email"
              placeHolder="debra.hot@example.com
"
            />
          )}
          {showPassword ? (
            <Input
              label="Password"
              type="text"
              placeHolder="password
"
              icon="https://www.svgrepo.com/show/318363/show.svg"
              setShowPassword={setShowPassword}
            />
          ) : (
            <Input
              label="Password"
              type="password"
              placeHolder="password
"
              icon="https://www.svgrepo.com/show/84030/hide.svg"
              setShowPassword={setShowPassword}
            />
          )}
          <div className="form-options">
            <div className="checkbox">
              <input type="checkbox" />
              <label className="text-2">Remember me</label>
            </div>
            <div className="text-2 forgot-password">Forgot Password?</div>
          </div>
          <button className="btn btn-primary">Sign in</button>
          <button className="btn social">
            <span>
              <img src={google} alt="" /> Sign in with Google
            </span>
          </button>
          <div className="tagline-account">
            Don’t have an account? <span>Sign up</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPanelLeft;
