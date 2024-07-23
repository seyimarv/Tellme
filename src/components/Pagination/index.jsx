import { useEffect, useState } from "react";
import Button from "../button";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const Pagination = ({ currentPage, onPageChange, count = 3 }) => {
  const itemsCount = Array.from({ length: count }, (_, index) => index + 1);

  const onNext = () => {
    if (currentPage === count) {
      onPageChange(1);
      return;
    }
    onPageChange(currentPage + 1);
  };

  const onPrev = () => {
    if (currentPage === 1) {
      onPageChange(count);
      return;
    }
    onPageChange(currentPage - 1);
  };

  return (
    <div className="flex items-center gap-2 bg-secondary border border-[#515151] p-3 rounded-lg w-fit">
      <Button variant="secondary" className="text-xl py-3" onClick={onPrev}>
        <FaArrowLeft />
      </Button>
      {itemsCount.map((item, index) => (
        <div key={index} className="flex gap-[0px]">
          <div
            className={`w-[18px] h-[4px] rounded-sm bg-tertiary ${
              index + 1 === currentPage && "bg-accent"
            }`}
          ></div>
        </div>
      ))}
      <Button variant="secondary" className="text-xl py-3" onClick={onNext}>
        <FaArrowRight />
      </Button>
    </div>
  );
};

export default Pagination;
