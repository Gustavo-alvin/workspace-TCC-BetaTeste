import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import './App.css'



import capa from "../../assets/images/background1homepage.png"
import test from "../../assets/images/charityConnect.png";
import ods10 from "../../assets/images/ods1_update_Prancheta 1.png";
import ods11 from "../../assets/images/ods10-nobackground-11.png";
import ods12 from "../../assets/images/ods10_update-03.png";
import ods13 from "../../assets/images/ods17-nobackground-13.png";
import footer from "../../assets/images/newshortlogobranca-12.png";
import MenuBar from '../../components/Menu/MenuBar';
import Footer from '../../components/Footer/Footer';

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
       <MenuBar />

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

        <div className="kkk"></div>

        <section className="onu">
          <section className="container-kkk">
            <h1 id="odsodsods"> ODS</h1>
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

      <Footer />
    </div>
  );
}

export default App;
