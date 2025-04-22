import React from "react";
import './styles.css';
import {BookOpen , Handshake,Crown, Brain, Heart, UsersFour} from 'phosphor-react'
import logoImage from '../assets/11.png';
function Sobre() {
 
  return (
  <div className="chapter">
    <div className="about">
       
       
        <h1>Conheça o CS CEFET/RJ</h1>
        <div className="desc">
        <img className="logo2" src={logoImage} alt="LOGO"/>
          <p>O Capítulo IEEE Computer Society (CS) do CEFET/RJ é uma iniciativa acadêmica e estudantil que integra alunos apaixonados por tecnologia, computação e inovação, oferecendo um espaço dinâmico para o desenvolvimento técnico e pessoal. Vinculado ao Instituto de Engenheiros Eletricistas e Eletrônicos (IEEE), o maior instituto profissional do mundo dedicado ao avanço da tecnologia, o capítulo atua como uma ponte entre o meio acadêmico e o mercado, promovendo atividades práticas, eventos e projetos colaborativos.

          Fundado por estudantes do Centro Federal de Educação Tecnológica Celso Suckow da Fonseca (CEFET/RJ), o CS Chapter tem como missão fomentar o interesse e o aprofundamento em áreas como ciência da computação, engenharia de software, inteligência artificial, segurança da informação, computação em nuvem, entre outras. Através de workshops, hackathons, seminários, grupos de estudo e projetos técnicos, o capítulo oferece aos seus membros oportunidades de aprendizado além da sala de aula.
          </p>
        </div>
    </div>
    <div className="MeV">
    <div className="mission">
      <h2>Missão</h2>
      <p>Formar pessoas por meio de projetos técnicos focados na área da computação.</p>
    </div>
    <div className="vision">
    <h2>Visão</h2>
    <p>Tornar-se uma referência entre os capítulos CS em termos de inovação tecnológica e desenvolvimento humano.</p>
    </div>
    </div>
    <div className="values">
      <h2>Valores</h2>
      
      
      <ul>
        <div className="box-mother">
        <div className="box">
          <BookOpen size={32} />
          <p>Aprendizagem Evolutiva</p>
          
        </div>
        <div className="box">
        <Handshake size={32} />
          <p>Empatia</p>
          
        </div>
        <div className="box">
          <Crown size={32} />
          <p>Espírito de Liderança</p>
          
        </div>
        </div>
        <div className="box-mother">
        <div className="box">
          <Brain size={32} />
          <p>Pensamento Disruptivo</p>
          
        </div>
        <div className="box">
          <Heart size={32} />
          <p>Orgulho IEEE</p>
          
        </div>
        <div className="box">
          <UsersFour size={32} />
          <p>Trabalho em Equipe</p>
          
        </div>
        </div>
        
        
        
      

      </ul>
      </div>
     
    </div>
    
  );
}

export default Sobre;