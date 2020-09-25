import React from "react";
import Summary from "../../components/Sandwich/OrderBox/Summary/Summary";
import { connect } from "react-redux";

const Checkout = (props) => {
  const checkoutCancelledHandler = () => {
    props.history.goBack();
  };

  const checkoutContinuedHandler = () => {
    props.history.push("/contact");
  };

  return (
    <React.Fragment>
      <Summary
        breadTypes={props.breadTypes}
        ingredients={props.ingredients}
        sauces={props.sauces}
        checkoutCancelled={checkoutCancelledHandler}
        checkoutContinued={checkoutContinuedHandler}
      />
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    ingredients: state.sandwichBuilder.ingredients,
    breadTypes: state.sandwichBuilder.breadTypes,
    sauces: state.sandwichBuilder.sauces,
    price: state.sandwichBuilder.totalPrice,
    purchased: state.order.purchased,
  };
};
export default connect(mapStateToProps)(Checkout);
