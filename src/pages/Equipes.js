import React, { useState } from 'react';
import './Equipes.css'; // Crie esse CSS com seu estilo
import logo1 from '../assets/Logo1.png'; // Substitua pelas imagens reais
import {MagnifyingGlass} from 'phosphor-react'
import TeamCard from '../componentes/CardTeam'

/*
const equipes = [
  {
    nome: 'Web/App',
    logo: logo1,
    descricao: `Informações sobre a equipe:
    A Equipe Alpha trabalha com robótica educacional, desenvolvendo projetos sociais em escolas públicas.

    Projetos:
    - Site do Ramo
    - Smart Garden
    - Wise Finance
    - Ramo Store
    - ByteSocial
    `,
  },
  {
    nome: 'IA/BOT',

    descricao: `Informações sobre a equipe:
    Equipe voltada para desenvolvimento web e mobile, responsável pelos apps e sites do capítulo.

    Projetos:
    - AVIR
    - SIR
    - 
    
    
    
    
    `,
  },
  {
    nome: 'Games',

    descricao: `Informações sobre a equipe:
    Atua com divulgação, marketing e redes sociais. Responsável pela identidade visual do capítulo.

    Projetos:
    - I<3E
    - Bear Garden
    - 
    
    
    
    
    `,
  },
  {
    nome: 'Hardware',

    descricao: `Informações sobre a equipe:
    Responsável pela gestão e organização de eventos, cronogramas e documentações internas.

    Projetos:
    - Fliperama
    - Console Portátil
    - 
    `,
  },
];
*/
function Equipe() {
  /*
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
  );*/

  const equipes = [
    {name: "Web/App", description:"", members:["João Pedro Weydt De Faria","Gustavo Andrade","Guilherme Andrade", "Lucas Montenegro"], contact:""},
    {name: "IA/BOT", description:"", members:["Dannylo Cardoso","Catarina Ribas"], contact:""},
    {name: "Hardware", description:"", members:["",""], contact:""},
    {name: "Games", description:"", members:["",""], contact:""}
  ]

  function search(){
  
  }

  return (
    <div>
        <div className="searchBar">
          <MagnifyingGlass size={28} />
          <input type="text" placeholder="Pesquise os projetos"/>
        </div>
        <div className="grid">
            {equipes.map((infos) => {
              return <TeamCard infos={infos}/>
            })}
        </div>
        </div>
    )
}

export default Equipe;
