import React from 'react';
import './MenuDonor.css';

function MenuDonor({ setActivateComponent }) {
  return (
    <nav className="navbar-donors">
      <ul
        style={{ display: 'flex', gap: '20px', listStyle: 'none', padding: 0 }}
      >
        <li>
          <button
            className="btn-user"
            onClick={() => setActivateComponent('edit-profile')}
          >
            Modificar Perfil
          </button>
        </li>
        <li>
          <button
            className="btn-user"
            onClick={() => setActivateComponent('chat')}
          >
            Chat
          </button>
        </li>
        <li>
          <button
            className="btn-user"
            onClick={() => setActivateComponent('donation-sites')}
          >
            Sitios de Donación
          </button>
        </li>
        <li>
          <button
            className="btn-user"
            onClick={() => setActivateComponent('donation-history')}
          >
            Historial de Donaciones
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default MenuDonor;
