function MenuDonor({setActivateComponent, banks}) {
	return (
		<nav>
			<ul>
				<li>
					<button onClick={() => setActivateComponent('edit-profile')}>
						Modificar Perfil
					</button>
				</li>
				<li>Bandeja de entrada
					<ul>
						{banks.map((bank, index) => <li key={index}>{bank}</li>)}
					</ul>
				</li>
				<li>
					<button onClick={() => setActivateComponent('donation-sites')}>
						Sitios de Donación
					</button>
				</li>
				<li>
					<button onClick={() => setActivateComponent('donation-history')}>
						Historial de Donaciones
					</button>
				</li>
			</ul>
		</nav>
	);
}

export default MenuDonor; 
