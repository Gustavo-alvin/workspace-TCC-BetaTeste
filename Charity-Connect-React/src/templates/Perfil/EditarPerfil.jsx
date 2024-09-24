import React, { useEffect, useState } from "react";
import header from "../../assets/images/charityConnect.png";
import fotoong from "../../assets/images/ongs-02.png";
import footer from "../../assets/images/newnames_Prancheta 1.png";
import ong2 from "../../assets/images/ongs-02.png";
import "./EditarPerfil.css";
import { useParams } from "react-router-dom";
import CatalogoService from "../../services/CatalogoService";
import MenuBar from "../../components/Menu/MenuBar";
import Footer from "../../components/Footer/Footer";
import catalogo from "../Catalogo/Catalogo"
import CadastroService from "../../services/CadastroService";

function EditarPerfil() {

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
      cidade: '',
      bairro:"",
      file:"",
      endereco:"",
      interesse:"",
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

       <main className="editar">

<div className="coracaocad">
    <figure className="coracaofigure">
        <img id="coracao" />
    </figure>
</div>


<section className="kk">
    
            <form onSubmit={handleSubmit} className="form" method="post" action="">
    
                <div classNames="Perfil">
                    <div className="controler_perfil">
                       <div className="pic">
                           <label className="picture" tabIndex="0" for="picture__input">
                               <input type="file" name="" accept="image/*" id="picture__input"/>
                               <span className="picture__image"></span>
                              </label>
                         </div>
                    </div>
                   </div>

                   <div className="divisao-inputs">

                        <label htmlFor="">
                            <h1>NOME DA ORGANIZAÇÃO:</h1>
                            <input className="editar-inputs" type="text"
                            name="nome"
                            value={formData.nome || ""}
                            onChange={handleChange} />
                        </label>

                        <label htmlFor="">
                            <h1>NOME DO REPRESENTANTE:</h1>
                            <input className="editar-inputs" type="text"
                             name="nomeRep"
                             value={formData.nomeRep || ""}
                             onChange={handleChange} />
                        </label>
                   </div>

                   <div className="divisao-inputs-solos">
                    <label htmlFor="">
                        <h1>EMAIL DA ORGANIZAÇÃO:</h1>
                        <input className="editar-inputs-solos" type="email"
                        name="email"
                         value={formData.email || ""}
                         onChange={handleChange} />
                    </label>
                   </div>

                   <div className="divisao-inputs">

                        <label htmlFor="">
                            <h1>NÚMERO DE CELULAR::</h1>
                            <input className="editar-inputs" type="text"
                            name="telefone"
                            value={formData.telefone || ""}
                            onChange={handleChange} />
                        </label>

                        <label htmlFor="">
                            <h1>CEP:</h1>
                            <input className="editar-inputs" type="text"
                            name="cep" />
                        </label>
                   </div>


                   <div className="divisao-inputs-solos">
                    <label htmlFor="">
                        <h1>INTERESSES:</h1>
                        <input className="editar-inputs-solos" type="text" 
                        name="interesse"
                        value={formData.interesse || ""}
                        onChange={handleChange}/>
                    </label>
                   </div>

                     <div className="divisao-inputs">

                        <label htmlFor="">
                            <h1>Endereço</h1>
                            <input className="editar-inputs" type="text"
                            name="endereco"
                            value={formData.endereco || ""}
                            onChange={handleChange} />
                        </label>

                        <label htmlFor="">
                            <h1>Bairro</h1>
                            <input className="editar-inputs" type="text" 
                            name="endereco"
                            value={formData.endereco || ""}
                            onChange={handleChange}/>
                        </label>
                   </div>

                     <div className="divisao-inputs">

                        <label htmlFor="">
                            <h1>CIDADE:</h1>
                            <input className="editar-inputs" type="text"
                            name="cidade"
                            value={formData.cidade || ""}
                            onChange={handleChange} />
                        </label>

                        <label htmlFor="">
                            <h1>CNPJ:</h1>
                            <input className="editar-inputs" type="text"
                            name="cnpj"
                            value={formData.cnpj || ""}
                            onChange={handleChange} />
                        </label>
                   </div>

                   <div className="divisao-inputs-solos">
                    <label htmlFor="">
                        <h1>DESCRIÇÃO DE ATUAÇÃO:</h1>
                        <textarea name="descAtuacao" className="editar-inputs-solos" id=""
                        textarea
                        value={formData.descAtuacao || ""}
                        cols="40"
                        rows="6"
                        maxLength="200"
                        onChange={handleChange}>

                        </textarea>
                        
                    </label>
                   </div>
    
                

                   <div className="confirmarcao-perfil">
              <div className="btns-do-perfil">
                <button
                  className="botao-form-perfil"
                  id="botao-form"
                  type="submit"
                >
                 Salvar
                </button>
              </div>
              <div div className="btns-do-perfil">
                <button
                  className="botao-form-perfi"
                  id="botao-form"
                  type="button"
                >
                  Limpar
                </button>
              </div>
            </div>


            </form>
                    
        </section>

                

    
            


</main>

       <Footer/>

      </div>
  );
}

export default EditarPerfil;
