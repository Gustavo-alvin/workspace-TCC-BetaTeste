import React from 'react';
import './ContatoLists.css';
import OngService from "../../services/ContatoService";

const ContatoList = ({ contatos }) => {
  return (
    <div>
      {contatos.map((contato) => (
        <div key={contato.id} className="admin-header">
          <p><strong>Data</strong>: {contato.dataContato}</p>
          <p><strong>Motivo</strong>: {contato.motivoContato}</p>
          <p><strong>Pergunta</strong>: {contato.pergunta}</p>
          {/* outros detalhes do contato */}
        </div>
      ))}
    </div>
  );
};

export default ContatoList;
