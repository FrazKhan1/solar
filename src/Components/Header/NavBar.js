import React from "react";
import logo from "../../assets/images/logo.png";
import "./index.css";

const Menu = [
  { name: "Home", href: "#/" },
  { name: "Chi Siamo", href: "#ChiSiamo" },
  { name: "S.I.R.E", href: "#SIRE" },
  { name: "SIRE Features", href: "#SIREFeatures" },
  { name: "Why SIRE?", href: "#WhySIRE" },
  { name: "SIRE Product", href: "#SIREProduct" },
  { name: "How it Works?", href: "#HowitWorks" },
];

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light ">
        <a className="navbar-brand d-xl-none" href="/">
          <img src={logo} alt="Logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto d-flex justify-content-end">
            {Menu.map((item, key) => {
              return (
                <li key={key} className="nav-item px active">
                  <a className="nav-link" href={item.href}>
                    {item.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
