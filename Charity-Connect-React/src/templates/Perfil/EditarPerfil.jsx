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

function EditarPerfil() {

  return (
    <div>
       <MenuBar />

       <main className="editar">

<div className="coracaocad">
    <figure className="coracaofigure">
        <img id="coracao" />
    </figure>
</div>


<section class="formulario-section">
    
            <form class="form" method="post" action="">
    
                <div class="Perfil">
                    <div class="controler_perfil">
                       <div class="pic">
                           <label class="picture" tabindex="0" for="picture__input">
                               <input type="file" name="" accept="image/*" id="picture__input"/>
                               <span class="picture__image"></span>
                              </label>
                         </div>
                    </div>
                   </div>
    
                <section class="inputs-form">
    
                    <div class="form-1">
    
                        <div class="form-2">
                            <label id="label">
                                <h1 id="nome-input">
                                    NOME DA ORGANIZAÇÃO:
                                </h1>
                                <input class="form-2__inputs" id="nome" type="text" name="nome_ong" maxlength="100"
                                    placeholder="Digite seu nome" pattern="[a-zA-Záãâéêíóôõú\s]+$"  required/>
                            </label>
        
                            <label id="label">
                                <h1 id="nome-input">
                                    NOME DO REPRESENTANTE:
                                </h1>
                                <input class="form-2__inputs" id="sobrenome" type="text" name="nome_ong" maxlength="100"
                                    placeholder="Digite seu sobrenome"  pattern="[a-zA-Záãâéêíóôõú\s]+$" required/>
                            </label>
                        </div><br />


                        <label id="label">
                            <h1 id="nome-input">
                                EMAIL DA ORGANIZAÇÃO:
                            </h1>
                            <input  type="email" name="email" maxlength="100"
                                placeholder="Digite seu email..."  required/>
                        </label><br />
    
                        <div class="form-2">
                            <label id="label">
                                <h1 id="nome-input">
                                    NÚMERO DE CELULAR:
                                </h1>
                                <input class="form-2__inputs" type="tel" id="inputnum" name="celular" placeholder="(XX) XXXXX-XXXX" oninput="mascara(this)" maxlength="15" required/>
                        </label>
                           
        
                            <label id="label">
                                <h1 id="nome-input">
                                    CEP:
                                </h1>
                                    <input type="text" class="form-2__inputs" id="cep" name="cep" placeholder="Digite seu sobrenome" oninput="mascaraCEP(this)" maxlength="9" required/>
                            </label>
                        </div><br />
    
                        <div class="form-2">
                            <label id="label">
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
        
                            <label id="label">
                                <h1 id="nome-input">
                                    CNPJ:
                                </h1>
                                    <input  class="form-2__inputs" type="text" name="cnpj_ong" id="cnpj" placeholder="CNPJ (apenas números)" required
                            pattern="[0-9]{14}" maxlength="14"/>
                            </label>
                        </div><br />
    
                       <div class="form-3">
                       
    
                        <label id="label">
                            <h1 id="nome-input">
                                Descrição de Atuação:
                            </h1>
                            <input class="form-3__inputs" id="inputpergunta" type="text" name="Descrição de Atuação" maxlength="200"
                            placeholder="Descrição de Atuação"  required/>
                        </label>
                       </div>
                    </div>

                    </section>


                    <div class="btn-form">
                <a class="botao-form" id="botao-form" href="perfilong.html">Salvar</a>
               </div>

    
            </form>
                    
        </section>

                

    
            


</main>

       <Footer/>

      </div>
  );
}

export default EditarPerfil;
