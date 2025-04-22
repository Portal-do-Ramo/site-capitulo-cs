import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import logo from "./Logo.png";

function Navbar() {
  const location = useLocation();
  const nomeDaRota = location.pathname;
  console.log(nomeDaRota)
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <ul className="nav-list">
        {nomeDaRota === "/" ? (<></>) : 
        (<><li>
          <Link className="nav-item" to="/">Tela Inicial</Link>
        </li></>)}
        {nomeDaRota === "/equipes" ? (<></>) : 
        (<><li>
          <Link className="nav-item" to="/equipes">Equipes</Link>
        </li></>)}
        {nomeDaRota === "/projetos" ? (<></>) : 
        (<><li>
          <Link className="nav-item" to="/projetos">Projetos</Link>
          </li></>)}
        
      </ul>
    </nav>
  );
}

export default Navbar;