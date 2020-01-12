import React from "react";
import Aux from "../../hoc/Auxiliary";
import Toolbar from "../Toolbar/Toolbar";

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
