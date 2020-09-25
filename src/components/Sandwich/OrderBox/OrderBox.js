import React from "react";
import Aux from "../../../hoc/Auxiliary/Auxiliary";
import classes from "./OrderBox.module.css";

const OrderBox = (props) => {
  const BreadSummary = Object.keys(props.breadTypes).map((btKey) => {
    return (
      <li key={btKey}>
        {btKey}:{props.breadTypes[btKey]}
      </li>
    );
  });
  const ingredientSummary = Object.keys(props.ingredients).map((igKey) => {
    return (
      <li key={igKey}>
        {igKey}:{props.ingredients[igKey]}
      </li>
    );
  });
  const SaucesSummary = Object.keys(props.sauces).map((suKey) => {
    return (
      <li key={suKey}>
        {suKey}:{props.sauces[suKey]}
      </li>
    );
  });

  return (
    <Aux>
      <p className={classes.title}>Twoje zamówienie</p>
      <div className={classes.ListContainer}>
        <ul className={classes.list}>{ingredientSummary}</ul>
        <ul className={classes.list}>{BreadSummary}</ul>
        <ul className={classes.list}>{SaucesSummary}</ul>
      </div>
      <p className={classes.ContinuePurchasing}>Kontynujesz zakupy? </p>
      <p>
        <strong className={classes.Price}>
          Cena: {props.price.toFixed(2)}
        </strong>
      </p>
      <div className={classes.BtnContainer}>
        <button className={classes.next} onClick={props.purchasingContinue}>
          Kontynuj
        </button>
        <button className={classes.previous} onClick={props.purchasingCancel}>
          Anuluj
        </button>
      </div>
    </Aux>
  );
};

export default OrderBox;
