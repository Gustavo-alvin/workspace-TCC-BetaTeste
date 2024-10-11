import React from 'react';
import { Link } from 'react-router-dom';

import './Sobre.css';
import MenuBar from '../../components/Menu/MenuBar';
import Footer from '../../components/Footer/Footer';
import header from "../../assets/images/charityConnect.png";
import footer from "../../assets/images/newshortlogobranca-12.png";
import ods10 from "../../assets/images/ODS10_Prancheta 1.png";
import ods01 from "../../assets/images/ODS1-04.png";
import ods12 from "../../assets/images/ODS12-02.png";
import ods17 from "../../assets/images/ODS17-03.png";



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
                <p id="texto-sobrenos"> <strong className='ods-strong'> Conexão com Propósito:</strong> No Charity Connect™, promovemos a conexão entre doadores e
                    ONGs de maneira simples e eficaz. Através da nossa plataforma, você pode contribuir diretamente para
                    causas que importam, sabendo que suas doações fazem a diferença.</p><br/>
                <p id="texto-sobrenos"> <strong className='ods-strong'> ODS em Ação:</strong> Cada doação que você faz através do Charity Connect™
                    contribui para diversas Metas de Desenvolvimento Sustentável da ONU. Desde a redução da pobreza até
                    a promoção da igualdade de gênero e o combate às mudanças climáticas, seu gesto solidário tem um
                    impacto social e ambiental significativo.<br/><br/>
                    <strong className='ods-strong'> ODS 1:</strong> Erradicação da Pobreza - O projeto se alinha diretamente com a ODS 1, pois
                    visa ajudar as pessoas carentes ao fornecer-lhes doações que podem melhorar sua qualidade de vida e
                    autoestima. Ao ligar doadores a ONGs, o Charity Connect contribui para aliviar a pobreza e reduzir as
                    disparidades socioeconômicas. <br/><br/><div className="ods_img_mobile"><img src={ods01} id="logoods"/></div>

                    <strong className='ods-strong'>ODS 10:</strong> Redução das Desigualdades - Ao enfocar a doação de roupas para pessoas
                    necessitadas, o projeto aborda a ODS 10, buscando diminuir as desigualdades sociais. Isso é
                    especialmente relevante em um contexto em que o acesso a itens básicos, como roupas, pode ser
                    desigual entre diferentes grupos. <br/><br/><div className="ods_img_mobile"><img src={ods10} id="logoods"/></div>

                    <strong className='ods-strong'>ODS 12:</strong> Consumo e Produção Sustentáveis - O Charity Connect também está alinhado com
                    a ODS 12, uma vez que promove a reutilização e a recirculação de roupas, reduzindo o desperdício e a
                    pressão sobre os recursos naturais. As doações incentiva um modelo mais sustentável
                    de consumo. <br/><br/><div className="ods_img_mobile"><img src={ods12} id="logoods"/></div>

                    <strong className='ods-strong'>ODS 17:</strong> Parcerias e Meios de Implementação - A ODS 17 é central para o projeto,
                    pois destaca a importância da construção de parcerias entre diferentes setores da sociedade para
                    alcançar as metas de desenvolvimento. O Charity Connect atua como um intermediário, conectando
                    doadores individuais, ONGs e a comunidade em geral para alcançar objetivos compartilhados. <br/><br/><div className="ods_img_mobile"><img src={ods17} id="logoods"/></div>
                </p>
                <p id="texto-sobrenos"> <strong className='ods-strong'>Empoderando Comunidades: </strong>Ao doar, você está capacitando indivíduos em
                    situação de vulnerabilidade a se manterem aquecidos, confiantes e prontos para enfrentar desafios. É
                    uma maneira tangível de mostrar solidariedade e amor ao próximo.</p><br/>
                <p id="texto-sobrenos"> <strong className='ods-strong'>Sustentabilidade:</strong> Estamos comprometidos com a redução do desperdício e a
                    preservação do meio ambiente. Ao reutilizar, estamos contribuindo para um futuro mais
                    sustentável e consciente.</p><br/>
            </div>

            <div className="img__ods">
                <img src={ods01} id="logoods"/>
                <img src={ods10} id="logoods"/>
                <img src={ods12} id="logoods"/>
                <img src={ods17} id="logoods"/>
            </div>
        </section>
);

export default Sobre;
