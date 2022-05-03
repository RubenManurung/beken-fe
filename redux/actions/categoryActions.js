import { CATEGORY_LIST } from "../type";
import { categoryAPI } from "../../services/category";

export const getListCategory = () => {
  return async (dispatch) => {
    const response = await categoryAPI();

    dispatch({ type: CATEGORY_LIST, payload: response.data });
  };
};

export default {
  getListCategory,
};
