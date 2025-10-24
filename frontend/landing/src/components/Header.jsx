import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Logo } from "../../public/files.js";

const Header = ({ onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", path: "/", showOn: "all" },
    { name: "Download", path: "/download", showOn: "all" },
    { name: "About Us", path: "/about", showOn: "all" },
    { name: "Privacy", path: "/security", showOn: "all" },
    { name: "Support", path: "/support", showOn: "all" },
  ];

  const handleMobileLinkClick = () => setIsMenuOpen(false);

  const renderMenuItem = (item) => (
    <Link
      to={item.path}
      onClick={handleMobileLinkClick}
      className="relative group py-2 px-1 text-text-secondary hover:text-[--main] transition-colors duration-200"
    >
      {item.name}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[--main] transition-all group-hover:w-full"></span>
    </Link>
  );

  return (
    <header className="glass sticky top-0 z-50 border-b border-voxsy-gray-light" dir="ltr">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center text-2xl font-bold text-[--main]">
          <img src={Logo} alt="Logo" className="w-10 mr-2" />
          <span>Voxsy</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-6">
          {menuItems
            .filter((item) => item.showOn === "all" || item.showOn === "desktop")
            .map((item) => (
              <div key={item.name}>{renderMenuItem(item)}</div>
            ))}
        </nav>

        {/* Right Side Buttons */}
        <div className="flex items-center space-x-4">
          <button
            onClick={() => onNavigate?.("easy-login")}
            className="btn-primary text-sm px-6 py-2 hidden sm:block"
          >
            Login
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            className="md:hidden p-2 rounded-lg text-text-primary hover:bg-voxsy-gray transition-colors duration-200"
          >
            <FontAwesomeIcon
              icon={faBars}
              className={`text-xl transition-transform duration-200 ${isMenuOpen ? "rotate-90" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out border-t border-voxsy-gray-light ${
          isMenuOpen ? "max-h-[500px] opacity-100 py-4 mt-2" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col space-y-2 px-4">
          {menuItems
            .filter((item) => item.showOn === "all" || item.showOn === "mobile")
            .map((item) => (
              <div key={item.name}>{renderMenuItem(item)}</div>
            ))}

          <button
            onClick={() => {
              handleMobileLinkClick();
              onNavigate ? onNavigate("easy-login") : window.location.assign("/easy-login");
            }}
            className="btn-primary text-sm w-full py-2 mt-4"
          >
            Login
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
