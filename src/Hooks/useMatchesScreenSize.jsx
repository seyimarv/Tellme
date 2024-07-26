import { useState, useEffect } from "react";

const useMatchesScreenSize = (screenSize) => {
  const [matches, setMatches] = useState(window.innerWidth < screenSize);

  const handleResize = () => {
    setMatches(window.innerWidth < screenSize);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [screenSize]);

  return matches;
};

export default useMatchesScreenSize;
