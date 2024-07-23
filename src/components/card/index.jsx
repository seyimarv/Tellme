import { useState, useCallback } from "react";
import { InteractionButton } from "../button";
import { FaRegComment, FaRegThumbsUp } from "react-icons/fa";

const BaseCard = ({ image, title, excerpt, likes, comments, onHover }) => {
  return (
    <div className="relative bg-tertiary border border-border p-2 rounded-lg min-w-64 max-w-72 flex flex-col shrink-0 cursor-pointer overflow-hidden">
      <div>
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover rounded-lg mb-2"
        />
      </div>
      <h4 className={`font-bold mb-2 duration-300 ${excerpt && "text-sm"}`}>
        {title}
      </h4>
      <div className="flex flex-col gap-1">
        <div className="flex gap-2">
          <InteractionButton interactions={likes} small>
            <FaRegThumbsUp />
          </InteractionButton>
          <InteractionButton interactions={comments} small>
            <FaRegComment />
          </InteractionButton>
        </div>
        {excerpt && (
          <div className="">
            <p className="text-xs">{excerpt}</p>
          </div>
        )}
      </div>
    </div>
  );
};

const RevealedCard = ({ image, title, excerpt, isHovered }) => {
  return (
    <div
      className={`absolute top-0 left-0 w-full h-full transition-all  duration-300 delay-100 linear ${
        isHovered ? "scale-125 opacity-100 z-40" : "scale-100 opacity-0 z-10"
      }`}
      style={{
        transformOrigin: "inherit",
      }}
    >
      <BaseCard image={image} title={title} excerpt={excerpt} />
    </div>
  );
};

const Card = ({ image, title, excerpt, likes, comments }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
  }, []);

  return (
    <div
      className="relative origin-[50%_150%] first:origin-[0%_150%]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <BaseCard image={image} title={title} likes={likes} comments={comments} />
      <RevealedCard
        image={image}
        title={title}
        excerpt={excerpt}
        likes={likes}
        comments={comments}
        isHovered={isHovered}
      />
    </div>
  );
};

export default Card;
