import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  userId: null,
  error: null,
  loading: false,
  users: []
};
const fetchAllUsersStart = (state, action) => {
  return updateObject(state, { loading: true });
};
const fetchAllUsersSuccess = (state, action) => {
  return updateObject(state, {
    users: action.users,
    loading: false
  });
};
const fetchAllUsersFail = (state, action) => {
  return updateObject(state, { loading: false });
};

const deleteUserStart = (state, action) => {
  return updateObject(state, { loading: true });
};
const deleteUserSuccess = (state, action) => {
  return updateObject(state, {
    // users: action.users,
    loading: false
  });
};
const deleteUserFail = (state, action) => {
  return updateObject(state, { loading: false });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_ALL_USERS_START:
      return fetchAllUsersStart(state, action);
    case actionTypes.FETCH_ALL_USERS_SUCCESS:
      return fetchAllUsersSuccess(state, action);
    case actionTypes.FETCH_ALL_USERS_FAIL:
      return fetchAllUsersFail(state, action);
    case actionTypes.DELETE_USER_START:
      return deleteUserStart(state, action);
    case actionTypes.DELETE_USER_FAIL:
      return deleteUserFail(state, action);
    case actionTypes.DELETE_USER_SUCCESS:
      return deleteUserSuccess(state, action);

    default:
      return state;
  }
};
export default reducer;
