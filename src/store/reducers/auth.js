import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  token: null,
  userId: null,
  error: null,
  loading: false,
  authRedirectPath: "/",
  roles: null
};

const authStart = (state, action) => {
  return updateObject(state, { error: null, loading: true });
};

const authSuccess = (state, action) => {
  return updateObject(state, {
    token: action.idToken,
    userId: action.userId,
    error: null,
    loading: false,
    roles: action.roles
  });
};

const authFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const authLogout = (state, action) => {
  return updateObject(state, { token: null, userId: null });
};

const setAuthRedirectPath = (state, action) => {
  return updateObject(state, { authRedirectPath: action.path });
};
const fetchRoleSuccess = (state, action) => {
  return updateObject(state, {
    roles: action.roles,
    loading: false
  });
};
const fetchRoleFail = (state, action) => {
  return updateObject(state, { loading: false });
};
const fetchRoleStart = (state, action) => {
  return updateObject(state, { loading: true });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return authStart(state, action);
    case actionTypes.AUTH_SUCCESS:
      return authSuccess(state, action);
    case actionTypes.AUTH_FAIL:
      return authFail(state, action);
    case actionTypes.AUTH_LOGOUT:
      return authLogout(state, action);
    case actionTypes.SET_AUTH_REDIRECT_PATH:
      return setAuthRedirectPath(state, action);
    case actionTypes.FETCH_ROLE_SUCCESS:
      return fetchRoleSuccess(state, action);
    case actionTypes.FETCH_ROLE_FAIL:
      return fetchRoleFail(state, action);
    case actionTypes.FETCH_ROLE_START:
      return fetchRoleStart(state, action);
    default:
      return state;
  }
};

export default reducer;
