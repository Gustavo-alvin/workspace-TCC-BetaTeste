import { Link, useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Menu/Sidebar";
import "./Catalogo.css";

import header from "../../assets/images/charityConnect.png";
import ong2 from "../../assets/images/ongs-02.png";
import ong3 from "../../assets/images/ongs-03.png";
import ong4 from "../../assets/images/ongs-04.png";
import ong5 from "../../assets/images/ongs-05.png";
import ong6 from "../../assets/images/ongs_Prancheta 1.png";
import ong7 from "../../assets/images/ongs-06.png";
import ong8 from "../../assets/images/ongs-08.png";
import footer from "../../assets/images/newnames_Prancheta 1.png";
import { useEffect, useState } from "react";
import CatalogoService from "../../services/CatalogoService";

function Catalogo() {
  const navigate = useNavigate();
  const goTo = () => {
    navigate("/ongler");
  };
  const [ongs, setOngs] = useState([]);

  useEffect(() => {
    CatalogoService.findAll()
      .then((response) => {
        const ongs = response.data;
        setOngs(ongs);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
            <li><a id="itens" href={'/sobrenos'} >Sobre nós</a></li>
            <li>
              <a style={{ "--clr": "#707bff" }} className="btn-entrar" id="itens" href={'/Login'} >
                <span>Entrar</span>
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <section>
        <div className="input-wrapper">
          <label htmlFor="filter" className="sr-only">
            Pesquisar
          </label>
          <input id="filter" type="text" placeholder="Pesquisar" />
        </div>

        <div className="category-filter">
          <div className="select-wrapper-city">
            <select id="interestsSelect-city">
              <option value="">Selecione uma Cidade</option>
              <option value="jandira">Jandira</option>
              <option value="barueri">Barueri</option>
              <option value="osasco">Osasco</option>
              <option value="carapicuiba">Carapicuíba</option>
            </select>
          </div>

          <div className="select-wrapper">
            <select id="interestsSelect">
              <option value="">Selecione um Interesse</option>
              <option value="roupa">Roupas</option>
              <option value="alimento">Alimentos</option>
              <option value="brinquedo">Brinquedos</option>
              <option value="monetaria">Monetária</option>
            </select>
          </div>
        </div>
      </section>

      <section className="catalog">
        <ul className="catalog-items">
          {ongs?.map((ong) => (
            <li className="items" key={ong.id}>
              <div className="img-ong">
                <img src={ong.foto ? ong.foto : footer } alt="sorrisos do amanha " />
              </div>
              <div className="info-ongs">
                <h2>{ong.nome}</h2>
                <p>{ong.descAtuacao}</p>
                <a className="know-more" href="#">
                  Saiba Mais
                </a>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <footer className="footergeral">
        <section className="footercontent">
          <figure className="logofooter">
            <img id="logofooter" src={footer} alt="Logo Footer" />
            <h1 id="text-logo-footer">Charity Connect.</h1>
          </figure>

          <div className="footerpart2">
            <a id="link-footer-pt2" href={"/Sobrenos"} >
              Sobre o Projeto
            </a>
            <a id="link-footer-pt2" href={"/Contato"} >
              Contato
            </a>
          </div>

          <div className="footerpart3">
            <a id="link-footer-pt3" href={"/Politica"} >
              Política de Privacidade
            </a>
            <a id="link-footer-pt3" href={"/Termos"} >
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
export default Catalogo;
