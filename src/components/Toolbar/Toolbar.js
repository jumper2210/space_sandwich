import React from "react";
import classes from "./Toolbar.module.css";
import NavigationItems from "../../components/NavigationItems/NavigationItems";
const Toolbar = props => {
  return (
    <span className={classes.Content}>
      <NavigationItems />
    </span>
  );
};
export default Toolbar;
