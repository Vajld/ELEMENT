import React, { useState } from "react";
import { FaBars, FaFacebookF, FaInstagram, FaTimes } from "react-icons/fa";

const TopBar = () => {
  return (
    <div className="topBar">
      <a className="logo" href=".">
        ELEMENT
      </a>
      <div className="openMenu">
        <FaBars />
      </div>
      <ul className="mainMenu">
        <li>
          <a href=".">Products</a>
        </li>
        <li>
          <a href=".">Contact</a>
        </li>
        <li>
          <a href=".">About</a>
        </li>
        <div className="closeMenu">
          <FaTimes />
        </div>
        <span className="icons">
          <FaFacebookF />
          <FaInstagram />
        </span>
      </ul>
    </div>
  );
};

export default TopBar;
