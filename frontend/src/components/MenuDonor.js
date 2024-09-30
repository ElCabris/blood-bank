import "./MenuDonor.css";

function MenuDonor({setActivateComponent}) {
	return (
		<nav className="navbar-users">
			<ul style={{display: 'flex', gap: '20px', listStyle: 'none', padding: 0}}>
				<li>
					<button className='btn-user' onClick={() => setActivateComponent('edit-profile')}>
						Modificar Perfil
					</button>
				</li>
				<li><button className='btn-user' onClick={() => setActivateComponent('chat')}>Chat</button></li>
				<li>
					<button className='btn-user' onClick={() => setActivateComponent('donation-sites')}>
						Sitios de Donación
					</button>
				</li>
				<li>
					<button className='btn-user' onClick={() => setActivateComponent('donation-history')}>
						Historial de Donaciones
					</button>
				</li>
			</ul>
		</nav>
	);
}

export function MenuBank({ setActivateComponent }) {
  return (
    <nav>
      <ul style={{ display: 'flex', gap: '20px', listStyle: 'none', padding: 0 }}>
        <li>
          <button onClick={() => setActivateComponent('edit-profile')}>
            Modificar Perfil
          </button>
        </li>
        <li>
          <button onClick={() => setActivateComponent('chat')}>
            Chat
          </button>
        </li>
        <li>
          <button onClick={() => setActivateComponent('request-donor')}>
            Solicitar donante
          </button>
        </li>
        <li>
          Almacenamiento
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li>
              <button onClick={() => setActivateComponent('statistics')}>
                Ver Estadísticas
              </button>
            </li>
            <li>
              <button onClick={() => setActivateComponent('add batch')}>
                Agregar Lote
              </button>
            </li>
            <li>
              <button onClick={() => setActivateComponent('delete batch')}>
                Eliminar Lote
              </button>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}

export default MenuDonor;
