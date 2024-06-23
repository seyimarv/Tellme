/* eslint-disable react/prop-types */
import About1 from "../../../assets/About.jpg";
import About2 from "../../../assets/About.jpg";
const Detail = ({ title, subtitle, content }) => {
  return (
    <div className="text-left flex-1">
      <p className="text-sm mb-4 font-semibold">{title}</p>
      <p className="text-5xl mb-5">{subtitle}</p>
      <p className="mb-12">{content}</p>
      <a className="py-2 border-b-2 border-button uppercase tracking-widest">
        Explore Stories
      </a>
    </div>
  );
};

const AboutSection = ({
  direction = "left",
  title,
  subtitle,
  content,
  imgsrc,
}) => {
  return (
    <div className="text-primary flex justify-between gap-20 container">
      {direction === "left" ? (
        <>
          <Detail title={title} subtitle={subtitle} content={content} />
          <div className="flex-1">
            <img src={imgsrc} className="w-full object-cover h-[450px]" />
          </div>
        </>
      ) : (
        <>
          <div className="flex-1">
            <img src={imgsrc} className="w-full object-cover h-[450px]" />
          </div>
          <Detail title={title} subtitle={subtitle} content={content} />
        </>
      )}
    </div>
  );
};

const About = () => {
  return (
    <div>
      <div className="flex flex-col gap-20">
        <AboutSection
          title="UNLOCK ENDLESS STORIES"
          subtitle="EXCLUSIVE ACCESS"
          content="From early access to the latest stories by renowned authors to special events and webinars with the creators: our members enjoy unparalleled privileges in the storytelling world."
          imgsrc={About1}
        />
        <AboutSection
          title="TAILORED TO YOU"
          subtitle="PERSONALIZED"
          content="Receive customized story recommendations based on your reading preferences, and create your own reading lists. Our intelligent algorithms ensure you always find stories that resonate with you."
          direction="right"
          imgsrc={About2}
        />
      </div>
      {/* <div className="bg-tertiary py-10 my-20">
        <AboutSection
          title="TAILORED TO YOU"
          subtitle="PERSONALIZED"
          content="Receive customized story recommendations based on your reading preferences, and create your own reading lists. Our intelligent algorithms ensure you always find stories that resonate with you."
          direction="left"
          imgsrc={About2}
        />
      </div> */}
    </div>
  );
};

export default About;
