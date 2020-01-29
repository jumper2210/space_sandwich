import React, { Component } from "react";
import Layout from "./components/Layout/Layout";
import "./App.css";
import SandwichBuilder from "./containers/SandwichBuilder/SandwichBuilder";
import Checkout from "./containers/Checkout/Checkout";
import Authentication from "./containers/Authentication/Authentication";
import { Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/checkout" component={Checkout} />
            <Route path="/auth" component={Authentication} />
            <Route path="/" exact component={SandwichBuilder} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
