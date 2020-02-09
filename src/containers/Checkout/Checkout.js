import React, { Component } from "react";
import { Route } from "react-router-dom";
import Summary from "../../components/Sandwich/OrderBox/Summary/Summary";
import Contact from "./Contact/Contact";
import { connect } from "react-redux";

class Checkout extends Component {
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
          breadTypes={this.props.breadTypes}
          ingredients={this.props.ingredients}
          sauces={this.props.sauces}
          checkoutCancelled={this.checkoutCancelledHandler}
          checkoutContinued={this.checkoutContinuedHandler}
        />
        <Route
          path={this.props.match.path + "/contact"}
          render={props => (
            <Contact
              ingredients={this.props.ingredients}
              breadTypes={this.props.breadTypes}
              sauces={this.props.sauces}
              price={this.props.price}
              {...props}
            />
          )}
        />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    ingredients: state.sandwichBuilder.ingredients,
    breadTypes: state.sandwichBuilder.breadTypes,
    sauces: state.sandwichBuilder.sauces,
    price: state.sandwichBuilder.totalPrice
  };
};
export default connect(mapStateToProps)(Checkout);
