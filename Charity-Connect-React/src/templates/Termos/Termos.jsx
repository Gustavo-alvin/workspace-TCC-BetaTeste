import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import './Termos.css'


import footer from "../../assets/images/newshortlogobranca-12.png";
import header from "../../assets/images/charityConnect.png";

const Termos = () => {
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
    <h1 id="texto__sobrenos">Termos e Condições de Uso</h1>
</section>

<div className="div-gradiente-home"></div>

<section className="container__secundario">
    <p id="cahrity_closet" className="efeito__texto">1.Termos</p>
    <p id="texto">Ao acessar ao site Charity Closet, concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis ​​e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis. Se você não concordar com algum desses termos, está proibido de usar ou acessar este site. Os materiais contidos neste site são protegidos pelas leis de direitos autorais e marcas comerciais aplicáveis.</p>
</section>

<section className="container__terceario">
    <div className="textos3">
        <h1 id="texto__topico__3">2. Uso de Licença</h1>
        <p id="teste">É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no site Charity Closet , apenas para visualização transitória pessoal e não comercial. Esta é a concessão de uma licença, não uma transferência de título e, sob esta licença, você não pode:</p>
            <ul>
                <li>modificar ou copiar os materiais; </li>
                <li>usar os materiais para qualquer finalidade comercial ou para exibição pública (comercial ou não comercial); </li>
                <li>tentar descompilar ou fazer engenharia reversa de qualquer software contido no site Charity Closet; </li>
                <li>remover quaisquer direitos autorais ou outras notações de propriedade dos materiais; ou </li>
                <li>transferir os materiais para outra pessoa ou 'espelhe' os materiais em qualquer outro servidor.</li>
               </ul> <br />

               <p id="teste">Esta licença será automaticamente rescindida se você violar alguma dessas restrições e poderá ser rescindida por Charity Closet a qualquer momento. Ao encerrar a visualização desses materiais ou após o término desta licença, você deve apagar todos os materiais baixados em sua posse, seja em formato eletrónico ou impresso.</p>
    </div>
    <div className="textos4">
        <h1 id="texto__topico__3">3. Isenção de responsabilidade</h1>
        <p id="texto__4">
            <ul>
                <li>Os materiais no site da Charity Closet são fornecidos 'como estão'. Charity Closet não oferece garantias, expressas ou implícitas, e, por este meio, isenta e nega todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de comercialização, adequação a um fim específico ou não violação de propriedade intelectual ou outra violação de direitos.</li>
                <li>Além disso, o Charity Closet não garante ou faz qualquer representação relativa à precisão, aos resultados prováveis ​​ou à confiabilidade do uso dos materiais em seu site ou de outra forma relacionado a esses materiais ou em sites vinculados a este site.</li>
            </ul><br />
        </p>
    </div>

    <div className="textos4">
        <h1 id="texto__topico__3">4. Limitações</h1>
        <p id="texto__4">
            Em nenhum caso o Charity Closet ou seus fornecedores serão responsáveis ​​por quaisquer danos (incluindo, sem limitação, danos por perda de dados ou lucro ou devido a interrupção dos negócios) decorrentes do uso ou da incapacidade de usar os materiais em Charity Closet, mesmo que Charity Closet ou um representante autorizado da Charity Closet tenha sido notificado oralmente ou por escrito da possibilidade de tais danos. Como algumas jurisdições não permitem limitações em garantias implícitas, ou limitações de responsabilidade por danos conseqüentes ou incidentais, essas limitações podem não se aplicar a você.
        </p>
    </div>

    <div className="textos4">
        <h1 id="texto__topico__3">5. Precisão dos materiais</h1>
        <p id="texto__4">
            Os materiais exibidos no site da Charity Closet podem incluir erros técnicos, tipográficos ou fotográficos. Charity Closet não garante que qualquer material em seu site seja preciso, completo ou atual. Charity Closet pode fazer alterações nos materiais contidos em seu site a qualquer momento, sem aviso prévio. No entanto, Charity Closet não se compromete a atualizar os materiais.
        </p>
    </div>

    <div className="textos4">
        <h1 id="texto__topico__3">6. Links</h1>
        <p id="texto__4">
            O Charity Closet não analisou todos os sites vinculados ao seu site e não é responsável pelo conteúdo de nenhum site vinculado. A inclusão de qualquer link não implica endosso por Charity Closet do site. O uso de qualquer site vinculado é por conta e risco do usuário.
        </p>
    </div>

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

export default Termos