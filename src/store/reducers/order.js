import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  orders: [],
  loading: false,
  purchased: false,
  ordersForAdmin: [],
};

const purchaseInit = (state, action) => {
  return updateObject(state, { purchased: false });
};

const confirmOrderFail = (state, action) => {
  return updateObject(state, { loading: false });
};

const confirmOrderStart = (state, action) => {
  return updateObject(state, { loading: true });
};

const confirmOrderSuccess = (state, action) => {
  const adminOrder = updateObject(action.orderData);
  return updateObject(state, {
    loading: false,
    purchased: true,
    orders: state.orders.concat(adminOrder),
  });
};

const purchaseSandwichStart = (state, action) => {
  return updateObject(state, { loading: true });
};

const purchaseSandwichSuccess = (state, action) => {
  const newOrder = updateObject(action.orderData, { id: action.orderId });
  return updateObject(state, {
    loading: false,
    purchased: true,
    orders: state.orders.concat(newOrder),
  });
};

const purchaseSandwichFail = (state, action) => {
  return updateObject(state, { loading: false });
};

const fetchOrdersStart = (state, action) => {
  return updateObject(state, { loading: true });
};

const fetchOrdersSuccess = (state, action) => {
  return updateObject(state, {
    orders: action.orders,
    loading: false,
  });
};

const fetchOrdersFail = (state, action) => {
  return updateObject(state, { loading: false });
};

const fetchOrdersForAdminStart = (state, action) => {
  return updateObject(state, { loading: false });
};

const fetchOrdersForAdminSuccess = (state, action) => {
  return updateObject(state, {
    ordersForAdmin: action.ordersForAdmin,
    loading: false,
  });
};

const fetchOrdersForAdminFail = (state, action) => {
  return updateObject(state, { loading: false });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PURCHASE_INIT:
      return purchaseInit(state, action);
    case actionTypes.PURCHASE_SANDWICH_START:
      return purchaseSandwichStart(state, action);
    case actionTypes.PURCHASE_SANDWICH_SUCCESS:
      return purchaseSandwichSuccess(state, action);
    case actionTypes.PURCHASE_SANDWICH_FAIL:
      return purchaseSandwichFail(state, action);
    case actionTypes.FETCH_ORDERS_START:
      return fetchOrdersStart(state, action);
    case actionTypes.FETCH_ORDERS_SUCCESS:
      return fetchOrdersSuccess(state, action);
    case actionTypes.FETCH_ORDERS_FAIL:
      return fetchOrdersFail(state, action);
    case actionTypes.CONFIRM_ORDER_START:
      return confirmOrderStart(state, action);
    case actionTypes.CONFIRM_ORDER_SUCCESS:
      return confirmOrderSuccess(state, action);
    case actionTypes.CONFIRM_ORDER_FAIL:
      return confirmOrderFail(state, action);
    case actionTypes.FETCH_ORDERS_FOR_ADMIN_FAIL:
      return fetchOrdersForAdminFail(state, action);
    case actionTypes.FETCH_ORDERS_FOR_ADMIN_SUCCESS:
      return fetchOrdersForAdminSuccess(state, action);
    case actionTypes.FETCH_ORDERS_FOR_ADMIN_START:
      return fetchOrdersForAdminStart(state, action);
    default:
      return state;
  }
};

export default reducer;
