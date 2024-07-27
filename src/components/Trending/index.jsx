import usePagination from "../../Hooks/usePagination";
import StoryList from "../StoryList";
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

const Trending = () => {
  const { currentPage, onPageChange, count, setTotalCount } = usePagination();

  return (
    <StoryList
      totalDataLength={cardData.length}
      cardData={cardData}
      currentPage={currentPage}
      onPageChange={onPageChange}
      setTotalCount={setTotalCount}
      count={count}
      sectionLabel={"Trending"}
    />
  );
};

export default Trending;
