import React from 'react'
import header from "../../assets/images/charityConnect.png";
import fotoong from "../../assets/images/ongs-02.png";
import footer from "../../assets/images/newnames_Prancheta 1.png";
import './Perfil.css';

function Perfil() {
  return (
    <div>

<header id="cabecalho">
        <a href="../html/index.html" id="logo">
          <img  src={header}
            style={{ 'width': "16rem" }}
            alt="logo ong"
          />
        </a>
        <nav id="nav">
          <button id="btn-mobile">
            <span id="hambuguer"></span>
          </button>
          <ul id="menu">
            <li>
              <a id="itens" href={"/"} >
                Home
              </a>
            </li>
            <li>
              <a id="itens" href={"/Catalogo"} >
                Catalogo
              </a>
            </li>
            <li>
              <a id="itens" href={"/Usuario"} >
                Meu Perfil ONG
              </a>
            </li>
            <li>
              <a id="itens" href={"/Sobrenos"} >
                Sobre nós
              </a>
            </li>
            <li>
              <a
                style={{ "--clr": "#707bff" }}
                className="btn-entrar"
                id="itens"
                href="../html/login.html"
              >
                <span>Entrar</span>
              </a>
            </li>
          </ul>
        </nav>
      </header>

    <main className="login-main">

        <section className="profile">
            <div className="profile_ong">
                <div className="container-img">
                    <img src={fotoong} alt="imagem da ong"/>

                </div>
                <div className="title_ong">
                    <h2>Sorrisos do Amanhã</h2><br/>
                    <p className="description">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi, quasi, laborum quisquam fugit aut
                      maiores eveniet nemo incidunt distinctio et ducimus.
                    </p>
                </div>
                <div className="btn_editar">
                    <a id="buttonperfil" href="editarperfilong.html">Editar</a><br/>
                </div>
            </div>
            <div className="info_ong">
                <table>
                        <tbody>
                            <tr id="info">
                                <td className="title_item">&nbsp;Nome da organização:</td>
                                <td className="info_item">&nbsp;Sorrisos do amanhã</td>
                            </tr>
                            <tr id="info">
                                <td className="title_item">&nbsp;Nome do Representante:</td>
                                <td className="info_item">&nbsp;Cauã Santana</td>
                            </tr>
                            <tr id="info">
                                <td className="title_item">&nbsp;Email da organização:</td>
                                <td className="info_item">&nbsp;emostalook@gmail.com</td>
                            </tr>
                            <tr id="info">
                                <td className="title_item">&nbsp;Número de celular:</td>
                                <td className="info_item">&nbsp;(xx) xxxxx-xxxx</td>
                            </tr>
                            <tr id="info">
                                <td className="title_item">&nbsp;Cep:</td>
                                <td className="info_item">&nbsp;06449-000</td>
                            </tr>
                            <tr id="info">
                                <td className="title_item">&nbsp;Cnpj</td>
                                <td className="info_item">&nbsp;0644900051545</td>
                            </tr>
                            <tr id="info">
                                <td className="title_item">&nbsp;UF:</td>
                                <td className="info_item">&nbsp;São Paulo (Sp)</td>
                            </tr>
                        </tbody>
                </table>
            </div>
            
            
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

export default Perfil