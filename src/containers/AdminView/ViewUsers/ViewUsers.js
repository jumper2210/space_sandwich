import React, { useEffect } from "react";
import { connect } from "react-redux";
import withErrorHandler from "../../../hoc/withErrorHandler/withErrorHandler";
import axios from "axios";
import * as actions from "../../../store/actions/index";
import Spinner from "../../../components/UI/Spinner/Spinner";
import ViewUser from "./ViewUser/ViewUser";

const ViewUsers = props => {
  const { onFetchUsers } = props;

  useEffect(() => {
    props.onFetchUsers();
  }, [onFetchUsers]);

  let users = <Spinner />;
  if (!props.loading && props.usersData) {
    users = props.usersData.map(users => (
      <ViewUser username={users.username} id={users.id} roles={users.roles} />
    ));
  }
  return <div>{users}</div>;
};
const mapStateToProps = state => {
  return {
    usersData: state.users.users,
    loading: state.users.loading,
    token: state.users.token
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchUsers: () => dispatch(actions.fetchUsers())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(ViewUsers, axios));
