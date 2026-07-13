import { NumericFormat } from "react-number-format";
import { productFields } from "../../../data/products";

const AddProduct = ({ newProduct, dispatch }) => {
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
              value={newProduct && newProduct[field.key]}
              onChange={(event) =>
                dispatch({ type: field.key, payload: event.target.value })
              }
            />
          ) : field.inputType === "select" ? (
            <select
              id={field.key}
              className="input-style"
              value={newProduct && newProduct[field.key]}
              onChange={() => {
                dispatch({ type: field.key, payload: !newProduct[field.key] });
              }}
            >
              <option className="dark:text-white dark:bg-dark-primary" value={false}>
                منتشر نشده
              </option>
              <option className="dark:text-white dark:bg-dark-primary" value={true}>
                منتشر شده
              </option>
            </select>
          ) : field.inputType === "text" || field.key === "entity" ? (
            <input
              id={field.key}
              type={field.inputType}
              className="input-style"
              value={newProduct && newProduct[field.key]}
              onChange={(event) => {
                dispatch({ type: field.key, payload: event.target.value });
              }}
              required
            />
          ) : (
            <NumericFormat
              thousandSeparator=","
              id={field.key}
              type="text"
              className="input-style"
              value={newProduct && newProduct[field.key]}
              onValueChange={(values) => {
                dispatch({ type: field.key, payload: values.value });
              }}
              required
            />
          )}
        </div>
      ))}
    </form>
  );
};

export default AddProduct;
