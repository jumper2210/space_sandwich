import React from "react";
import Aux from "../../hoc/Auxiliary/Auxiliary";
import Toolbar from "../Toolbar/Toolbar";
import { connect } from "react-redux";
import "./Layout.css";
const Layout = props => {
  return (
    <Aux>
      <Toolbar isAuth={props.isAuthenticated} />
      <main className="Content">{props.children}</main>
    </Aux>
  );
};
const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};
export default connect(mapStateToProps)(Layout);
