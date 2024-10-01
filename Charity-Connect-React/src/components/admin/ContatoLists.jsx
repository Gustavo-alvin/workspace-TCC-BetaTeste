import React from 'react';
import './ContatoLists.css'

const ContatoList = ({ contatos }) => {
  return (
    <div>
      {contatos.map((contato) => (
        <div key={contato.id} className="admin-header">
          <p><strong>Nome</strong>: {contato.nome}</p>
          <p><strong>Telefone</strong>: {contato.telefone}</p>
          <p><strong>Descrição</strong>: {contato.descricao}</p>
          {/* outros detalhes do contato */}
        </div>
      ))}
    </div>
  );
};

export default ContatoList;
