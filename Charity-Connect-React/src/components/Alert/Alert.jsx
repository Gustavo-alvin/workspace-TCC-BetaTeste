import React from 'react';
import './Alert.css';

const Alert = ({ message, type }) => {
  return (
    <div className={`alert ${type}`}>
      <span>Evento Atualizado Com Sucesso</span>
      
    </div>
  );
};

export default Alert;
