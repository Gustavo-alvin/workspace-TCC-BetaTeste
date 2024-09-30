import React, { useState } from 'react';
import foto from "../../assets/images/ongs-02.png";

// Simulação de uma função para atualizar o status da ONG no banco de dados
const updateOngStatus = async (ongId, status) => {
  try {
    // Chamada à API que atualiza o status no banco de dados
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

    // Chamar a função que faz a atualização no banco de dados
    updateOngStatus(ongId, newStatus);
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
            <p><strong>CEP</strong>: {ong.senha}</p>
          </div>
          <div className="admin-info-right">
            <p><strong>Telefone</strong>: {ong.telefone}</p>
            <p><strong>Cidade</strong>: {ong.cidade}</p>
            <p><strong>Interesse</strong>: {ong.interesse}</p>
            <p><strong>Descrição</strong>: {ong.descAtuacao}</p>

            {/* Select para gerenciamento de status */}
            <div>
              <label htmlFor={`status-${ong.id}`}><strong>Status</strong>:</label>
              <select
                id={`status-${ong.id}`}
                value={selectedStatus[ong.id] || ong.status || 'pendente'}
                onChange={(e) => handleStatusChange(ong.id, e.target.value)}
              >
                <option value="pendente">Pendente</option>
                <option value="aprovada">Aprovar</option>
                <option value="banida">Banir</option>
              </select>
            </div> 
          </div>
        </div>
      ))}
      
    </div>
  );
};

export default OngsList;