import { Link } from "react-router-dom"
import Header from "../../components/Header/Header"
import Sidebar from '../../components/Menu/Sidebar'
import './Catalogo.css'
// import './Reset.css'
import "../Catalogo/Reset.css"
import ong2 from "../../assets/images/ongs-02.png";
import ong3 from "../../assets/images/ongs-03.png";
import ong4 from "../../assets/images/ongs-04.png";
import ong5 from "../../assets/images/ongs-05.png";
import ong6 from "../../assets/images/ongs_Prancheta 1.png";
import ong7 from "../../assets/images/ongs-06.png";
import ong8 from "../../assets/images/ongs-08.png";


const Catalogo = () => {

    return (
        <div>
            <header id="cabecalho">
        <a href="../html/index.html" id="logo"><img src="../assets/charityConnect.png" style={{"width": "16rem"}} alt=""/></a>
        <nav id="nav">
          <button id="btn-mobile">
            <span id="hambuguer"></span>
          </button>
          <ul id="menu">
            <li><a id="itens" href={'/App'}>Home</a></li>
            <li><a id="itens" href={'/Catalogo'}>Catálogo</a></li>
            <li><a id="itens" href="#">Meu Perfil ONG</a></li>
            <li><a id="itens" href="#">Sobre nós</a></li>
            <li><a style={{"--clr":"#707bff"}} className="btn-entrar" id="itens" href="../html/login.html"><span>Entrar</span></a>
            </li>
          </ul>
        </nav>
      </header>
                

      <section>
        <div className="input-wrapper">
            <label htmlFor="filter" className="sr-only" >Pesquisar</label>
            <input id="filter" type="text" placeholder="Pesquiar" />
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
            
            <li className="items" data-interests="monetaria" data-city="barueri">
                <div className="img-ong">
                    <img src={ong2} alt="sorrisos do amanha "/>
                </div>
                <div className="info-ongs">
                    <h2>Sorrisos do Amanhã</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est exercitationem, rerum quae ut minima nostrum dolorum quam delectus. Quibusdam, vel. Cumque necessitatibus consequatur blanditiis maiores voluptatem nostrum eum totam odit.</p>
                    <a className="know-more" href="#">Saiba Mais</a>
                </div>
            </li>
            

            
            <li className="items" data-interests="roupas" data-city="jandira">
                <div className="img-ong">
                    <img src={ong3} alt="logo maos solidaria "/>
                </div>
                <div className="info-ongs">
                    <h2>Mãos Solidárias</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est exercitationem, rerum quae ut minima nostrum dolorum quam delectus. Quibusdam, vel. Cumque necessitatibus consequatur blanditiis maiores voluptatem nostrum eum totam odit.</p>
                    <a className="know-more" href="#">Saiba Mais</a>
                </div>
            </li>
            

             
            <li className="items" data-interests="brinquedo" data-city="osasco">
                <div className="img-ong">
                    <img src={ong4} alt="logo amigos do bem estar"/>
                </div>
                <div className="info-ongs">
                    <h2>Amigos do Bem-Estar</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est exercitationem, rerum quae ut minima nostrum dolorum quam delectus. Quibusdam, vel. Cumque necessitatibus consequatur blanditiis maiores voluptatem nostrum eum totam odit.</p>
                    <a className="know-more" href="#">Saiba Mais</a>
                </div>
            </li>
            
            <li className="items" data-interests="alimento" data-city="carapicuiba">
                <div className="img-ong">
                    <img src={ong5} alt="Esperança em açao"/>
                </div>
                <div className="info-ongs">
                    <h2>Esperança em Ação</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est exercitationem, rerum quae ut minima nostrum dolorum quam delectus. Quibusdam, vel. Cumque necessitatibus consequatur blanditiis maiores voluptatem nostrum eum totam odit.</p>
                    <a className="know-more" href="#">Saiba Mais</a>
                </div>
            </li>
            
             <li className="items" data-interests="alimento" data-city="barueri">
                <div className="img-ong">
                    <img src={ong6} alt="coraçao generoso"/>
                </div>
                <div className="info-ongs">
                    <h2>Coração Generoso</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est exercitationem, rerum quae ut minima nostrum dolorum quam delectus. Quibusdam, vel. Cumque necessitatibus consequatur blanditiis maiores voluptatem nostrum eum totam odit.</p>
                    <a className="know-more" href="#">Saiba Mais</a>
                </div>
            </li>
           
            <li className="items" data-interests="roupa" data-city="carapicuiba">
                <div className="img-ong">
                    <img src={ong7} alt="logo junto pela infancia"/>
                </div>
                <div className="info-ongs">
                    <h2>Juntos pela Infância</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est exercitationem, rerum quae ut minima nostrum dolorum quam delectus. Quibusdam, vel. Cumque necessitatibus consequatur blanditiis maiores voluptatem nostrum eum totam odit.</p>
                    <a className="know-more" href="#">Saiba Mais</a>
                </div>
            </li>
            
             <li className="items" data-interests="brinquedo" data-city="jandira">
                <div className="img-ong">
                    <img className="logo-ongs" src="../assets/ongs-07.png" alt="logo vida renovada"/>
                </div>
                <div className="info-ongs">
                    <h2>Vida Renovada</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est exercitationem, rerum quae ut minima nostrum dolorum quam delectus. Quibusdam, vel. Cumque necessitatibus consequatur blanditiis maiores voluptatem nostrum eum totam odit.</p>
                    <a className="know-more" href="#">Saiba Mais</a>
                </div>
            </li>
            
             <li className="items" data-interests="alimento" data-city="osasco">
                <div className="img-ong">
                    <img src={ong8} alt="logo rede solidaridade"/>
                </div>
                <div className="info-ongs">
                    <h2>Rede da Solidariedade</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est exercitationem, rerum quae ut minima nostrum dolorum quam delectus. Quibusdam, vel. Cumque necessitatibus consequatur blanditiis maiores voluptatem nostrum eum totam odit.</p>
                    <a className="know-more" href="#">Saiba Mais</a>
                </div>
            </li>
          
        </ul>
    </section>
        </div>
    )
}

export default Catalogo