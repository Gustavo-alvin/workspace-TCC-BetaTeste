import React from 'react';
import './ContatoLists.css';
import OngService from "../../services/ContatoService";

const ContatoList = ({ contatos }) => {
  return (
    <div>
      {contatos.map((contato) => (
        <div key={contato.id} className="admin-header p-3 my-4 shadow">
          <div className="1slot shadow">
            <p><strong>Data</strong>: {contato.dataContato}</p>
            <p><strong>Motivo</strong>: {contato.motivoContato}</p>
          </div>
          <div className="slot2 shadow">
            <p><strong>Pergunta</strong>: {contato.pergunta}</p>
          </div>
          <div className="slot3 shadow">
            <p><strong>Nome</strong>: {contato.nome} {contato.sobrenome}</p>
            <p><strong>email</strong>: {contato.email}</p>
            <p><strong>Telefone</strong>: {contato.telefone}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContatoList;
