import React, { useEffect, useState } from "react";
import "./Button.scss";

const Button = ({
  fullWidth = false,
  size = "small",
  color = "primary",
  variant = "text",
  className,
  children,
  onClick,
}) => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    const classesList = [size, variant, color].map((item) => "button-" + item);

    if (fullWidth) {
      classesList.push("button-full");
    }

    if (className) {
      classesList.push(className);
    }
    classesList.push("button");
    setClasses(classesList);
  }, [size, variant, color, fullWidth, className]);

  return (
    <button className={classes.join(" ")} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
