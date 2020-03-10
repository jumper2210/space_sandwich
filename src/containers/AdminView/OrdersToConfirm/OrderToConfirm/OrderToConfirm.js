import React from "react";
import classes from "./OrderToConfirm.module.css";

const OrderToConfirm = props => {
  const ingredients = [];
  const sauces = [];
  const breadTypes = [];
  const decision = [props.decision];

  for (let ingredientName in props.ingredients) {
    ingredients.push({
      name: ingredientName,
      amount: props.ingredients[ingredientName]
    });
  }

  for (let decisionName in props.decision) {
    decision.push({
      name: decisionName,
      amount: props.decision[decisionName]
    });
  }

  for (let saucesName in props.sauces) {
    sauces.push({
      name: saucesName,
      amount: props.sauces[saucesName]
    });
  }

  for (let breadTypesName in props.breadTypes) {
    breadTypes.push({
      name: breadTypesName,
      amount: props.breadTypes[breadTypesName]
    });
  }
  const ingredientOutput = ingredients.map(ig => {
    return (
      <span
        style={{
          textTransform: "capitalize",
          display: "inline-block",
          margin: "0 8px",
          border: "1px solid #ccc",
          padding: "5px"
        }}
        key={ig.name}
      >
        {ig.name} ({ig.amount})
      </span>
    );
  });
  const sauceOutput = sauces.map(su => {
    return (
      <span
        style={{
          textTransform: "capitalize",
          display: "inline-block",
          margin: "0 8px",
          border: "1px solid #ccc",
          padding: "5px"
        }}
        key={su.name}
      >
        {su.name} ({su.amount})
      </span>
    );
  });
  const breadTypeOutput = breadTypes.map(bd => {
    return (
      <span
        style={{
          textTransform: "capitalize",
          display: "inline-block",
          margin: "0 8px",
          border: "1px solid #ccc",
          padding: "5px"
        }}
        key={bd.name}
      >
        {bd.name} ({bd.amount})
      </span>
    );
  });
  /* const decisionOutput = decision.map(bd => {
    return (
      <span
        style={{
          textTransform: "capitalize",
          display: "inline-block",
          margin: "0 8px",
          border: "1px solid #ccc",
          padding: "5px"
        }}
        key={bd.name}
      >
        {bd.name} ({bd.amount})
      </span>
    );
  }); */

  console.log(decision);

  return (
    <div className={classes.OrderToConfirm}>
      <p>Skladniki: {ingredientOutput}</p>
      <p>Sosy: {sauceOutput}</p>
      <p>Pieczywko: {breadTypeOutput}</p>
      <p>
        Decyzja:{" "}
        <p
          style={{
            textTransform: "capitalize",
            display: "inline-block",
            margin: "0 8px",
            border: "1px solid #ccc",
            padding: "5px",
            fontSize: "10rem"
          }}
        >
          {decision}
        </p>
      </p>
      <button className={classes.btnConfirm}>Potwierdź</button>
    </div>
  );
};

export default OrderToConfirm;
