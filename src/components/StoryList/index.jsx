import useMatchesScreenSize from "../../Hooks/useMatchesScreenSize";
import breakpoints from "../../utils/breakpoints";
import Card from "../Card";
import Pagination from "../Pagination";
import React, { useRef, useState, useEffect, useCallback } from "react";

function debounce(fn, delay) {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}

const StoryList = ({
  totalDataLength,
  cardData,
  currentPage,
  onPageChange,
  setTotalCount,
  count,
  sectionLabel,
}) => {
  const isMobile = useMatchesScreenSize(breakpoints.md);
  const containerRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [cardsPerRow, setCardsPerRow] = useState(1);

  const calculateCardDimensions = () => {
    if (!containerRef.current)
      return { cardWidth: 0, rowGap: 0, totalCardWidth: 0 };

    const cardElement = containerRef.current.querySelector("div");
    if (!cardElement) return { cardWidth: 0, rowGap: 0, totalCardWidth: 0 };

    const cardWidth = cardElement.offsetWidth;
    const parentStyle = window.getComputedStyle(containerRef.current);
    const rowGap = parseFloat(parentStyle.gap || parentStyle.rowGap || 0);

    return {
      cardWidth,
      rowGap,
      totalCardWidth: cardWidth + rowGap,
    };
  };

  const updateCardsPerRow = () => {
    const { totalCardWidth } = calculateCardDimensions();
    if (!totalCardWidth) return;

    const containerWidth = containerRef.current.offsetWidth;
    const cardsPerRow = Math.floor(containerWidth / totalCardWidth);
    setCardsPerRow(cardsPerRow);
    setTotalCount(Math.ceil(totalDataLength / cardsPerRow));
  };

  const updateScrollPosition = () => {
    const { cardWidth, totalCardWidth } = calculateCardDimensions();
    if (!totalCardWidth) return;

    const containerWidth = containerRef.current.offsetWidth;
    const cardsPerPage = Math.max(
      1,
      Math.floor((containerWidth + totalCardWidth - cardWidth) / totalCardWidth)
    );

    const maxScrollPosition = Math.max(
      0,
      containerRef.current.scrollWidth - containerWidth
    );

    let newScrollPosition = (currentPage - 1) * cardsPerPage * totalCardWidth;

    if (newScrollPosition > maxScrollPosition) {
      newScrollPosition = maxScrollPosition + cardWidth / 10;
    }

    setScrollPosition(newScrollPosition);
    containerRef.current.style.transform = `translateX(-${newScrollPosition}px)`;
  };

  const handleResize = () => {
    updateCardsPerRow();
    updateScrollPosition();
  };
  useEffect(() => {
    updateCardsPerRow();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [cardData?.length, setTotalCount]);

  useEffect(() => {
    if (isMobile) {
      return;
    }
    updateScrollPosition();
  }, [currentPage, cardData?.length, isMobile]);

  useEffect(() => {
    if (!isMobile) return;
    const container = containerRef.current;
    if (!container) return;

    const { totalCardWidth } = calculateCardDimensions();

    const handleScroll = debounce(() => {
      if (container) {
        const scrollLeft = container.scrollLeft;
        const totalWidth = container.scrollWidth;
        const visibleCardWidth = totalCardWidth * cardsPerRow;

        // Calculate current page
        const currentPage = Math.floor(
          (scrollLeft + container.offsetWidth) / visibleCardWidth
        );

        // Ensure the currentPage does not exceed the total number of pages
        const totalPages = Math.ceil(totalWidth / visibleCardWidth);
        const normalizedPage = Math.min(currentPage, totalPages);
        onPageChange(normalizedPage);
      }
    }, 200); // 200ms debounce delay

    container.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, [onPageChange, cardsPerRow]);

  console.log(currentPage);

  return (
    <div className="container my-10 md:mx-5 max-w-full">
      <div className="flex md:max-w-[98%] justify-between items-center mb-5">
        <h4 className="text-3xl font-medium ml-5 md:ml-0">{sectionLabel}</h4>
        <Pagination
          count={count}
          onPageChange={onPageChange}
          currentPage={currentPage}
        />
      </div>
      <div
        className="flex gap-6 transition-transform duration-300 linear px-5 md:px-0 overflow-x-scroll overflow-y-hidden scrollbar-hidden md:overflow-visible"
        ref={containerRef}
        // onTouchStart={handleTouchStart}
        // onTouchMove={handleTouchMove}
      >
        {cardData.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            title={card.title}
            excerpt={card.excerpt}
          />
        ))}
      </div>
    </div>
  );
};

export default StoryList;
