import { CATEGORY_LIST } from "../type";

const initialState = {
  dataCategory: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CATEGORY_LIST:
      return { dataCategory: action.payload };
    default:
      return state;
  }
};
