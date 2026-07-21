import { useMemo } from "react";

const usePagination = ({ items, searchInput, currentPage, itemsPerPage }) => {
  const filteredProducts = useMemo(() => {
    return items.filter((item) =>
      item.title.toLowerCase().includes(searchInput.toLowerCase()),
    );
  }, [items, searchInput]);
  const paginationItems = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    return [...filteredProducts].reverse().slice(startIndex, endIndex);
  }, [currentPage, itemsPerPage, filteredProducts]);
  return paginationItems;
};

export default usePagination;
