import React, { useEffect, useState } from "react";
import Styles from "./Navbar.module.css";

export default function Navbar() {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const workSection = document.getElementById("work");

      if (workSection) {
        const workTop = workSection.offsetTop -200;
        const scrollPos = window.scrollY;

        if ( scrollPos  > workTop) {
          setScrolled(true);
        } 
        else {
          setScrolled(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg position-fixed w-100 z-3 ${
        scrolled ? `${Styles.bgTransition} bgColor` : `${Styles.bgTransition}`
      }`}
    >
      <div className="container">
        <a className="navbar-brand text-white" href="#">
          <h3 className="h5">Peachy Pup</h3>
          <h3 className="h5">Bakery</h3>
        </a>
        <button
          className="navbar-toggler "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Recipes
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                testymonials
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact us
              </a>
            </li>
          </ul> */}
        </div>
      </div>
    </nav>
  );
}
