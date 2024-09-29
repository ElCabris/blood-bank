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
						{banks.map((bank, index) => (
							<li key={index}><button
								/*The function is still pending to be added when the chat is implemented.*/
								onClick={() => setActivateComponent('')}>
								{bank}
							</button>
							</li>
						))}
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

export function MenuBank({setActivateComponent, donors}) {
	return (
		<nav>
			<ul>
				<li>
					<button onClick={() => setActivateComponent('edit-profile')}>
						Modificar Perfil
					</button>
				</li>
				<li>
					Bandeja de entrada
					<ul>
						{donors.map((donor, index) => (
							<li key={index}>
								<button onClick={() => setActivateComponent('')}>
									{donor}
								</button>
							</li>
						))}
					</ul>
				</li>
				<li>
					<button onClick={() => setActivateComponent('request-donor')}>
						Solicitar donante
					</button>
				</li>
				<li>
					Almacenamiento
					<ul>
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
