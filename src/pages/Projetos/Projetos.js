import React, { useState, useEffect } from "react";
import { MagnifyingGlass } from 'phosphor-react';
import ProjectCard from '../../componentes/Cards/CardProject';
import './Projetos.css';
import { useLocation, useNavigate } from 'react-router-dom';
import Footer from "../../componentes/Footer/Footer.js"
import { toast } from "react-toastify";
import { X, Eraser } from 'phosphor-react';



function Projetos() {

  const [projetos, setProjetos] = useState([
    {
      name: "Site Do Ramo",
      description: "Site de inscrição e divulgação do Student Branch CEFET/RJ.",
      team: "Web/App",
      type: "Projeto",
      link: "https://www.ramoieeecefetrj.com.br/",
      about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur venenatis euismod risus, sit amet tempor lorem. Phasellus pharetra libero ac orci dictum, id tincidunt arcu viverra. Integer in magna quis eros tempor malesuada non eu neque. Nulla facilisi. Sed eget dui sed velit dignissim efficitur.",
      membros: [
        { nome: "Ana Beatriz Caldas", contato: "" },
        { nome: "Arthur Duarte", contato: "" },
        { nome: "Cleyton Prado", contato: "" },
        { nome: "Gustavo Andrade", contato: "" },
        { nome: "Sarah Campos", contato: "" },
        { nome: "Luiz Antrônio", contato: "" }
      ]
    },
    {
      name: "Smart Garden",
      description: "Software de gerenciamento de hortas automatizadas. Parceria com capítulo PES/CEFET-RJ",
      team: "Web/App",
      type: "Projeto",
      link: "https://github.com/WolfByte-CEFET-RJ/Web-Irrigador_automatico_application/tree/develop",
      about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur venenatis euismod risus, sit amet tempor lorem. Phasellus pharetra libero ac orci dictum, id tincidunt arcu viverra. Integer in magna quis eros tempor malesuada non eu neque. Nulla facilisi. Sed eget dui sed velit dignissim efficitur.",
      membros: [
        { nome: "Ana Beatriz Caldas", contato: "" },
        { nome: "Arthur Coutto", contato: "" },
        { nome: "Cleyton Prado", contato: "" },
        { nome: "Gustavo Andrade", contato: "" },
        { nome: "Rhyan Pinto", contato: "" },
        { nome: "Isabela", contato: "" },
        { nome: "João Terêncio", contato: "" },
        { nome: "Bianca", contato: "" },
        { nome: "Matheus Figueiredo", contato: "" },
        { nome: "João Pedro Weydt", contato: "" },
        { nome: "Rhyan Pinto", contato: "" },
        { nome: "Vinicius Saidy", contato: "" },
        { nome: "Lucas Teixeira", contato: "" },
        { nome: "Caio Santos", contato: "" },
        { nome: "Gabriel Costa", contato: "" },
        { nome: "Daniel Medeiros", contato: "" },
      ]
    },
    {
      name: "Odoyá",
      description: "Website do projeto Odoyá da Extensão ENACTUS.",
      team: "Web/App",
      type: "Projeto",
      link: "https://github.com/WolfByte-CEFET-RJ/Software-Odoya/tree/master",
      about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur venenatis euismod risus, sit amet tempor lorem. Phasellus pharetra libero ac orci dictum, id tincidunt arcu viverra. Integer in magna quis eros tempor malesuada non eu neque. Nulla facilisi. Sed eget dui sed velit dignissim efficitur.",
      membros: [
        { nome: "Gustavo Andrade", contato: "" },
        { nome: "Sarah Campos", contato: "" },
        { nome: "Carlos Ichiro", contato: "" },
        { nome: "Luiz Antônio", contato: "" },
        { nome: "Luiz Felipe", contato: "" },
        { nome: "Erick Martins", contato: "" },
        { nome: "Cleyton Prado", contato: "" },
        { nome: "Rhyan Pinto", contato: "" },
        { nome: "Vinicius Saidy", contato: "" },
        { nome: "Lucas Teixeira", contato: "" },
        { nome: "Ennya", contato: "" },
        { nome: "Rafael Costa", contato: "" },
        { nome: "João Pedro Weydt", contato: "" },
        { nome: "Lucas Teixeira", contato: "" },
      ]
    },
    {
      name: "Ramo Store",
      description: "Website de vendas de produtos do Ramo Estudatil IEEE - CEFET/RJ",
      team: "Web/App",
      type: "Mini-projeto",
      link: "https://github.com/WolfByte-CEFET-RJ/Minicase-IEEEStore",
      about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur venenatis euismod risus, sit amet tempor lorem. Phasellus pharetra libero ac orci dictum, id tincidunt arcu viverra. Integer in magna quis eros tempor malesuada non eu neque. Nulla facilisi. Sed eget dui sed velit dignissim efficitur.",
      membros: [
        { nome: "Guilherme Andrade", contato: "" },
        { nome: "Daniel Mota", contato: "" },
        { nome: "Lucas Montenegro", contato: "" },
        { nome: "Beatriz Cerutti", contato: "" },
        { nome: "Marcus", contato: "" },
      ]
    },
    {
      name: "WiseFinance",
      description: "Website de carteira digital para controle de receitas e despesas",
      team: "Web/App",
      type: "Mini-projeto",
      link: "https://github.com/WolfByte-CEFET-RJ/Web-minicase_Wise_Finance",
      about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur venenatis euismod risus, sit amet tempor lorem. Phasellus pharetra libero ac orci dictum, id tincidunt arcu viverra. Integer in magna quis eros tempor malesuada non eu neque. Nulla facilisi. Sed eget dui sed velit dignissim efficitur.",
      membros: [
        { nome: "Gustavo Andrade", contato: "" },
        { nome: "Lara Ramos", contato: "" },
        { nome: "Lucas Montenegro", contato: "" },
        { nome: "Daniel Medeiros", contato: "" },
      ]
    },
    {
      name: "Site CS + CEFET/RJ",
      description: "Website de divulgação do Capítulo Computer Society no CEFET/RJ",
      team: "Web/App",
      type: "Atividade",
      link: "httts://cs.cefetrj.com.br",
      about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur venenatis euismod risus, sit amet tempor lorem. Phasellus pharetra libero ac orci dictum, id tincidunt arcu viverra. Integer in magna quis eros tempor malesuada non eu neque. Nulla facilisi. Sed eget dui sed velit dignissim efficitur.",
      membros: [
        { nome: "Gustavo Andrade", contato: "" },
        { nome: "João Pedro Weydt", contato: "" },
      ]
    },
    {
      name: "I<3E",
      description: "Jogo estilo Dating Sim com referências ao Student Branch",
      team: "Games",
      type: "Projeto",
      link: "",
      about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur venenatis euismod risus, sit amet tempor lorem. Phasellus pharetra libero ac orci dictum, id tincidunt arcu viverra. Integer in magna quis eros tempor malesuada non eu neque. Nulla facilisi. Sed eget dui sed velit dignissim efficitur.",
      membros: [
        { nome: "membro5", contato: "" },
        { nome: "membro6", contato: "" }
      ]
    },
    {
      name: "Bear Garden",
      description: "Jogo de minigames com narrativa interativa.",
      team: "Games",
      type: "Projeto",
      link: "",
      about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur venenatis euismod risus, sit amet tempor lorem. Phasellus pharetra libero ac orci dictum, id tincidunt arcu viverra. Integer in magna quis eros tempor malesuada non eu neque. Nulla facilisi. Sed eget dui sed velit dignissim efficitur.",
      membros: [
        { nome: "membro7", contato: "" },
        { nome: "membro8", contato: "" }
      ]
    },
    {
      name: "Sepex Survivor",
      description: "Jogo mobile estilo Bullet Hell com times do Ramo.",
      team: "Games",
      type: "Projeto",
      link: "",
      about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur venenatis euismod risus, sit amet tempor lorem. Phasellus pharetra libero ac orci dictum, id tincidunt arcu viverra. Integer in magna quis eros tempor malesuada non eu neque. Nulla facilisi. Sed eget dui sed velit dignissim efficitur.",
      membros: [
        { nome: "membro9", contato: "" },
        { nome: "membro10", contato: "" }
      ]
    },
    {
      name: "AVIR",
      description: "IA e BOT para sistemas de interface inteligentes.",
      team: "IA/BOT",
      type: "Projeto",
      link: "",
      about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur venenatis euismod risus, sit amet tempor lorem. Phasellus pharetra libero ac orci dictum, id tincidunt arcu viverra. Integer in magna quis eros tempor malesuada non eu neque. Nulla facilisi. Sed eget dui sed velit dignissim efficitur.",
      membros: [
        { nome: "membro11", contato: "" },
        { nome: "membro12", contato: "" }
      ]
    },
    {
      name: "V3S",
      description: "Robôs IEEE-VSSS com IA e IoT. Parceria com capítulo RAS/CEFET-RJ",
      team: "IA/BOT",
      type: "Projeto",
      link: "",
      about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur venenatis euismod risus, sit amet tempor lorem. Phasellus pharetra libero ac orci dictum, id tincidunt arcu viverra. Integer in magna quis eros tempor malesuada non eu neque. Nulla facilisi. Sed eget dui sed velit dignissim efficitur.",
      membros: [
        { nome: "membro13", contato: "" },
        { nome: "membro14", contato: "" }
      ]
    },
    {
      name: "SIR",
      description: "Automação inteligente de processos do Ramo.",
      team: "IA/BOT",
      type: "Projeto",
      link: "",
      about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur venenatis euismod risus, sit amet tempor lorem. Phasellus pharetra libero ac orci dictum, id tincidunt arcu viverra. Integer in magna quis eros tempor malesuada non eu neque. Nulla facilisi. Sed eget dui sed velit dignissim efficitur.",
      membros: [
        { nome: "membro15", contato: "" },
        { nome: "membro16", contato: "" }
      ]
    },
    {
      name: "Fliperama",
      description: "Estrutura de fliperama para jogos do Ramo.",
      team: "Hardware",
      type: "Projeto",
      link: "",
      about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur venenatis euismod risus, sit amet tempor lorem. Phasellus pharetra libero ac orci dictum, id tincidunt arcu viverra. Integer in magna quis eros tempor malesuada non eu neque. Nulla facilisi. Sed eget dui sed velit dignissim efficitur.",
      membros: [
        { nome: "membro17", contato: "" },
        { nome: "membro18", contato: "" }
      ]
    },
    {
      name: "Console Portátil",
      description: "Portabilidade para jogos eletrônicos.",
      team: "Hardware",
      type: "Projeto",
      link: "",
      about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur venenatis euismod risus, sit amet tempor lorem. Phasellus pharetra libero ac orci dictum, id tincidunt arcu viverra. Integer in magna quis eros tempor malesuada non eu neque. Nulla facilisi. Sed eget dui sed velit dignissim efficitur.",
      membros: [
        { nome: "membro19", contato: "" },
        { nome: "membro20", contato: "" }
      ]
    },
    {
      name: "Torre de Carregador",
      description: "Estrutura com várias tomadas de fácil acesso.",
      team: "Hardware",
      type: "Projeto",
      link: "",
      about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur venenatis euismod risus, sit amet tempor lorem. Phasellus pharetra libero ac orci dictum, id tincidunt arcu viverra. Integer in magna quis eros tempor malesuada non eu neque. Nulla facilisi. Sed eget dui sed velit dignissim efficitur.",
      membros: [
        { nome: "membro21", contato: "" },
        { nome: "membro22", contato: "" }
      ]
    }
  ]);
  

  const navigate = useNavigate()

  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState(projetos);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleCloseModal = () => setSelectedProject(null);

  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };
  const query = useQuery();

  const searchProjects = () => {
    const results = projetos.filter((projeto) =>
      projeto.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      projeto.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      projeto.team.toLowerCase().includes(searchTerm.toLowerCase()) ||
      projeto.membros.some((membro) =>
        membro.nome.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    setSearchResults(results);
  };

  const handleClearSearch = () => {
    setSearchTerm("");
    searchProjects();
    navigate('/projetos/filtro'); 
    navigate(0);

  };  

  useEffect(() => {
    const equipeQuery = query.get('equipe');
    if (equipeQuery) {
      setSearchTerm(equipeQuery);
    }
    searchProjects()
  }, [searchTerm]);

  function copyEmail(membro) {
    
    const tempInput = document.createElement("input");
    document.body.appendChild(tempInput);
    tempInput.value = membro.nome;
    
    tempInput.select();
    document.execCommand("copy");
    
    document.body.removeChild(tempInput);
    
    toast.success(`Email de ${membro.nome} copiado para a área de transferência!`);
  }
    
  

  return (
    <div className="main">
      <div className="searchBar">
        <MagnifyingGlass size={28} className="searchIcon" />
        
        <input
          id="search-bar"
          type="text"
          placeholder="Pesquise por projeto, membro ou equipe"
          value={searchTerm}
          onChange={handleSearchInputChange}
          disabled={!!query.get('equipe')}
          style={!!query.get('equipe') ? {cursor: "not-allowed"} : {}}
        />

        <button title="LIMPAR BUSCA" className="clean-search" onClick={handleClearSearch} style={{ padding: 4 }}>
          <Eraser size={24} weight="bold" style={{ color: 'white' }}/>
        </button>
      </div>
  
      <div className="align-pro">
        <div className="Projects">
          {searchResults.map((infos) => (
            <div key={infos.name} onClick={() => setSelectedProject(infos)}>
              <ProjectCard infos={infos} />
            </div>

          ))}
          {searchResults.length === 0 && searchTerm !== '' && (
            <p>Nenhum projeto encontrado para "{searchTerm}"</p>
          )}
        </div>
      </div>
  
      <div className="exib">
          <h3>Mostrando <span className="destaque">{searchResults.length || projetos.length}</span> de <span className="destaque">{projetos.length}</span> projetos</h3>
      </div>

      

      {selectedProject && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="close-icon" onClick={handleCloseModal}>
              <X size={24} weight="bold" />
            </div>

            <h1 className="modal-title">{selectedProject.name}</h1>

            <p><strong>Equipe:</strong> {selectedProject.team}</p>
            <p><strong>Tipo:</strong> {selectedProject.type}</p>
            <p><strong>Link associado:</strong> <a href={selectedProject.link}>{selectedProject.link}</a></p>
            <p><strong>Resumo:</strong> {selectedProject.description}</p>
            <p><strong>Sobre:</strong> {selectedProject.about}</p>

            <div className="membros-container">
              <strong>Membros:</strong>
              <div className="membros-pills">
                {selectedProject.membros.map((membro, index) => (
                  <span key={index} className="membro-pill" onClick={()=>{copyEmail(membro)}}>
                    {membro.nome}
                  </span>
                ))}
              </div>
            </div>
          </div>

      </div>

      )}



      <Footer />
    </div>
  );  
}

export default Projetos;