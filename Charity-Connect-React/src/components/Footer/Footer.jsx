import { Link } from "react-router-dom";
import './Footer.css';
import header from "../../assets/images/charityConnect.png";
import LoginService from "../../services/LoginService";
import footer from "../../assets/images/newshortlogobranca-12.png";

const Footer = () => {

    return (
        <div>
           
           <footer className="footergeral">
        <section className="footercontent">
          <figure className="logofooter">
            <img id="logofooter" src={footer} alt="Logo Footer" />
            <h1 id="text-logo-footer">Charity Connect.</h1>
          </figure>

          <div className="footerpart2">
            <Link id="link-footer-pt2" to={'/sobre'} >Sobre o Projeto</Link>
            <Link id="link-footer-pt2" to={'/contato'} >Contato</Link>
          </div>

          <div className="footerpart3">
            <Link id="link-footer-pt3" to={'/politicas'} >Política de Privacidade</Link>
            <Link id="link-footer-pt3" to={'/termos'} >Termos de Uso</Link>
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
                  <li id="itemfooter">36 Vinicius de Jesus Barreto</li>
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

export default Footer