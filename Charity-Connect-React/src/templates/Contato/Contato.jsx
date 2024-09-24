import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import InputMask from 'react-input-mask';

import './Contato.css';
import header from "../../assets/images/charityConnect.png";
import footer from "../../assets/images/newshortlogobranca-12.png";
import coracao from "../../assets/images/newshortlogobranca-12.png";
import MenuBar from '../../components/Menu/MenuBar';
import Footer from '../../components/Footer/Footer';
import ContatoService from "../../services/ContatoService";

const Contato = () => {
  const [formData, setFormData] = useState({});
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData((formData) => ({ ...formData, [name]: value }));
  };

  const handleKeyPress = (e, type) => {
    if (type === "text" && !/^[a-zA-Z\s]*$/.test(e.key)) {
      e.preventDefault(); // Bloqueia a entrada de letras ou caracteres especiais
    }
    if (type === "tel" && !/^\d$/.test(e.key)) {
      e.preventDefault(); // Bloqueia a entrada de não-números
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessful(false);

    ContatoService.create(formData).then(
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
      <main className="contato">
        <div className="coracaocad">
          <figure className="coracaofigure">
            <img id="coracao" src={coracao} alt="Coração" />
          </figure>
        </div>

        <section className="formulario-section">
          <form onSubmit={handleSubmit} className="form" method="post" action="">
            <div className="desc-form">
              <h1 id="desc-h1">Charity Connect</h1>
              <h2 id="title-form">Formulário para Contato</h2>
            </div>

            <section className="inputs-form">
              <div className="form-1">
                <label id="label">
                  <h1 id="name-caixa">MOTIVO DO CONTATO:</h1>
                  <input
                    id="inputmotivo"
                    type="text"
                    className='editar-inputs-solos'
                    name="motivoContato"
                    placeholder="Digite motivo de contato"
                    required
                    value={formData.motivoContato || ""}
                    onChange={handleChange}
                  />
                </label><br />
                <label id="label">
                  <h1 id="name-caixa">MENSAGEM</h1>
                  <textarea
                    id="inputpergunta"
                    className='editar-inputs-solos'
                    value={formData.pergunta || ""}
                    onChange={handleChange}
                    name='pergunta'
                  />
                </label><br />

                <div className="form-2">
                  <label id="label">
                    <h1 id="name-caixa">NOME:</h1>
                    <input
                      className='editar-inputs-solos'
                      id="nome"
                      type="text"
                      name="nome"
                      placeholder="Digite seu nome"
                      required
                      value={formData.nome || ""}
                      onChange={handleChange}
                      onKeyPress={(e) => handleKeyPress(e, "text")}
                    />
                  </label>
                  <br />
                  <label id="label">
                    <h1 id="name-caixa">SOBRENOME:</h1>
                    <input
                      className='editar-inputs-solos'
                      id="sobrenome"
                      type="text"
                      name="sobrenome"
                      placeholder="Digite seu sobrenome"
                      required
                      value={formData.sobrenome || ""}
                      onChange={handleChange}
                      onKeyPress={(e) => handleKeyPress(e, "text")}
                    />
                  </label>
                </div><br />

                <label id="label">
                  <h1 id="name-caixa">ENDEREÇO DE E-MAIL:</h1>
                  <input
                    className='editar-inputs-solos'
                    type="email"
                    name="email"
                    placeholder="Digite seu email"
                    required
                    value={formData.email || ""}
                    onChange={handleChange}
                  />
                </label><br />

                <div className="form-3">
                  <label id="label">
                    <h1 id="name-caixa">NÚMERO DE CELULAR</h1>
                    <InputMask
                      mask="(99) 99999-9999"
                      id="tel"
                      className='editar-inputs-solos'
                      name="telefone"
                      placeholder="(XX) XXXXX-XXXX"
                      required
                      value={formData.telefone || ""}
                      onChange={handleChange}
                    />
                  </label>
                </div>
              </div>
            </section>

            <div className="btn-form">
              <button className="botao-form">Enviar</button>
            </div>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contato;
