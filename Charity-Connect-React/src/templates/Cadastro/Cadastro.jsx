import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Sidebar from '../../components/Menu/Sidebar';
import test from "../../assets/images/charityConnect.png";
import capa from "../../assets/images/background1homepage.png";
import coracao from "../../assets/images/newshortlogobranca-12.png";
import footer from "../../assets/images/newshortlogobranca-12.png";
import './Cadastro.css';

const Cadastro = () => {
  return (
    <div>
      <header id="cabecalho">
        <a href="#" id="logo">
          <img src={test} style={{ width: '16rem' }} alt="Logo" />
        </a>
        <nav id="nav">
          <button id="btn-mobile">
            <span id="hambuguer"></span>
          </button>
          <ul id="menu">
            <li><a id="itens" href={'/'}>Home</a></li>
            <li><a id="itens" href={'/catalogo'}>Catalogo</a></li>
            <li><a id="itens" href={'/perfil'}>Meu Perfil ONG</a></li>
            <li><a id="itens" href={'/sobrenos'}>Sobre nós</a></li>
            <li>
              <a style={{ "--clr": "#707bff" }} className="btn-entrar" id="itens" href={'/login'}>
                <span>Entrar</span>
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main className="cadastroong">
        <div className="coracaocad">
          <figure className="coracaofigure">
            <img id="coracao" src={coracao} alt="Coração" />
          </figure>
        </div>

        <section className="formulario-section">
          <form id="myForm" className="form" action="" method="post" onSubmit={() => validarForm()}>
            <div className="desc-form">
              <h1 id="desc-h1">Charity Connect</h1>
              <h2 id="title-form">Cadastro de ONG</h2>
            </div>

            <section className="inputs-form">
              <div className="form-1">
                <label id="label">
                  <h1 id="nome-input">Nome da ONG</h1>
                  <input id="inputnomeong" type="text" name="nome_ong" maxLength="100" placeholder="Digite o nome da ONG" required pattern="[A-Za-z]+" />
                </label>
                <label id="label">
                  <h1 id="nome-input">Nome do Representante</h1>
                  <input id="inputnomerep" type="text" name="nome_rep" maxLength="100" placeholder="Digite o nome do Representante" required pattern="[A-Za-z]+[A-Za-zÀ-ÿ\s]+" />
                </label>
                <label id="label">
                  <h1 id="nome-input">Email da organização</h1>
                  <input id="inputemail" type="email" name="email_ong" maxLength="100" placeholder="email@email.com" required />
                </label>
                <label id="label">
                  <h1 id="nome-input">CNPJ</h1>
                  <input type="text" name="cnpj_ong" id="cnpj" placeholder="CNPJ (apenas números)" required pattern="[0-9]{14}" maxLength="14" />
                </label>
                <label id="label">
                  <h1 id="nome-input">Número de celular</h1>
                  <input type="tel" id="inputnum" name="celular" placeholder="(XX) XXXXX-XXXX" onInput={() => mascara(this)} maxLength="14" required />
                </label>

                <label id="label-uf">UF <br></br>
                    <select id="selectuf">
                      <option value="" disabled selected>Selecione a UF</option>
                      <option value="AC">Acre (AC)</option>
                      <option value="AL">Alagoas (AL)</option>
                      <option value="AP">Amapá (AP)</option>
                      <option value="AM">Amazonas (AM)</option>
                      <option value="BA">Bahia (BA)</option>
                      <option value="CE">Ceará (CE)</option>
                      <option value="DF">Distrito Federal (DF)</option>
                      <option value="ES">Espírito Santo (ES)</option>
                      <option value="GO">Goiás (GO)</option>
                      <option value="MA">Maranhão (MA)</option>
                      <option value="MT">Mato Grosso (MT)</option>
                      <option value="MS">Mato Grosso do Sul (MS)</option>
                      <option value="MG">Minas Gerais (MG)</option>
                      <option value="PA">Pará (PA)</option>
                      <option value="PB">Paraíba (PB)</option>
                      <option value="PR">Paraná (PR)</option>
                      <option value="PE">Pernambuco (PE)</option>
                      <option value="PI">Piauí (PI)</option>
                      <option value="RJ">Rio de Janeiro (RJ)</option>
                      <option value="RN">Rio Grande do Norte (RN)</option>
                      <option value="RS">Rio Grande do Sul (RS)</option>
                      <option value="RO">Rondônia (RO)</option>
                      <option value="RR">Roraima (RR)</option>
                      <option value="SC">Santa Catarina (SC)</option>
                      <option value="SP">São Paulo (SP)</option>
                      <option value="SE">Sergipe (SE)</option>
                      <option value="TO">Tocantins (TO)</option>
                    </select>
                  </label>


                <div className="endereco-div">
                  <label id="label-end">CEP</label><br></br>
                  <input type="text" id="cep" name="cep" placeholder="00000-000" onInput={() => mascaraCEP(this)} maxLength="9" required />

                </div>
              </div>

              <div className="form-2">
                <label id="label">
                  <h1 id="nome-input">Descrição de Atuação</h1>
                  <textarea id="textarea-form" cols="40" rows="6" maxLength="200"></textarea>
                </label>
                <br />
                <label id="label">
                  <h1 id="nome-input">Upload de foto de perfil</h1>
                  <input type="file" id="foto" name="foto" accept="image/*" required />
                </label>
                <br />
                <label id="label">
                  <h1 id="nome-input">Senha: </h1>
                  <input type="password" id="inputsenha" name="senha" maxLength="100" required />
                </label>
                <br />
                <label id="label">
                  <h1 id="nome-input"> Confirmação de Senha:</h1>
                  <input type="password" id="inputsenha1" name="confirmar_senha" maxLength="100" required />
                </label>
                <div className="g-recaptcha" data-sitekey="6Lf5Uc8pAAAAAFC3sVTK7vsUL7q-fIjmHaihZ15N"></div>
                <div id="successMessage" className="success-message">A confirmação do cadastro será enviada por email.</div>
              </div>
            </section>

            <div className="btns">
              <div>
                <button className="botao-form-cadastro" id="botao-form" type="reset">Reset</button>
              </div>
              <div>
                <button className="botao-form-cadastro" id="botao-form" type="submit" onClick={() => validarCNPJ()} data-sitekey="reCAPTCHA_site_key" data-callback='onSubmit' data-action='submit'>
                  Cadastrar
                </button>
              </div>
            </div>
          </form>
        </section>

        <div style={{ height: '50px', backgroundColor: '#161b22' }}></div>
      </main>

      <footer className="footergeral">
        <section className="footercontent">
          <figure className="logofooter">
            <img id="logofooter" src={footer} alt="Logo Footer" />
            <h1 id="text-logo-footer">Charity Connect.</h1>
          </figure>

          <div className="footerpart2">
            <a id="link-footer-pt2" href={'/Sobrenos'}>Sobre o Projeto</a>
            <a id="link-footer-pt2" href={'/Contato'}>Contato</a>
          </div>

          <div className="footerpart3">
            <a id="link-footer-pt3" href={'/Politica'}>Política de Privacidade</a>
            <a id="link-footer-pt3" href={'/Termos'}>Termos de Uso</a>
          </div>

          <div className="divisaodofooter2">
            <div className="origemdotrabalho">
              <div className="integrantesdiv">
                <h2 id="itensfooter2">Integrantes:
                  <li id="itemfooter">02 Cauã Santana</li>
                  <li id="itemfooter">07 Gustavo Alves</li>
                  <li id="itemfooter">08 Gustavo Gomes</li>
                  <li id="itemfooter">13 Leandro Afonso Niches</li>
                  <li id="itemfooter">23 Nathalia Lima</li>
                  <li id="itemfooter">28 Ruan Pablo Braga Mendes</li>
                  <li id="itemfooter">32 Wellington Cavalcante</li>
                  <li id="itemfooter">32 Vinicius de Jesus Barreto</li>
                </h2>
              </div>
              <div className="profediscfooter">
                <h2 id="itensfooter2">ITB - FIEB
                  <li id="itemfooter">Brasílio Flores de Azevedo</li>
                </h2>
                <h2 id="itensfooter2">Curso
                  <li id="itemfooter">Informática 2022 - 2024</li>
                </h2>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </div>
  );
}

export default Cadastro;
