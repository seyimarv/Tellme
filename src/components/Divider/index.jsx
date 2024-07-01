import React from "react";

const Divider = ({ className }) => {
  return (
    <div
      className={`flex-grow border-t border-secondaryDark ${className}`}
    ></div>
  );
};

export default Divider;
