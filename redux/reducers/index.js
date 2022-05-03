import { combineReducers } from "redux";
import booksReducers from "./booksReducers";
import categoryReducers from "./categoryReducers";

// describe reducer in this apps
const rootReducer = combineReducers({
  books: booksReducers,
  category: categoryReducers,
});

export default rootReducer;
