// import { Link } from "react-router-dom";
// import Logo from "../../assets/logo.png";
import Xlogo from "../../assets/Xsvg.jsx";
import LinkedinIcon from "../../assets/Linkedin.jsx";
import DiscordIcon from "../../assets/discord";
import TelegramIcon from "../../assets/telegram.jsx";
import Button from "../button.jsx";

const socialLinks = [
  {
    Icon: Xlogo,
    path: "",
  },
  {
    Icon: LinkedinIcon,
    path: "",
  },
  {
    Icon: DiscordIcon,
    path: "",
  },
  {
    Icon: TelegramIcon,
    path: "",
  },
];
const footerLinks = [
  {
    title: "Explore",
    Links: [
      { title: "Genres", path: "/genres" },
      { title: "Top Stories", path: "/top-stories" },
      { title: "New Arrivals", path: "/new-arrivals" },
      { title: "Editors' Picks", path: "/editors-picks" },
    ],
  },
  {
    title: "About Us",
    Links: [
      { title: "Our Mission", path: "/our-mission" },
      { title: "Team", path: "/team" },
      { title: "Terms of Use", path: "/terms-of-use" },
      { title: "Privacy Policy", path: "/privacy-policy" },
    ],
  },
  {
    title: "Community",
    Links: [
      { title: "Blog", path: "/blog" },
      { title: "Events", path: "/events" },
      { title: "Forums", path: "/forums" },
      { title: "Newsletter", path: "/newsletter" },
    ],
  },
];

const Footer = () => {
  return (
    <footer>
      <div className="bg-[#FFFFFF0D] rounded-[48px] p-8 container mx-auto mb-40 text-primary">
        <div className="p-6 rounded-[16px] flex flex-col justify-between bg-[#FFFFFF0D] gap-8 flex-wrap sm:flex-row">
          <div className="flex flex-col gap-6">
            {/* <img src={Logo} alt="logo" className="max-w-[183px]" /> */}
            <h2>Tellme</h2>
            <p className="text-white font-normal text-lg">Follow Us</p>
            <div className="flex gap-4 items-center">
              {socialLinks.map((item, index) => (
                <a href={item.path} key={index}>
                  <item.Icon />
                </a>
              ))}
            </div>
          </div>
          <>
            {footerLinks.map((section, index) => (
              <div key={index}>
                <h2 className="text-white font-bold">{section.title}</h2>
                <ul>
                  {section.Links.map((link, linkIndex) => (
                    <li key={linkIndex} className="mt-3">
                      <a
                        href={link.path}
                        className="text-[#FFFFFFCC] text-sm font-medium capitalize"
                      >
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </>
          <div className="flex flex-col">
            <h4 className="text-white font-bold">Join the Community</h4>
            <div className="flex sm:items-center mt-3 flex-col sm:flex-row">
              <input
                type="text"
                className="border border-[#FFFFFF33]  rounded-l-md py-2 px-4 focus:outline-none focus:border-blue-500 h-full bg-transparent"
                placeholder="Email"
              />
              <Button className="rounded-none rounded-r-md">
                Join now
              </Button>
            </div>
            <p className="text-white font-normal font-sm mt-6">
              Copyright © 2024 Tellme
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
