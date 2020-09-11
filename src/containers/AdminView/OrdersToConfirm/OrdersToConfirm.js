import React, { useEffect } from "react";
import axios from "axios";
import withErrorHandler from "../../../hoc/withErrorHandler/withErrorHandler";
import * as actions from "../../../store/actions/index";
import Spinner from "../../../components/UI/Spinner/Spinner";
import OrderToConfirm from "./OrderToConfirm/OrderToConfirm";
import { connect } from "react-redux";

const OrdersToConfirm = (props) => {
  const { onFetchOrders, token } = props;

  useEffect(() => {
    onFetchOrders(token);
  }, [onFetchOrders, token]);

  let orders = <Spinner />;
  if (!props.loading && props.ordersForAdmin) {
    orders = props.ordersForAdmin.map((order) => (
      <OrderToConfirm
        orderKey={order.id}
        ingredients={order.ingredients}
        sauces={order.sauces}
        breadTypes={order.breadTypes}
        decision={order.confirmedOrder}
        userId={order.userId}
      />
    ));
  }
  return <div>{orders}</div>;
};
const mapStateToProps = (state) => {
  return {
    ordersForAdmin: state.order.ordersForAdmin,
    loading: state.order.loading,
    token: state.auth.token,
    userId: state.auth.userId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchOrders: (token) => dispatch(actions.fetchOrdersForAdmin(token)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(OrdersToConfirm, axios));
