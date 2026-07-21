import clsx from "clsx";

const Pagination = ({
  currentPage,
  setCurrentPage,
  itemCount,
  itemsPerPage,
  setItemsPerPage,
}) => {
  const pagesCount = Math.ceil(itemCount / itemsPerPage);
  const changePage = (pageNumber) => setCurrentPage(pageNumber);

  const renderPageNumber = () => {
    const pageNumbers = [];
    for (let index = 1; index <= pagesCount; index++) {
      pageNumbers.push(
        <button
          className={clsx("pagination-number-button", {
            "active-tab": index === currentPage,
          })}
          key={index}
          onClick={() => changePage(index)}
        >
          {index}
        </button>,
      );
    }
    return pageNumbers;
  };
  return (
    <div className="pagination">
      <div>
        <select
          value={itemsPerPage}
          className="input-style ml-5"
          onChange={(e) => {
            setItemsPerPage(Number(e.target.value));
            setCurrentPage(1);
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
      </div>
      <div className="flex items-center gap-1">
        <button
          disabled={currentPage === 1}
          className={clsx("pagination-button", {
            "pages-ended": currentPage === 1,
          })}
          onClick={() => changePage(currentPage - 1)}
        >
          قبلی
        </button>
        {renderPageNumber()}
        <button
          disabled={currentPage === pagesCount}
          className={clsx("pagination-button", {
            "pages-ended": currentPage === pagesCount,
          })}
          onClick={() => changePage(currentPage + 1)}
        >
          بعدی
        </button>
      </div>
    </div>
  );
};

export default Pagination;
