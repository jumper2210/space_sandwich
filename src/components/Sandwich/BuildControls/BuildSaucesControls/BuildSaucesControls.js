import React from "react";
import classes from "../BulidControls.module.css";
import BuildSaucesControl from "./BuildSaucesControl.js/BuildSaucesControl";
const controls = [
  { label: "Kosmiczny", type: "space" },
  { label: "Barbecue", type: "barbecue" },
  { label: "ketchup", type: "ketchup" },
];

const BuildSaucesControls = (props) => (
  <div className={classes.BuildControls}>
    <p className={classes.Price}>Aktualna cena: {props.price.toFixed(2)}</p>
    {controls.map((ctrl) => (
      <BuildSaucesControl
        key={ctrl.label}
        label={ctrl.label}
        clicked={() => {
          props.SauceTypeAdded(ctrl.type);
        }}
        remove={() => {
          props.SauceTypeRemove(ctrl.type);
        }}
        disabledSu={props.disabledSuRemove[ctrl.type]}
      />
    ))}
    <div className={classes.btnContainer}>
      <button className={classes.KeepAdding} onClick={props.ordered}>
        Zamów
      </button>
      <button
        className={classes.ComeBackBtn}
        onClick={props.previousStepHandler}
      >
        Wróć
      </button>
    </div>
  </div>
);
export default BuildSaucesControls;
