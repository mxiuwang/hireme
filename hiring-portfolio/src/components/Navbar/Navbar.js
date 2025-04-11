import React, { useState } from "react";

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
            Portfolio
          </a>
          <div onClick={menuClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul>
            <li className="nav-item" onClick={closeMobileMenu}>
              <a href="#home">Home</a>
            </li>
            <li className="nav-item" onClick={closeMobileMenu}>
              <a href="#services">Services</a>
            </li>
            <li className="nav-item" onClick={closeMobileMenu}>
              <a href="#products">Products</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
