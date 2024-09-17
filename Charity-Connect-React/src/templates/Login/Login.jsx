import React, { useState } from 'react';
import { Link,  useNavigate } from 'react-router-dom';
import logo from '../../assets/images/newshortlogobranca-12.png';
import test from "../../assets/images/charityConnect.png";
import LoginService from '../../services/LoginService';

import './Login.css';
import MenuBar from '../../components/Menu/MenuBar';
import CadastroService from '../../services/CadastroService';

const Login = () => {

    const navigate = useNavigate();
    const goto = () => {
        navigate("/");
    }

    const backto = () => {
        navigate("/cadastro");
    }

    const [formData, setFormData] = useState({});
    const [message, setMessage] = useState();

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormData(formData => ({ ...formData, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage("");      

        CadastroService.signin(formData.email, formData.senha).then(
            () => {
                
                const ongJson = localStorage.getItem("ong");
                const ong = JSON.parse(ongJson || '{}');
                if (ong.statusONG == 'ATIVO') {
                    navigate("/");
               } else if (ong.statusONG == 'TROCAR_SENHA') {
                   navigate(`/newpass/` + ong.id);
                   //window.location.reload(); ordnael@email.com.br
                }

            },
            (error) => {
                const respMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();

                setMessage(respMessage);
            }

        );
    };

  

    return (
        <div>
           <MenuBar />

            <div className="login-logo">
                <img src={logo} alt="logo" id="img-logo-login" />
            </div>

            <form className="login-form" method='post'   onSubmit={handleSubmit} >
                <div className="titulo-login">
                    <h1 id="title-titulo-login">
                        Charity Connect
                    </h1>
                    <h2 id="text-login">
                        Login
                    </h2>
                </div>
                <div className="inputs_alinhamento">
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label mb-0 fw-bold">Email:</label>
                        <input
                            type="email"
                            id="email"
                            className="form-control text-center fw-medium shadow"
                            name='email'
                            defaultValue={formData.email || ""}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="form-label mb-0 fw-bold">Senha:</label>
                        <input
                            type="password"
                            id="password"
                            name='senha'
                            className="form-control text-center fw-medium shadow"
                            defaultValue={formData.senha || ""}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <div className="esqueci">
                    <p className="fw-bold fst-italic opacity-75 me-1">Esqueceu a senha?
                        <Link to={'/forgotpass'} id="forgotpass"> Clique aqui.</Link>
                    </p>
                </div>

                <div className="text-center p-2 rounded-2">
                    {message && (
                        <div className="fw-bold fs-5 text-danger">
                            <span>{message}</span>
                        </div>
                    )}
                </div>
     
                <div className="d-flex justify-content-around mb-3 mt-2">
                <button
                        className="btn btn-warning fw-medium shadow"
                        type="button"
                        id="first-button"
                        onClick={backto}
                    >
                        Cadastrar
                    </button>
                    <button
                        className="btn btn-success fw-medium shadow"
                        type="submit"
                        id="second-button"
                    >
                        Entrar
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Login;