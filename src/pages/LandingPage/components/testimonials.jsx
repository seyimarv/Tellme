// import Marquee from "../../../components/Marquee";

import QuotesIcon from "../../../assets/quotes";
import Marquee from "../../../components/Marquee";

const testimonials = [
  {
    name: "Alice Johnson",
    testimonial:
      "This platform has reignited my passion for storytelling. The community is incredibly supportive and inspiring!",
  },
  {
    name: "Mark Smith",
    testimonial:
      "I’ve discovered so many amazing stories here. It’s my go-to place for reading and sharing my own tales.",
  },
  {
    name: "Samantha Lee",
    testimonial:
      "The writing challenges are so much fun and have really helped me improve my skills. I love being a part of this community!",
  },
  {
    name: "David Brown",
    testimonial:
      "The tools provided by this platform are fantastic. They’ve made it so easy to bring my stories to life.",
  },
  {
    name: "Laura Wilson",
    testimonial:
      "This website has a wonderful selection of stories from diverse genres. There’s always something new and exciting to read.",
  },
  {
    name: "Michael Davis",
    testimonial:
      "The support from other writers and readers is amazing. This community has helped me grow as a writer in ways I never expected.",
  },
];

const Testimonials = () => {
  return (
    <div className="text-primary my-40 container">
      <h4 className="text-5xl mb-10 text-center">Voices of Our Community</h4>
      <Marquee speed={150}>
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-quaternary w-[300px] py-8 px-6 text-left rounded-xl flex gap-6"
          >
            <QuotesIcon />
            <div>
              <p className="text-sm mb-4">{testimonial.testimonial}</p>
              <p className="font-bold text-sm">{testimonial.name}</p>
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Testimonials;
