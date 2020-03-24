import React from "react";
import classes from "./ViewUser.module.css";
import axios from "axios";
import withErrorHandler from "../../../../hoc/withErrorHandler/withErrorHandler";
import * as actions from "../../../../store/actions/index";
import { connect } from "react-redux";

const ViewUser = props => {
  const users = [];
  if (props.roles === "ROLE_USER") {
    for (let usersName in props.username) {
      users.push({
        name: props.username[usersName]
      });
    }
  } else return 0;

  const userIdOutput = users.map(u => {
    return (
      <span
        style={{
          textTransform: "capitalize",
          display: "inline-block",
          margin: "0 2px",
          border: "1px solid #ccc",
          padding: "5px",
          fontSize: "1.3rem",
          color: "rgb(241, 139, 4)"
        }}
        key={u.name}
      >
        {u.name}
      </span>
    );
  });

  return (
    <div className={classes.user}>
      <p>{userIdOutput}</p>
      <button
        className={classes.btnDelete}
        onClick={() => {
          const user = {
            username: props.username,
            id: props.id
          };
          props.onDeleteUser(user, props.token);
        }}
      >
        Usuń
      </button>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    token: state.auth.token,
    userId: state.auth.userId
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onDeleteUser: (userData, token) =>
      dispatch(actions.deleteUser(userData, token))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(ViewUser, axios));
