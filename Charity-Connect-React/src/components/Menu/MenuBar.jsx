import { Link } from "react-router-dom";
import './MenuBar.css';
import header from "../../assets/images/charityConnect.png";
import LoginService from "../../services/LoginService";

const MenuBar = () => {

    const current = LoginService.getCurrentOng();

    return (
        <div>
           
           <header id="cabecalho">
        <Link to={""} id="logo" >
          <img src={header} style={{ "width": '16rem' }} alt="Logo" />
        </Link>
        <nav id="nav">
          <button id="btn-mobile">
            <span id="hambuguer"></span>
          </button>
          <ul id="menu">
            <li><Link id="itens" to={'/'} >Home</Link></li>
            <li><Link id="itens" to={'/catalogo'} >Catalogo</Link></li>
            { current ?
                <li><Link id="itens" to={'/perfil'} >Meu Perfil ONG</Link></li> :
                ""
            }
            <li><Link id="itens" to={'/sobre'} >Sobre nós</Link></li>
            <li>
          
              <Link style={{ "--clr": "#707bff" }} className="btn-entrar" id="itens" to={'/login'} >
                <span>Entrar</span>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
        </div>
    )
}

export default MenuBar