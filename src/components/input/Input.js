import React, { useState } from "react";
import "./input.css";
import PropTypes from "prop-types";
const Input = ({
  type,
  label,
  placeHolder,
  icon,
  setShowPassword,
  setDelete,
}) => {
  const [pass, setPass] = useState(false);
  return (
    <div className="form-group">
      <label className="text-2">{label}</label>
      <div className="form-input">
        <input type={type} placeholder={placeHolder} />
        <img
          onClick={() => {
            setShowPassword(!pass);
            setPass(!pass);
          }}
          src={icon}
          alt=""
        />
      </div>
    </div>
  );
};
Input.prototype = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeHolder: PropTypes.string.isRequired,
  icon: PropTypes.string,
  setShowPassword: PropTypes.func,
  setDelete: PropTypes.func,
};
Input.defaultProps = {
  setShowPassword: null,
  setDelete: null,
  icon: "",
};
export default Input;
