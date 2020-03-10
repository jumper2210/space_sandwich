import React, { useEffect } from "react";
import { connect } from "react-redux";
import Order from "../../components/Order/Order";
import axios from "axios";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import * as actions from "../../store/actions/index";
import Spinner from "../../components/UI/Spinner/Spinner";
import Aux from "../../hoc/Auxiliary/Auxiliary";
const Orders = props => {
  const { onFetchOrders } = props;

  useEffect(() => {
    props.onFetchOrders(props.token);
  }, [onFetchOrders]);

  let orders = <Spinner />;
  if (!props.loading && props.orders) {
    orders = props.orders.map(order => (
      <Aux>
        <Order
          key={order.id}
          ingredients={order.ingredients}
          sauces={order.sauces}
          breadTypes={order.breadTypes}
        />
      </Aux>
    ));
  }
  return <div>{orders}</div>;
};

const mapStateToProps = state => {
  return {
    orders: state.order.orders,
    loading: state.order.loading,
    token: state.auth.token,
    userId: state.auth.userId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchOrders: token => dispatch(actions.fetchOrders(token))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(Orders, axios));
