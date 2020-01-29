import React from "react";
import classes from "./BuildBreadControls.module.css";
import BuildBreadControl from "../../BuildControls/BuildBreadControls/BuildBreadControl/BuildBreadControl";

const controls = [
  { label: "pszenne", type: "Wheat" },
  { label: "pełnoziarniste", type: "wholeGrains" },
  { label: "bez glutenu", type: "NoGluten" }
];

const BuildControls = props => (
  <div className={classes.BuildControls}>
    <p className={classes.Price}>Aktualna cena: {props.price.toFixed(2)}</p>

    {controls.map(ctrl => (
      <BuildBreadControl
        key={ctrl.label}
        label={ctrl.label}
        clicked={() => props.BreadTypeAdded(ctrl.type)}
        remove={() => props.BreadTypeRemove(ctrl.type)}
        disabledBdRemoveHandler={props.disabledBdRemoveHandler[ctrl.type]}
        disabledBdAddInfoHandler={props.disabledBdAddInfoHandler[ctrl.type]}
      />
    ))}
    <button
      className={classes.KeepAdding}
      disabled={!props.moveOn}
      onClick={props.keepAdding}
    >
      Wybór składników
    </button>
  </div>
);
export default BuildControls;
