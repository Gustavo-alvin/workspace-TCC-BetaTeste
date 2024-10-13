import React from 'react';
import './Alert.css';

const AlertContato = ({ message, type }) => {
  return (
    <div className={`alert ${type}`}>
      <span>Contato enviado com sucesso ✅</span>
      
    </div>
  );
};

export default AlertContato;
