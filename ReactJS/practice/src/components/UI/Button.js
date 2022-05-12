import React from "react";
import classes from "./Button.module.css";

export const Button = (props) => {
  return (
    <button className={classes.button} type={props.type || "button"}>
      {props.children}
    </button>
  );
};
