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


<section class="kk">
    
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

                   <div className="divisao-inputs">

                        <label htmlFor="">
                            <h1>NOME DA ORGANIZAÇÃO:</h1>
                            <input className="editar-inputs" type="text" />
                        </label>

                        <label htmlFor="">
                            <h1>NOME DO REPRESENTANTE:</h1>
                            <input className="editar-inputs" type="text" />
                        </label>
                   </div>

                   <div className="divisao-inputs-solos">
                    <label htmlFor="">
                        <h1>EMAIL DA ORGANIZAÇÃO:</h1>
                        <input className="editar-inputs-solos" type="text" />
                    </label>
                   </div>

                   <div className="divisao-inputs">

                        <label htmlFor="">
                            <h1>NÚMERO DE CELULAR::</h1>
                            <input className="editar-inputs" type="text" />
                        </label>

                        <label htmlFor="">
                            <h1>CEP:</h1>
                            <input className="editar-inputs" type="text" />
                        </label>
                   </div>


                   <div className="divisao-inputs-solos">
                    <label htmlFor="">
                        <h1>INTERESSES:</h1>
                        <input className="editar-inputs-solos" type="text" />
                    </label>
                   </div>

                     <div className="divisao-inputs">

                        <label htmlFor="">
                            <h1>Endereço</h1>
                            <input className="editar-inputs" type="text" />
                        </label>

                        <label htmlFor="">
                            <h1>Bairro</h1>
                            <input className="editar-inputs" type="text" />
                        </label>
                   </div>

                     <div className="divisao-inputs">

                        <label htmlFor="">
                            <h1>CIDADE:</h1>
                            <input className="editar-inputs" type="text" />
                        </label>

                        <label htmlFor="">
                            <h1>CNPJ:</h1>
                            <input className="editar-inputs" type="text" />
                        </label>
                   </div>

                   <div className="divisao-inputs-solos">
                    <label htmlFor="">
                        <h1>DESCRIÇÃO DE ATUAÇÃO:</h1>
                        <input className="editar-inputs-solos" type="text" />
                    </label>
                   </div>
    
                

                   <div className="btns">
              <div>
                <button
                  className="botao-form-cadastro"
                  id="botao-form"
                  type="button"
                >
                  Reset
                </button>
              </div>
              <div>
                <button
                  className="botao-form-cadastro"
                  id="botao-form-cadastro"
                  type="submit"
                >
                  Cadastrar
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
