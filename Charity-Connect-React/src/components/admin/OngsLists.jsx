import React from 'react';



const OngsList = ({ ongs }) => {
  return (
    <div>
      {ongs.map((ong) => (
        <div key={ong.id} className="admin-header">
          <div className="admin-info-left">

            <div className="adm-ong-img">
              <img src={ong.foto ? 'data:image/jpeg;base64,' + ong.foto : ""} />
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
          </div>
        </div>
      ))}
    </div>
  );
};

export default OngsList;
