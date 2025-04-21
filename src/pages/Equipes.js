import React, { useState } from 'react';
import './Equipes.css'; // Crie esse CSS com seu estilo
import logo1 from './Logo1.png'; // Substitua pelas imagens reais
import logo2 from './Logo2.png';
import logo3 from './Logo3.png';
import logo4 from './Logo4.png';

const equipes = [
  {
    nome: 'Equipe Alpha',
    logo: logo1,
    descricao: `Informações sobre a equipe:
    A Equipe Alpha trabalha com robótica educacional, desenvolvendo projetos sociais em escolas públicas.

    Projetos:
    - Robô Educacional
    - Oficinas de Arduino
    - Curso de Lógica com Scratch`,
  },
  {
    nome: 'Equipe Beta',
    logo: logo2,
    descricao: `Informações sobre a equipe:
    Equipe voltada para desenvolvimento web e mobile, responsável pelos apps e sites do capítulo.

    Projetos:
    - App Horta Inteligente
    - Plataforma de Votação
    - Site Institucional`,
  },
  {
    nome: 'Equipe Gama',
    logo: logo3,
    descricao: `Informações sobre a equipe:
    Atua com divulgação, marketing e redes sociais. Responsável pela identidade visual do capítulo.

    Projetos:
    - Campanhas no Instagram
    - Branding IEEE
    - Apoio a eventos`,
  },
  {
    nome: 'Equipe Delta',
    logo: logo4,
    descricao: `Informações sobre a equipe:
    Responsável pela gestão e organização de eventos, cronogramas e documentações internas.

    Projetos:
    - Semana Acadêmica
    - Planejamento 2025
    - Gestão de Projetos`,
  },
];

function Equipe() {
  const [index, setIndex] = useState(0);

  const nextEquipe = () => {
    setIndex((prevIndex) => (prevIndex + 1) % equipes.length);
  };

  const prevEquipe = () => {
    setIndex((prevIndex) => (prevIndex - 1 + equipes.length) % equipes.length);
  };

  const { nome, logo, descricao } = equipes[index];

  return (
    <div className="equipe-page">
      <div className="carrossel-esquerda">
      <h2 className="carrossel-title">Escolha sua equipe!</h2>
      <div className="carrossel-logo-container">
            <button onClick={prevEquipe} className="nav-arrow">{'<'}</button>
            <img src={logo} alt={nome} className="logo-equipe" />
            <button onClick={nextEquipe} className="nav-arrow">{'>'}</button>
        </div>
        <h3 className="nome-equipe">{nome}</h3>
      </div>
      <div className="carrossel-direita">
        <pre className="descricao">{descricao}</pre>
      </div>
    </div>
  );
}

export default Equipe;
