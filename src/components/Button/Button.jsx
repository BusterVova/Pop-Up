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
  add,
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
    if (add) {
      classesList.push("button-add");
    }

    setClasses(classesList);
  }, [size, variant, color, fullWidth, className, add]);

  return (
    <button className={classes.join(" ")} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
