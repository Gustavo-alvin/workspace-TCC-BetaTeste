import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/charityConnect.png";
import './Login.css';
import './ForgotPass.css';

const ForgotPass = () => {

    const navigate = useNavigate();

    const goto = () => {
        navigate("/");
    }

    const backto = () => {
        navigate("/cadastro");
    }


    return (
        <div className="container">
            <div className="login-logo">
                <img src={logo} alt="logo" id="logoforgot" />
            </div>
            <form action="" className="login-form">

                <h5 className="text-center">Recuperação de Senha</h5>
                <div className="my-3">
                    <label htmlFor="email" className="form-label mb-0 fw-bold">Email:</label>
                    <input type="email" id="email" className="form-control text-center fw-medium shadow" />
                </div>
                <div className="d-flex flex-row mt-1">
                    <p className="fw-bold fst-italic opacity-75 me-1">Fazer Login:
                        <Link to={'/login'}> Clique aqui.</Link>
                    </p>
                </div>
                <div className="d-flex justify-content-center my-1 d-none" id="infos">
                    <p className="fw-bold fst-italic text-danger">
                        Dados Incorretos!!!
                    </p>
                </div>
                <div className="d-flex justify-content-around mb-3 mt-2">
                    <button id="botaoforgot" className="btn btn-warning fw-medium shadow" type="button"
                        onClick={backto}>Cancelar</button>
                    <button id="botaoforgot" className="btn btn-success fw-medium shadow" type="submit"
                        onClick={goto} >Solicitar Nova Senha</button>
                </div>
            </form>
        </div>
    )
}

export default ForgotPass