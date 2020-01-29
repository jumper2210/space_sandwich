import React from "react";
import Aux from "../../../hoc/Auxiliary/Auxiliary";
import classes from "./OrderBox.module.css";

const OrderBox = props => {
  const BreadSummary = Object.keys(props.BreadTypes).map(btKey => {
    return (
      <li key={btKey}>
        {btKey}:{props.BreadTypes[btKey]}
      </li>
    );
  });
  const ingredientSummary = Object.keys(props.Ingredients).map(igKey => {
    return (
      <li key={igKey}>
        {igKey}:{props.Ingredients[igKey]}
      </li>
    );
  });
  const SaucesSummary = Object.keys(props.Sauces).map(suKey => {
    return (
      <li key={suKey}>
        {suKey}:{props.Sauces[suKey]}
      </li>
    );
  });

  return (
    <Aux>
      <p className={classes.title}>Twoje zamówienie</p>

      <ul className={classes.list}>{ingredientSummary}</ul>
      <ul className={classes.list}>{BreadSummary}</ul>
      <ul className={classes.list}>{SaucesSummary}</ul>
      <p className={classes.ContinuePurchasing}>Kontynujesz zakupy? </p>
      <p>
        <strong className={classes.Price}>
          Cena: {props.price.toFixed(2)}
        </strong>
      </p>
      <button className={classes.next} onClick={props.purchasingContinue}>
        Kontynuj
      </button>
      <button className={classes.previous} onClick={props.purchasingCancel}>
        Anuluj
      </button>
    </Aux>
  );
};

export default OrderBox;
