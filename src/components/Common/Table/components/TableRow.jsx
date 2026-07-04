const TableRow = ({ children }) => {
  return (
    <div className="flex items-center gap-2 *:flex-1 grow *:shrink text-sm *:font-semibold py-2 px-3 even:bg-gray-200 dark:even:bg-gray-800 text-gray-700 dark:text-gray-300">
      {children}
    </div>
  );
};

export default TableRow;
