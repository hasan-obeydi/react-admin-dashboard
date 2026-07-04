import TableHeader from "./components/TableHeader";

const Table = ({
  header = { title: "لیست ایتم ها", button: undefined },
  // loading,
  children,
}) => {
  return (
    <div className="w-full bg-white dark:bg-dark-primary rounded-lg shadow-md pt-4 mt-8 border border-color dark:border-gray-700">
      <TableHeader header={header} />
      <div>{children}</div>
    </div>
  );
};

export default Table;
