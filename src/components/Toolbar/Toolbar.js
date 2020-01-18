import React from "react";
import classes from "./Toolbar.module.css";
import NavigationItems from "../../components/NavigationItems/NavigationItems";
const Toolbar = () => {
  return (
    <span className={classes.Content}>
      <NavigationItems />
    </span>
  );
};
export default Toolbar;
