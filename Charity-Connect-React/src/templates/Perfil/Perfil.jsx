import React, { useEffect, useState } from "react";
import header from "../../assets/images/charityConnect.png";
import fotoong from "../../assets/images/ongs-02.png";
import footer from "../../assets/images/newnames_Prancheta 1.png";
import ong2 from "../../assets/images/ongs-02.png";
import "./Perfil.css";
import { useParams, useNavigate } from "react-router-dom"; // Import useNavigate
import CatalogoService from "../../services/CatalogoService";
import MenuBar from "../../components/Menu/MenuBar";

function Perfil() {
  const { id } = useParams();
  const navigate = useNavigate(); // Initialize navigate

  const objectValues = {
    id: null,
    nome: "",
    nomeRep: "",
    email: "",
    senha: "",
    telefone: "",
    descAtuacao: "",
    foto: "",
    cep: "",
    cnpj: "",
    uf: "",
    localidade: "",
  };

  const [catalogo, setCatalogo] = useState(objectValues);

  useEffect(() => {
    CatalogoService.findById(id)
      .then((response) => {
        const catalogo = response.data;
        setCatalogo(catalogo);
        console.log(catalogo);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  // Function to handle edit button click
  const handleEditClick = (id) => {
    navigate(`/editarperfil/` + id); // Redirect to the edit profile page
  };

  return (
    <div>
      <MenuBar />

      <main className="minhaONg">
        <form action="" className="formulario">
          <div className="perfil-principal">
            <section className="sessao-perfil">
              <div className="teste">
                <img
                  id="foto-perfil"
                  src={catalogo.foto ? "data:image/jpeg;base64," + catalogo.foto : ""}
                  alt=""
                />
              </div>
              <div>
                <span id="nome-ong">{catalogo.nome}</span>
                <br />
                <label className="desc" htmlFor="">
                  {catalogo.descAtuacao}
                </label>
              </div>
              <div>
                <button
                  type="button"
                  id="botaocatalogo"
                  className="editar"
                  onClick={handleEditClick} // Add onClick event to redirect
                >
                  Editar
                </button>
              </div>
            </section>

            <section className="info-ong">
            
              <div className="info">
                <label htmlFor="id" className="label-input">
                Nome da organização:
                </label>
                <label className="area-contato" htmlFor="">{catalogo.nome}</label>
              </div>
              <div className="info">
                <label htmlFor="id" className="label-input">
                Nome do Representante:
                </label>
                <label className="area-contato" htmlFor="">{catalogo.nomeRep}</label>
              </div>
              <div className="info">
                <label htmlFor="id" className="label-input">
                Email da organização:
                </label>
                <label className="area-contato" htmlFor="">{catalogo.email}</label>
              </div>
              <div className="info">
                <label htmlFor="id" className="label-input">
                Número 
                para contato:
                </label>
                <label  className="area-contato" htmlFor="">{catalogo.telefone}</label>
              </div>
              <div className="info">
                <label htmlFor="id" className="label-input">
                Cep:
                </label>
               <label className="area-contato" htmlFor="">{catalogo.cep}</label>
              </div>
              <div className="info">
                <label htmlFor="id" className="label-input">
                Cnpj:
                </label>
                <label className="area-contato" htmlFor="">{catalogo.cnpj}</label>
              </div>
              <div className="info">
                <label htmlFor="id" className="label-input">
                UF:
                </label>
                <label className="area-contato" htmlFor="">{catalogo.uf}</label>
              </div>
              
            
          </section>
          
          </div>
        </form>
      </main>

      <footer className="footergeral">
        <section className="footercontent">
          <figure className="logofooter">
            <img id="logofooter" src={footer} alt="Logo Footer" />
            <h1 id="text-logo-footer">Charity Connect.</h1>
          </figure>
          {/* The rest of your footer */}
        </section>
      </footer>
    </div>
  );
}

export default Perfil;
