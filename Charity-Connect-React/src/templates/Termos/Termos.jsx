import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import './Termos.css'


import footer from "../../assets/images/newshortlogobranca-12.png";
import header from "../../assets/images/charityConnect.png";
import MenuBar from '../../components/Menu/MenuBar';
import Footer from '../../components/Footer/Footer';

const Termos = () => {
  return (
    <div className='body-main'>
 <MenuBar />


      <main className="principal">

<section className="container__principal">
    <h1 id="texto__sobrenos">Termos e Condições de Uso</h1>
</section>



<section className="container__secundario">
    <p id="cahrity_closet" className="efeito__texto">1.Termos</p>
    <p id="texto">Ao acessar ao site charity connect, concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis ​​e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis. Se você não concordar com algum desses termos, está proibido de usar ou acessar este site. Os materiais contidos neste site são protegidos pelas leis de direitos autorais e marcas comerciais aplicáveis.</p>
</section>

<section className="container__terceario">
    <div className="textos3">
        <h1 id="texto__topico__3" className='color-text'>2. Uso de Licença</h1>
        <p id="teste" className='color-text'>É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no site charity connect , apenas para visualização transitória pessoal e não comercial. Esta é a concessão de uma licença, não uma transferência de título e, sob esta licença, você não pode:</p>
            <ul>
                <li className='color-text'>modificar ou copiar os materiais; </li>
                <li className='color-text'>usar os materiais para qualquer finalidade comercial ou para exibição pública (comercial ou não comercial); </li>
                <li className='color-text'>tentar descompilar ou fazer engenharia reversa de qualquer software contido no site charity connect; </li>
                <li className='color-text'>remover quaisquer direitos autorais ou outras notações de propriedade dos materiais; ou </li>
                <li className='color-text'>transferir os materiais para outra pessoa ou 'espelhe' os materiais em qualquer outro servidor.</li>
               </ul> <br />

               <p id="teste" className='color-text'>Esta licença será automaticamente rescindida se você violar alguma dessas restrições e poderá ser rescindida por charity connect a qualquer momento. Ao encerrar a visualização desses materiais ou após o término desta licença, você deve apagar todos os materiais baixados em sua posse, seja em formato eletrónico ou impresso.</p>
    </div>
    <div className="textos4">
        <h1 id="texto__topico__3" className='color-text'>3. Isenção de responsabilidade</h1>
        <p id="texto__4" className='color-text'>
            <ul>
                <li className='color-text'>Os materiais no site da charity connect são fornecidos 'como estão'. charity connect não oferece garantias, expressas ou implícitas, e, por este meio, isenta e nega todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de comercialização, adequação a um fim específico ou não violação de propriedade intelectual ou outra violação de direitos.</li>
                <li className='color-text'>Além disso, o charity connect não garante ou faz qualquer representação relativa à precisão, aos resultados prováveis ​​ou à confiabilidade do uso dos materiais em seu site ou de outra forma relacionado a esses materiais ou em sites vinculados a este site.</li>
            </ul><br />
        </p>
    </div>

    <div className="textos4">
        <h1 id="texto__topico__3" className='color-text'>4. Limitações</h1>
        <p id="texto__4" className='color-text'>
            Em nenhum caso o charity connect ou seus fornecedores serão responsáveis ​​por quaisquer danos (incluindo, sem limitação, danos por perda de dados ou lucro ou devido a interrupção dos negócios) decorrentes do uso ou da incapacidade de usar os materiais em charity connect, mesmo que charity connect ou um representante autorizado da charity connect tenha sido notificado oralmente ou por escrito da possibilidade de tais danos. Como algumas jurisdições não permitem limitações em garantias implícitas, ou limitações de responsabilidade por danos conseqüentes ou incidentais, essas limitações podem não se aplicar a você.
        </p>
    </div>

    <div className="textos4">
        <h1 id="texto__topico__3" className='color-text'>5. Precisão dos materiais</h1>
        <p id="texto__4" className='color-text'>
            Os materiais exibidos no site da charity connect podem incluir erros técnicos, tipográficos ou fotográficos. charity connect não garante que qualquer material em seu site seja preciso, completo ou atual. charity connect pode fazer alterações nos materiais contidos em seu site a qualquer momento, sem aviso prévio. No entanto, charity connect não se compromete a atualizar os materiais.
        </p>
    </div>

    <div className="textos4">
        <h1 id="texto__topico__3" className='color-text'>6. Links</h1>
        <p id="texto__4" className='color-text'>
            O charity connect não analisou todos os sites vinculados ao seu site e não é responsável pelo conteúdo de nenhum site vinculado. A inclusão de qualquer link não implica endosso por charity connect do site. O uso de qualquer site vinculado é por conta e risco do usuário.
        </p>
    </div>

</section>




</main>



<Footer />
    </div>
  )
}

export default Termos