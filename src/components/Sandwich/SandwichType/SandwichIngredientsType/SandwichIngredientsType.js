import React from "react";
import classes from "./SandwichIngredientsType.module.css";
import PropTypes from "prop-types";

const SandwichIngredientsType = props => {
  let Ingredients = null;

  switch (props.type) {
    case "meat":
      Ingredients = <div className={classes.Meat} />;
      break;
    case "cheese":
      Ingredients = <div className={classes.Cheese} />;
      break;
    case "salad":
      Ingredients = <div className={classes.Salad} />;
      break;
    case "bacon":
      Ingredients = <div className={classes.Bacon} />;
      break;
    default:
      Ingredients = null;
  }
  return Ingredients;
};

SandwichIngredientsType.propTypes = {
  type: PropTypes.string.isRequired
};
export default SandwichIngredientsType;
