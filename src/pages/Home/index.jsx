import { useEffect, useState } from "react";
import HorrorImage from "../../assets/horror.jpg";
import Pagination from "../../components/Pagination";
import Button, { InteractionButton } from "../../components/button";
import { FaReadme, FaRegThumbsUp, FaRegComment } from "react-icons/fa";
import usePagination from "../../Hooks/usePagination";
import StoryList from "../../components/StoryList";
import Image from "../../assets/love.jpg";

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
  // {
  //   image: Image, // Replace with actual image import or path
  //   title: "The Remembered Chronicles",
  //   excerpt:
  //     "The map found in the dusty chronicles reveals a forgotten chapter of history. Its story could reshape our understanding of the past.",
  // },
];

const Home = () => {
  const { currentPage, onPageChange, count, setTotalCount } = usePagination();

  return (
    <div className="h-full">
      <div className="h-[95%] relative">
        <div className="absolute inset-0 bg-primary bg-opacity-50"></div>
        <img src={HorrorImage} className="w-full object-cover h-full" />
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2  flex text-center max-w-xl">
          <div>
            {/* <h4 className="text-2xl">Story of the day</h4> */}
            <div className="mt-40">
              <h4 className="text-3xl">The Enduring</h4>
              <p className="mt-4 text-gray-400">
                In the village of Everglade, the mysterious Enchanted Woods
                beckons the brave but rarely returns them unchanged. Young and
                spirited Elara ventures into the forest, driven by curiosity and
                legends of faeries, spirits, and hidden secrets. Guided by her
                lantern, she discovers an ancient tree and a moss-covered altar
                in a mystical clearing. A whispering voice and an ethereal
                figure.
              </p>
              <div className="flex gap-2 mt-4 justify-center">
                <Button
                  variant="tertiary"
                  Icon={FaReadme}
                >
                  Read now
                </Button>
                <InteractionButton interactions={"21.5k"}>
                  <FaRegThumbsUp />
                </InteractionButton>
                <InteractionButton interactions={"22.5k"}>
                  <FaRegComment />
                </InteractionButton>
              </div>
            </div>
          </div>
        </div>
      </div>
      <StoryList
        totalDataLength={cardData.length}
        cardData={cardData}
        currentPage={currentPage}
        onPageChange={onPageChange}
        setTotalCount={setTotalCount}
        count={count}
      />
      <div>heh</div>
    </div>
  );
};

export default Home;
