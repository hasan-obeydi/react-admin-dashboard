import Pagination from "../Pagination/Pagination";
import TableHeader from "./components/TableHeader";

const Table = ({
  header = { title: "لیست ایتم ها", button: undefined },
  // loading,
  children,
  pagination = { items: null, setPaginatedItems: null, itemsPerPage: 10 },
}) => {

  return (
    <div className="w-full bg-white dark:bg-dark-primary rounded-lg shadow-md py-4 mt-8 border border-color dark:border-gray-700">
      <TableHeader header={header} />
      <div>{children}</div>
      <Pagination
        items={pagination.items}
        setPaginatedItems={pagination.setPaginatedItems}
        itemsPerPage={pagination.itemsPerPage}
      />
    </div>
  );
};

export default Table;
