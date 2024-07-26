import { useEffect, useState } from "react";
import Button from "../button";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const Pagination = ({ currentPage, onPageChange, count = 3 }) => {
  const itemsCount = Array.from({ length: count }, (_, index) => index + 1);
  console.log(count, itemsCount)

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
    <div className="flex items-center gap-1 bg-secondary border border-[#515151] p-2 rounded-lg w-fit">
      <Button variant="secondary" className="text-lg py-3" onClick={onPrev}>
        <FaArrowLeft />
      </Button>
      {itemsCount.map((item, index) => (
        <div key={index} className="flex gap-[0px]">
          <div
            className={`w-[16px] h-[4px] rounded-sm ${
              index + 1 == currentPage ? "bg-accent" : " bg-tertiary"
            }`}
          ></div>
        </div>
      ))}
      <Button variant="secondary" className="text-lg py-3" onClick={onNext}>
        <FaArrowRight />
      </Button>
    </div>
  );
};

export default Pagination;
