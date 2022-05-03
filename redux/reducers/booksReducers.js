import { BOOK_DATA, ALL_DATA_BOOK_BY_CATEGORY, IS_BOOKMARK } from "../type";

const initialState = {
  bookData: null,
  allBookData: null,
  bookmark: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case BOOK_DATA:
      return { ...state, bookData: action.payload };
    case ALL_DATA_BOOK_BY_CATEGORY:
      return { ...state, allBookData: action.payload };
    case IS_BOOKMARK:
      return { ...state, bookmark: action.payload };
    default:
      return state;
  }
};
