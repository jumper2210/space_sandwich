import React from "react";
import classes from "./SandwichCheck.module.css";
import SandwichBreadType from "../SandwichType/SandwichBreadType/SandwichBreadType";
import SandwichIngredientsType from "../SandwichType/SandwichIngredientsType/SandwichIngredientsType";
import SandwichSaucesType from "../SandwichType/SandwichSaucesType/SandwichSaucesType";
const SandwichCheck = (props) => {
  let transformedIngredientsType = Object.keys(props.ingredients)

    .map((igKey) => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <SandwichIngredientsType key={igKey + i} type={igKey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);
  let transformedSaucesType = Object.keys(props.sauces)
    .map((suKey) => {
      return [...Array(props.sauces[suKey])].map((_, i) => {
        return <SandwichSaucesType key={suKey + i} type={suKey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

  let transformedBreadType = Object.keys(props.breadTypes)

    .map((btKey) => {
      return [...Array(props.breadTypes[btKey])].map((_, i) => {
        return <SandwichBreadType key={btKey + i} type={btKey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

  if (transformedBreadType.length === 0) {
    transformedBreadType = (
      <p className={classes.Information}>na jakie pieczywko masz ochotę ?</p>
    );
  }

  return (
    <div className={classes.Sandwich}>
      {transformedBreadType}
      {transformedIngredientsType}
      {transformedSaucesType}
    </div>
  );
};
export default SandwichCheck;
