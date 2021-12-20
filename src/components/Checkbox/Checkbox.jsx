import React, { useState } from "react";
import "./Checkbox.scss";

const Checkbox = (props) => {
  const [checked, setChecked] = useState(props.defaultValue || false);
  const { label, defaultValue, onChange, ...other } = props;

  const handleChange = () => {
    setChecked((prev) => !prev);
  };
  // useEffect(() => {
  //   onChange(checked);
  // }, [checked, onChange]);
  return (
    <label className="element_label">
      {label()}
      <input
        type="checkbox"
        onChange={handleChange}
        checked={checked}
        {...other}
      />
      <span className="checkmark"></span>
    </label>
  );
};

export default Checkbox;
