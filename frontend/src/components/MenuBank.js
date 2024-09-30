import "./MenuDonor.css";

function MenuBank({ setActivateComponent }) {
    return (
      <nav className="navbar-banks">
        <ul style={{ display: 'flex', gap: '20px', listStyle: 'none', padding: 0 }}>
          <li>
            <button className='btn-user' onClick={() => setActivateComponent('edit-profile')}>
              Modificar Perfil
            </button>
          </li>
          <li>
            <button className='btn-user' onClick={() => setActivateComponent('chat')}>
              Chat
            </button>
          </li>
          <li>
            <button className='btn-user' onClick={() => setActivateComponent('request-donor')}>
              Solicitar donante
            </button>
          </li>
          <li className="dropdown">
            Almacenamiento
            <ul className="dropdown-menu">
              <li>
                <button className="btn-user-list" onClick={() => setActivateComponent('statistics')}>
                  Ver Estadísticas
                </button>
              </li>
              <li>
                <button className="btn-user-list" onClick={() => setActivateComponent('add batch')}>
                  Agregar Lote
                </button>
              </li>
              <li>
                <button className="btn-user-list" onClick={() => setActivateComponent('delete batch')}>
                  Eliminar Lote
                </button>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    );
}

export default MenuBank;