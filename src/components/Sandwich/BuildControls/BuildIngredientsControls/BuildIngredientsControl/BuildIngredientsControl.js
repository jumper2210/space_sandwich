import React from "react";
import classes from "../../BuildControl.module.css";

const BuildIngredientsControl = (props) => {
  return (
    <div className={classes.BuildControl}>
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
