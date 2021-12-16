import React from "react";
import "./Input.scss";

const Input = (props) => {
  const classToggle = (error) => {
    if (error) {
      return "error input";
    }
    return "input";
  };
  const { label, errorMessage, ...other } = props;
  return (
    <>
      <label className="input-label">{label}</label>
      <input className={classToggle(errorMessage)} {...other} />
      {errorMessage && <div className="error-label">{errorMessage}</div>}
    </>
  );
};

export default Input;
