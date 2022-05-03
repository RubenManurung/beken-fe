import axios from "axios";
import { REWRITE_API } from "../config";

export const booksAPI = async (categoryId, page, size) => {
  try {
    const res = await axios.get(
      `${REWRITE_API}/books?categoryId=${categoryId}&page=${
        page ? page : ""
      }&size=${size ? size : ""}`
    );

    return res;
  } catch (error) {
    console.log("ERROR BOOKS", error);
    switch (error.response.status) {
      case 404:
        return alert("DATA NOT FOUND");
      default:
    }
  }
};
