import React from 'react';
import { Link } from 'react-router-dom';

import './Sobre.css';
import MenuBar from '../../components/Menu/MenuBar';
import Footer from '../../components/Footer/Footer';
import odsImages from '../../assets/images/odsImages'; // Certifique-se de importar corretamente suas imagens.

const Sobre = () => {
  return (
    <div>
      <MenuBar />

      <main className="principal">
        <section className="container__principal">
          <h1 id="texto__sobrenos">Sobre Nós</h1>
        </section>

        <div className="div-gradiente-home"></div>

        <section className="container__terceario">
          <ArticleSection
            title="Charity Connect"
            content="O projeto Charity Connect, uma inovadora aplicação desenvolvida para promover a conexão entre organizações não-governamentais (ONGs) e potenciais doadores, abraça os princípios fundamentais das Metas de Desenvolvimento Sustentável (ODS) estabelecidas pela ONU para 2030. Ao facilitar a doação e sua redistribuição para indivíduos em situação de vulnerabilidade, o projeto toca em várias ODS, promovendo um impacto social e ambiental significativo."
          />

          <ArticleSection
            title="Comprometidos com a conexão"
            content="No Charity Connect™, acreditamos na importância de construir uma ligação segura e confiável entre doadores e organizações não-governamentais (ONGs). Nossa abordagem se destaca ao assegurar que essa conexão seja a base sólida sobre a qual construímos nosso impacto social e ambiental."
          />

          <VisionAndImpact />
        </section>
      </main>

      <Footer />
    </div>
  );
};

const ArticleSection = ({ title, content }) => (
  <div className="textos3">
    <h1 id="texto__topico__3">{title}</h1>
    <p id="teste">{content}</p>
  </div>
);

const VisionAndImpact = () => (
  <>
    <div className="textos4">
      <p id="texto__topico__4" className="efeito__texto">Nossa Visão:</p>
      <p id="texto__4">
        Imaginamos um mundo onde ninguém passe necessidades onde cada criança tenha seus direitos básicos atendidos e onde a dignidade de todos seja preservada através da doação. Acreditamos que juntos podemos fazer a diferença e alcançar as Metas de Desenvolvimento Sustentável (ODS) estabelecidas pela ONU para 2030.
      </p>
    </div>

    <ImpactDetails />
  </>
);

const ImpactDetails = () => (
  <section className="container__quarteario">
    <div className="textos5">
      <p id="texto__3" className="efeito__texto">Nosso Impacto:</p>
      <p id="texto-sobrenos">
        <strong className='ods-strong'> Conexão com Propósito:</strong> No Charity Connect™, promovemos a conexão entre doadores e ONGs de maneira simples e eficaz. Através da nossa plataforma, você pode contribuir diretamente para causas que importam, sabendo que suas doações fazem a diferença.
      </p>
      {/* Adicione o restante dos detalhes do impacto e ODS aqui... */}
    </div>
  </section>
);

export default Sobre;
