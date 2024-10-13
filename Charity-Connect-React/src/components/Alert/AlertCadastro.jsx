import React from 'react';
import './Alert.css';

const AlertCadastro = ({ message, type }) => {
  return (
    <div className={`alert ${type}`}>
      <span>Cadastro em analise...</span>
      
    </div>
  );
};

export default AlertCadastro;
