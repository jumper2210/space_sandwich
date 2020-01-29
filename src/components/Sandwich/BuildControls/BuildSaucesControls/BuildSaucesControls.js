import React from "react";
import classes from "./BuildSaucesControls.module.css";
import BuildSaucesControl from "./BuildSaucesControl.js/BuildSaucesControl";
const controls = [
  { label: "Kosmiczny", type: "Space" },
  { label: "Barbecue", type: "Barbecue" },
  { label: "ketchup", type: "Ketchup" }
];

const BuildSaucesControls = props => (
  <div className={classes.BuildSaucesControls}>
    <p className={classes.Price}>Aktualna cena: {props.price.toFixed(2)}</p>
    {controls.map(ctrl => (
      <BuildSaucesControl
        key={ctrl.label}
        label={ctrl.label}
        clicked={() => {
          props.SaucesTypeAdded(ctrl.type);
        }}
        remove={() => {
          props.SaucesTypeRemove(ctrl.type);
        }}
        disabledSuRemoveHandler={props.disabledSuRemoveHandler[ctrl.type]}
      />
    ))}
    <button className={classes.KeepAddingSauces} onClick={props.ordered}>
      Zamów
    </button>
    <button className={classes.ComeBack} onClick={props.previousStepHandler}>
      Wróć
    </button>
  </div>
);
export default BuildSaucesControls;
