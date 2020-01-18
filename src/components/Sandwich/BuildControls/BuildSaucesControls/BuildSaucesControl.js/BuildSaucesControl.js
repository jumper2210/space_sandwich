import React from "react";
import classes from "./BuildSaucesControl.module.css";

const BuildSauceControl = props => {
  return (
    <div className={classes.BuildSaucesControl}>
      <p className={classes.Label}>{props.label}</p>
      <button className={classes.Pick} onClick={props.clicked}>
        Więcej
      </button>
      <button
        className={classes.Cancel}
        onClick={props.remove}
        disabled={props.disabledSuRemoveHandler}
      >
        Mniej
      </button>
    </div>
  );
};
export default BuildSauceControl;
