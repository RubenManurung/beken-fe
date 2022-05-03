import booksActions from "./booksActions";
import categoryActions from "./categoryActions";

//exporting all action
export default {
  ...booksActions,
  ...categoryActions,
};
