import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import './Contato.css'
import header from "../../assets/images/charityConnect.png";
import footer from "../../assets/images/newshortlogobranca-12.png";
import coracao from "../../assets/images/newshortlogobranca-12.png"
import MenuBar from '../../components/Menu/MenuBar';
import Footer from '../../components/Footer/Footer';





const Contato = () => {
  return (
    <div>

<MenuBar />

      <main className="contato">

        <div className="coracaocad">
          <figure className="coracaofigure">
            <img id="coracao" src={coracao} />
          </figure>
        </div>

        <section className="formulario-section">

          <form className="form" method="post" action="">

            <div className="desc-form">

              <h1 id="desc-h1">
                Charity Connect
              </h1>
              <h2 id="title-form">
                Formulário para Contato
              </h2>

            </div>

            <section className="inputs-form">

              <div className="form-1">

                <label id="label">
                  <h1 id="name-caixa">
                    MOTIVO DO CONTATO:
                  </h1>
                  <input id="inputmotivo" type="text" name="motivo_contato"
                    placeholder="Digite motivo de contato" required />
                </label><br />
                <label id="label">
                  <h1 id="name-caixa">
                    MENSAGEM
                  </h1>
                  <textarea id="inputpergunta" />
                </label><br />

                <div className="form-2">
                  <label id="label">
                    <h1 id="name-caixa">
                      NOME:
                    </h1>
                    <input className="form-2__inputs" id="nome" type="text" name="nome_ong"
                      placeholder="Digite seu nome" pattern="[a-zA-Záãâéêíóôõú\s]+$" required />
                  </label>
                  <br></br>
                  <label id="label">
                    <h1 id="name-caixa">
                      SOBRENOME:
                    </h1>
                    <input className="form-2__inputs" id="sobrenome" type="text" name="nome_ong"
                      placeholder="Digite seu sobrenome" pattern="[a-zA-Záãâéêíóôõú\s]+$" required />
                  </label>
                </div><br />

                <label id="label">
                  <h1 id="name-caixa">
                    ENDEREÇO DE E-MAIL:
                  </h1>
                  <input id="inputemail" type="email" name="email"
                    placeholder="Digite seu email" required />
                </label><br />

                <div className="form-3">


                  <label id="label">
                    <h1 id="name-caixa">
                      Número de celular
                    </h1>
                    <input type="tel" id="tel" name="celular" placeholder="(XX)XXXXXXXXX" onInput={() => mascara(this)} maxLength="11" required />
                  </label>
                </div>
              </div>

            </section>

            <div className="btn-form">
              <button className="botao-form" >Enviar</button>
            </div>

          </form>

        </section>


      </main>


      <Footer />
    </div>
  )
}

export default Contato