import { useEffect, useRef } from "react";
import "./marquee.css";
/* eslint-disable react/prop-types */
const Marquee = ({ children, speed = 20 }) => {
  const scrollerRef = useRef(null);

  useEffect(() => {
    const scrollerInner = scrollerRef.current.querySelector(".marquee");
    const scrollerContent = Array.from(scrollerInner.children);

    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", "true");
      scrollerInner.appendChild(duplicatedItem);
    });
  }, []);
  return (
    <div className="container">
      <div className="flex justify-between marquee-container" ref={scrollerRef}>
        <div
          className="marquee"
          style={{ animation: `marquee ${speed}s linear infinite` }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
