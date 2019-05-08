import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import imageReducer from "./reducers/imageReducer/imageReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  imageReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
