import { useState } from "react";
import Sidebar from "../Sidebar";

const MainLayout = ({ children }) => {
  const [isSidebarToggled, setIsSidebarToggled] = useState(false);
  const fullWidth = 240;
  const collapsedWidth = 80;

  return (
    <div className="flex text-primary relative  h-screen">
      <Sidebar
        isToggled={isSidebarToggled}
        setIsToggled={setIsSidebarToggled}
        fullWidth={fullWidth}
        collapsedWidth={collapsedWidth}
      />
      <div
        className={`transition-all duration-500 w-full z-1 h-full overflow-x-hidden`}
        style={{
          transform: `translateX(${
            isSidebarToggled ? collapsedWidth : fullWidth
          }px)`,
          width: `calc(100% - ${
            isSidebarToggled ? collapsedWidth : fullWidth
          }px)`,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
