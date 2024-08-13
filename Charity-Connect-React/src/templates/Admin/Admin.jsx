import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import './Admin.css'


import footer from "../../assets/images/newshortlogobranca-12.png";
import header from "../../assets/images/charityConnect.png";
import ongs from "../../assets/images/usericon.png";
import reclamacao from "../../assets/images/phone_icon.png"

function Admin() {
    const navigate = useNavigate();
    const goTo = () => {
      navigate("/ongler");
    };
    const [ongs, setOngs] = useState([]);
  
    useEffect(() => {
      AdminService.findAll()
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
              <a style={{ "--clr": "#707bff" }} className="btn-entrar" id="itens" href={'/login'} >
                <span>Entrar</span>
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main className="main-user">
    <div>
        <h1 id="title-main">Gerenciamento de Usuários</h1>
    </div>

    <div className="container container-fale-conosco">
        <div className="controller-user">
            <label className="label-user"  htmlFor="btn-user-ong">
                <button type="button" className="btn-user-escolha" id="btn-user-ong">
                    <img className="icon-img-ativo" id="icon-img" src={ongs}/>
                    <p className="category-management">Users</p>
                </button>
            </label>

            <label className="label-user"  htmlFor="btn-user">
                <button type="button" className="btn-user-escolha" id="btn-user" >
                    <img className="icon-img-ativo" id="icon-img" src={reclamacao}/>
                    <p className="category-management">Fale conosco</p>
                </button>
            </label>
        </div>

        <div id="gerenciamento" className="Gerenciamento">
            <table className="demo">
                
                    <thead>
                    <tr id="title-categoria">
                        <th className="item">ONG</th>
                        <th className="item">Representante</th>
                        <th className="item">E-mail Rep</th>
                        <th className="item">Senha</th>
                        <th>Status</th>
                    </tr>
                    </thead>
                    <tbody>
                    {ongs?.map((ong) => (
                    <tr id="info">
                        <td className="item">{}</td>
                        <td className="item">&nbsp;CAUÃ</td>
                        <td className="item">&nbsp;C@HORSE.COM</td>
                        <td className="item">&nbsp;FREDDIEMERCURY</td>
                        <td>&nbsp;
                            <select>
                            <option>APROVADO</option>
                            <option>BANIDO</option>
                            <option>ANALISE</option>
                        </select>
                    </td>
            
                    </tr>
                    ))}
                </tbody>
                    
                
            </table>
        </div>

        {/* <div id="fale-conosco" className="fale-conosco" style="display: none;">
            <ul id="selecao">
                <ul id="selecao">
                    <li>
                        <label  htmlFor="first" id="text-reclame">Gustavo - How do I find Ongs in my region? <span>&#x3e;</span></label>
                        <input type="radio" name="selecao" id="first"/>
                        <div className="content">
                            <p id="text-reclame">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero recusandae vitae ullam ex nesciunt tempore. 
                                Voluptas, excepturi qui doloremque ad quam dolores aliquam et deleniti quis esse mollitia similique harum.
                            </p>
                        </div>
                    </li>

                    <li>
                        <label  htmlFor="second" id="text-reclame"> Gomes - How do I make a donation? <span>&#x3e;</span></label>
                        <input type="radio" name="selecao" id="second" />
                        <div className="content">
                            <p id="text-reclame">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero recusandae vitae ullam ex nesciunt tempore. 
                                Voluptas, excepturi qui doloremque ad quam dolores aliquam et deleniti quis esse mollitia similique harum.
                            </p>
                        </div>
                    </li>

                    <li>
                        <label  htmlFor="third" id="text-reclame">Cauã - Are registered NGOs safe? <span>&#x3e;</span></label>
                        <input type="radio" name="selecao" id="third" />
                        <div className="content">
                            <p id="text-reclame">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero recusandae vitae ullam ex nesciunt tempore. 
                                Voluptas, excepturi qui doloremque ad quam dolores aliquam et deleniti quis esse mollitia similique harum.
                            </p>
                        </div>
                    </li>
                </ul>
            </ul>
        </div> */}
    </div>
</main>

<footer className="footergeral">
        <section className="footercontent">
          <figure className="logofooter">
            <img id="logofooter" src={footer} alt="Logo Footer" />
            <h1 id="text-logo-footer">Charity Connect.</h1>
          </figure>

          <div className="footerpart2">
            <a id="link-footer-pt2" href={'/sobre'} >Sobre o Projeto</a>
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
  )
}

export default Admin