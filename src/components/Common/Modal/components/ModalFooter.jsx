import { clearInputs } from "../../../../utils/products";

const ModalFooter = ({ item, onSubmit, toggle, newProduct, dispatch }) => {
  return (
    <div className="border-t border-color dark:border-gray-700 p-4 mt-2 justify-end flex gap-2">
      <button
        onClick={() => {
          toggle();
          dispatch && clearInputs(dispatch);
        }}
        className="py-2 px-4 rounded-lg hover:bg-gray-200 dark:hover:bg-dark-primary duration-200 cursor-pointer border border-primary"
      >
        انصراف
      </button>
      <button
        id="submitForm"
        type="submit"
        onClick={() => onSubmit(item, newProduct, toggle)}
        className="py-2 px-4 bg-gradiant hover:opacity-60 duration-200 rounded-lg cursor-pointer text-white"
      >
        تایید
      </button>
    </div>
  );
};

export default ModalFooter;
