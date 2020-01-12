import React from "react";
import classes from "./SandwichBreadType.module.css";
import PropTypes from "prop-types";
const SandwichBreadType = props => {
  let BreadType = null;

  switch (props.type) {
    case "wholeGrains":
      BreadType = (
        <div className={classes.breadTopWholeGrains}>
          <div className={classes.seeds}></div>
          <div className={classes.seeds2}></div>
          <div className={classes.breadBottomWholeGrains}></div>
        </div>
      );
      break;
    case "Wheat":
      BreadType = (
        <div className={classes.breadTopWheat}>
          <div className={classes.breadBottomWheat}></div>
        </div>
      );
      break;
    case "NoGluten":
      BreadType = (
        <div className={classes.breadTopNoGluten}>
          <div className={classes.seam}></div>
          <div className={classes.seam2}></div>
          <div className={classes.seam3}></div>
          <div className={classes.breadBottomNoGluten}></div>
        </div>
      );
      break;
    default:
      BreadType = null;
  }
  return BreadType;
};

SandwichBreadType.propTypes = {
  type: PropTypes.string.isRequired
};
export default SandwichBreadType;
