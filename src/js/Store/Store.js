import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import cocktailsReducer from "../Reducers/cocktailReducer";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store =  createStore(
  cocktailsReducer,
  composeEnhancers(applyMiddleware(thunk))
);
