import React from "react";
import classes from "./MyButton.module.css";

const MyButtonDel = ({ children, ...props }) => {
  return (
    <button {...props} className={classes.btn__delete}>
      {children}
    </button>
  );
};

export default MyButtonDel;
