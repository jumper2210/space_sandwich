import React from "react";
import classes from "./BuildBreadControl.module.css";

const BuildControl = props => {
  return (
    <div className={classes.BuildControl}>
      <p className={classes.Label}>{props.label}</p>
      <button
        className={classes.Pick}
        onClick={props.clicked}
        disabled={props.disabledBdAddInfoHandler}
      >
        Wybierz
      </button>
      <button
        className={classes.Cancel}
        disabled={props.disabledBdRemoveHandler}
        onClick={props.remove}
      >
        Anuluj
      </button>
    </div>
  );
};
export default BuildControl;
