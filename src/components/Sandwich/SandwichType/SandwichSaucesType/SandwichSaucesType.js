import React from "react";
import classes from "./SandwichSaucesType.module.css";
import PropTypes from "prop-types";

const SandwichSaucesType = props => {
  let Sauces = null;

  switch (props.type) {
    case "space":
      Sauces = <div className={classes.Space} />;
      break;
    case "barbecue":
      Sauces = <div className={classes.Barbecue} />;
      break;
    case "ketchup":
      Sauces = <div className={classes.Ketchup} />;
      break;

    default:
      Sauces = null;
  }
  return Sauces;
};

SandwichSaucesType.propTypes = {
  type: PropTypes.string.isRequired
};
export default SandwichSaucesType;
