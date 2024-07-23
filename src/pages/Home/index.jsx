import { useEffect, useState } from "react";
import HorrorImage from "../../assets/horror.jpg";
import Pagination from "../../components/Pagination";
import Button, { InteractionButton } from "../../components/button";
import { FaReadme, FaRegThumbsUp, FaRegComment } from "react-icons/fa";
import usePagination from "../../Hooks/usePagination";
import StoryList from "../../components/StoryList";

const Home = () => {
  const { currentPage, onPageChange, count, setTotalCount } = usePagination();

  useEffect(() => {
    setTotalCount(2);
  }, []);
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
                <Button className="bg-white text-darker text-lg" Icon={FaReadme}>
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
      {/* <Pagination
        currentPage={currentPage}
        count={count}
        onPageChange={onPageChange}
        infinite
      /> */}
      <StoryList />
      <div>
        heh
      </div>
    </div>
  );
};

export default Home;
