import React, { useState } from "react";
import foto from "../../assets/images/ongs-02.png";
import "./OngsLists.css";
import OngService from "../../services/OngService";

/*
const updateOngStatus = async (ongId, status) => {
  try {
    const response = await fetch(`/api/update-ong-status`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: ongId, status }),
    });

    if (response.ok) {
      alert("Status atualizado com sucesso!");
    } else {
      alert("Erro ao atualizar status.");
    }
  } catch (error) {
    console.error("Erro ao atualizar status:", error);
    alert("Erro ao atualizar status.");
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
    const status = selectedStatus[ongId] || "pendente"; // Pega o status selecionado
    updateOngStatus(ongId, status); // Chama a função para atualizar o status
  };
*/
const OngsList = ({ ongs }) => {
  const [formData, setFormData] = useState({});
  const [id, setId] = useState();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((formData) => ({ ...formData, [name]: value }));
  };

  const handleSubmit = (id) => {
    OngService.alterarStatus(id, formData).then(
      (response) => {
        window.location.reload();
      },
      (error) => {
        const message = error.response.data.message;
      }
    );
  };
  return (
    <div>
      {ongs.map((ong) => (
        <div key={ong.id} className="admin-header p-3 my-4 shadow">
          <div className="admin-info-left">
            <div className="adm-ong-img">
              <img
                src={ong.foto ? "data:image/jpeg;base64," + ong.foto : ""}
                alt="ONG"
              />
            </div>
            <p>
              <strong>Email</strong>: {ong.email}
            </p>
            <p>
              <strong>Senha</strong>: {ong.senha}
            </p>
            <p>
              <strong>Nome R</strong>: {ong.nome}
            </p>
            <p>
              <strong>CNPJ</strong>: {ong.cnpj}
            </p>
            <p>
              <strong>CEP</strong>: {ong.cep}
            </p>
          </div>
          <div className="admin-info-right">
            <p>
              <strong>Telefone</strong>: {ong.telefone}
            </p>
            <p>
              <strong>Cidade</strong>: {ong.cidade}
            </p>
            <p>
              <strong>Interesse</strong>: {ong.interesse}
            </p>
            <p>
              <strong>Descrição</strong>: {ong.descAtuacao}
            </p>

            <form onSubmit={handleSubmit}>
              <label htmlFor={`status-${ong.id}`}>
                <strong>Status</strong>:
              </label>
              <input
                type="text"
                id={ong.id}
                name="id"
                value={ong.id}
                onChange={(e) => handleChange(e)}
                hidden
              />

              <select
                id={`status-${ong.id}`}
                name="statusONG"
                defaultValue={ong.statusONG}
                onChange={(e) => handleChange(e)}
              >
                <option value={"Pendente"}>Pendente</option>
                <option value={"Aprovada"}>Aprovada</option>
                <option value={"Banida"}>Banida</option>
              </select>

              <button
                type="button"
                onClick={() => handleSubmit(ong.id)}
                className="class-adm-select-button"
                // Chama a função ao clicar
              >
                Alterar
              </button>
            </form>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OngsList;
