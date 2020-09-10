import React, { useState } from "react";
import classes from "./BuildBreadControls.module.css";
import BuildBreadControl from "../../BuildControls/BuildBreadControls/BuildBreadControl/BuildBreadControl";

const controls = [
  { label: "pszenne", type: "wheat" },
  { label: "pełnoziarniste", type: "wholeGrains" },
  { label: "bez glutenu", type: "noGluten" },
];

const BuildBreadControls = (props) => {
  const [isBreadPicked, setIsBreadPicked] = useState(false);

  return (
    <div className={classes.BuildBreadControls}>
      <p className={classes.Price}>Aktualna cena: {props.price.toFixed(2)}</p>
      {controls.map((ctrl) => (
        <BuildBreadControl
          key={ctrl.label}
          label={ctrl.label}
          clicked={() => {
            props.BreadTypeAdded(ctrl.type);
            setIsBreadPicked(true);
          }}
          remove={() => {
            props.BreadTypeRemove(ctrl.type);
            setIsBreadPicked(false);
          }}
          disabledRemove={props.disabledRemove[ctrl.type]}
          disabledAdding={isBreadPicked}
        />
      ))}

      <button
        className={classes.KeepAdding}
        disabled={!props.purchasable}
        onClick={props.keepAdding}
      >
        Wybór składników
      </button>
    </div>
  );
};

export default BuildBreadControls;
