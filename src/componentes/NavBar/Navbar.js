import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const location = useLocation();
  const nomeDaRota = location.pathname;

  return (
    <nav className="navbar">
      <div className="logo-container">
        <Link to="/">
          <img src="/Logo.png" alt="Logo" className="logo" /> 
        </Link>
        <Link to="https://www.ramoieeecefetrj.com.br">
          <img src="/LogoRamo.png" alt="Logo - Ramo Estudantil - CEFET/RJ" className="logo-ramo"/>
        </Link>
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
        {nomeDaRota === "/projetos/filtro" ? (<></>) : 
        (<><li>
          <Link className="nav-item" to="/projetos/filtro?">Projetos</Link>
          </li></>)}
        
      </ul>
    </nav>
  );
}

export default Navbar;