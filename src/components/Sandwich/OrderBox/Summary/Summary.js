import React from "react";
import SandwichCheck from "../../../Sandwich/SandwichCheck/SandwichCheck";
import Button from "../../../UI/Button/Button";
import classes from "./Summary.module.css";

const checkoutSummary = (props) => {
  return (
    <div className={classes.CheckoutSummary}>
      <div className={classes.Sandwich}>
        <SandwichCheck
          breadTypes={props.breadTypes}
          ingredients={props.ingredients}
          sauces={props.sauces}
        />
      </div>
      <div className={classes.btnContainer}>
        <Button btnType="Success" clicked={props.checkoutContinued}>
          Kontynuj
        </Button>
        <Button btnType="Danger" clicked={props.checkoutCancelled}>
          Anuluj
        </Button>
      </div>
    </div>
  );
};

export default checkoutSummary;
