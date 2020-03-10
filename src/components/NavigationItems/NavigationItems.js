import React from "react";
import classes from "./NavigationItems.module.css";
import NavigationItem from "../NavigationItems/NavigationItem/NavigationItem";
const navigationItems = props => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/">Twoja kanapka</NavigationItem>
    {props.isAuthenticated && !props.isAdmin ? (
      <NavigationItem link="/orders">Zamowienia</NavigationItem>
    ) : null}
    {props.isAdmin && props.isAuthenticated ? (
      <NavigationItem link="/adminView">Panel administratora</NavigationItem>
    ) : null}
    {!props.isAuthenticated ? (
      <NavigationItem link="/auth">Zajerestruj sie!</NavigationItem>
    ) : (
      <NavigationItem link="/logout">Wyloguj</NavigationItem>
    )}
  </ul>
);

export default navigationItems;
