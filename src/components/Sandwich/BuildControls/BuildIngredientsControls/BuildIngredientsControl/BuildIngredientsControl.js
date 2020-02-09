import React from "react";
import classes from "./BuildIngredientsControl.module.css";

const BuildIngredientsControl = props => {
  return (
    <div className={classes.BuildIngredientsControl}>
      <p className={classes.Label}>{props.label}</p>
      <button className={classes.Pick} onClick={props.clicked}>
        Więcej
      </button>
      <button
        className={classes.Cancel}
        onClick={props.remove}
        disabled={props.disabledRemove}
      >
        Mniej
      </button>
    </div>
  );
};
export default BuildIngredientsControl;
