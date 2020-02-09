import React from "react";
import classes from "./BuildBreadControl.module.css";

const BuildControl = props => {
  return (
    <div className={classes.BuildControl}>
      <p className={classes.Label}>{props.label}</p>
      <button
        className={classes.Pick}
        onClick={props.clicked}
        disabled={props.tooMuchBdHandler}
      >
        Wybierz
      </button>
      <button
        className={classes.Cancel}
        disabled={props.disabledRemove}
        onClick={props.remove}
      >
        Anuluj
      </button>
    </div>
  );
};
export default BuildControl;
