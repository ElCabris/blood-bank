import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputData from "../components/InputData";
import './Login_2.css';

function RegisterDonor() {
	const [uploadMedicalHistory, setUploadMedicalHistory] = useState(null);
	const navigate = useNavigate();

	const handleMedicalHistoryChange = (e) => {
		const choice = e.target.value;
		setUploadMedicalHistory(choice);
		if (choice === "no") {
			navigate("/healtforms");
		}
	};

	return (
		<div>
			<h1>Registro donante</h1>
			<form className='Form'>
				<InputData placeholder='Ingrese los nombres'>Nombres</InputData>
				<InputData placeholder='Ingrese los apellidos'>Apellidos</InputData>
				<InputData type='date' placeholder='Ingrese fecha de nacimiento'>Fecha de nacimiento</InputData>
				<div className="form-group">
					<label>Género:</label>
					<select name="gener">
						<option>Hombre</option>
						<option>Mujer</option>
						<option>Otro</option>
					</select>
				</div>
				<InputData type="text" placeholder='Ingrese el número telefónico'>Teléfono</InputData>
				<InputData type="email" placeholder='Ingrese el correo electrónico'>Correo electrónico</InputData>

				<div className="form-group">
					<label>¿Deseas subir tu historial médico?</label>
					<select onChange={handleMedicalHistoryChange}>
						<option value="">Selecciona una opción</option>
						<option value="yes">Sí</option>
						<option value="no">No</option>
					</select>
				</div>

				{uploadMedicalHistory === "yes" && (
					<InputData type="file">Historial médico</InputData>
				)}

				<div className="form-group">
					<label>Grupo sanguíneo:</label>
					<select name="sangre" className='options'>
						<option>O+</option>
						<option>O-</option>
						<option>A+</option>
						<option>A-</option>
						<option>B+</option>
						<option>B-</option>
						<option>AB+</option>
						<option>AB-</option>
					</select>
				</div>
				
				<InputData placeholder='Ingrese ciudad/municipio de residencia'>Ciudad / Municipio</InputData>
				<InputData placeholder='Ingrese la dirección de residencia'>Dirección</InputData>
				<InputData placeholder='Ingrese el nuevo usuario'>Usuario</InputData>
				<InputData type="password" placeholder='Ingrese la contraseña'>Contraseña</InputData>
				<InputData type="password" placeholder='Confirme la contraseña'>Confirma contraseña</InputData>
				<button type="submit">Enviar</button>
			</form>
		</div>
	);
}

export default RegisterDonor;

