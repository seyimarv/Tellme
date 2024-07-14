import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { useLogoutMutation } from "../../redux/query/apiSlice";
import { useDispatch } from "react-redux";
import gsap from "gsap";
import { clearCurrentUser } from "../../redux/user/reducer";
import { navItems } from "../../utils/sidebar-items";
import {
  FaSignOutAlt,
  FaArrowCircleLeft,
  FaArrowCircleRight,
} from "react-icons/fa";
import logo from "../../assets/Logos/t-high-resolution-logo-white-transparent.png";
import Modal from "../Modal";
import Divider from "../Divider";
import Button from "../button";

const NavItem = ({ title, link, Img }) => {
  return (
    <div className="flex gap-2 p-2 items-center text-primary cursor-pointer text-md overflow-hidden">
      <div>{Img && <Img />}</div>
      <span>{title}</span>
    </div>
  );
};

const Sidebar = () => {
  const dispatch = useDispatch();
  const [logout, { isLoading, error }] = useLogoutMutation();
  const [isLogout, setIsLogout] = useState(false);
  const [isToggled, setIsToggled] = useState(false);
  const sidebar = useRef();
  const { contextSafe } = useGSAP({ scope: sidebar });

  const onToggleSize = contextSafe(() => {
    const tl = gsap.timeline();
    !isToggled
      ? tl.to(".sidebar", { width: 80 })
      : tl.to(".sidebar", { width: 240 });

    setIsToggled(!isToggled);
  });

  const openLogout = () => setIsLogout(true);
  const closeLogout = () => setIsLogout(false);

  const onLogout = async () => {
    await logout();
    dispatch(clearCurrentUser());
    closeLogout();
  };
  console.log(error)
  return (
    <div ref={sidebar}>
      <Modal onClose={closeLogout} isOpen={isLogout}>
        <p className="text-xl">Sure you want to logout?</p>
        <p className="mt-1 mb-4 text-gray-400">
          No worries, you can always come back and finish from where you left
          off.
        </p>
        <Divider />
        <div className="flex gap-2 mt-4 justify-end">
          <Button variant="outline" onClick={closeLogout}>
            Cancel
          </Button>
          <Button onClick={onLogout} isLoading={isLoading}>
            Logout
          </Button>
        </div>
      </Modal>
      <div className="w-[240px] fixed top-0 left-0 h-full border-r border-tertiary text-primary px-[24px] whitespace-nowrap sidebar">
        <button
          className="absolute right-0 translate-x-2 top-4 text-lg"
          onClick={onToggleSize}
        >
          {!isToggled ? <FaArrowCircleLeft /> : <FaArrowCircleRight />}
        </button>
        {/* <h4 className="my-8 text-xl">Tell me</h4> */}
        <div className="my-8 h-20">
          <img src={logo} alt="Tellme" className="w-20 h-auto" />
        </div>
        <div className="flex flex-col gap-4 h-[75%]">
          {navItems.map(({ title, link, Img }) => (
            <NavItem title={title} link={link} Img={Img} />
          ))}
        </div>
        <div className="overflow-hidden">
          <button
            className="flex gap-2 p-2 items-center text-primary cursor-pointer text-md mt-auto "
            onClick={openLogout}
          >
            <div>
              <FaSignOutAlt />
            </div>
            <span>Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
