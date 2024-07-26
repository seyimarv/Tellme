import Sidebar from ".";
import { useRef } from "react";
import useOnClickOutside from "../../Hooks/useOnClickOutside";

const MobileSidebar = ({
  isToggled,
  fullWidth,
  collapsedWidth,
  setIsToggled,
  isOpen,
  setIsOpen,
}) => {
  const onClose = () => {
    setIsOpen(false);
  };
  const ref = useRef();
  useOnClickOutside(ref, onClose);
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={onClose}
        />
      )}
      <div
        className={`fixed top-0 left-0 h-full z-40 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:hidden w-[${fullWidth}px]`}
        ref={ref}
      >
        <Sidebar
          isToggled={isToggled}
          setIsToggled={setIsToggled}
          fullWidth={fullWidth}
          collapsedWidth={collapsedWidth}
        />
      </div>
    </>
  );
};

export default MobileSidebar;
