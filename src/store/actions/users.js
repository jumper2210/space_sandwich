import axios from "../../axios-service";

import * as actionTypes from "./actionTypes";

export const fetchAllUsersStart = () => {
  return {
    type: actionTypes.FETCH_ALL_USERS_START
  };
};
export const fetchAllUsersSuccess = fetchUsers => {
  return {
    type: actionTypes.FETCH_ALL_USERS_SUCCESS,
    users: fetchUsers
  };
};
export const fetchAllUsersFail = error => {
  return { type: actionTypes.FETCH_ALL_USERS_FAIL, error: error };
};

export const fetchUsers = () => {
  return dispatch => {
    dispatch(fetchAllUsersStart());
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    axios
      .get("/getAllUsers", config)
      .then(res => {
        const fetchUsers = [];
        for (let key in res.data) {
          fetchUsers.push({
            ...res.data[key]
          });
        }
        dispatch(fetchAllUsersSuccess(fetchUsers));
      })
      .catch(err => {
        dispatch(fetchAllUsersFail(err));
      });
  };
};

export const deleteUserStart = () => {
  return {
    type: actionTypes.DELETE_USER_START
  };
};
export const deleteUserFail = error => {
  return {
    type: actionTypes.DELETE_USER_FAIL,
    error: error
  };
};
export const deleteUserSuccess = () => {
  return {
    type: actionTypes.DELETE_USER_SUCCESS
  };
};

export const deleteUser = (userData, token) => {
  return dispatch => {
    dispatch(deleteUserStart());
    const userDataArray = {
      ...userData
    };
    const config = {
      headers: {
        Authorization: "Bearer ".concat(token),
        "Content-Type": "application/json"
      }
    };
    axios
      .post("/deleteUser", userDataArray, config)
      .then(res => {
        dispatch(deleteUserSuccess());
      })
      .catch(error => {
        dispatch(deleteUserFail(error));
      });
  };
};
