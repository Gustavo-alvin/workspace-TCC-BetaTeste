import { Link, useParams } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
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

const Cadastro = () => {
  const [dataFile, setDataFile] = useState();
  const [chosenImage, setChosenImage] = useState();
  const [formData, setFormData] = useState({});
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState();
  const [input, setInput] = useState("");
  const [cep, setCep] = useState({});

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

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    if (e.target.type === "file") {
      setFormData((formData) => ({ ...formData, [name]: e.target.files[0] }));
    } else {
      setFormData((formData) => ({ ...formData, [name]: value }));
    }
  };

  const handleReset = () => {
    // Reseta os campos do formulário para seus valores iniciais
    setFormData({
      nome: '',
      nomeRep: '',
      email: '',
      cnpj: '',
      telefone: '',
      uf: '',
      cep: '',
      descAtuacao: '',
      senha: '',
    });
    setDataFile(null); // Limpa o arquivo se necessário
    setChosenImage(null); // Limpa a imagem se necessário
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessful(false);
    console.log("Dados do formulário:", formData);

    CadastroService.create(dataFile, formData).then(
      (response) => {
        setMessage(response.data.message);
        setSuccessful(true);
      },
      (error) => {
        const message = error.response.data.message;
        setMessage(message);
      }
    );
  };

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
          <form onSubmit={handleSubmit} id="myForm" className="form" method="post">
            <div className="desc-form">
              <h1 id="desc-h1">Charity Connect</h1>
              <h2 id="title-form">Cadastro de ONG</h2>
            </div>

            <section className="inputs-form">
              <div className="form-1">
                <label id="label">
                  <h1 id="nome-input">Nome da ONG</h1>
                  <input
                    value={formData.nome || ""}
                    id="inputnomeong"
                    type="text"
                    name="nome"
                    maxLength="100"
                    placeholder="Digite o nome da ONG"
                    required
                    onChange={handleChange}
                  />
                </label>


                <label id="label">
                  <h1 id="nome-input">Nome do Representante</h1>
                  <input
                    value={formData.nomeRep || ""}
                    id="inputnomerep"
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
                    type="email"
                    name="email"
                    maxLength="100"
                    placeholder="email@email.com"
                    required
                    onChange={handleChange}
                  />
                </label>

                <label id="label">
                  <h1 id="nome-input">Interesses</h1>
                  <input
                    value={formData.interesse || ""}
                    type="text"
                    name="interesse"
                    maxLength="100"
                    placeholder="Digite o nome da ONG"
                    required
                    onChange={handleChange}
                  />
                </label>

                <label id="label">
                  <h1 id="nome-input">CNPJ</h1>
                  <input
                    value={formData.cnpj || ""}
                    type="text"
                    name="cnpj"
                    id="cnpj"
                    placeholder="CNPJ (apenas números)"
                    required
                    pattern="[0-9]{14}"
                    maxLength="14"
                    onChange={handleChange}
                  />
                </label>
                <label id="label">
                  <h1 id="nome-input">Número de celular</h1>
                  <input
                    value={formData.telefone || ""}
                    type="tel"
                    name="telefone"
                    id="inputnum"
                    placeholder="(XX) XXXXX-XXXX"
                    maxLength="14"
                    required
                    onChange={handleChange}
                  />
                </label>

                

                
















        <div>
      <label id="label" htmlFor="">
        <h1 id="nome-input">CEP:</h1>
       <input
          type="text"
          placeholder="Digite o CEP"
          name="cep"
          defaultValue={formData.cep}
          onChange={(e) => {
            handleChange(e); // Primeiro chama a função que atualiza o formData
            setInput(e.target.value); // Depois atualiza o estado do input para a busca de CEP
          }}
        />
       </label>
        <button className="buttonSearch" onClick={handleSearch}>
          <BiSearch size={25} color="#FFF" />
        </button>
      </div>
      {Object.keys(cep).length > 1 && (
        <main>
          
        <label htmlFor="">
          <h1 id="nome-input">Endereço</h1>
          <input type="text"value={`${cep.logradouro} ${formData.endereco}`}
          
           onChange={handleChange} />
        </label>
          <label htmlFor="">
            <h1 id="nome-input">
              Bairro
            </h1>
            <input value={`${cep.bairro} ${formData.bairro}`} type="text" 
             name="bairro"
             onChange={handleChange}/>
          </label>
          
          
          <label htmlFor="">
            <h1 id="nome-input">Cidade</h1>
            <input type="text" value={`${cep.localidade || ''} - ${cep.uf || ''} ${formData.cidade || ''}`}
             name="cidade" onChange={handleChange}/>
          </label>

          
        </main>
      )}

      


















              </div>

              <div className="form-2">
                <label id="label">
                  <h1 id="nome-input">Descrição de Atuação</h1>
                  <textarea
                    value={formData.descAtuacao || ""}
                    name="descAtuacao"
                    id="textarea-form"
                    cols="40"
                    rows="6"
                    maxLength="200"
                    onChange={handleChange}
                  ></textarea>
                </label>
                <br />
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
                    value={formData.senha || ""}
                    type="password"
                    id="inputsenha1"
                    name="senha"
                    maxLength="100"
                    required
                    onChange={handleChange}
                  />
                </label>
              </div>
            </section>

            <div className="btns">
              <div>
                <button
                  className="botao-form-cadastro"
                  id="botao-form"
                  type="button"
                  onClick={handleReset}
                >
                  Reset
                </button>
              </div>
              <div>
                <button
                  className="botao-form-cadastro"
                  id="botao-form-cadastro"
                  type="submit"
                >
                  Cadastrar
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
