const Header = () => {
  return (
    <header className="py-10 text-textPrimary h-30">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-left w-1/2">
          <a href="#" className="text-lg font-bold">
            Tellme
          </a>
        </div>
        <nav className="hidden md:flex space-x-4 flex items-center space-x-4 flex-grow justify-between">
          <a href="#" className="text-gray-300 hover:text-white">
            About
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            Categories
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            Contact
          </a>
          <a
            href="#"
            className=" px-4 py-2 rounded-xl text-textSecondary outline-none border border-button "
          >
            Login
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
