import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import InputMask from "react-input-mask";
import Header from "../../components/Header/Header";
import test from "../../assets/images/charityConnect.png";
import capa from "../../assets/images/background1homepage.png";
import coracao from "../../assets/images/newshortlogobranca-12.png";
import footer from "../../assets/images/newshortlogobranca-12.png";
import "./Cadastro.css";
import { useEffect, useState } from "react";
import CadastroService from "../../services/CadastroService";
import ImageUploaderModal from "../../components/ImageUploader/ImageUploaderModal";
import MenuBar from "../../components/Menu/MenuBar";
import Footer from "../../components/Footer/Footer";
import api from "../../services/api";
import CepModal from "../../components/Cep/CepModal";
import AlertCadastro from "../../components/Alert/AlertCadastro";

const Cadastro = () => {
  const [dataFile, setDataFile] = useState();
  const [chosenImage, setChosenImage] = useState();
  const [formData, setFormData] = useState({});
  const [confirmPassword, setConfirmPassword] = useState(""); 
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState();
  const [showAlert, setShowAlert] = useState(false);
  const [loading, setLoading] = useState(true);
  const [input, setInput] = useState("");
  const [cep, setCep] = useState({});
  const navigate = useNavigate();

  async function handleSearch() {
    if (input === "") {
      alert("Digite algum CEP!");
      return;
    }

    try {
      const response = await api.get(`${input}/json`);
      setCep(response.data);
      setInput("");
    } catch {
      alert("Opa! Tem algum erro aí");
      setInput("");
    }
  }

  const setFile = (dataFile) => {
    setDataFile(dataFile);
  };

  const setImage = (dataImage) => {
    setChosenImage(dataImage);
  };

  const validatePassword = (password) => {
    const passwordCriteria = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    return passwordCriteria.test(password);
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    if (name === "senha1") {
      setConfirmPassword(value);
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleReset = () => {
    setFormData({
      nome: "",
      nomeRep: "",
      email: "",
      cnpj: "",
      telefone: "",
      cidade: "",
      bairro: "",
      file: "",
      endereco: "",
      interesse: "",
      cep: "",
      descAtuacao: "",
      senha: "",
    });
    setConfirmPassword(""); 
    setDataFile(null);
    setChosenImage(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessful(false);

    if (!formData.nome || !formData.nomeRep || !formData.email || !formData.cnpj || !formData.telefone || !formData.senha || !confirmPassword) {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    if (!validatePassword(formData.senha)) {
      alert("A senha deve ter pelo menos 8 caracteres, incluindo uma letra maiúscula, uma letra minúscula, um número e um caractere especial.");
      return;
    }

    if (formData.senha !== confirmPassword) {
      alert("As senhas não conferem. Por favor, tente novamente.");
      return;
    }

    try {
      const response = await CadastroService.create(dataFile, formData);
      setMessage(response.data.message);
      setSuccessful(true);
      setShowAlert(true); 
    } catch (error) {
      const message = error.response.data.message;
      setMessage(message);
    }
  };

 
  useEffect(() => {
    if (showAlert) {
      const timer = setTimeout(() => {
        setShowAlert(false);
        navigate("/login");
      }, 1000);  
      return () => clearTimeout(timer);
    }
  }, [showAlert, navigate]);





  const [data, setData] = useState("");
  const setChosenCep = (dataFile) => {
    setData(dataFile);
  };
  useEffect(() => {
    if (data) setCep(data);
    setFormData((formData) => ({ ...formData, data }));
  }, [data]);

  return (
    <div>
      <MenuBar />

      <main className="cadastroong">
        <div className="coracaocad">
          <figure className="coracaofigure">
            <img id="coracao" src={coracao} alt="Coração" />
          </figure>
        </div>

        <section className="formulario-section">
          <div className="desc-form">
            <h1 id="desc-h1">Charity Connect</h1>
            <h2 id="title-form">Cadastro de ONG</h2>
          </div>

          <form
            onSubmit={handleSubmit}
            id="myForm"
            className="form-cadastro"
            method="post"
          >
            <div className="form-esquerdo">
              <label id="label">
                <h1 id="nome-input">Nome da ONG</h1>
                <input
                  type="text"
                  id=""
                  className="inputs-esquerdo"
                  name="nome"
                  maxLength="100"
                  placeholder="Digite o nome da ONG"
                  value={formData.nome || ""}
                  onChange={handleChange}
                  required
                />
              </label>

              <label id="label">
                <h1 id="nome-input">Nome do Representante</h1>
                <input
                  value={formData.nomeRep || ""}
                  id="inputnomerep"
                  className="inputs-esquerdo"
                  type="text"
                  name="nomeRep"
                  maxLength="100"
                  placeholder="Digite o nome do Representante"
                  required
                  onChange={handleChange}
                />
              </label>
              <label id="label">
                <h1 id="nome-input">Email da organização</h1>
                <input
                  value={formData.email || ""}
                  id="inputemail"
                  className="inputs-esquerdo"
                  type="email"
                  name="email"
                  maxLength="100"
                  placeholder="email@email.com"
                  required
                  onChange={handleChange}
                />
              </label>

              <label id="label">
                <h1 id="nome-input">CNPJ</h1>
                <label id="label">
                  <InputMask
                    value={formData.cnpj || ""}
                    type="text"
                    className="inputs-esquerdo"
                    name="cnpj"
                    id=""
                    placeholder="CNPJ (apenas números)"
                    required
                    mask="99.999.999/9999-99"
                    onChange={handleChange}
                  />
                </label>
              </label>
              <label id="label">
                <h1 id="nome-input">Número de celular</h1>
                <InputMask
                  mask="(99) 99999-9999"
                  className="inputs-esquerdo"
                  id="inputnum"
                  name="telefone"
                  placeholder="(XX) XXXXX-XXXX"
                  required
                  value={formData.telefone || ""}
                  onChange={handleChange}
                />
              </label>

              <div>
                <CepModal setChosenCep={setChosenCep} />
              </div>

              {Object.keys(cep).length > 1 && (
                <main>
                  <label id="label">
                    <h1 id="nome-input">Cep</h1>
                    <input
                      value={cep.cep || ""}
                      id="inputemail"
                      className="inputs-esquerdo"
                      type="text"
                      name="cep"
                      maxLength="100"
                      required
                      onChange={handleChange}
                    />
                  </label>
                  <br/>

                  <label id="label">
                    <h1 id="nome-input">Endereço</h1>
                    <input
                      value={cep.logradouro || ""}
                      id="inputemail"
                      className="inputs-esquerdo"
                      type="text"
                      name="endereco"
                      maxLength="100"
                      required
                      onChange={handleChange}
                    />
                  </label>
                  <br/>

                  <label id="label">
                    <h1 id="nome-input">Bairro</h1>
                    <input
                      value={cep.bairro || ""}
                      id="inputemail"
                      className="inputs-esquerdo"
                      type="text"
                      name="bairro"
                      maxLength="100"
                      required
                      onChange={handleChange}
                    />
                  </label>
                  <br/>

                  <label id="label">
                    <h1 id="nome-input">Cidade</h1>
                    <input
                      value={`${cep.localidade || ""} - ${cep.uf}`}
                      id="inputemail"
                      className="inputs-esquerdo"
                      type="text"
                      name="cidade"
                      maxLength="100"
                      required
                      onChange={handleChange}
                    />
                  </label>
                </main>
              )}
            </div>

            <div className="form-direita">
              <label id="label">
                <h1 id="nome-input">Interesses</h1>
                <input
                  value={formData.interesse || ""}
                  type="text"
                  className="inputs-direita"
                  name="interesse"
                  maxLength="100"
                  placeholder="Digite o nome da ONG"
                  required
                  onChange={handleChange}
                />
              </label>
              <br />

              <label id="label">
                <h1 id="nome-input">Descrição de Atuação</h1>
                <textarea
                  value={formData.descAtuacao || ""}
                  name="descAtuacao"
                  id="textarea-form"
                  className="inputs-direita"
                  cols="40"
                  rows="6"
                  maxLength="200"
                  onChange={handleChange}
                ></textarea>
              </label>

              <label id="label">
                <h1 id="nome-input">Upload de foto de perfil</h1>
                <div className="imageup">
                  <ImageUploaderModal
                    setFile={setFile}
                    setImage={setImage}
                    chosenImage={chosenImage}
                  />
                </div>
              </label>
              <br />

              <label id="label">
                <h1 id="nome-input">Senha: </h1>
                <input
                  value={formData.senha || ""}
                  type="password"
                  id="inputsenha"
                  className="inputs-direita"
                  name="senha"
                  maxLength="100"
                  required
                  onChange={handleChange}
                />
              </label>
              <br />
              <label id="label">
                <h1 id="nome-input">Confirmação de Senha:</h1>
                <input
                  value={confirmPassword}
                  type="password"
                  id="inputsenha1"
                  name="senha1"
                  className="inputs-direita"
                  maxLength="100"
                  required
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
                 
                >
                  Cadastrar
                </button>
                {showAlert && (
          <AlertCadastro 
            message="Cadastro em analise..;" 
            type="success"
          />
        )}
              </div>
              <div className="btns-do-perfil">
                <button
                  className="botao-form-perfi"
                  id="botao-form"
                  type="button"
                  onClick={handleReset}
                >
                  Limpar Dados
                </button>
              </div>
            </div>
          </form>
        </section>

        <div style={{ height: "50px", backgroundColor: "#161b22" }}></div>
      </main>

      <Footer />
    </div>
  );
};

export default Cadastro;