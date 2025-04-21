import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./componentes/Navbar";
import "./App.css";

import Equipes from "./pages/Equipes";
import Projetos from "./pages/Projetos";
import Sobre from "./pages/Sobre";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/equipes" element={<Equipes />} />
        <Route path="/projetos" element={<Projetos />} />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>
    </Router>
  );
}

export default App;