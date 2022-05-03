import axios from "axios";
import { REWRITE_API } from "../config";

export const categoryAPI = async () => {
  try {
    const res = await axios.get(`${REWRITE_API}/categories`);

    return res;
  } catch (error) {
    console.log("ERROR CATEGORY", error);
    switch (error.response.status) {
      case 404:
        return alert("DATA NOT FOUND");
      default:
    }
  }
};
