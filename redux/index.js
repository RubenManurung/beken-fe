import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";

// use composeWithDevTools(applyMiddleware(thunk)) for debugging
export const initStore = (initialState = {}) => {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
    // applyMiddleware(thunk)
  );
};
