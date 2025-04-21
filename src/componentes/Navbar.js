import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "./Logo.png";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <ul className="nav-list">
        <li>
          <Link className="nav-item" to="/">Tela Principal</Link>
        </li>
        <li>
          <Link className="nav-item" to="/equipes">Equipes</Link>
        </li>
        <li>
          <Link className="nav-item" to="/projetos">Projetos</Link>
        </li>
        <li>
          <Link className="nav-item" to="/sobre">Sobre o Capítulo</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;