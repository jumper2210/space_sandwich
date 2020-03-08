import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Input from "../../components/UI/Input/Input";
import classes from "./Authentication.module.css";
import * as actions from "../../store/actions/index.js";
import { Redirect } from "react-router-dom";
import Spinner from "../../components/UI/Spinner/Spinner";

import { updateObject, checkValidity } from "../../store/utility";
const Authentication = props => {
  const [authForm, setAuthForm] = useState({
    username: {
      elementType: "input",
      elementConfig: {
        type: "text",
        placeholder: "Twoja nazwa"
      },
      value: "",
      validation: {
        required: true,
        minLength: 3
      },
      valid: false,
      touched: false
    },
    password: {
      elementType: "input",
      elementConfig: {
        type: "password",
        placeholder: "Twoje haslo"
      },
      value: "",
      validation: {
        required: true,
        minLength: 3
      },
      valid: false,
      touched: false
    }
  });
  const [isSignup, setIsSignup] = useState(false);

  const { buildingSandwich, authRedirectPath, onSetAuthRedirectPath } = props;

  useEffect(() => {
    if (!buildingSandwich && authRedirectPath !== "/") {
      onSetAuthRedirectPath();
    }
  }, [buildingSandwich, authRedirectPath, onSetAuthRedirectPath]);

  const inputChangedHandler = (event, controlName) => {
    const updatedControls = updateObject(authForm, {
      [controlName]: updateObject(authForm[controlName], {
        value: event.target.value,
        valid: checkValidity(
          event.target.value,
          authForm[controlName].validation
        )
      })
    });
    setAuthForm(updatedControls);
  };

  const inputFocusedHandler = (event, controlName) => {
    const updatedControls = {
      ...authForm
    };
    const updatedFormElement = {
      ...updatedControls[controlName]
    };
    updatedFormElement.touched = true;
    updatedControls[controlName] = updatedFormElement;
    setAuthForm(updatedControls);
  };

  const submitHandler = (event, token) => {
    event.preventDefault();
    props.onAuth(authForm.username.value, authForm.password.value, isSignup);
  };

  const switchAuthModeHandler = () => {
    setIsSignup(!isSignup);
  };

  const formElementsArray = [];
  for (let key in authForm) {
    formElementsArray.push({
      id: key,
      setup: authForm[key],
      name: key
    });
  }

  let form = formElementsArray.map(formElement => (
    <Input
      key={formElement.id}
      name={formElement.name}
      elementType={formElement.setup.elementType}
      elementConfig={formElement.setup.elementConfig}
      value={formElement.setup.value}
      invalid={!formElement.setup.valid}
      shouldValidate={formElement.setup.validation}
      touched={formElement.setup.touched}
      changed={event => inputChangedHandler(event, formElement.id)}
      focused={event => inputFocusedHandler(event, formElement.id)}
    />
  ));

  if (props.loading) {
    form = <Spinner />;
  }

  let errorMessage = null;

  if (props.error) {
    let uglyErrorMessage = props.error.replace(/_/g, " ");
    if (uglyErrorMessage === "Unauthorized") {
      uglyErrorMessage = (
        <p style={{ fontSize: "1.3rem" }}>"PODAŁEŚ ZŁE HASŁO, ALBO NAZWE"</p>
      );
    } else {
      uglyErrorMessage = (
        <p style={{ fontSize: "1.3rem" }}> "COS POSZLO NIE TAK."</p>
      );
    }
    errorMessage = <p style={{ color: "red" }}>{uglyErrorMessage}</p>;
  }

  let authRedirect = null;
  if (props.isAuthenticated) {
    authRedirect = <Redirect to={props.authRedirectPath} />;
  }

  let canSubmit = false;
  if (authForm.username.valid && authForm.password.valid) canSubmit = true;

  return (
    <div className={classes.Auth}>
      {authRedirect}
      <h2 className={classes.titleAuth}>
        {isSignup ? "Rejestracja" : "logowanie"}
      </h2>
      {errorMessage}
      <form onSubmit={submitHandler}>
        {form}
        <button className={classes.btnAuth} disabled={!canSubmit}>
          Potwierdź
        </button>
      </form>
      <button className={classes.textAuth} onClick={switchAuthModeHandler}>
        {!isSignup
          ? "Nie masz jeszcze konto? Załóż je !"
          : "Masz już konto ? Zaloguj sie"}
      </button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
    isAuthenticated: state.auth.token !== null,
    buildingSandwich: state.sandwichBuilder.building,
    authRedirectPath: state.auth.authRedirectPath
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAuth: (username, password, isSignup) =>
      dispatch(actions.auth(username, password, isSignup)),
    onSetAuthRedirectPath: () => dispatch(actions.setAuthRedirectPath("/"))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Authentication);
