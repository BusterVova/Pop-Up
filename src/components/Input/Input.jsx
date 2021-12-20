import React from "react";
import "./Input.scss";

const Input = (props) => {
  const classToggle = (error, salary) => {
    if (error && salary) {
      return "error input";
    }
    return "input";
  };
  const { label, errorMessage, submittedSalary, ...other } = props;
  return (
    <>
      <label className="input-label">{label}</label>
      <input
        className={classToggle(errorMessage, submittedSalary.value)}
        {...other}
      />
      {errorMessage && submittedSalary.value && (
        <div className="error-label">{errorMessage}</div>
      )}
    </>
  );
};

export default Input;
