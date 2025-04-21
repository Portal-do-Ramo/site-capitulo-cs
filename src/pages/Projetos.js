import React from "react";
import {MagnifyingGlass} from 'phosphor-react'
import TeamCard from '../componentes/CardTeam'
import './styles.css'; // Crie esse CSS com seu estilo
function Projetos() {


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
        <input id="search-bar" type="text" placeholder="Pesquise os projetos"/>
        <button onClick={search} >Buscar projeto</button>
      </div>
      
      <div className="grid">
            {equipes.map((infos) => {
              return <TeamCard infos={infos}/>
            })}
      </div>
    
    </div>
  );
}

export default Projetos;