import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import imageReducer from "./reducers/imageReducer/imageReducer";
import dealerReducer from "./reducers/dealerReducer/dealerReducer";
import searchReducer from "./reducers/searchReducer/searchReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    imgRed: imageReducer,
    dealerRed: dealerReducer,
    searchRed: searchReducer
  }),
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
