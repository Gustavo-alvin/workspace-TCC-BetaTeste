import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import './App.css'



import capa from "../../assets/images/background1homepage.png"
import test from "../../assets/images/charityConnect.png";
import ods10 from "../../assets/images/ods1-nobackground-10.png";
import ods11 from "../../assets/images/ods10-nobackground-11.png";
import ods12 from "../../assets/images/ods12-nobackground-12.png";
import ods13 from "../../assets/images/ods17-nobackground-13.png";
import footer from "../../assets/images/newshortlogobranca-12.png";

function App() {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    const prevButton = document.querySelector('.nav-btn.prev');
    const nextButton = document.querySelector('.nav-btn.next');

    const scrollAmount = 300; // Ajuste conforme necessário

    const handlePrevClick = () => {
      slider.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
      });
    };

    const handleNextClick = () => {
      slider.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    };

    prevButton.addEventListener('click', handlePrevClick);
    nextButton.addEventListener('click', handleNextClick);

    // Cleanup event listeners on component unmount
    return () => {
      prevButton.removeEventListener('click', handlePrevClick);
      nextButton.removeEventListener('click', handleNextClick);
    };
  }, []);

  return (
    <div className='background'>
      <header id="cabecalho">
        <a href="#" id="logo" >
          <img src={test} style={{ "width": '16rem' }} alt="Logo" />
        </a>
        <nav id="nav">
          <button id="btn-mobile">
            <span id="hambuguer"></span>
          </button>
          <ul id="menu">
            <li><a id="itens" href={'/'} >Home</a></li>
            <li><a id="itens" href={'/catalogo'} >Catalogo</a></li>
            <li><a id="itens" href={'/perfil'} >Meu Perfil ONG</a></li>
            <li><a id="itens" href={'/sobrenos'} >Sobre nós</a></li>
            <li>
              <a style={{ "--clr": "#707bff" }} className="btn-entrar" id="itens" href={'/login'} >
                <span>Entrar</span>
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main className="mainhome">
        <section className="parte1home">
          <div className="titulo1home">
            <h1 id="titulo1-1">Charity Connect.</h1>
          </div>
          <div className="teste">
            <div className="doeaquihome">
              <p id="text-doe">Doe hoje!</p>
              <h3 id="desc-doe">
                Conectando corações solidários: Descubra ONGs com propósitos que você se identifica.
              </h3>
            </div>
          </div>
        </section>

        <div className="div-gradiente-home"></div>

        <section className="onu">
          <section className="container">
            <h1> ODS</h1>
            <div className="slider-wrapper">
              <div className="slider" ref={sliderRef}>
                <img id="slide-1" src={ods10} alt="ODS 1 Erradicação da Pobreza" />
                <img id="slide-2" src={ods11} alt="ODS 10 Redução das Desigualdades" />
                <img id="slide-3" src={ods12} alt="ODS 12 Consumo e Produção Responsáveis" />
                <img id="slide-4" src={ods13} alt="ODS 1 Parcerias e Meios de Implementação" />
              </div>
              <div className="slider-nav">
                <button className="nav-btn prev">‹</button>
                <button className="nav-btn next">›</button>
              </div>
            </div>
          </section>
        </section>

        <section className="avaliacao">
          <p id="text-avaliacao">
            Charity Connect é um incrível site de <br />doações nacional! Eles proporcionam um<br /> ambiente caloroso e
            acolhedor, facilitando a<br /> doação e a ajuda aos necessitados. Obrigado <br />por fazer a diferença em nossa
            comunidade!
          </p>
          <h3 id="nome-doador">- Kanye West</h3>
        </section>
      </main>

      <footer className="footergeral">
        <section className="footercontent">
          <figure className="logofooter">
            <img id="logofooter" src={footer} alt="Logo Footer" />
            <h1 id="text-logo-footer">Charity Connect.</h1>
          </figure>

          <div className="footerpart2">
            <a id="link-footer-pt2" href={'/Sobrenos'} >Sobre o Projeto</a>
            <a id="link-footer-pt2" href={'/contato'} >Contato</a>
          </div>

          <div className="footerpart3">
            <a id="link-footer-pt3" href={'/Politica'} >Política de Privacidade</a>
            <a id="link-footer-pt3" href={'/Termos'} >Termos de Uso</a>
          </div>

          <div className="divisaodofooter2">
            <div className="origemdotrabalho">
              <div className="integrantesdiv">
                <h2 id="itensfooter2">Integrantes:
                  <li id="itemfooter">02 Cauã Santana</li>
                  <li id="itemfooter">07 Gustavo Alves</li>
                  <li id="itemfooter">08 Gustavo Gomes</li>
                  <li id="itemfooter">13 Leandro Afonso Niches</li>
                  <li id="itemfooter">23 Nathalia Lima</li>
                  <li id="itemfooter">28 Ruan Pablo Braga Mendes</li>
                  <li id="itemfooter">32 Wellington Cavalcante</li>
                  <li id="itemfooter">32 Vinicius de Jesus Barreto</li>
                </h2>
              </div>
              <div className="profediscfooter">
                <h2 id="itensfooter2">ITB - FIEB
                  <li id="itemfooter">Brasílio Flores de Azevedo</li>
                </h2>
                <h2 id="itensfooter2">Curso
                  <li id="itemfooter">Informática 2022 - 2024</li>
                </h2>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </div>
  );
}

export default App;
