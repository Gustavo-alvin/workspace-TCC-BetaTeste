import React, { useEffect, useState } from "react";
import header from "../../assets/images/charityConnect.png";
import fotoong from "../../assets/images/ongs-02.png";
import footer from "../../assets/images/newnames_Prancheta 1.png";
import ong2 from "../../assets/images/ongs-02.png";
import "./Perfil.css";
import { useParams } from "react-router-dom";
import CatalogoService from "../../services/CatalogoService";

function Perfil() {
  const { id } = useParams();

  const objectValues = {
    id: null,
    nome: "",
    nomeRep:"",
    email: "",
    senha: "",
    telefone: "",
    descAtuacao: "",
    foto: null,
    cep: "",
    cnpj: "",
    uf: "",
  };
  const [catalogo, setCatalogo] = useState(objectValues);

  useEffect(() => {
    CatalogoService.findById(id)
      .then((response) => {
        const catalogo = response.data;
        setCatalogo(catalogo);
        console.log(catalogo);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <header id="cabecalho">
        <a href="../html/index.html" id="logo">
          <img src={header} style={{ width: "16rem" }} alt="logo ong" />
        </a>
        <nav id="nav">
          <button id="btn-mobile">
            <span id="hambuguer"></span>
          </button>
          <ul id="menu">
            <li>
              <a id="itens" href={"/"}>
                Home
              </a>
            </li>
            <li>
              <a id="itens" href={"/catalogo"}>
                Catalogo
              </a>
            </li>
            <li>
              <a id="itens" href={"/perfil"}>
                Meu Perfil ONG
              </a>
            </li>
            <li>
              <a id="itens" href={"/sobre"}>
                Sobre nós
              </a>
            </li>
            <li>
              <a
                style={{ "--clr": "#707bff" }}
                className="btn-entrar"
                id="itens"
                href={"/login"}
              >
                <span>Entrar</span>
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main className="minhaONg">
      <form action="" className="formulario">
        <div className="perfil-principal">
          <section className="sessao-perfil">
            <div className="teste">
              <img id="foto-perfil" src={ong2} alt="" />
            </div>
            <div>
              <span>{catalogo.nome}</span>
              <br />
             <label htmlFor="">{catalogo.desAtuacao}</label>
            </div>
            <div>
              <button type="button" className="editar">
                Saiba Mais
              </button>
            </div>
          </section>

          <section className="info-ong">
            
              <div className="info">
                <label htmlFor="id" className="label-input">
                Nome da organização:
                </label>
                <label className="area-contato" htmlFor="">{catalogo.nome}</label>
              </div>
              <div className="info">
                <label htmlFor="id" className="label-input">
                Nome do Representante:
                </label>
                <label className="area-contato" htmlFor="">{catalogo.nomeRep}</label>
              </div>
              <div className="info">
                <label htmlFor="id" className="label-input">
                Email da organização:
                </label>
                <label className="area-contato" htmlFor="">{catalogo.email}</label>
              </div>
              <div className="info">
                <label htmlFor="id" className="label-input">
                Número de celular:
                </label>
                <label  className="area-contato" htmlFor="">{catalogo.telefone}</label>
              </div>
              <div className="info">
                <label htmlFor="id" className="label-input">
                Cep:
                </label>
               <label className="area-contato" htmlFor="">{catalogo.cep}</label>
              </div>
              <div className="info">
                <label htmlFor="id" className="label-input">
                Cnpj:
                </label>
                <label className="area-contato" htmlFor="">{catalogo.cnpj}</label>
              </div>
              <div className="info">
                <label htmlFor="id" className="label-input">
                UF:
                </label>
                <label className="area-contato" htmlFor="">{catalogo.uf}</label>
              </div>
              
            
          </section>
        </div>
        </form>
      </main>

      <footer className="footergeral">
        <section className="footercontent">
          <figure className="logofooter">
            <img id="logofooter" src={footer} alt="Logo Footer" />
            <h1 id="text-logo-footer">Charity Connect.</h1>
          </figure>

          <div className="footerpart2">
            <a id="link-footer-pt2" href={"/sobre"}>
              Sobre o Projeto
            </a>
            <a id="link-footer-pt2" href={"/contato"}>
              Contato
            </a>
          </div>

          <div className="footerpart3">
            <a id="link-footer-pt3" href={"/politicas"}>
              Política de Privacidade
            </a>
            <a id="link-footer-pt3" href={"/termos"}>
              Termos de Uso
            </a>
          </div>

          <div className="divisaodofooter2">
            <div className="origemdotrabalho">
              <div className="integrantesdiv">
                <h2 id="itensfooter2">
                  Integrantes:
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
                <h2 id="itensfooter2">
                  ITB - FIEB
                  <li id="itemfooter">Brasílio Flores de Azevedo</li>
                </h2>
                <h2 id="itensfooter2">
                  Curso
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

export default Perfil;
