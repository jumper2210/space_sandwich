import React, { useEffect } from "react";
import classes from "./AdminView.module.css";
import { connect } from "react-redux";
import axios from "axios";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import * as actions from "../../store/actions/index";

const AdminView = props => {
  const ingredients = [];
  const sauces = [];
  const breadTypes = [];
  const { onFetchRole } = props;
  useEffect(() => {
    props.onFetchRole(props.token);
  }, [onFetchRole]);

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
      <span className={classes.ingOutput} key={ig.name}>
        {ig.name}({ig.amount})
      </span>
    );
  });
  const breadTypeOutput = breadTypes.map(bd => {
    return (
      <span className={classes.bdOutput} key={bd.name}>
        {bd.name}({bd.amount})
      </span>
    );
  });
  const sauceOutput = sauces.map(su => {
    return (
      <span className={classes.suOutput} key={su.name}>
        {su.name}({su.amount})
      </span>
    );
  });

  return (
    <div className={classes.view}>
      <p className={classes.text}>Skladniki: {ingredientOutput}</p>
      <p className={classes.text}>Sosy: {sauceOutput}</p>
      <p className={classes.text}>Pieczywko: {breadTypeOutput}</p>
      <button className={classes.btnAccept}>akceptuj zamówienie</button>
      <button className={classes.btnDeclined}>usuń zamówienie</button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    loading: state.auth.loading,
    token: state.auth.token,
    userId: state.auth.userId
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onFetchRole: token => dispatch(actions.fetchRole(token))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(AdminView, axios));
