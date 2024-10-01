import React, { useState } from 'react';
import foto from "../../assets/images/ongs-02.png";
import './OngsLists.css';

const updateOngStatus = async (ongId, status) => {
  try {
    const response = await fetch(`/api/update-ong-status`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: ongId, status }),
    });

    if (response.ok) {
      alert('Status atualizado com sucesso!');
    } else {
      alert('Erro ao atualizar status.');
    }
  } catch (error) {
    console.error('Erro ao atualizar status:', error);
    alert('Erro ao atualizar status.');
  }
};

const OngsList = ({ ongs }) => {
  const [selectedStatus, setSelectedStatus] = useState({});

  const handleStatusChange = (ongId, newStatus) => {
    setSelectedStatus((prevStatus) => ({
      ...prevStatus,
      [ongId]: newStatus,
    }));
  };

  const handleUpdateClick = (ongId) => {
    const status = selectedStatus[ongId] || 'pendente'; // Pega o status selecionado
    updateOngStatus(ongId, status); // Chama a função para atualizar o status
  };

  return (
    <div>
      {ongs.map((ong) => (
        <div key={ong.id} className="admin-header">
          <div className="admin-info-left">
            <div className="adm-ong-img">
              <img src={ong.foto ? 'data:image/jpeg;base64,' + ong.foto : ''} alt="ONG" />
            </div>
            <p><strong>Email</strong>: {ong.email}</p>
            <p><strong>Senha</strong>: {ong.senha}</p>
            <p><strong>Nome R</strong>: {ong.nome}</p>
            <p><strong>CNPJ</strong>: {ong.cnpj}</p>
            <p><strong>CEP</strong>: {ong.cep}</p>
          </div>
          <div className="admin-info-right">
            <p><strong>Telefone</strong>: {ong.telefone}</p>
            <p><strong>Cidade</strong>: {ong.cidade}</p>
            <p><strong>Interesse</strong>: {ong.interesse}</p>
            <p><strong>Descrição</strong>: {ong.descAtuacao}</p>

            <div>
              <label htmlFor={`status-${ong.id}`}><strong>Status</strong>:</label>
              <select
                id={`status-${ong.id}`}
                value={selectedStatus[ong.id] || ong.status || 'pendente'}
                onChange={(e) => handleStatusChange(ong.id, e.target.value)}
              >
                <option value="pendente">Pendente</option>
                <option value="aprovada">Aprovada</option>
                <option value="banida">Banida</option>
              </select>

              <button
                className="class-adm-select-button"
                type="button" // Alterado para type="button"
                onClick={() => handleUpdateClick(ong.id)} // Chama a função ao clicar
              >
                Alterar
              </button>
            </div> 
          </div>
        </div>
      ))}
    </div>
  );
};

export default OngsList;
