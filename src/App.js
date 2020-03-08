import React, { useEffect, Suspense } from "react";
import Layout from "./components/Layout/Layout";
import "./App.css";
import SandwichBuilder from "./containers/SandwichBuilder/SandwichBuilder";
import { connect } from "react-redux";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import Logout from "./containers/Authentication/Logout/Logout";
import * as actions from "./store/actions/index";

const AdminView = React.lazy(() => {
  return import("./containers/AdminView/AdminView");
});

const Checkout = React.lazy(() => {
  return import("./containers/Checkout/Checkout");
});

const Orders = React.lazy(() => {
  return import("./containers/Orders/Orders");
});

const Authentication = React.lazy(() => {
  return import("./containers/Authentication/Authentication");
});

const App = props => {
  useEffect(() => {
    props.onTryAutoSignup();
  }, []);
  let routes = (
    <Switch>
      <Route path="/auth" render={props => <Authentication {...props} />} />
      <Route path="/" component={SandwichBuilder} />
      <Redirect to="/" />
    </Switch>
  );
  if (props.isAuthenticated) {
    routes = (
      <Switch>
        <Route path="/adminView" render={props => <AdminView {...props} />} />
        <Route path="/checkout" render={props => <Checkout {...props} />} />
        <Route path="/orders" render={props => <Orders {...props} />} />
        <Route path="/logout" component={Logout} />
        <Route path="/auth" render={props => <Authentication {...props} />} />
        <Route path="/" exact component={SandwichBuilder} />
        <Redirect to="/" />
      </Switch>
    );
  }

  return (
    <div>
      <Layout>
        <Suspense fallback={<p>Loading...</p>}>{routes}</Suspense>
      </Layout>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
