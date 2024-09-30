import InputData from "../components/InputData";
import './RegisterBank.css';

function RegisterBank() {
	return (
		<div>
			<h1>Registro banco</h1>
			<form className="Form">
				<InputData>Razón social</InputData><br></br><br></br>
				<InputData type='number'>NIT</InputData><br></br><br></br>
				<InputData type='email'>Correo electrónico</InputData><br></br><br></br>
				<InputData type='number'>Teléfono de contacto</InputData><br></br><br></br>
				<InputData >Ciudad/Municipio</InputData><br></br><br></br>
				<InputData >Dirección</InputData><br></br><br></br>
				<InputData >Usuario</InputData><br></br><br></br>
				<InputData >Contraseña</InputData><br></br><br></br>
				<InputData >Confirma Contraseña</InputData><br></br><br></br>
				<button>Enviar</button>
			</form>
		</div>
	);
}

export default RegisterBank;
