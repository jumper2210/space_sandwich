import React from "react";
import Aux from "../../hoc/Auxiliary/Auxiliary";
import Toolbar from "../Toolbar/Toolbar";
import { connect } from "react-redux";
import "./Layout.css";
const Layout = props => {
  return (
    <Aux>
      <Toolbar />
      <main className="Content">{props.children}</main>
    </Aux>
  );
};

export default Layout;
