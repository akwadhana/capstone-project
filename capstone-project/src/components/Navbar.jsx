import React from "react";
import { Link } from "react-router-dom";
import Theme from "../Theme";

const NavBar = () => {
  return (
    <nav className="bg-gray w-full bg-black px-4 flex justify-between">
      <Theme />
      <ul className="flex justify-end space-x-6 py-4 px-4">
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
