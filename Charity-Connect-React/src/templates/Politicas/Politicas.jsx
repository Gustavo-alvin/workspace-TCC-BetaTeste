import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import './Politicas.css'


import footer from "../../assets/images/newshortlogobranca-12.png";
import header from "../../assets/images/charityConnect.png";

const Politicas = () => {
  return (
    <div>
        <header id="cabecalho">
        <a href="#" id="logo" >
          <img src={header} style={{ "width": '16rem' }} alt="Logo" />
        </a>
        <nav id="nav">
          <button id="btn-mobile">
            <span id="hambuguer"></span>
          </button>
          <ul id="menu">
            <li><a id="itens" href={'/'} >Home</a></li>
            <li><a id="itens" href={'/catalogo'} >Catalogo</a></li>
            <li><a id="itens" href={'/perfil'} >Meu Perfil ONG</a></li>
            <li><a id="itens" href={'/sobrenos'} >Sobre nós</a></li>
            <li>
              <a style={{ "--clr": "#707bff" }} className="btn-entrar" id="itens" href={'/login'} >
                <span>Entrar</span>
              </a>
            </li>
          </ul>
        </nav>
      </header>



      <main className="principal">

        <section className="container__principal">
            <h1 id="political-text">Politicas de privacidade</h1>
        </section>

        <div className="div-gradiente-home"></div>

        <section className="container__secundario">
            <p id="privacy-policy" className="efeito__texto">Política Privacidade</p>
            <p id="texto"> A sua privacidade é importante para nós. É política do Charity Closet respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site Charity Closet, e outros sites que possuímos e operamos.<br/>
                Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.<br/>
                Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis ​​para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.<br/><br/>
                Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.<br/>
                O nosso site pode ter links para sites externos que não são operados por nós. Esteja ciente de que não temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas respectivas políticas de privacidade.<br/>
                Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não possamos fornecer alguns dos serviços desejados.<br/>
                O uso continuado de nosso site será considerado como aceitação de nossas práticas em torno de privacidade e informações pessoais. Se você tiver alguma dúvida sobre como lidamos com dados do usuário e informações pessoais, entre em contacto connosco.</p>
        </section>

        <section className="container__terceario">
            <div className="textos3">
                <h1 id="texto__topico__3">Comprometidos com a conexão</h1>
                <div className="lista">
                    <ul className="lista__itens1">
                        <li className="lista__ordem1">O serviço Google AdSense que usamos para veicular publicidade usa um cookie DoubleClick para veicular anúncios mais relevantes em toda a Web e limitar o número de vezes que um determinado anúncio é exibido para você.</li> <br />
                        <li className="lista__ordem1">Para mais informações sobre o Google AdSense, consulte as FAQs oficiais sobre privacidade do Google AdSense.</li> <br />
                        <li className="lista__ordem1">Utilizamos anúncios para compensar os custos de funcionamento deste site e fornecer financiamento para futuros desenvolvimentos. Os cookies de publicidade comportamental usados ​​por este site foram projetados para garantir que você forneça os anúncios mais relevantes sempre que possível, rastreando anonimamente seus interesses e apresentando coisas semelhantes que possam ser do seu interesse.</li> <br />
                        <li className="lista__ordem1">Vários parceiros anunciam em nosso nome e os cookies de rastreamento de afiliados simplesmente nos permitem ver se nossos clientes acessaram o site através de um dos sites de nossos parceiros, para que possamos creditá-los adequadamente e, quando aplicável, permitir que nossos parceiros afiliados ofereçam qualquer promoção que pode fornecê-lo para fazer uma compra.</li> <br />
                    </ul>
                </div>
            </div>
            <div className="textos4">
                <p id="texto__topico__4" className="efeito__texto">Compromisso do Usuário</p>
                <div className="lista">
                    <ul className="lista__itens">
                    <li className="lista__ordem">A) Não se envolver em atividades que sejam ilegais ou contrárias à boa fé a à ordem pública;</li>
                    <li className="lista__ordem">B) Não difundir propaganda ou conteúdo de natureza racista, xenofóbica, jogos de sorte ou azar, qualquer tipo de pornografia ilegal, de apologia ao terrorismo ou contra os direitos humanos;</li>
                    <li className="lista__ordem">C) Não causar danos aos sistemas físicos (hardwares) e lógicos (softwares) do Charity Closet, de seus fornecedores ou terceiros, para introduzir ou disseminar vírus informáticos ou quaisquer outros sistemas de hardware ou software que sejam capazes de causar danos anteriormente mencionados.</li>
                </ul>
                </div>
            </div>

        </section>
        <section className="container__secundario">
            <p id="privacy-policy" className="efeito__texto">Mais informações</p>
            <p id="texto"> Esperemos que esteja esclarecido e, como mencionado anteriormente, se houver algo que você não tem certeza se precisa ou não, geralmente é mais seguro deixar os cookies ativados, caso interaja com um dos recursos que você usa em nosso site.  <br />
                Esta política é efetiva a partir de 3 October 2023 14:23</p>
        </section>

        
    </main>

    <footer className="footergeral">
        <section className="footercontent">
          <figure className="logofooter">
            <img id="logofooter" src={footer} alt="Logo Footer" />
            <h1 id="text-logo-footer">Charity Connect.</h1>
          </figure>

          <div className="footerpart2">
            <a id="link-footer-pt2" href={'/sobre'} >Sobre o Projeto</a>
            <a id="link-footer-pt2" href={'/contato'} >Contato</a>
          </div>

          <div className="footerpart3">
            <a id="link-footer-pt3" href={'/Politica'} >Política de Privacidade</a>
            <a id="link-footer-pt3" href={'/Termos'} >Termos de Uso</a>
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
  )
}

export default Politicas