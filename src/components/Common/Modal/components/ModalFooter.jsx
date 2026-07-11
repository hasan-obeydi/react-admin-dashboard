import toast from "react-hot-toast";

const ModalFooter = ({
  itemId,
  isPublished,
  itemTitle,
  itemPrice,
  itemEntity,
  itemDescription,
  onSubmit,
  toggle,
  newProduct,
}) => {
  const submitValidation = () => {
    if (
      newProduct &&
      (!newProduct.title || !newProduct.price || !newProduct.entity)
    ) {
      toast.error("لطفا مقادیر عنوان و موجودی و قیمت را به درستی وارد کنید.");
    } else if (
      newProduct &&
      newProduct.title === itemTitle &&
      newProduct.isPublished === isPublished &&
      newProduct.price === itemPrice &&
      newProduct.entity === itemEntity &&
      newProduct.description === itemDescription
    ) {
      toast.error("لطفا مقادیر را تغییر دهید.");
    } else {
      toggle();
      onSubmit(itemId, itemTitle, isPublished, newProduct);
    }
  };
  return (
    <div className="border-t border-color dark:border-gray-700 p-4 mt-2 justify-end flex gap-2">
      <button
        onClick={() => toggle()}
        className="py-2 px-4 rounded-lg hover:bg-gray-200 dark:hover:bg-dark-primary duration-200 cursor-pointer border border-primary"
      >
        انصراف
      </button>
      <button
        id="submitForm"
        type="submit"
        onClick={submitValidation}
        className="py-2 px-4 bg-gradiant hover:opacity-60 duration-200 rounded-lg cursor-pointer text-white"
      >
        تایید
      </button>
    </div>
  );
};

export default ModalFooter;
