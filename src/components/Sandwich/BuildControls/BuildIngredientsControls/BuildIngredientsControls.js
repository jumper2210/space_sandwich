import React from "react";
import classes from "./BuildIngredientsControls.module.css";
import BuildIngredientsControl from "./BuildIngredientsControl/BuildIngredientsControl";
const controls = [
  { label: "mięso", type: "Meat" },
  { label: "ser", type: "Cheese" },
  { label: "sałata", type: "Salad" },
  { label: "bekon", type: "Bacon" }
];

const BuildIngredientsControls = props => (
  <div className={classes.BuildIngredientsControls}>
    <p className={classes.Price}>
      Aktualna cena: <strong>{props.price.toFixed(2)}</strong>
    </p>
    {controls.map(ctrl => (
      <BuildIngredientsControl
        key={ctrl.label}
        label={ctrl.label}
        clicked={() => {
          props.IngredientsTypeAdded(ctrl.type);
        }}
        remove={() => {
          props.IngredientsTypeRemove(ctrl.type);
        }}
        disabledIgRemoveHandler={props.disabledIgRemoveHandler[ctrl.type]}
      />
    ))}
    <button
      className={classes.KeepAddingIngredients}
      disabled={!props.moveOn}
      onClick={props.keepAdding}
    >
      wybór sosów
    </button>
    <button className={classes.ComeBack} onClick={props.previousStepHandler}>
      Wróć
    </button>
  </div>
);
export default BuildIngredientsControls;
