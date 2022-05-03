import { BOOK_DATA, ALL_DATA_BOOK_BY_CATEGORY, IS_BOOKMARK } from "../type";
import { booksAPI } from "../../services/books";

export const getFilteredBook = (categoryId, page, size) => {
  return async (dispatch) => {
    const response = await booksAPI(categoryId, page, size);

    dispatch({ type: BOOK_DATA, payload: response.data });
  };
};

export const getAllBookCategory = (categoryId) => {
  return async (dispatch) => {
    const response = await booksAPI(categoryId);

    dispatch({ type: ALL_DATA_BOOK_BY_CATEGORY, payload: response.data });
  };
};

export default {
  getFilteredBook,
  getAllBookCategory,
};
