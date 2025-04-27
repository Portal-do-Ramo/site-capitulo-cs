import React from "react";
import './Sobre.css';
import { BookOpen, Handshake, Crown, Brain, Heart, UsersFour, Target, Eye, ComputerTower, Browsers, Envelope, Gear } from 'phosphor-react';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from "../../componentes/Footer/Footer.js"

function Sobre() {

  const navigate = useNavigate()

  function scrollToContato(){
    const section = document.getElementById("contato");
    const offset = 100; 
    
    const position = section.getBoundingClientRect().top + window.pageYOffset - offset;
    
    window.scrollTo({
      top: position,
      behavior: 'smooth'
    });
  }

  function copyEmail() {
    const email = "sbc-cefetrj-cs@ieee.org";
    
    const tempInput = document.createElement("input");
    document.body.appendChild(tempInput);
    tempInput.value = email;
    
    tempInput.select();
    document.execCommand("copy");
    
    document.body.removeChild(tempInput);
    
    toast.success("Endereço de email copiado para a área de transferência!");
  }
  

  return (
    <div className="chapter">
      
      <div className="about">
        <h1>Computer Society no CEFET/RJ</h1>
        <h2>Capítulo IEEE fortalecendo a inovação tecnológica do Rio de Janeiro</h2>

        <div className="logos">
          <img
            title="CEFET/RJ"
            className="logo-cefet"
            src="/LogoCEFET.png"
            alt="LOGO"
            onClick={() => window.open("https://www.cefet-rj.br/", "_blank")}
            style={{ cursor: 'pointer' }}
          />
          <img
            title="Computer Society Chapter"
            className="logo-cs"
            src="/LogoAbaCS.png"
            alt="LOGO"
            onClick={() => window.open("https://www.computer.org/", "_blank")}
            style={{ cursor: 'pointer' }}
          />
          <img
            title="WolfByte"
            className="logo-byte"
            src="/IconeByte.png"
            alt="LOGO"
            onClick={() => {}}
            style={{ cursor: 'default' }}
          />
          <img
            title="Ramo Estudantil IEEE CEFET/RJ"
            className="logoramo"
            src="/IconeRamo.png"
            alt="LOGO"
            onClick={() => window.open("https://www.ramoieeecefetrj.com.br", "_blank")}
            style={{ cursor: 'pointer' }}
          />
        </div>


        <div className="actions">
          <button onClick={()=>{navigate("/equipes")}}><Gear size={24} style={{marginBottom: -5}} /> Nossas Atividades</button>
          <button onClick={scrollToContato}><Envelope size={24} style={{marginBottom: -5}}/> Fale Conosco</button>
        </div>
      </div>
      
      <div className="info">
        <h1>Computer Society + CEFET/RJ</h1>
        <p className="text">
          O <span className="destaque">Capítulo IEEE Computer Society (CS)</span> do CEFET/RJ é uma <span className="destaque">iniciativa acadêmica e estudantil</span> que integra alunos apaixonados por tecnologia,computação e inovação, oferecendo um espaço dinâmico para o desenvolvimento técnico e pessoal. Vinculado ao <span className="destaque">Instituto de Engenheiros Eletricistas e Eletrônicos (IEEE)</span>, o maior instituto profissional do mundo dedicado ao avanço da tecnologia, o capítulo atua como uma ponte entre o meio acadêmico e o mercado, promovendo atividades práticas, eventos e projetos colaborativos.
        </p>

        <img className="logo2" src="/11.png" alt="LOGO" />

        <p className="text">
          Fundado por estudantes do <span className="destaque">Centro Federal de Educação Tecnológica Celso Suckow da Fonseca (CEFET/RJ)</span>, o CS Chapter tem como missão fomentar o interesse e o aprofundamento em áreas como ciência da computação, engenharia de software, inteligência artificial, segurança da informação, computação em nuvem, entre outras. Através de workshops, hackathons, seminários, grupos de estudo e projetos técnicos, o capítulo oferece aos seus membros <span className="destaque">oportunidades de aprendizado além da sala de aula</span>.
        </p>

      </div>

      <div className="mvv-align">
        <div className="mvv">
          <h1>Por que fazemos o que fazemos?</h1>

          <div className="MeV">

            <div className="mission">
              <div className="mv-space">
                <Target size={64} />
                <h2 className="mv-space">Missão</h2>
                <p>Desenvolver pessoas por meio de projetos técnicos focados na área da computação.</p>
              </div>
            </div>
            <div className="vision">
              <div>
                <Eye size={64} />
                <h2 className="mv-space">Visão</h2>
                <p>Tornar-se uma referência entre os capítulos CS em termos de inovação tecnológica e desenvolvimento humano.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="values">
        <h2>Valores</h2>

        <div className="grid-values">
          <div className="box">
            <BookOpen size={32} />
            <p className="text-values">Aprendizagem Evolutiva</p>
          </div>
          <div className="box">
            <Handshake size={32} />
            <p className="text-values">Empatia</p>
          </div>
          <div className="box">
            <Crown size={32} />
            <p className="text-values">Espírito de Liderança</p>
          </div>
          <div className="box">
            <Brain size={32} />
            <p className="text-values">Pensamento Disruptivo</p>
          </div>
          <div className="box">
            <Heart size={32} />
            <p className="text-values">Orgulho IEEE</p>
          </div>
          <div className="box">
            <UsersFour size={32} />
            <p className="text-values">Trabalho em Equipe</p>
          </div>
        </div>
      </div>

      <div className="people">
        <h1>Pessoas desenvolvendo Pessoas</h1>

        <p className="text">
        No Capítulo IEEE CS do Ramo Estudantil CEFET/RJ, valorizamos o trabalho em equipe, a empatia e a integração. 
        Acreditamos que esses valores são essenciais para <span className="destaque">alcançarmos resultados inovadores</span>. Por meio de capacitações internas, buscamos desenvolver 
        habilidades técnicas e pessoais, criando um ambiente de aprendizado contínuo. Isso fortalece nosso time e nos prepara para os desafios da tecnologia.
        </p>

        <div className="fotos-people">
          <img className="f-people" src="/people1.jpeg" alt="TIME" />
          <img className="f-people" src="/people2.jpeg" alt="TIME" />
        </div>

        <p className="text">
        <span className="destaque">Dedica-se este website e nossos resultados</span> a todos os membros reconhecidamente esforçados e empenhados em transformar nosso time na referência que somos hoje. Cada contribuição individual fortalece nossa missão de promover o desenvolvimento técnico, humano e social, e é através do esforço coletivo que conseguimos alcançar nossos objetivos e inovar constantemente.
        </p>
      </div>

      <h1 id="contato">Fale conosco!</h1>
      <form 
        action="https://formsubmit.co/sbc-cefetrj-cs@ieee.org" 
        method="POST"
        class="form-container"
        onSubmit={()=>{toast.info("Cheque sem endereço de email! Vamos te responder por lá.")}}
      >
        <input 
          type="text" 
          name="name" 
          placeholder="Seu nome" 
          required
          class="input-field"
        />
        <input 
          type="email" 
          name="email" 
          placeholder="Seu email" 
          required
          class="input-field"
        />
        <textarea 
          name="message" 
          placeholder="Escreva sua mensagem..." 
          required
          class="textarea-field"
        ></textarea>
        <button 
          type="submit"
          class="submit-button"
          style={{width: "100%"}}
        >
          Enviar
        </button>
      </form>

      <p className="text obs">
        Se preferir mande email diretamente para: 
        <span 
          className="destaque" 
          onClick={copyEmail}
          style={{ cursor: 'pointer', textDecoration: 'underline' }} 
          >

              sbc-cefetrj-cs@ieee.org
        </span> 
        , ou para nosso Instagram: 
        <a 
          className="destaque" 
          href="https://www.instagram.com/cs.cefetrj" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ cursor: 'pointer', textDecoration: 'underline' }} 

          >
              @cs.cefetrj
        </a>
      </p>

      <Footer />

    </div>
  );
}

export default Sobre;
