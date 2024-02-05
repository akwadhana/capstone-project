import React, { useState } from "react";
import { Link } from "react-router-dom";
import Theme from "../Theme";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

const NavBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      style={{ backgroundColor: "rgb(43, 21, 21)" }}
      className="lg:w-full bg-black px-4 flex justify-between items-center relative"
    >
      <Theme />
      {!isMenuOpen ? (
        <button className="text-white lg:hidden" onClick={toggleMenu}>
          <RxHamburgerMenu />
        </button>
      ) : (
        <IoMdClose
          className="text-white lg:hidden absolute top-4 right-4 cursor-pointer"
          onClick={toggleMenu}
        />
      )}
      <ul
        className={`${
          isMenuOpen ? "" : "hidden"
        } flex-col lg:flex lg:flex-row justify-end lg:gap-6 py-4 px-4 lg:flex-grow lg:items-center `}
      >
        <NavItem to="/" label="Home" />
        <NavItem to="/about" label="About" />
        <NavItem to="/property" label="Properties" />
        <NavItem to="/contact" label="Contact" />
      </ul>
    </nav>
  );
};

const NavItem = ({ to, label }) => {
  return (
    <li className="text-white">
      <Link to={to}>{label}</Link>
    </li>
  );
};

export default NavBar;
