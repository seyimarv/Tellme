import { useState } from "react";

const usePagination = () => {
  const [count, setTotalCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  return { currentPage, onPageChange, count, setTotalCount };
};

export default usePagination;
