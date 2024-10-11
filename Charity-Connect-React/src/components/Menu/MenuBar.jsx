import { Link } from "react-router-dom";
import './MenuBar.css';
import header from "../../assets/images/charityConnect.png";
import LoginService from "../../services/LoginService";
import CadastroService from "../../services/CadastroService";
import { useState } from "react";

const MenuBar = () => {
    const [isNavActive, setIsNavActive] = useState(false);
    const current = LoginService.getCurrentOng();

    const handleLogout = () => {
        CadastroService.logout();
    };

    const toggleNav = () => {
        setIsNavActive(!isNavActive);
    };

    return (
        <header id="cabecalho">
            <Link to={""} id="logo">
                <img src={header} style={{ width: '16rem' }} alt="Logo" />
            </Link>
            <nav id="nav" className={isNavActive ? 'active' : ''}>
                <button id="btn-mobile" onClick={toggleNav}>
                    <span id="hambuguer"></span>
                </button>
                <ul id="menu">
                    {current ? (
                        <>
                            <li><Link id="itens" to={'/'}>Home</Link></li>
                            <li><Link id="itens" to={'/catalogo'}>Catalogo</Link></li>
                            <li><Link id="itens" to={`/perfil/${current.id}`}>Meu Perfil ONG</Link></li>
                            <li><Link id="itens" to={'/sobre'}>Sobre nós</Link></li>
                            <li>
                                <Link style={{ "--clr": "#707bff" }} className="btn-entrar" id="itens" to={'/login'} onClick={handleLogout}>
                                    <span>Sair</span>
                                </Link>
                            </li>
                        </>
                    ) : (
                        <>
                            <li><Link id="itens" to={'/'}>Home</Link></li>
                            <li><Link id="itens" to={'/catalogo'}>Catalogo</Link></li>
                            <li><Link id="itens" to={'/sobre'}>Sobre nós</Link></li>
                            <li>
                                <Link style={{ "--clr": "#707bff" }} className="btn-entrar" id="itens" to={'/login'}>
                                    <span>Entrar</span>
                                </Link>
                            </li>
                        </>
                    )}
                </ul>
            </nav>
        </header>
    );
}

export default MenuBar;
