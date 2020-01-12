import React, { Component } from "react";
import Aux from "../../hoc/Auxiliary";
import Sandwich from "../../components/Sandwich/SandwichChceck/SandwichCheck";
import BuildBreadControls from "../../components/Sandwich/BuildControls/BuildBreadControls/BuildBreadControls";
import PropTypes from "prop-types";
import BuildIngredientsControls from "../../components/Sandwich/BuildControls/BuildIngredientsControls/BuildIngredientsControls";

const Prices = {
  wholeGrains: 2.6,
  Wheat: 2,
  NoGluten: 6,
  Meat: 2,
  Cheese: 1,
  Salad: 3,
  Bacon: 4
};

class SandwichBuilder extends Component {
  state = {
    BreadTypes: {
      wholeGrains: 0,
      Wheat: 0,
      NoGluten: 0
    },
    Ingredients: {
      Meat: 0,
      Cheese: 0,
      Salad: 0,
      Bacon: 0
    },
    totalPrice: 0,
    moveOn: false,
    nextStep: false,
    buildingStep: 0,
    disabled: false
  };

  updateMoveOnState(BreadTypes) {
    let sum = Object.keys(BreadTypes)
      .map(btKey => {
        return BreadTypes[btKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    this.setState({ moveOn: sum > 0 });
  }

  addBreadType = type => {
    const oldCount = this.state.BreadTypes[type];
    const updatedCount = oldCount + 1;
    const updatedBreadTypes = {
      ...this.state.BreadTypes
    };
    updatedBreadTypes[type] = updatedCount;
    const priceAddition = Prices[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({ totalPrice: newPrice, BreadTypes: updatedBreadTypes });
    this.updateMoveOnState(updatedBreadTypes);
  };

  addIngredientsType = type => {
    const oldCount = this.state.Ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredientsTypes = {
      ...this.state.Ingredients
    };
    updatedIngredientsTypes[type] = updatedCount;
    const priceAddition = Prices[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({
      totalPrice: newPrice,
      Ingredients: updatedIngredientsTypes
    });
  };

  removeIngredientsType = type => {
    const oldCount = this.state.Ingredients[type];
    if (oldCount <= 0) {
      return;
    }
    const updatedCount = oldCount - 1;
    const updatedIngredientsTypes = {
      ...this.state.Ingredients
    };
    updatedIngredientsTypes[type] = updatedCount;
    const priceAddition = Prices[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceAddition;
    this.setState({
      totalPrice: newPrice,
      Ingredients: updatedIngredientsTypes
    });
  };

  removeBreadType = type => {
    const oldCount = this.state.BreadTypes[type];
    if (oldCount <= 0) {
      return;
    }

    const updatedCount = oldCount - 1;
    if (updatedCount <= 1) {
      this.setState({ disabled: true });
    }
    const updatedBreadTypes = {
      ...this.state.BreadTypes
    };
    updatedBreadTypes[type] = updatedCount;
    const priceAddition = Prices[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceAddition;
    this.setState({ totalPrice: newPrice, BreadTypes: updatedBreadTypes });
    this.updateMoveOnState(updatedBreadTypes);
  };

  nextStepHandler = () => {
    this.setState({ buildingStep: this.state.buildingStep + 1 });
  };
  previousStepHandler = () => {
    this.setState({ buildingStep: this.state.buildingStep - 1 });
  };

  render() {
    /// Bread
    const disabledBdRemoveInfo = {
      ...this.state.BreadTypes
    };
    const disabledBdAddInfo = {
      ...this.state.BreadTypes
    };
    ///
    for (let key in disabledBdRemoveInfo) {
      disabledBdRemoveInfo[key] = disabledBdRemoveInfo[key] <= 0;
    }

    for (let key in disabledBdAddInfo) {
      disabledBdAddInfo[key] = disabledBdAddInfo[key] >= 1;
    }
    /// Ingredients
    const disabledIgRemove = {
      ...this.state.Ingredients
    };

    ///
    for (let key in disabledIgRemove) {
      disabledIgRemove[key] = disabledIgRemove[key] <= 0;
    }

    let step = null;
    switch (this.state.buildingStep) {
      case 0:
        step = (
          <BuildBreadControls
            BreadTypeAdded={this.addBreadType}
            BreadTypeRemove={this.removeBreadType}
            moveOn={this.state.moveOn}
            price={this.state.totalPrice}
            keepAdding={this.nextStepHandler}
            disabledBdRemoveHandler={disabledBdRemoveInfo}
            disabledBdAddInfoHandler={disabledBdAddInfo}
          />
        );
        break;

      case 1:
        step = (
          <BuildIngredientsControls
            previousStepHandler={this.previousStepHandler}
            IngredientsTypeAdded={this.addIngredientsType}
            IngredientsTypeRemove={this.removeIngredientsType}
            disabledIgRemoveHandler={disabledIgRemove}
            price={this.state.totalPrice}
          />
        );
        break;

      default:
        step = null;
    }

    return (
      <Aux>
        <Sandwich
          BreadTypes={this.state.BreadTypes}
          Ingredients={this.state.Ingredients}
        />
        {step}
      </Aux>
    );
  }
}
SandwichBuilder.propTypes = {
  type: PropTypes.string.isRequired
};
export default SandwichBuilder;
