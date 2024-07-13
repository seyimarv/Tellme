import { useRef } from "react";
import { FaRegTimesCircle } from "react-icons/fa";
import useOnClickOutside from "../../Hooks/useOnClickOutside";

const Modal = ({ children, className, contentClassName, isOpen, onClose }) => {
  const ref = useRef();
  useOnClickOutside(ref, onClose);
  return (
    <>
      {isOpen && (
        <div
          className={`fixed w-full h-full top-0 left-0 flex items-center justify-center ${className}`}
        >
          <div
            className={`absolute w-full h-full top-0 left-0 bg-secondary bg-opacity-30 backdrop-blur-sm`}
          ></div>
          <div
            className={`relative bg-secondary max-w-md flex gap-2 m-auto text-primary p-4 rounded-xl items-start ${contentClassName}`}
            ref={ref}
          >
            <div className="p-3">{children}</div>
            <button className="" onClick={onClose}>
              <FaRegTimesCircle />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
