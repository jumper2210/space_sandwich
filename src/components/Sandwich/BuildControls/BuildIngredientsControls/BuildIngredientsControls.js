import React from "react";
import classes from "../BulidControls.module.css";
import BuildIngredientsControl from "./BuildIngredientsControl/BuildIngredientsControl";
const controls = [
  { label: "mięso", type: "meat" },
  { label: "ser", type: "cheese" },
  { label: "sałata", type: "salad" },
  { label: "bekon", type: "bacon" },
];

const BuildIngredientsControls = (props) => (
  <div className={classes.BuildControls}>
    <p className={classes.Price}>Aktualna cena: {props.price.toFixed(2)}</p>
    {controls.map((ctrl) => (
      <BuildIngredientsControl
        key={ctrl.label}
        label={ctrl.label}
        clicked={() => {
          props.IngredientsTypeAdded(ctrl.type);
        }}
        remove={() => {
          props.IngredientsTypeRemove(ctrl.type);
        }}
        disabledRemove={props.disabledRemove[ctrl.type]}
      />
    ))}
    <div className={classes.btnContainer}>
      <button
        className={classes.KeepAdding}
        disabled={!props.moveOn}
        onClick={props.keepAdding}
      >
        wybór sosów
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
export default BuildIngredientsControls;
