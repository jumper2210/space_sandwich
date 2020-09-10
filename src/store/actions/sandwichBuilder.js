import * as actionTypes from "./actionTypes";

export const addIngredient = (name) => {
  return {
    type: actionTypes.ADD_INGREDIENT,
    ingredientName: name,
  };
};

export const removeIngredient = (name) => {
  return {
    type: actionTypes.REMOVE_INGREDIENT,
    ingredientName: name,
  };
};

export const fetchIngredientsFailed = () => {
  return {
    type: actionTypes.FETCH_INGREDIENTS_FAILED,
  };
};

export const addSauce = (name) => {
  return {
    type: actionTypes.ADD_SAUCE,
    sauceName: name,
  };
};

export const removeSauce = (name) => {
  return {
    type: actionTypes.REMOVE_SAUCE,
    sauceName: name,
  };
};

export const fetchSaucesFailed = () => {
  return {
    type: actionTypes.FETCH_SAUCES_FAILED,
  };
};

export const addBreadTypes = (name) => {
  return {
    type: actionTypes.ADD_BREAD_TYPE,
    breadTypesName: name,
  };
};

export const removeBreadTypes = (name) => {
  return {
    type: actionTypes.REMOVE_BREAD_TYPE,
    breadTypesName: name,
  };
};

export const fetchBreadTypesFailed = () => {
  return {
    type: actionTypes.FETCH_BREAD_TYPES_FAILED,
  };
};
