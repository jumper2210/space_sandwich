import React from "react";

import SandwichCheck from "../../../Sandwich/SandwichCheck/SandwichCheck";
import Button from "../../../UI/Button/Button";
import classes from "./Summary.module.css";

const checkoutSummary = props => {
  return (
    <div className={classes.CheckoutSummary}>
      <h1>We hope it tastes well!</h1>
      <div className={classes.Sandwich}>
        <SandwichCheck
          breadTypes={props.breadTypes}
          ingredients={props.ingredients}
          sauces={props.sauces}
        />
      </div>
      <Button btnType="Danger" clicked={props.checkoutCancelled}>
        Anuluj
      </Button>
      <Button btnType="Success" clicked={props.checkoutContinued}>
        Kontynuj
      </Button>
    </div>
  );
};

export default checkoutSummary;
