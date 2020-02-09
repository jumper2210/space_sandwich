import React, { Component } from "react";
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

class SandwichBuilder extends Component {
  state = {
    purchasing: false,
    buildingStep: 0,
    moveOn: false
  };

  updateMoveOnState(breadTypes) {
    let sum = Object.keys(breadTypes)
      .map(btKey => {
        return breadTypes[btKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    return sum > 0;
  }
  updateMoveOnStateIg(ingredients) {
    let sum = Object.keys(ingredients)
      .map(btKey => {
        return ingredients[btKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    return sum > 0;
  }
  updateMoveOnStateSu(sauces) {
    let sum = Object.keys(sauces)
      .map(suKey => {
        return sauces[suKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    this.setState({ moveOn: sum > 0 });
  }

  nextStepHandler = () => {
    this.setState({ buildingStep: this.state.buildingStep + 1 });
  };
  previousStepHandler = () => {
    this.setState({ buildingStep: this.state.buildingStep - 1 });
  };
  purchasingHandler = () => {
    this.setState({ purchasing: true });
  };
  purchasingContinue = () => {
    this.props.history.push("/checkout");
  };
  purchasingCancel = () => {
    this.setState({ purchasing: false });
  };

  render() {
    /// Bread
    const notEnoughBd = {
      ...this.props.breadTypes
    };
    const tooMuchBd = {
      ...this.props.breadTypes
    };
    ///
    for (let key in notEnoughBd) {
      notEnoughBd[key] = notEnoughBd[key] <= 0;
    }

    for (let key in tooMuchBd) {
      tooMuchBd[key] = tooMuchBd[key] >= 1;
    }

    /// Ingredients
    const notEnoughIg = {
      ...this.props.ingredients
    };

    for (let key in notEnoughIg) {
      notEnoughIg[key] = notEnoughIg[key] <= 0;
    }

    ///
    /// Sauces
    const notEnoughSu = {
      ...this.state.sauces
    };

    ///
    for (let key in notEnoughSu) {
      notEnoughSu[key] = notEnoughSu[key] <= 0;
    }
    let step = null;
    switch (this.state.buildingStep) {
      case 0:
        step = (
          <BuildBreadControls
            BreadTypeAdded={this.props.onBreadTypeAdded}
            BreadTypeRemove={this.props.onBreadTypeRemoved}
            moveOn={this.state.moveOn}
            price={this.props.price}
            keepAdding={this.nextStepHandler}
            purchasable={this.updateMoveOnState(this.props.breadTypes)}
            disabledRemove={notEnoughBd}
            tooMuchBdHandler={tooMuchBd}
          />
        );
        break;

      case 1:
        step = (
          <BuildIngredientsControls
            previousStepHandler={this.previousStepHandler}
            IngredientsTypeAdded={this.props.onIngredientAdded}
            IngredientsTypeRemove={this.props.onIngredientRemoved}
            disabledRemove={notEnoughIg}
            price={this.props.price}
            keepAdding={this.nextStepHandler}
            moveOn={this.updateMoveOnStateIg}
          />
        );
        break;
      case 2:
        step = (
          <BuildSaucesControls
            previousStepHandler={this.previousStepHandler}
            SauceTypeAdded={this.props.onSauceAdded}
            SauceTypeRemove={this.props.onSauceRemoved}
            disabledSuRemove={notEnoughSu}
            price={this.props.price}
            ordered={this.purchasingHandler}
          />
        );
        break;
      default:
        step = null;
    }

    return (
      <Aux>
        <Modal show={this.state.purchasing}>
          <OrderBox
            breadTypes={this.props.breadTypes}
            ingredients={this.props.ingredients}
            sauces={this.props.sauces}
            purchasingCancel={this.purchasingCancel}
            purchasingContinue={this.purchasingContinue}
            price={this.props.price}
          />
        </Modal>
        <SandwichCheck
          breadTypes={this.props.breadTypes}
          ingredients={this.props.ingredients}
          sauces={this.props.sauces}
        />
        {step}
      </Aux>
    );
  }
}
const mapStateToProps = state => {
  return {
    ingredients: state.sandwichBuilder.ingredients,
    breadTypes: state.sandwichBuilder.breadTypes,
    sauces: state.sandwichBuilder.sauces,
    price: state.sandwichBuilder.totalPrice,
    error: state.sandwichBuilder.error
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
    onBreadTypeRemoved: bdName => dispatch(actions.removeBreadTypes(bdName))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(SandwichBuilder, axios));
