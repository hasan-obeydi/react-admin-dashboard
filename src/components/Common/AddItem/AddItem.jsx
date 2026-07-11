// import { useReducer } from "react";
import { productFields } from "../../../data/products";
// import productReducer from "../../../reducers/productReducer";

const AddItem = ({ newItem, dispatch }) => {
  return (
    <form id="submitForm" className="space-y-3">
      {productFields.map((field) => (
        <div key={field.key} className="flex flex-col gap-3">
          <label htmlFor={field.key} className="text-sm">
            {" "}
            {field.label} :
          </label>
          {field.inputType === "textarea" ? (
            <textarea
              id={field.key}
              type="text"
              className="input-style min-h-10 max-h-20"
              value={newItem && newItem[field.key]}
              onChange={(event) =>
                dispatch({ type: field.key, payload: event.target.value })
              }
            />
          ) : field.inputType === "select" ? (
            <select
              id={field.key}
              className="input-style"
              value={newItem && newItem[field.key]}
              onChange={(event) =>
                dispatch({ type: field.key, payload: event.target.value })
              }
            >
              <option
                className="dark:text-white dark:bg-dark-primary"
                value={false}
              >
                منتشر نشده
              </option>
              <option
                className="dark:text-white dark:bg-dark-primary"
                value={true}
              >
                منتشر شده
              </option>
            </select>
          ) : (
            <input
              id={field.key}
              type={field.inputType}
              className="input-style"
              value={newItem && newItem[field.key]}
              onChange={(event) => {
                dispatch({ type: field.key, payload: event.target.value });
              }}
              required
            />
          )}
        </div>
      ))}
    </form>
  );
};

export default AddItem;
