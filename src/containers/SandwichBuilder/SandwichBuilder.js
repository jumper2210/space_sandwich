import React, { useState, useEffect } from "react";
import Aux from "../../hoc/Auxiliary/Auxiliary";
import SandwichCheck from "../../components/Sandwich/SandwichCheck/SandwichCheck";
import BuildBreadControls from "../../components/Sandwich/BuildControls/BuildBreadControls/BuildBreadControls";
import BuildIngredientsControls from "../../components/Sandwich/BuildControls/BuildIngredientsControls/BuildIngredientsControls";
import BuildSaucesControls from "../../components/Sandwich/BuildControls/BuildSaucesControls/BuildSaucesControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderBox from "../../components/Sandwich/OrderBox/OrderBox";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import axios from "axios";
import * as actions from "../../store/actions/index";
import { connect } from "react-redux";

const SandwichBuilder = props => {
  const [purchasing, setPurchasing] = useState(false);
  const [buildingStep, setBuildingStep] = useState(0);
  const [moveOn, setMoveOn] = useState(false);

  const { onFetchRole } = props;
  useEffect(() => {
    props.onFetchRole(props.token);
  }, [onFetchRole]);

  const updateMoveOnState = breadTypes => {
    let sum = Object.keys(breadTypes)
      .map(btKey => {
        return breadTypes[btKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    return sum > 0;
  };
  const updateMoveOnStateIg = ingredients => {
    let sum = Object.keys(ingredients)
      .map(btKey => {
        return ingredients[btKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    return sum > 0;
  };

  const updateMoveOnStateSu = sauces => {
    let sum = Object.keys(sauces)
      .map(suKey => {
        return sauces[suKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    setMoveOn(sum > 0);
  };

  const nextStepHandler = () => {
    setBuildingStep(buildingStep + 1);
  };
  const previousStepHandler = () => {
    setBuildingStep(buildingStep - 1);
  };
  const purchasingHandler = () => {
    setPurchasing(true);
  };
  const purchasingContinue = () => {
    props.history.push("/checkout");
    props.onInitPurchase();
  };
  const purchasingCancel = () => {
    setPurchasing(false);
  };

  const notEnoughBd = {
    ...props.breadTypes
  };
  const tooMuchBd = {
    ...props.breadTypes
  };

  for (let key in notEnoughBd) {
    notEnoughBd[key] = notEnoughBd[key] <= 0;
  }

  for (let key in tooMuchBd) {
    tooMuchBd[key] = tooMuchBd[key] >= 1;
  }

  const notEnoughIg = {
    ...props.ingredients
  };

  for (let key in notEnoughIg) {
    notEnoughIg[key] = notEnoughIg[key] <= 0;
  }

  const notEnoughSu = {
    ...props.sauces
  };

  for (let key in notEnoughSu) {
    notEnoughSu[key] = notEnoughSu[key] <= 0;
  }
  let step = null;
  switch (buildingStep) {
    case 0:
      step = (
        <BuildBreadControls
          BreadTypeAdded={props.onBreadTypeAdded}
          BreadTypeRemove={props.onBreadTypeRemoved}
          moveOn={moveOn}
          price={props.price}
          keepAdding={nextStepHandler}
          purchasable={updateMoveOnState(props.breadTypes)}
          disabledRemove={notEnoughBd}
          tooMuchBdHandler={tooMuchBd}
        />
      );
      break;

    case 1:
      step = (
        <BuildIngredientsControls
          previousStepHandler={previousStepHandler}
          IngredientsTypeAdded={props.onIngredientAdded}
          IngredientsTypeRemove={props.onIngredientRemoved}
          disabledRemove={notEnoughIg}
          price={props.price}
          keepAdding={nextStepHandler}
          moveOn={updateMoveOnStateIg}
        />
      );
      break;
    case 2:
      step = (
        <BuildSaucesControls
          previousStepHandler={previousStepHandler}
          SauceTypeAdded={props.onSauceAdded}
          SauceTypeRemove={props.onSauceRemoved}
          disabledSuRemove={notEnoughSu}
          price={props.price}
          ordered={purchasingHandler}
        />
      );
      break;
    default:
      step = null;
  }

  return (
    <Aux>
      <Modal show={purchasing}>
        <OrderBox
          breadTypes={props.breadTypes}
          ingredients={props.ingredients}
          sauces={props.sauces}
          purchasingCancel={purchasingCancel}
          purchasingContinue={purchasingContinue}
          price={props.price}
        />
      </Modal>
      <SandwichCheck
        breadTypes={props.breadTypes}
        ingredients={props.ingredients}
        sauces={props.sauces}
      />
      {step}
    </Aux>
  );
};

const mapStateToProps = state => {
  return {
    ingredients: state.sandwichBuilder.ingredients,
    breadTypes: state.sandwichBuilder.breadTypes,
    sauces: state.sandwichBuilder.sauces,
    price: state.sandwichBuilder.totalPrice,
    error: state.sandwichBuilder.error,
    token: state.auth.token
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIngredientAdded: ingName => dispatch(actions.addIngredient(ingName)),
    onIngredientRemoved: ingName => dispatch(actions.removeIngredient(ingName)),

    onInitPurchase: () => dispatch(actions.purchaseInit()),
    onSetAuthRedirectPath: path => dispatch(actions.setAuthRedirectPath(path)),

    onSauceAdded: suName => dispatch(actions.addSauce(suName)),
    onSauceRemoved: suName => dispatch(actions.removeSauce(suName)),

    onBreadTypeAdded: bdName => dispatch(actions.addBreadTypes(bdName)),
    onBreadTypeRemoved: bdName => dispatch(actions.removeBreadTypes(bdName)),
    onFetchRole: roles => dispatch(actions.fetchRole(roles))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(SandwichBuilder, axios));
