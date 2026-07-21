// import TableFilter from "./TableFilter";
import TableSearch from "./TableSearch";

const TableHeader = ({ header, setCurrentPage }) => {
  const { title, button } = header;
  return (
    <div className="flex items-center justify-between mb-4 px-4">
      <h3 className="text-xl">{title}</h3>
      {typeof button === "function" ? (
        <div className="flex items-center gap-2">{button()}</div>
      ) : (
        <div className="flex items-center gap-4">
          {/* <TableFilter /> */}
          <TableSearch header={header} setCurrentPage={setCurrentPage} />
        </div>
      )}
    </div>
  );
};

export default TableHeader;
