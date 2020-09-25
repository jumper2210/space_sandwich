import React from "react";
import classes from "./Order.module.css";

const order = (props) => {
  const ingredients = [];
  const sauces = [];
  const breadTypes = [];

  for (let ingredientName in props.ingredients) {
    ingredients.push({
      name: ingredientName,
      amount: props.ingredients[ingredientName],
    });
  }

  for (let saucesName in props.sauces) {
    sauces.push({
      name: saucesName,
      amount: props.sauces[saucesName],
    });
  }

  for (let breadTypesName in props.breadTypes) {
    breadTypes.push({
      name: breadTypesName,
      amount: props.breadTypes[breadTypesName],
    });
  }
  const ingredientOutput = ingredients.map((ig) => {
    return (
      <span
        style={{
          textTransform: "capitalize",
          display: "inline-block",
          margin: "0 8px",
          border: "1px solid #ccc",
          padding: "5px",
        }}
        key={ig.name}
      >
        {ig.name} ({ig.amount})
      </span>
    );
  });
  const sauceOutput = sauces.map((su) => {
    return (
      <span
        style={{
          textTransform: "capitalize",
          display: "inline-block",
          margin: "0 8px",
          border: "1px solid #ccc",
          padding: "5px",
        }}
        key={su.name}
      >
        {su.name} ({su.amount})
      </span>
    );
  });
  const breadTypeOutput = breadTypes.map((bd) => {
    return (
      <span
        style={{
          textTransform: "capitalize",
          display: "inline-block",
          margin: "0 8px",
          border: "1px solid #ccc",
          padding: "5px",
        }}
        key={bd.name}
      >
        {bd.name} ({bd.amount})
      </span>
    );
  });

  return (
    <div className={classes.Order}>
      <p>Skladniki: {ingredientOutput}</p>
      <p>Sosy: {sauceOutput}</p>
      <p>Pieczywko: {breadTypeOutput}</p>
    </div>
  );
};

export default order;
