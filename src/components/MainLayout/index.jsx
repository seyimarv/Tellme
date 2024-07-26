import { useState } from "react";
import Sidebar from "../Sidebar";
import useMatchesSceenSize from "../../Hooks/useMatchesScreenSize";
import breakpoints from "../../utils/breakpoints";
import MobileSidebar from "../Sidebar/MobileSidebar";

const MainLayout = ({ children }) => {
  const [isSidebarToggled, setIsSidebarToggled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const isMobile = useMatchesSceenSize(breakpoints.md);
  const fullWidth = 240;
  const collapsedWidth = 80;
  return (
    <div className="flex text-primary relative h-screen w-screen">
      {isMobile ? (
        <MobileSidebar
          isToggled={isSidebarToggled}
          setIsToggled={setIsSidebarToggled}
          fullWidth={fullWidth}
          collapsedWidth={collapsedWidth}
          isOpen={isSidebarOpen}
          setIsOpen={setIsSidebarOpen}
        />
      ) : (
        <Sidebar
          isToggled={isSidebarToggled}
          setIsToggled={setIsSidebarToggled}
          fullWidth={fullWidth}
          collapsedWidth={collapsedWidth}
        />
      )}
      <div
        className={`transition-all duration-500 w-full z-1 h-full overflow-x-hidden`}
        style={{
          transform: `translateX(${
            isMobile ? 0 : isSidebarToggled ? collapsedWidth : fullWidth
          }px)`,
          width: `calc(100% - ${
            isMobile ? 0 : isSidebarToggled ? collapsedWidth : fullWidth
          }px)`,
        }}
      >
        {/* <button
          onClick={() => setIsSidebarOpen(true)}
          className="absolute top-2 left-2 relative z-1000"
        >
          Open
        </button> */}
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
