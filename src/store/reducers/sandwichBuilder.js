import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  breadTypes: {
    wholeGrains: 0,
    wheat: 0,
    noGluten: 0
  },
  ingredients: {
    meat: 0,
    cheese: 0,
    salad: 0,
    bacon: 0
  },
  sauces: {
    space: 0,
    barbecue: 0,
    ketchup: 0
  },
  totalPrice: 0,
  error: false,
  building: false
};

const INGREDIENT_PRICES = {
  meat: 3,
  cheese: 5,
  salad: 6,
  bacon: 7
};
const SAUCES_PRICES = {
  space: 1,
  barbecue: 2,
  ketchup: 1
};
const BREAD_TYPES_PRICES = {
  wholeGrains: 2,
  wheat: 3,
  noGluten: 4
};
const addIngredient = (state, action) => {
  const updatedIngredient = {
    [action.ingredientName]: state.ingredients[action.ingredientName] + 1
  };
  const updatedIngredients = updateObject(state.ingredients, updatedIngredient);
  const updatedState = {
    ingredients: updatedIngredients,
    totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
    building: true
  };
  return updateObject(state, updatedState);
};

const removeIngredient = (state, action) => {
  const updatedIng = {
    [action.ingredientName]: state.ingredients[action.ingredientName] - 1
  };
  const updatedIngs = updateObject(state.ingredients, updatedIng);
  const updatedSt = {
    ingredients: updatedIngs,
    totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName],
    building: true
  };
  return updateObject(state, updatedSt);
};

const setIngredients = (state, action) => {
  return updateObject(state, {
    ingredients: {
      salad: action.ingredients.salad,
      bacon: action.ingredients.bacon,
      cheese: action.ingredients.cheese,
      meat: action.ingredients.meat
    },
    totalPrice: 4,
    error: false,
    building: false
  });
};

const fetchIngredientsFailed = (state, action) => {
  return updateObject(state, { error: true });
};

const addSauce = (state, action) => {
  const updatedSauce = {
    [action.sauceName]: state.sauces[action.sauceName] + 1
  };
  const updatedSauces = updateObject(state.sauces, updatedSauce);
  const updatedState = {
    sauces: updatedSauces,
    totalPrice: state.totalPrice + SAUCES_PRICES[action.sauceName],
    building: true
  };
  return updateObject(state, updatedState);
};

const removeSauce = (state, action) => {
  const updatedSauce = {
    [action.sauceName]: state.sauces[action.sauceName] - 1
  };
  const updatedSauces = updateObject(state.sauces, updatedSauce);
  const updatedSt = {
    sauces: updatedSauces,
    totalPrice: state.totalPrice - SAUCES_PRICES[action.sauceName],
    building: true
  };

  return updateObject(state, updatedSt);
};

const fetchSaucesFailed = (state, action) => {
  return updateObject(state, { error: true });
};

const addBreadTypes = (state, action) => {
  const updatedBreadType = {
    [action.breadTypesName]: state.breadTypes[action.breadTypesName] + 1
  };
  const updatedBreadTypes = updateObject(state.breadTypes, updatedBreadType);
  const updatedSt = {
    breadTypes: updatedBreadTypes,
    totalPrice: state.totalPrice + BREAD_TYPES_PRICES[action.breadTypesName],
    building: true
  };

  return updateObject(state, updatedSt);
};

const removeBreadTypes = (state, action) => {
  const updatedBreadType = {
    [action.breadTypesName]: state.breadTypes[action.breadTypesName] - 1
  };
  const updatedBreadTypes = updateObject(state.breadTypes, updatedBreadType);
  const updatedSt = {
    breadTypes: updatedBreadTypes,
    totalPrice: state.totalPrice - BREAD_TYPES_PRICES[action.breadTypesName],
    building: true
  };

  return updateObject(state, updatedSt);
};

const fetchBreadTypesFailed = (state, action) => {
  return updateObject(state, { error: true });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_SAUCE:
      return addSauce(state, action);
    case actionTypes.REMOVE_SAUCE:
      return removeSauce(state, action);

    case actionTypes.FETCH_SAUCES_FAILED:
      return fetchSaucesFailed(state, action);
    case actionTypes.ADD_INGREDIENT:
      return addIngredient(state, action);
    case actionTypes.REMOVE_INGREDIENT:
      return removeIngredient(state, action);
    case actionTypes.SET_INGREDIENTS:
      return setIngredients(state, action);
    case actionTypes.FETCH_INGREDIENTS_FAILED:
      return fetchIngredientsFailed(state, action);
    case actionTypes.ADD_BREAD_TYPE:
      return addBreadTypes(state, action);
    case actionTypes.REMOVE_BREAD_TYPE:
      return removeBreadTypes(state, action);
    case actionTypes.FETCH_BREAD_TYPES_FAILED:
      return fetchBreadTypesFailed(state, action);
    default:
      return state;
  }
};

export default reducer;
