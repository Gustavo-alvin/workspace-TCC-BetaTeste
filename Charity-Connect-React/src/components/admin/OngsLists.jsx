import React from 'react';

const OngsList = ({ ongs }) => {
  return (
    <div>
      {ongs.map((ong) => (
        <div key={ong.id} className="admin-header">
          <button className="admin-org-button">{ong.name}</button>
          {/* outros detalhes da ONG */}
        </div>
      ))}
    </div>
  );
};

export default OngsList;
