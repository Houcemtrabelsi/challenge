import { GET_COCKTAILS,GET_COCKTAIL } from "../constants/Constant";

const initialState = {
  cocktails: [],
  cocktailsLoad: true,
  cocktail:{},
  cocktailLoad:true,
};

const cocktailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COCKTAILS:
      return { ...state, cocktails: action.payload, cocktailsLoad: false };
      case GET_COCKTAIL:
      return { ...state, cocktail: action.payload, cocktailsLoad: false };

    default:
      return state;
  }
};

export default cocktailsReducer;
