import React from "react";
import classes from "./OrderToConfirm.module.css";
import axios from "axios";
import withErrorHandler from "../../../../hoc/withErrorHandler/withErrorHandler";
import * as actions from "../../../../store/actions/index";
import { connect } from "react-redux";
const OrderToConfirm = props => {
  const ingredients = [];
  const sauces = [];
  const breadTypes = [];

  localStorage.setItem("dec", props.decision);
  const decision = localStorage.getItem("dec");

  for (let ingredientName in props.ingredients) {
    ingredients.push({
      name: ingredientName,
      amount: props.ingredients[ingredientName]
    });
  }

  for (let saucesName in props.sauces) {
    sauces.push({
      name: saucesName,
      amount: props.sauces[saucesName]
    });
  }

  for (let breadTypesName in props.breadTypes) {
    breadTypes.push({
      name: breadTypesName,
      amount: props.breadTypes[breadTypesName]
    });
  }
  const ingredientOutput = ingredients.map(ig => {
    return (
      <span
        style={{
          textTransform: "capitalize",
          display: "inline-block",
          margin: "0 6px",
          border: "1px solid #ccc",
          padding: "4px",
          fontSize: "1.3rem",
          color: "rgb(241, 139, 4)"
        }}
        key={ig.name}
      >
        {ig.name} ({ig.amount})
      </span>
    );
  });
  const sauceOutput = sauces.map(su => {
    return (
      <span
        style={{
          textTransform: "capitalize",
          display: "inline-block",
          margin: "0 6px",
          border: "1px solid #ccc",
          padding: "4px",
          fontSize: "1.3rem",
          color: "rgb(241, 139, 4)"
        }}
        key={su.name}
      >
        {su.name} ({su.amount})
      </span>
    );
  });

  const breadTypeOutput = breadTypes.map(bd => {
    return (
      <span
        style={{
          textTransform: "capitalize",
          display: "inline-block",
          margin: "0 6px",
          border: "1px solid #ccc",
          padding: "4px",
          fontSize: "1.3rem",
          color: "rgb(241, 139, 4)"
        }}
        key={bd.name}
      >
        {bd.name} ({bd.amount})
      </span>
    );
  });

  return (
    <div className={classes.OrderToConfirm}>
      <p>Skladniki: {ingredientOutput}</p>
      <p>Sosy: {sauceOutput}</p>
      <p>Pieczywko: {breadTypeOutput}</p>
      <p>
        Decyzja:{" "}
        <p
          style={{
            textTransform: "capitalize",
            display: "inline-block",
            margin: "0 8px",
            border: "1px solid #ccc",
            padding: "5px",
            fontSize: "2rem",
            color: "rgb(241, 139, 4)"
          }}
        >
          {decision}
        </p>
      </p>
      <button
        className={classes.btnConfirm}
        onClick={() => {
          const order = {
            ingredients: props.ingredients,
            userId: props.userId,
            id: props.orderKey
          };
          props.onAdminOrder(order, props.token);
        }}
      >
        Potwierdź
      </button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    orderConfirmed: state.order.ordersForAdmin,
    loading: state.order.loading,
    token: state.auth.token,
    userId: state.auth.userId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAdminOrder: (orderData, token) =>
      dispatch(actions.confirmOrder(orderData, token))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(OrderToConfirm, axios));
