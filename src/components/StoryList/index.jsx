import Card from "../Card";
import Image from "../../assets/love.jpg";
import Pagination from "../Pagination";

const StoryList = () => {
  return (
    <div className="container my-10 mx-5 max-w-full">
      <div className="flex max-w-[98%] justify-between items-center mb-5">
        <h4 className="text-3xl font-medium">Top stories</h4>
        <Pagination />
      </div>
      <div className="flex gap-6">
        <Card
          image={Image}
          title={"The magnificient"}
          excerpt={
            "In the heart of the ancient forest, where sunlight barely kissed the ground and shadows danced like whispering spirits, Elara discovered the old, weathered map. She had stumbled upon it hidden inside a hollow tree, wrapped in a faded piece of silk."
          }
        />
        <Card
          image={Image}
          title={"The magnificient"}
          excerpt={
            "In the heart of the ancient forest, where sunlight barely kissed the ground and shadows danced like whispering spirits, Elara discovered the old, weathered map. She had stumbled upon it hidden inside a hollow tree, wrapped in a faded piece of silk."
          }
        />
        <Card
          image={Image}
          title={"The magnificient"}
          excerpt={
            "In the heart of the ancient forest, where sunlight barely kissed the ground and shadows danced like whispering spirits, Elara discovered the old, weathered map. She had stumbled upon it hidden inside a hollow tree, wrapped in a faded piece of silk."
          }
        />
        <Card
          image={Image}
          title={"The magnificient"}
          excerpt={
            "In the heart of the ancient forest, where sunlight barely kissed the ground and shadows danced like whispering spirits, Elara discovered the old, weathered map. She had stumbled upon it hidden inside a hollow tree, wrapped in a faded piece of silk."
          }
        />
         <Card
          image={Image}
          title={"The magnificient"}
          excerpt={
            "In the heart of the ancient forest, where sunlight barely kissed the ground and shadows danced like whispering spirits, Elara discovered the old, weathered map. She had stumbled upon it hidden inside a hollow tree, wrapped in a faded piece of silk."
          }
        />
         <Card
          image={Image}
          title={"The magnificient"}
          excerpt={
            "In the heart of the ancient forest, where sunlight barely kissed the ground and shadows danced like whispering spirits, Elara discovered the old, weathered map. She had stumbled upon it hidden inside a hollow tree, wrapped in a faded piece of silk."
          }
        />
      </div>
    </div>
  );
};

export default StoryList;
