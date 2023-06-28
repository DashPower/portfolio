import React from "react";

const Navbar = () => {
  return (
    <ul className="navbar">
      <a href="#about">
        <li>Quien Soy </li>
      </a>
      |
      <a href="#proyects">
        <li>Proyectos </li>
      </a>
      |
      <a href="#contact">
        <li>Contáctame</li>
      </a>
    </ul>
  );
};

export default Navbar;
