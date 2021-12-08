/* CSS */
import "../css/transnavbar.css";

/* JS */
// import "../js/navbir";

import React, { useRef, useState } from "react";
import logo from "../images/logo-alin.png";
import { useEffect } from "react/cjs/react.development";
import { Link } from "react-router-dom";

const TransNavbar = () => {
  const [openNav, setOpenNav] = useState(false);
  const [isOverLay, setisOverLay] = useState(false);

  useEffect(() => {
    navSlide();
  });

  const openNavbar = () => {
    setOpenNav(true);
  };

  const navSlide = () => {
    const burger = document.querySelector(".burger");
    const burgerClose = document.querySelector(".burger-close");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");
    const overlay = document.querySelector(".offcanvas-overly");

    burger.addEventListener("click", () => {
      nav.classList.toggle("nav-active");

      navLinks.forEach((link, index) => {
        link.style.animation = link.style.animation
          ? ""
          : `navLinkFade 0.5s ease forwards ${index / 7 + 0.2}s`;
      });

      overlay.classList.toggle("active");
    });

    burgerClose.addEventListener("click", () => {
      nav.classList.toggle("nav-active");

      navLinks.forEach((link, index) => {
        link.style.animation = link.style.animation
          ? ""
          : `navLinkFade 0.5s ease forwards ${index / 7 + 0.2}s`;
      });

      overlay.classList.toggle("active");
    });
  };

  return (
    <>
      <nav className="navbar">
        <a href="/">
          <div className="logo">
            <img src={logo} alt="Logo" />
            <p>Alin Esports</p>
          </div>
        </a>

        <ul className={`nav-links`}>
          <span className="burger-close">
            <i className="fas fa-times"></i>
          </span>
          <div className="nav-menus">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
          </div>
        </ul>

        <div className="burger">
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
      <div className={`offcanvas-overly ${isOverLay ? "active" : ""}`}></div>
    </>
  );
};

export default TransNavbar;
