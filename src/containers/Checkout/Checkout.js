import React, { Component } from "react";
import { Route } from "react-router-dom";
import Summary from "../../components/Sandwich/OrderBox/Summary/Summary";
import Contact from "./Contact/Contact";
class Checkout extends Component {
  state = {
    BreadTypes: {
      wholeGrains: 0,
      Wheat: 0,
      NoGluten: 0
    },
    Ingredients: {
      Meat: 0,
      Cheese: 0,
      Salad: 0,
      Bacon: 0
    },
    Sauces: {
      Space: 0,
      Barbecue: 0,
      Ketchup: 0
    }
  };
  checkoutCancelledHandler = () => {
    this.props.history.goBack();
  };

  checkoutContinuedHandler = () => {
    this.props.history.replace("/checkout/contact");
  };
  render() {
    return (
      <div>
        <Summary
          BreadTypes={this.state.BreadTypes}
          Ingredients={this.state.Ingredients}
          Sauces={this.state.Sauces}
          checkoutCancelled={this.checkoutCancelledHandler}
          checkoutContinued={this.checkoutContinuedHandler}
        />
        <Route
          path={this.props.match.path + "/contact"}
          render={props => (
            <Contact
              Ingredients={this.state.Ingredients}
              BreadTypes={this.state.BreadTypes}
              Sauces={this.state.Sauces}
              price={this.state.totalPrice}
              {...props}
            />
          )}
        />
      </div>
    );
  }
}

export default Checkout;
