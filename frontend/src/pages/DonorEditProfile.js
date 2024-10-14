// import React, {useState} from 'react';
import InputData from "../components/InputData";
import './DonorEditProfile.css';

function DonorEditProfile() {
	// Estados para los datos del usuario
	/*	const [nombres, setNombres] = useState('');
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
		const [confirmNewPassword, setConfirmNewPassword] = useState(''); * */
	// Función para manejar el envío del formulario
	var newPassword = "";
	var confirmNewPassword = "";
	const handleSubmit = (e) => {
		e.preventDefault();

		if (newPassword !== confirmNewPassword) {
			alert('Las contraseñas no coinciden');
			return;
		}
	};

	return (
		<div className='Modify'>
			<h2>Modificar datos del donante</h2>
			<h3>*Solo ingrese los datos que desea modificar</h3>
			<form onSubmit={handleSubmit} className='Form'>
				<InputData type="text" placeholder='Ingrese el nuevo número telefónico'>Teléfono</InputData>
				<InputData type="email" placeholder='Ingrese el nuevo correo electrónico'>Correo electrónico</InputData>
				<InputData placeholder='Ingrese nueva ciudad/municipio de residencia'>Ciudad / Municipio</InputData>
				<InputData placeholder='Ingrese la nueva dirección de residencia'>Dirección</InputData>
				<InputData type="password" placeholder='Ingrese la contraseña antigua'>Contraseña antigua</InputData>
				<InputData type="password" placeholder='Ingrese la contraseña nueva'>Contraseña</InputData>
				<InputData type="password" placeholder='Confirme la contraseña nueva'>Confirma contraseña</InputData>
				<button type="submit">Enviar</button>
			</form>
		</div>
	);
}

export default DonorEditProfile;
