import clsx from "clsx";

const UsersPagination = ({ table }) => {
  return (
    <div className="pagination">
      <select
        className="ml-5 outline-0 cursor-pointer border border-color dark:border-gray-700 px-2 py-1 rounded-lg"
        value={table.getState().pagination.pageSize}
        onChange={(e) => {
          table.setPageSize(Number(e.target.value));
          localStorage.setItem(
            "usersPerPage",
            JSON.stringify(Number(e.target.value)),
          );
        }}
      >
        <option className="dark:text-white dark:bg-dark-primary" value={5}>
          5
        </option>
        <option className="dark:text-white dark:bg-dark-primary" value={10}>
          10
        </option>
        <option className="dark:text-white dark:bg-dark-primary" value={20}>
          20
        </option>
        <option className="dark:text-white dark:bg-dark-primary" value={50}>
          50
        </option>
        <option className="dark:text-white dark:bg-dark-primary" value={100}>
          100
        </option>
      </select>
      <button
        className={clsx("pagination-button", {
          "pages-ended": 1 === table.getState().pagination.pageIndex + 1,
        })}
        disabled={!table.getCanPreviousPage()}
        onClick={() => table.previousPage()}
      >
        قبلی
      </button>
      {Array.from({ length: table.getPageCount() }, (_, index) => index).map(
        (page) => (
          <button
            key={page}
            onClick={() => table.setPageIndex(page)}
            className={clsx("pagination-number-button", {
              "active-tab": table.getState().pagination.pageIndex === page,
            })}
          >
            {page + 1}
          </button>
        ),
      )}
      <button
        className={clsx("pagination-button", {
          "pages-ended":
            table.getPageCount() === table.getState().pagination.pageIndex + 1,
        })}
        disabled={!table.getCanNextPage()}
        onClick={() => table.nextPage()}
      >
        بعدی
      </button>
    </div>
  );
};

export default UsersPagination;
