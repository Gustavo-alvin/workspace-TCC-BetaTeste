import React, { useState } from "react";
import OngService from "../../services/OngService";
import "./OngsLists.css";

const OngsList = ({ ongs }) => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e, id) => {
    e.preventDefault();
    OngService.alterarStatus(id, formData).then(
      (response) => {
        alert("ONG alterada com sucesso");
        window.location.reload();
      },
      (error) => {
        const message = error.response?.data?.message || "Erro ao alterar o status";
        alert(message);
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
                className="img-adm-ong"
                src={ong.foto ? `data:image/jpeg;base64,${ong.foto}` : ""}
                alt="ONG"
              />
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

            <form onSubmit={(e) => handleSubmit(e, ong.id)}>
              <label htmlFor={`status-${ong.id}`}>
                <strong>Status</strong>:
              </label>
              <select
                id={`status-${ong.id}`}
                name="statusONG"
                value={formData.statusONG || ong.statusONG}
                onChange={handleChange}
              >
                <option value="Pendente">Pendente</option>
                <option value="Aprovada">Aprovada</option>
                <option value="Banida">Banida</option>
              </select>

              <button type="submit" className="class-adm-select-button">
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
