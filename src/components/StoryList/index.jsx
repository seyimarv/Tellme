import Card from "../Card";
import Pagination from "../Pagination";
import React, { useRef, useState, useEffect, useCallback } from "react";

const StoryList = ({
  totalDataLength,
  cardData,
  currentPage,
  onPageChange,
  setTotalCount,
  count,
}) => {
  const containerRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

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

    console.log(cardsPerRow);
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
    updateScrollPosition();
  }, [currentPage, cardData?.length]);

  return (
    <div className="container my-10 mx-5 max-w-full">
      <div className="flex max-w-[98%] justify-between items-center mb-5">
        <h4 className="text-3xl font-medium">Top stories</h4>
        <Pagination
          count={count}
          onPageChange={onPageChange}
          currentPage={currentPage}
        />
      </div>
      <div
        className="flex gap-6 transition-transform duration-300 linear overflow-x-scroll sm:overflow-x-visible"
        ref={containerRef}
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
