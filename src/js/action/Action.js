import axios from "axios";
import { GET_COCKTAILS,GET_COCKTAIL } from "../constants/Constant";

export const getCocktails = (search) => (dispatch) => {
  axios
    .get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`)
    .then((res) => dispatch({ type: GET_COCKTAILS, payload: res.data.drinks }))
    .catch((err) => console.log(err));
  
};
export const getCocktailsByID = (id) => (dispatch) => {
  axios
    .get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then((res) => dispatch({ type: GET_COCKTAIL, payload: res.data.drinks[0] }))
    .catch((err) => console.log(err));
  
};

