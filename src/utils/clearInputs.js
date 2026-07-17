import { IS_PUBLISHED } from "../actions/product";
import { productFields } from "../data/products";
import userFields from "../data/users";

export const clearInputs = (dispatch, itemType) => {
  itemType === "محصول"
    ? productFields.map((field) => {
        if (field.key === IS_PUBLISHED) {
          dispatch({ type: field.key, payload: false });
        } else {
          dispatch({ type: field.key, payload: "" });
        }
      })
    : userFields.map((field) => {
        dispatch({ type: field.key, payload: "" });
      });
};
