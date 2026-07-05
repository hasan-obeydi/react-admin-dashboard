const ModalFooter = ({ toggle }) => {
  return (
    <div className="border-t border-color dark:border-gray-700 p-4 mt-4 justify-end flex gap-2">
      <button
        onClick={() => toggle()}
        className="py-2 px-4 rounded-lg hover:bg-gray-200 dark:hover:bg-dark-primary duration-200 cursor-pointer border border-primary"
      >
        انصراف
      </button>
      <button
        onClick={() => toggle()}
        className="py-2 px-4 bg-gradiant hover:opacity-60 duration-200 rounded-lg cursor-pointer text-white"
      >
        تایید
      </button>
    </div>
  );
};

export default ModalFooter;
