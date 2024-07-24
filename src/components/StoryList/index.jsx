import Card from "../Card";
import Image from "../../assets/love.jpg";
import Pagination from "../Pagination";
import React, { useRef, useState, useEffect, useCallback } from "react";
import usePagination from "../../Hooks/usePagination";

const cardData = [
  {
    image: Image, // Replace with actual image import or path
    title: "The Enchanted Forest",
    excerpt:
      "In a mystical forest, a hidden map was found in a hollow tree. This map is said to lead to a magical realm lost in time.",
  },
  {
    image: Image, // Replace with actual image import or path
    title: "The Lost Kingdom",
    excerpt:
      "Elara stumbled upon an old map while exploring. It points the way to a forgotten kingdom shrouded in legend.",
  },
  {
    image: Image, // Replace with actual image import or path
    title: "The Ancient Secret",
    excerpt:
      "A weathered map discovered in the forest reveals ancient secrets. Its origins trace back to a civilization long gone.",
  },
  {
    image: Image, // Replace with actual image import or path
    title: "The Hidden Treasure",
    excerpt:
      "Elara’s discovery of a mysterious map sets off a thrilling quest. The treasure it points to has been lost for centuries.",
  },
  {
    image: Image, // Replace with actual image import or path
    title: "The Forgotten Path",
    excerpt:
      "A hidden map found in an old tree unveils a long-lost path. Following it could lead to unimaginable discoveries.",
  },
  {
    image: Image, // Replace with actual image import or path
    title: "The Mysterious Map",
    excerpt:
      "A faded map leads Elara to a secret buried deep within the forest. Its origins and purpose remain shrouded in mystery.",
  },
  {
    image: Image, // Replace with actual image import or path
    title: "The Secret Society",
    excerpt:
      "A hidden map was discovered in the archives of a secret society. Its clues hint at a powerful artifact concealed for centuries.",
  },
  {
    image: Image, // Replace with actual image import or path
    title: "The Lost Relic",
    excerpt:
      "An ancient relic is said to be hidden on the path marked by a mysterious map. Finding it could alter the course of history.",
  },
  {
    image: Image, // Replace with actual image import or path
    title: "The Forgotten Lore",
    excerpt:
      "The map found in the old library reveals forgotten lore of a bygone era. Its secrets could change our understanding of the past.",
  },
  {
    image: Image, // Replace with actual image import or path
    title: "The Hidden Realm",
    excerpt:
      "A map leading to a hidden realm was discovered beneath the old ruins. This realm is said to be filled with ancient magic and wonder.",
  },
  {
    image: Image, // Replace with actual image import or path
    title: "The Legendary Quest",
    excerpt:
      "A legendary quest begins with a map discovered in the depths of a hidden cave. The journey promises both danger and great rewards.",
  },
  {
    image: Image, // Replace with actual image import or path
    title: "The Ancient Prophecy",
    excerpt:
      "The map holds the key to an ancient prophecy that has been lost for ages. Its discovery could fulfill a long-forgotten destiny.",
  },
  {
    image: Image, // Replace with actual image import or path
    title: "The Mystic Journey",
    excerpt:
      "A mystic journey is foretold by a map found in an enchanted grove. The journey promises to uncover truths hidden by time.",
  },
  {
    image: Image, // Replace with actual image import or path
    title: "The Enigmatic Artifact",
    excerpt:
      "An enigmatic artifact is said to be hidden, with clues scattered across an old map. Finding it requires solving ancient riddles.",
  },
  {
    image: Image, // Replace with actual image import or path
    title: "The Celestial Map",
    excerpt:
      "The celestial map discovered among the stars reveals pathways to otherworldly places. It hints at secrets beyond our world.",
  },
  {
    image: Image, // Replace with actual image import or path
    title: "The Forgotten Chronicles",
    excerpt:
      "The map found in the dusty chronicles reveals a forgotten chapter of history. Its story could reshape our understanding of the past.",
  },
  {
    image: Image, // Replace with actual image import or path
    title: "The Remembered Chronicles",
    excerpt:
      "The map found in the dusty chronicles reveals a forgotten chapter of history. Its story could reshape our understanding of the past.",
  },
];

const StoryList = () => {
  const containerRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const { currentPage, onPageChange, count, setTotalCount } = usePagination();

  useEffect(() => {
    const updateCardsPerRow = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const cardElement = containerRef.current.querySelector("div");
        if (cardElement) {
          const cardWidth = cardElement.offsetWidth;
          const cardStyle = window.getComputedStyle(cardElement);
          const cardMarginRight = parseFloat(cardStyle.marginRight);

          // Total width of a card including margin
          const totalCardWidth = cardWidth + cardMarginRight;

          // Calculate the number of fully visible cards per row
          const cardsPerRow = Math.floor(containerWidth / totalCardWidth);

          console.log(cardsPerRow);
          setTotalCount(Math.ceil(cardData.length / cardsPerRow));
        }
      }
    };
    updateCardsPerRow();
    window.addEventListener("resize", updateCardsPerRow);

    return () => {
      window.removeEventListener("resize", updateCardsPerRow);
    };
  }, [cardData.length, setTotalCount]);

  useEffect(() => {
    if (containerRef.current) {
      // Select the first card element
      const cardElement = containerRef.current.querySelector("div");

      if (cardElement) {
        // Get the card's width
        const cardWidth = cardElement.offsetWidth;

        // Get the computed styles of the parent container
        const parentStyle = window.getComputedStyle(containerRef.current);

        // Extract the row gap (assuming gap or rowGap is used)
        const rowGap = parseFloat(parentStyle.gap || parentStyle.rowGap || 0);

        // Total width of a card including the gap
        const totalCardWidth = cardWidth + rowGap;

        // Calculate how many cards fit per page, ensure at least one card is shown
        const cardsPerPage = Math.max(
          1,
          Math.floor(
            (containerRef.current.offsetWidth + rowGap) / totalCardWidth
          )
        );

        // Calculate the maximum possible scroll position to prevent whitespace
        const maxScrollPosition = Math.max(
          0,
          containerRef.current.scrollWidth - containerRef.current.offsetWidth
        );

        // Calculate the new scroll position based on current page
        let newScrollPosition =
          (currentPage - 1) * cardsPerPage * totalCardWidth;

        // Ensure the new scroll position does not exceed the maximum
        if (newScrollPosition > maxScrollPosition) {
          newScrollPosition = maxScrollPosition + cardWidth / 10;
        }

        // Update state and transform the container
        setScrollPosition(newScrollPosition);
        containerRef.current.style.transform = `translateX(-${newScrollPosition}px)`;
      }
    }
  }, [currentPage, cardData.length]);

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
        className="flex gap-6 transition-transform duration-300 linear"
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
