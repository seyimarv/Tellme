import { useEffect, useState } from "react";
import Button from "../button";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import useMatchesScreenSize from "../../Hooks/useMatchesScreenSize";
import breakpoints from "../../utils/breakpoints";

const PageList = ({ itemsCount, currentPage }) => {
  return (
    <div className="flex w-fit gap-1 mx-5 md:mx-0">
      {itemsCount.map((item, index) => (
        <div key={index}>
          <div
            className={`w-[10px] h-[2px] md:w-[16px] md:h-[4px] rounded-sm ${
              index + 1 == currentPage ? "bg-accent" : " bg-tertiary"
            }`}
          ></div>
        </div>
      ))}
    </div>
  );
};

const Pagination = ({ currentPage, onPageChange, count = 3 }) => {
  const isMobile = useMatchesScreenSize(breakpoints.md);
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
    <>
      {isMobile ? (
        <PageList itemsCount={itemsCount} currentPage={currentPage} />
      ) : (
        <div className="flex items-center gap-1 bg-secondary border border-[#515151] p-2 rounded-lg w-fit">
          <Button variant="secondary" className="text-lg py-3" onClick={onPrev}>
            <FaArrowLeft />
          </Button>
          <PageList itemsCount={itemsCount} currentPage={currentPage} />
          <Button variant="secondary" className="text-lg py-3" onClick={onNext}>
            <FaArrowRight />
          </Button>
        </div>
      )}
    </>
  );
};

export default Pagination;
