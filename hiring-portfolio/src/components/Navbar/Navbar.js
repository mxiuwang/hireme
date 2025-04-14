import React, { useState } from "react";
import "./Navbar.css";

export const Navbar = () => {
  const [click, setClick] = useState(false);

  const menuClick = () => {
    setClick(!click);
  };
  const closeMobileMenu = () => {
    setClick(false);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-container">
          <a className="navbar-logo" href="/">
            Hi It's Michelle
          </a>
          <div className="menu-icon" onClick={menuClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item" onClick={closeMobileMenu}>
              <a className={"nav-links"} href="#home">
                Home
              </a>
            </li>
            <li className="nav-item" onClick={closeMobileMenu}>
              <a className={"nav-links"} href="#perks">
                Perks
              </a>
            </li>
            <li className="nav-item" onClick={closeMobileMenu}>
              <a className={"nav-links"} href="#experience">
                Experience
              </a>
            </li>
            <li className="nav-item" onClick={closeMobileMenu}>
              <a className={"nav-links"} href="#people">
                People
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
