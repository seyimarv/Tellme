/* eslint-disable no-unused-vars */
import Header from "./components/header";
import HeroBackground from "../../assets/herobackground.png";
import GlobeImage from "../../assets/globe.webp";
import Button from "../../components/button";
import communityicon from "../../assets/community.webp";
import creativityicon from "../../assets/creativity.webp";
import sharingicon from "../../assets/sharing.webp";
import About from "./components/About";
import LogoList from "./components/logos";
import Featured from "./components/Featured";
import JoinUs from "./components/JoinUs";
import Testimonials from "./components/testimonials";

const AboutUsList = [
  {
    title: "Community-Driven Features",
    icon: communityicon, // Replace with actual icon name or path
    content:
      "Dive into a vibrant community where listeners and storytellers connect. Participate in discussions, join forums, and collaborate with other storytellers. Attend live events and webinars, enriching your storytelling journey with shared experiences and insights.",
  },
  {
    title: "Creative Freedom",
    icon: creativityicon, // Replace with actual icon name or path
    content:
      "Enhance your storytelling with advanced audio and visual tools. Add narration, sound effects, and background music. Integrate images, illustrations, and animations, creating dynamic and captivating stories with professional-quality results.",
  },
  {
    title: "Sharing Made Simple",
    icon: sharingicon, // Replace with actual icon name or path
    content:
      "Share your stories with ease, reaching anyone from close friends to global audiences. Customize privacy settings, promote stories on social media, and use analytics tools to track reader engagement and feedback.",
  },
  // {
  //   title: "Impact",
  //   icon: impacticon, // Replace with actual icon name or path
  //   content:
  //     "Sharing stories on our platform not only enriches lives but also broadens perspectives and fosters empathy.",
  // },
];

const Dashboard = () => {
  return (
    <div>
      <div
        className="relative w-full bg-no-repeat bg-cover bg-center pb-20 md:pb-0"
        style={{
          backgroundImage: `url(${HeroBackground})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="relative z-10 flex flex-col md:h-screen">
          <Header />
          <div className="flex flex-col justify-center absolute w-full h-[calc(100%-30rem)] top-1/2 -translate-y-1/2  my-auto">
            <div>
              <h4 className="text-7xl text-primary pt-20">
                Discover Untold Stories
              </h4>
              <p className="text-xl text-primary pt-2 max-w-screen-sm mx-auto">
                Explore narratives from around the globe, right at your
                fingertips.
              </p>
              <hr className="border-t border-button w-40 mx-auto mt-12" />
              <img
                src={GlobeImage}
                alt="Background"
                className="w-40 h-40 mx-auto mt-6"
              />
              <Button className="mt-12">Start your journey</Button>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-primary bg-opacity-60 z-negative"></div>
      </div>
      <div className="bg-tertiary py-10">
        <LogoList />
      </div>
      <div className="my-40 container mx-auto text-primary">
        <h4 className="text-5xl text-primary">Why our Stories</h4>
        <div className="flex md:flex-row flex-col flex-wrap gap-12 mt-10">
          {AboutUsList.map((item, index) => (
            <div key={index} className="flex-1 text-left">
              {/* <div className="flex justify-center items-center bg-quaternary p-2 rounded w-40 h-40  mx-auto mb-2">
                <img src={item.icon} alt={item.title} className="" />
              </div> */}
              <p className="text-lg font-bold mb-2">{item.title}</p>
              <p>{item.content}</p>
            </div>
          ))}
        </div>
        <Button className="mt-10">Start your journey</Button>
      </div>
      <About />
      <Featured />
      <JoinUs />
      <Testimonials />
    </div>
  );
};

export default Dashboard;
