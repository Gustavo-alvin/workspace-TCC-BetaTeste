import React, { useEffect, useState } from "react";
import header from "../../assets/images/charityConnect.png";
import fotoong from "../../assets/images/ongs-02.png";
import footer from "../../assets/images/newnames_Prancheta 1.png";
import ong2 from "../../assets/images/ongs-02.png";
import "./EditarPerfil.css";
import { useParams, useNavigate } from "react-router-dom";
import CadastroService from "../../services/CadastroService";
import MenuBar from "../../components/Menu/MenuBar";
import Footer from "../../components/Footer/Footer";
import Alert from "../../components/Alert/Alert";
 
function EditarPerfil() {

  const objectValues = {
    id: null,
    nome: "",
    nomeRep: "",
    email: "",
    telefone: "",
    descAtuacao: "",
    foto: "",
    cep: "",
    cnpj: "",
    uf: "",
    localidade: "",
    endereco: "",
    bairro: "",
    cidade: "",
    interesse: "",
  };
 
  const [cadastro, setCadastro] = useState(objectValues);
  const [loading, setLoading] = useState(true);
  const [showAlert, setShowAlert] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setCadastro((cadastro) => ({ ...cadastro, [name]: value }));
  };

  useEffect(() => {
    CadastroService.findById(id)
      .then((response) => {
        const cadastro = response.data;
        setCadastro(cadastro);
        setLoading(false);
        console.log(cadastro);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault(); // Impede o comportamento padrão do formulário
    console.log("Dados do formulário:", cadastro);

    CadastroService.update(id, cadastro)
      .then(() => {
        console.log("Dados atualizados com sucesso!");
        handleShowAlert(); // Mostra o alert após a atualização
      })
      .catch((error) => {
        console.error("Erro ao atualizar os dados:", error);
      });
  };

  const handleShowAlert = () => {
    setShowAlert(true);
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  useEffect(() => {
    if (showAlert) {
      const timer = setTimeout(() => {
        setShowAlert(false);
        navigate(`/perfil/${id}`); // Redireciona para a próxima página
      }, 2000); // 2 segundos

      return () => clearTimeout(timer);
    }
  }, [showAlert, navigate]);

  if (loading) {
    return <div>Carregando...</div>;
  }


  return (
    <div>
      <MenuBar />
 
      <main className="editar">
        <div className="coracaocad">
          <figure className="coracaofigure">
            <img id="coracao" alt="Coração" />
          </figure>
        </div>
 
        <section className="kk">
          <form className="form" onSubmit={handleSubmit}>
            <div className="divisao-inputs">
              <label htmlFor="nome">
                <h1>NOME DA ORGANIZAÇÃO:</h1>
                <input
                  className="editar-inputs"
                  type="text"
                  name="nome"
                  value={cadastro.nome}
                  onChange={handleChange} // Atualiza o estado conforme o usuário digita
                />
              </label>
 
              <label htmlFor="nomeRep">
                <h1>NOME DO REPRESENTANTE:</h1>
                <input
                  className="editar-inputs"
                  type="text"
                  name="nomeRep"
                  value={cadastro.nomeRep}
                  onChange={handleChange}
                />
              </label>
            </div>
 
            <div className="divisao-inputs-solos">
              <label htmlFor="email">
                <h1>EMAIL DA ORGANIZAÇÃO:</h1>
                <input
                  className="editar-inputs-solos"
                  type="email"
                  name="email"
                  value={cadastro.email}
                  onChange={handleChange}
                />
              </label>
            </div>
 
            <div className="divisao-inputs">
              <label htmlFor="telefone">
                <h1>NÚMERO DE CELULAR:</h1>
                <input
                  className="editar-inputs"
                  type="text"
                  name="telefone"
                  value={cadastro.telefone}
                  onChange={handleChange}
                />
              </label>
 
              <label htmlFor="cep">
                <h1>CEP:</h1>
                <input
                  className="editar-inputs"
                  type="text"
                  name="cep"
                  value={cadastro.cep}
                  onChange={handleChange}
                />
              </label>
            </div>
 
            <div className="divisao-inputs-solos">
              <label htmlFor="interesse">
                <h1>INTERESSES:</h1>
                <input
                  className="editar-inputs-solos"
                  type="text"
                  name="interesse"
                  value={cadastro.interesse}
                  onChange={handleChange}
                />
              </label>
            </div>
 
            <div className="divisao-inputs">
              <label htmlFor="endereco">
                <h1>Endereço</h1>
                <input
                  className="editar-inputs"
                  type="text"
                  name="endereco"
                  value={cadastro.endereco}
                  onChange={handleChange}
                />
              </label>
 
              <label htmlFor="bairro">
                <h1>Bairro</h1>
                <input
                  className="editar-inputs"
                  type="text"
                  name="bairro"
                  value={cadastro.bairro}
                  onChange={handleChange}
                />
              </label>
            </div>
 
            <div className="divisao-inputs">
              <label htmlFor="cidade">
                <h1>CIDADE:</h1>
                <input
                  className="editar-inputs"
                  type="text"
                  name="cidade"
                  value={cadastro.cidade}
                  onChange={handleChange}
                />
              </label>
 
              <label htmlFor="cnpj">
                <h1>CNPJ:</h1>
                <input
                  className="editar-inputs"
                  type="text"
                  name="cnpj"
                  value={cadastro.cnpj}
                  onChange={handleChange}
                />
              </label>
            </div>
 
            <div className="divisao-inputs-solos">
              <label htmlFor="descAtuacao">
                <h1>DESCRIÇÃO DE ATUAÇÃO:</h1>
                <textarea
                  name="descAtuacao"
                  className="editar-inputs-solos"
                  cols="40"
                  rows="6"
                  maxLength="200"
                  defaultValue={cadastro.descAtuacao}
                  onChange={handleChange}
                />
              </label>
            </div>
 
            <div className="confirmarcao-perfil">
              <div className="btns-do-perfil">
                <button
                  className="botao-form-perfil"
                  id="botao-form"
                  type="submit"
                  onClick={handleShowAlert}
                >
                  Salvar
                </button>
                {showAlert && (
                  <Alert 
                    message="Esta é uma mensagem de alerta!" 
                    onClose={handleCloseAlert} 
                    type="success" // ou "error"
                  />
                )}
              </div>
              <div div className="btns-do-perfil">
                <button
                  className="botao-form-perfi"
                  id="botao-form"
                  type="button"
                  onClick={() => setCadastro(objectValues)}
                >
                  Limpar
                </button>
              </div>
            </div>
          </form>
        </section>
      </main>
 
      <Footer />
    </div>
  );
}
 
export default EditarPerfil;