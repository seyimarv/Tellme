import loveImage from "../../../assets/love.jpg";
import WarImage from "../../../assets/war.jpg";
import HorrorImage from "../../../assets/horror.jpg";
import lifeImage from "../../../assets/life.jpg";

const stories = [
  {
    genre: "Life",
    title: "The Journey Within",
    src: lifeImage,
  },
  {
    genre: "Love",
    title: "Whispers of the Heart",
    src: loveImage,
  },
  {
    genre: "War",
    title: "Battles of Valor",
    src: HorrorImage,
  },
  {
    genre: "Horror",
    title: "Shadows in the Dark",
    src: WarImage,
  },
];

const Featured = () => {
  return (
    <div className="my-40 text-primary container text-center">
      <h4 className="text-5xl mb-5">Example Stories</h4>
      <p className="max-w-md mx-auto">
        Have a story to share? Prepare to shine. With our versatile platform,
        every tale has the chance to dazzle.
      </p>
      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
        {stories.map((story, index) => (
          <div key={index} className="relative h-[600px] w-full">
            <img
              src={story.src}
              alt={story.title}
              className="w-full h-full top-0 object-cover z-0"
            />
            <div className="absolute inset-0 bg-primary bg-opacity-35"></div>
            <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-10 whitespace-nowrap">
              <p className="text-xl">{story.genre}</p>
              <h3 className="text-3xl font-bold mb-2">{story.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
