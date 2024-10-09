import React, { useEffect, useState } from 'react';
import { FaUsers } from 'react-icons/fa';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

import './Admin.css'; 
import ContatoService from '../../services/ContatoService';
import AdminService from '../../services/AdminService';
import MenuBar from '../../components/Menu/MenuBar';
import Footer from '../../components/Footer/Footer';
import OngsList from '../../components/admin/OngsLists';
import ContatoList from'../../components/admin/ContatoLists';

function Admin() {
  const navigate = useNavigate();
  const [ongs, setOngs] = useState([]);
  const [contatos, setContatos] = useState([]);
  const [view, setView] = useState('ongs'); // estado para controlar qual lista mostrar

  useEffect(() => {
    // Carregar ONGs e contatos ao carregar a página
    AdminService.findAll()
      .then((response) => setOngs(response.data))
      .catch((error) => console.log(error));

    ContatoService.findAll()
      .then((response) => setContatos(response.data))
      .catch((error) => console.log(error));
  }, []);

  const objectValues = {
    id: null,
    nome: "",
    nomeRep:"",
    email: "",
    senha: "",
    telefone: "",
    descAtuacao: "",
    foto: "",
    cep: "",
    cnpj: "",
    uf: "",
  };

  return (
    <div>
      <MenuBar />
      <div className="admin-div-empurra"></div>
      <div className="admin-container">
        <div className="admin-sidebar">
          <button onClick={() => setView('ongs')} id="admin-button-ong">
            <FaUsers size={30} color="#000" />
            <h3 id="admin-title-ong-button">ONGS</h3>
          </button>
          <button onClick={() => setView('contatos')} id="admin-button-cont">
            <BsFillTelephoneFill />
            <h3 id="admin-title-ong-button">Contato</h3>
          </button>
        </div>

        <div className="admin-content">
          {view === 'ongs' && <OngsList ongs={ongs} />}

          {view === 'contatos' && <ContatoList contatos={contatos} />}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Admin;

