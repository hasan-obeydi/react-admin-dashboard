import clsx from "clsx";
import { useEffect, useState } from "react";

const Pagination = ({ items, setPaginatedItems, itemsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pagesCount = Math.ceil(items.length / itemsPerPage);
  const changePage = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedItems = [...items].reverse().slice(startIndex, endIndex);
    setPaginatedItems(paginatedItems);
  }, [items, setPaginatedItems, currentPage, itemsPerPage]);

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
  );
};

export default Pagination;
