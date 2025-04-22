import React, { useState, useEffect } from "react";
import { MagnifyingGlass } from 'phosphor-react';
import ProjectCard from '../componentes/CardProject';
import './styles.css'; // Crie esse CSS com seu estilo

function Projetos() {
  const [projetos, setProjetos] = useState([
    { name: "Site Do Ramo", description: "Site para divulgação do Student Branch CEFET/RJ, além de possibilitar a inscrição em nosso processo seletivo.", team: "Web/App" },
    { name: "Smart Garden", description: "Software de gerenciamento de hortas automatizadas que integra princípios da sustentabilidade e desenvolvimento de software.", team: "Web/App" },
    { name: "Odoyá", description: "Desenvolvimento de um website para divulgação do projeto Odoyá da Extensão ENACTUS.", team: "Web/App" },

    { name: "I<3E", description: "Jogo no estilo Dating Sim, ou Visual Novel, temático com referências do nosso Student Branch", team: "Games" },
    { name: "Bear Garden", description: "Jogo baseado em minigames que afetam o enredo até a conclusão da história.", team: "Games" },
    { name: "Sepex Survivor", description: "Projeto de jogo mobile inspirado nas equipes do Ramo Estudantil IEEE CEFET/RJ, no estilo Bullet Hell.", team: "Games" },

    { name: "AVIR", description: "Inteligência Artificial + BOT aplicados na confecção de sistemas de interface inteligentes e acesso à informações.", team: "IA+BOT" },
    { name: "V3S", description: "Time de futebol de robôs da modalidade IEEE-VSSS controlados por um sistema baseado em inteligência artificial e IoT.", team: "IA+BOT" },
    { name: "SIR", description: "Automação Inteligente de Processos e Rotinas Digitais do Ramo, visando eficiência e boa governança de dados.", team: "IA+BOT" },

    { name: "Fliperama", description: "Estrutura que simule um fliperama modelo arcade, para jogos requisitados pelos membros do Student Branch", team: "Hardware" },
    { name: "Console Portátil", description: "Projeto que visa a portabilidade para jogos eletrônicos.", team: "Hardware" },
    { name: "Torre de Carregador", description: "Estrutura com objetivo de facilitar acesso à diversas tomadas", team: "Hardware" },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState(projetos);

  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const searchProjects = () => {
    const results = projetos.filter((projeto) =>
      projeto.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      projeto.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      projeto.team.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  };

  useEffect(() => {
    searchProjects(); // Realiza a busca inicial ou quando searchTerm muda
  }, [searchTerm]);

  return (
    <div>
      <div className="searchBar">
        <MagnifyingGlass size={28} className="searchIcon" />
        <input
          id="search-bar"
          type="text"
          placeholder="Pesquise por nome ou equipe"
          value={searchTerm}
          onChange={handleSearchInputChange}
        />
        {/* Removi o botão de busca, a busca agora é reativa */}
      </div>

      <div className="Projects">
        {searchResults.map((infos) => (
          <ProjectCard key={infos.name} infos={infos} />
        ))}
        {searchResults.length === 0 && searchTerm !== '' && (
          <p>Nenhum projeto encontrado para "{searchTerm}"</p>
        )}
      </div>
    </div>
  );
}

export default Projetos;