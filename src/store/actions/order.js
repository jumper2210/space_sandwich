import * as actionTypes from "./actionTypes";
import axios from "../../axios-service";

export const purchaseSandwichSuccess = (id, orderData) => {
  return {
    type: actionTypes.PURCHASE_SANDWICH_SUCCESS,
    orderId: id,
    orderData: orderData
  };
};

export const purchaseSandwichFail = error => {
  return {
    type: actionTypes.PURCHASE_SANDWICH_FAIL,
    error: error
  };
};

export const purchaseSandwichStart = () => {
  return {
    type: actionTypes.PURCHASE_SANDWICH_START
  };
};

export const purchaseSandwich = (orderData, token) => {
  return dispatch => {
    dispatch(purchaseSandwichStart());
    const orderDataArray = {
      ...orderData
    };
    const config = {
      headers: {
        Authorization: "Bearer ".concat(token),
        "Content-Type": "application/json"
      }
    };
    axios
      .post("/zamowienia", orderDataArray, config)
      .then(response => {
        dispatch(purchaseSandwichSuccess(response.data.id, orderDataArray));
      })
      .catch(error => {
        dispatch(purchaseSandwichFail(error));
      });
  };
};

export const purchaseInit = () => {
  return {
    type: actionTypes.PURCHASE_INIT
  };
};

export const fetchOrdersSuccess = orders => {
  return {
    type: actionTypes.FETCH_ORDERS_SUCCESS,
    orders: orders
  };
};

export const fetchOrdersFail = error => {
  return {
    type: actionTypes.FETCH_ORDERS_FAIL,
    error: error
  };
};

export const fetchOrdersStart = () => {
  return {
    type: actionTypes.FETCH_ORDERS_START
  };
};

export const fetchOrdersForAdmin = token => {
  return dispatch => {
    dispatch(fetchOrdersForAdminStart());
    const config = {
      headers: {
        Authorization: "Bearer ".concat(token),
        "Content-Type": "application/json"
      }
    };
    axios
      .get("/zamowieniaAdmin", config)
      .then(res => {
        const fetchedOrdersForAdmin = [];

        for (let key in res.data) {
          fetchedOrdersForAdmin.push({
            ...res.data[key]
          });
        }
        localStorage.setItem("decision", res.data.confirmedOrder);

        dispatch(fetchOrdersForAdminSuccess(fetchedOrdersForAdmin));
      })
      .catch(err => {
        dispatch(fetchOrdersForAdminFail(err));
      });
  };
};

export const fetchOrdersForAdminSuccess = ordersForAdmin => {
  return {
    type: actionTypes.FETCH_ORDERS_FOR_ADMIN_SUCCESS,
    ordersForAdmin: ordersForAdmin
  };
};
export const fetchOrdersForAdminStart = () => {
  return {
    type: actionTypes.FETCH_ORDERS_FOR_ADMIN_START
  };
};
export const fetchOrdersForAdminFail = error => {
  return { type: actionTypes.FETCH_ORDERS_FOR_ADMIN_FAIL, error: error };
};
export const fetchOrders = token => {
  return dispatch => {
    dispatch(fetchOrdersStart());
    const config = {
      headers: {
        Authorization: "Bearer ".concat(token),
        "Content-Type": "application/json"
      }
    };
    axios
      .get("/zamowienia", config)
      .then(res => {
        const fetchedOrders = [];
        for (let key in res.data) {
          fetchedOrders.push({
            ...res.data[key]
          });
        }
        dispatch(fetchOrdersSuccess(fetchedOrders));
      })
      .catch(err => {
        dispatch(fetchOrdersFail(err));
      });
  };
};
