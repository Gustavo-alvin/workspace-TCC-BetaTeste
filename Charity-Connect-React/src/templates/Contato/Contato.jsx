import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import './Contato.css'
import header from "../../assets/images/charityConnect.png";
import footer from "../../assets/images/newshortlogobranca-12.png";
import coracao from "../../assets/images/newshortlogobranca-12.png"




                
const Contato = () => {
  return (
    <div>

<header id="cabecalho">
        <a href="#" id="logo" >
          <img src={header} style={{ "width": '16rem' }} alt="Logo" />
        </a>
        <nav id="nav">
          <button id="btn-mobile">
            <span id="hambuguer"></span>
          </button>
          <ul id="menu">
            <li><a id="itens" href={'/'} >Home</a></li>
            <li><a id="itens" href={'/catalogo'} >Catalogo</a></li>
            <li><a id="itens" href={'/perfil'} >Meu Perfil ONG</a></li>
            <li><a id="itens" href={'/sobre'} >Sobre nós</a></li>
            <li>
              <a style={{ "--clr": "#707bff" }} className="btn-entrar" id="itens" href={'/login'} >
                <span>Entrar</span>
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main className="contato">

    <div className="coracaocad">
        <figure className="coracaofigure">
            <img id="coracao" src={coracao}/>
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
                            placeholder="Digite motivo de contato"  required/>
                    </label><br />
                    <label id="label">
                        <h1 id="name-caixa">
                            SUA PERGUNTA
                        </h1>
                        <input id="inputpergunta" type="text" name="pergunta" 
                            placeholder="Faça sua pergunta"  required/>
                    </label><br />

                    <div className="form-2">
                        <label id="label">
                            <h1 id="name-caixa">
                                NOME:
                            </h1>
                            <input className="form-2__inputs" id="nome" type="text" name="nome_ong" 
                                placeholder="Digite seu nome" pattern="[a-zA-Záãâéêíóôõú\s]+$"  required/>
                        </label>
    
                        <label id="label">
                            <h1 id="name-caixa">
                                SOBRENOME:
                            </h1>
                            <input className="form-2__inputs" id="sobrenome" type="text" name="nome_ong" 
                                placeholder="Digite seu sobrenome"  pattern="[a-zA-Záãâéêíóôõú\s]+$" required/>
                        </label>
                    </div><br />

                    <label id="label">
                        <h1 id="name-caixa">
                            ENDEREÇO DE E-MAIL:
                        </h1>
                        <input id="email" type="email" name="email" 
                            placeholder="Digite seu email" required/>
                    </label><br />

                   <div className="form-3">
                   

                    <label id="label">
                        <h1 id="name-caixa">
                            Número de celular
                        </h1>
                        <input className="form-3__inputs" type="tel" id="tel" name="celular" placeholder="(XX) XXXXX-XXXX"
                            pattern="\([0-9]{2}\) [0-9]{5}-[0-9]{4}"  required/>
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


      <footer className="footergeral">
        <section className="footercontent">
          <figure className="logofooter">
            <img id="logofooter" src={footer} alt="Logo Footer" />
            <h1 id="text-logo-footer">Charity Connect.</h1>
          </figure>

          <div className="footerpart2">
            <a id="link-footer-pt2" href={'/Sobrenos'} >Sobre o Projeto</a>
            <a id="link-footer-pt2" href={'/Contato'} >Contato</a>
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
  )
}

export default Contato