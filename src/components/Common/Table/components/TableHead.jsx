const TableHead = ({ children }) => {
  return (
    <div className="flex items-center gap-2 *:flex-1 grow *:shrink text-sm *:font-semibold bg-linear-to-r from-sky-500 to-indigo-500 p-3 px-3 mt-6 *:text-white">
      {children}
    </div>
  );
};

export default TableHead;
