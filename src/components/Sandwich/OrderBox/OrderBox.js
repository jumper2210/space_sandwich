import React from "react";
import Aux from "../../../hoc/Auxiliary";
import classes from "./OrderBox.module.css";
const OrderBox = props => {
  const BreadSummary = Object.keys(props.BreadTypes).map(btKey => {
    return (
      <li key={btKey}>
        <span>{btKey}</span>:{props.BreadTypes[btKey]}
      </li>
    );
  });
  const ingredientSummary = Object.keys(props.Ingredients).map(igKey => {
    return (
      <li key={igKey}>
        <span>{igKey}</span>:{props.Ingredients[igKey]}
      </li>
    );
  });
  const SaucesSummary = Object.keys(props.Sauces).map(suKey => {
    return (
      <li key={suKey}>
        <span>{suKey}</span>:{props.Sauces[suKey]}
      </li>
    );
  });

  return (
    <Aux>
      <p className={classes.title}>Twoje zamówienie</p>
      <p className={classes.information}>
        kosmicznie pyszna kanapka zawierająca
      </p>
      <ul className={classes.list}>{ingredientSummary}</ul>
      <ul className={classes.list}>{BreadSummary}</ul>
      <ul className={classes.list}>{SaucesSummary}</ul>
      <p className={classes.ContinuePurchasing}>Kontynujesz zakupy? </p>
      <p>
        <strong style={{ fontSize: "1.4rem" }}>
          {" "}
          Cena: {props.price.toFixed(2)}
        </strong>
      </p>
      <button className={classes.Continue} onClick={props.purchasingContinue}>
        Kontynuj
      </button>
      <button className={classes.Cancel} onClick={props.purchasingCancel}>
        Anuluj
      </button>
    </Aux>
  );
};

export default OrderBox;
