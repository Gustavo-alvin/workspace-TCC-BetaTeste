import React from 'react';
import { Link } from 'react-router-dom';
import './Politicas.css';
import MenuBar from '../../components/Menu/MenuBar';
import Footer from '../../components/Footer/Footer';

const Politicas = () => {
  return (
    <div>
      <MenuBar />
      <main className="principal">
        <section className="container__principal">
          <h1 className="titulo">Política de Privacidade</h1>
        </section>


        <section className="container__secundario">
          <h2 className="subtitulo">Política de Privacidade</h2>
          <p className="texto">
            A sua privacidade é importante para nós. É política do Charity Connect respeitar a sua privacidade em relação a qualquer informação que possamos coletar em nosso site. Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço, por meios justos e legais, com o seu conhecimento e consentimento.
          </p>
          <p className="texto">
            Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis para evitar perdas e roubos.
          </p>
          <p className="texto">
            Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei. O nosso site pode ter links para sites externos que não são operados por nós. Esteja ciente de que não temos controle sobre o conteúdo e práticas desses sites.
          </p>
          <p className="texto">
            Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não possamos fornecer alguns serviços desejados. O uso continuado de nosso site será considerado como aceitação de nossas práticas em torno de privacidade e informações pessoais.
          </p>
        </section>

        <section className="container__terceario">
          <div className="textos3">
            <h2 className="subtitulo">Comprometidos com a Conexão</h2>
            <ul className="lista">
              <li>O serviço Google AdSense usa um cookie DoubleClick para veicular anúncios mais relevantes.</li>
              <li>Para mais informações sobre o Google AdSense, consulte as FAQs oficiais.</li>
              <li>Utilizamos anúncios para compensar os custos de operação deste site.</li>
              <li>Os cookies de rastreamento de afiliados nos permitem ver se nossos clientes acessaram o site através de parceiros.</li>
            </ul>
          </div>
          <div className="textos4">
            <h2 className="subtitulo">Compromisso do Usuário</h2>
            <ul className="lista">
              <li>Não se envolver em atividades ilegais ou contrárias à boa fé;</li>
              <li>Não difundir conteúdo racista, xenofóbico ou qualquer tipo de pornografia ilegal;</li>
              <li>Não causar danos aos sistemas do Charity Connect ou de terceiros.</li>
            </ul>
          </div>
        </section>

        <section className="container__secundario">
          <h2 className="subtitulo">Mais Informações</h2>
          <p className="texto">
            Esperamos que esteja esclarecido. Caso tenha dúvidas, é mais seguro deixar os cookies ativados, caso interaja com um dos recursos em nosso site.
          </p>
          <p className="texto">Esta política é efetiva a partir de 3 de Outubro de 2023.</p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Politicas;
