import React, {useState} from 'react';
//import './mystyles.css';

function DonorEditProfile() {
	// Estados para los datos del usuario
	const [nombres, setNombres] = useState('');
	const [apellidos, setApellidos] = useState('');
	const [fechaNacimiento, setFechaNacimiento] = useState('');
	const [genero, setGenero] = useState('');
	const [telefono, setTelefono] = useState('');
	const [correo, setCorreo] = useState('');
	const [grupoSanguineo, setGrupoSanguineo] = useState('');
	const [ciudad, setCiudad] = useState('');
	const [direccion, setDireccion] = useState('');

	// Estados para el cambio de contraseña
	const [oldPassword, setOldPassword] = useState('');
	const [newPassword, setNewPassword] = useState('');
	const [confirmNewPassword, setConfirmNewPassword] = useState('');

	// Función para manejar el envío del formulario
	const handleSubmit = (e) => {
		e.preventDefault();

		if (newPassword !== confirmNewPassword) {
			alert('Las contraseñas no coinciden');
			return;
		}
	};

	return (
		<div style={{margin: '20px', padding: '80px', maxWidth: '400px', border: '1px solid #ccc', borderRadius: '10px'}}>
			<h2>Modificar datos del donante</h2>
			<form onSubmit={handleSubmit}>

				<label>Teléfono de contacto:</label>
				<input
					type="text"
					value={telefono}
					onChange={(e) => setTelefono(e.target.value)}
					style={{display: 'block', marginBottom: '10px', width: '100%'}}
				/>

				<label>Correo electrónico:</label>
				<input
					type="email"
					value={correo}
					onChange={(e) => setCorreo(e.target.value)}
					style={{display: 'block', marginBottom: '10px', width: '100%'}}
				/>

				<label>Ciudad / Municipio:</label>
				<select
					name="ciudad"
					value={ciudad}
					onChange={(e) => setCiudad(e.target.value)}
					style={{display: 'block', marginBottom: '10px', width: '100%'}}
				>
					<option value="">Selecciona tu ciudad</option>
					<option value="Ciudad1">Ciudad 1</option>
					<option value="Ciudad2">Ciudad 2</option>
				</select>

				<label>Dirección:</label>
				<input
					type="text"
					value={direccion}
					onChange={(e) => setDireccion(e.target.value)}
					style={{display: 'block', marginBottom: '10px', width: '100%'}}
				/>

				<label>Contraseña antigua:</label>
				<input
					type="password"
					value={oldPassword}
					onChange={(e) => setOldPassword(e.target.value)}
					style={{display: 'block', marginBottom: '10px', width: '100%'}}
				/>

				<label>Nueva contraseña:</label>
				<input
					type="password"
					value={newPassword}
					onChange={(e) => setNewPassword(e.target.value)}
					style={{display: 'block', marginBottom: '10px', width: '100%'}}
				/>

				<label>Confirmar nueva contraseña:</label>
				<input
					type="password"
					value={confirmNewPassword}
					onChange={(e) => setConfirmNewPassword(e.target.value)}
					style={{display: 'block', marginBottom: '10px', width: '100%'}}
				/>

				<button type="submit" style={{marginTop: '20px'}}>Guardar cambios</button>
			</form>
		</div>
	);
}

export default DonorEditProfile;
