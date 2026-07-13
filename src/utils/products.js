import { IS_PUBLISHED } from "../actions/product";
import { productFields } from "../data/products";

export const clearInputs = (dispatch) => {
  productFields.map((field) => {
    if (field.key === IS_PUBLISHED) {
      dispatch({ type: field.key, payload: false });
    } else {
      dispatch({ type: field.key, payload: "" });
    }
  });
};
