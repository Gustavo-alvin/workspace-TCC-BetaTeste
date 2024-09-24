import React, { useEffect, useState } from 'react';
import { MdGroups } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom';

import './Admin.css'; // Import the CSS file for styling
import AdminService from '../../services/AdminService';
import MenuBar from '../../components/Menu/MenuBar';
import Footer from '../../components/Footer/Footer';
import { FaBeer } from 'react-icons/fa';

function Admin() {
  const navigate = useNavigate();
  const [ongs, setOngs] = useState([]);

  useEffect(() => {
    AdminService.findAll()
      .then((response) => {
        const ongsData = response.data;
        setOngs(ongsData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const goTo = () => {
    navigate("/ongler");
  };

  return (
    <div>
      <MenuBar />

      <div className="admin-div-empurra"></div>

      <div className="admin-container">
        <div className="admin-sidebar">
          <button id="admin-button-ong">
            <MdGroups />
            <h3 id="admin-title-ong-button">ONGS</h3>
          </button>
          <button id="admin-button-cont">
            <h3 id="admin-title-ong-button">Contato</h3>
          </button>
        </div>

        <div className="admin-content">
          <div className="admin-header">
            <div className="admin-profile-placeholder"></div>
            <button className="admin-org-button">Sorrisos do amanhã</button>
            <div className="admin-status-dropdown">
              <label>Status</label>
              <select>
                <option value="Análise">Análise</option>
                <option value="Aprovado">Aprovado</option>
                <option value="Banido">Banido</option>
              </select>
            </div>
          </div>

          <div className="admin-info-section">
            <div className="admin-info-left">
              <p><strong>Email</strong>: email@email.com</p>
              <p><strong>Senha</strong>: Senha</p>
              <p><strong>Nome R</strong>: Cauã Santana</p>
              <p><strong>CNPJ</strong>: 696969696969</p>
              <p><strong>CEP</strong>: 6969</p>
            </div>
            <div className="admin-info-right">
              <p><strong>Telefone</strong>: 11977914506</p>
              <p><strong>Cidade</strong>: xique-xique</p>
              <p><strong>Interesse</strong>: roupas</p>
              <p><strong>Descrição</strong>: Quero roupas</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Admin;
