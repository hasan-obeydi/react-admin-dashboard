import Pagination from "../Pagination/Pagination";
import TableHeader from "./components/TableHeader";

const Table = ({
  header = { title: "لیست ایتم ها", button: undefined },
  children,
  setCurrentPage,
  currentPage,
  itemsPerPage,
  setItemsPerPage,
  itemCount,
}) => {
  return (
    <div className="w-full bg-white dark:bg-dark-primary rounded-lg shadow-md py-4 mt-8 border border-color dark:border-gray-700">
      <TableHeader header={header} setCurrentPage={setCurrentPage} />
      <div>{children}</div>
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        itemsPerPage={itemsPerPage}
        setItemsPerPage={setItemsPerPage}
        itemCount={itemCount}
      />
    </div>
  );
};

export default Table;
