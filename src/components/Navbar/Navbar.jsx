import React from "react";
import "./Navbar.css";
import { HiMenuAlt1 } from "react-icons/hi";
import NavMenu from "../../layouts/NavMenu/NavMenu";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar">
      <Link to={"/"}>
        <img className="logoImg" src="/img/Logo.png" alt="LogIMg" />
      </Link>
      <ul className="nav_list">
        <Link to={"/"}>
          <li className="navListing">OUR FEATURES</li>
        </Link>
        <Link to={"/product"}>
          <li className="navListing">OUR PRODUCT</li>
        </Link>
        <Link to={"/aboutus"}>
          <li className="navListing">ABOUT US </li>
        </Link>
        <Link to={"/privacypolicy"}>
          <li className="navListing">Privacy Policy </li>
        </Link>
        <Link to={"/termsandcondition"}>
          <li className="navListing">Terms and condition </li>
        </Link>
      </ul>

      <button className="nav_download_button">DOWNLOAD NOW !</button>
      <NavMenu>
        <HiMenuAlt1 className="menuIcon" />
      </NavMenu>
    </div>
  );
};

export default Navbar;
