import React, {useState} from 'react';
import './Equipes.css'; // Crie esse CSS com seu estilo
import logo1 from '../assets/Logo1.png'; // Substitua pelas imagens reais
//import {MagnifyingGlass} from 'phosphor-react'
//import TeamCard from '../componentes/CardTeam'


const equipes = [
  {
    nome: 'Web/App',
    logo: logo1,
    descricao: `Equipe voltada para desenvolvimento de aplicações web e mobile, fazendo uso majoritário da tecnologia Javascript e seus frameworks ReactJS e NodeJS 
    `,
    projetos: ['Site do Ramo', 'Smart Garden', 'ByteSocial'], // Adicionado como array
    cores: { // Cores específicas para esta equipe
      esquerda: '#00FFFF ', // Azul claro
      direita: '#00FFFF', // Azul mais claro
    },

    
  },
  {
    nome: 'IA/BOT',
    descricao: `Informações sobre a equipe:
    Equipe voltada para desenvolvimento web e mobile, responsável pelos apps e sites do capítulo.
    `,
    projetos: ['AVIR', 'SIR', 'V3S'], // Adicionado como array
    cores: { // Cores específicas para esta equipe
      esquerda: '	#00FF00', // Azul claro
      direita: '	#00FF00', // Azul mais claro
    },

    
  },
  {
    nome: 'Games',
    descricao: `Informações sobre a equipe:
    Atua com divulgação, marketing e redes sociais. Responsável pela identidade visual do capítulo.
    `,
    projetos: ['I<3E', 'Bear Garden', 'Sepex Survivor'], // Adicionado como array
    cores: { // Cores específicas para esta equipe
      esquerda: '#FF0000', // Azul claro
      direita: '#FF0000', // Azul mais claro
    },

    
  },
  {
    nome: 'Hardware',
    descricao: `Responsável pela gestão e organização de eventos, cronogramas e documentações internas.`,
    projetos: ['Fliperama', 'Console Portátil', 'Torre de Carregador'], // Mantido como array
    cores: { // Cores específicas para esta equipe
      esquerda: 'rgb(226, 226, 13) ', // Azul claro
      direita: '	rgb(226, 226, 13) ', // Azul mais claro
    },

    
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

  const { nome, logo, descricao, projetos, cores } = equipes[index];

  return (
    <div className="equipe-page">
      <div
        className="carrossel-esquerda"
        style={{ backgroundColor: cores.esquerda }}
      >
        <h2 className="carrossel-title">Escolha sua equipe!</h2>
        <div className="carrossel-logo-container">
          <button onClick={prevEquipe} className="nav-arrow">{'<'}</button>
          {logo && <img src={logo} alt={nome} className="logo-equipe" />}
          <button onClick={nextEquipe} className="nav-arrow">{'>'}</button>
        </div>
        <h3 className="nome-equipe">{nome}</h3>
      </div>
      <div
        className="carrossel-direita"
        style={{ color: cores.direita }}
      >
        <div className="description">{descricao}</div>
        <div className="projects">
          <ul>
            {projetos.map((projeto, i) => (
              <li key={i}>{projeto}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
/*
  const equipes = [
    {name: "Web/App", description:"", contact:""},
    {name: "IA+BOT", description:"", contact:""},
    {name: "Hardware", description:"", contact:""},
    {name: "Games", description:"", contact:""}
  ]

  return (
    
        
        <div className="grid">
            {equipes.map((infos) => {
              return <TeamCard infos={infos}/>
            })}
        </div>
        
    )*/
}

export default Equipe;
