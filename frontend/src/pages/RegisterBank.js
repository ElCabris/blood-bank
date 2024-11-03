import InputData from "../components/InputData";
import './Login_2.css';

function RegisterBank() {
	return (	
		<div className="cuerpo-fondo">
			<div className="register-container">
			<h1>Registro banco</h1>
			<form className="Form">
				<InputData className="input-container" placeholder='Ingrese nombre o razón social'>Razón social</InputData>
				<InputData className="input-container" type='number' placeholder='Ingrese el NIT'>NIT</InputData>
				<InputData className="input-container" type='email' placeholder='Ingrese el correo electrónico'>Correo electrónico</InputData>
				<InputData className="input-container" type='number' placeholder='Ingrese el número telefónico'>Teléfono de contacto</InputData>
				<InputData className="input-container" placeholder='Ingrese ciudad/municipio de residencia'>Ciudad/Municipio</InputData>
				<InputData className="input-container" placeholder='Ingrese la dirección de residencia'>Dirección</InputData>
				<InputData className="input-container" placeholder='Ingrese el nuevo usuario'>Usuario</InputData>
				<InputData className="input-container" placeholder='Ingrese la contraseña'>Contraseña</InputData>
				<InputData className="input-container" placeholder='Confirme la contraseña'>Confirma Contraseña</InputData>
				<button className="register-button">Enviar</button>
			</form>
		</div>

		</div>
	);
}

export default RegisterBank;

