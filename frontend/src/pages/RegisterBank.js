import InputData from "../components/InputData";

function RegisterBank() {
	return (
		<form>
			<InputData>Nombre o razón social</InputData>
			<InputData type='number'>NIT</InputData>
			<InputData type='email'>Correo electrónico</InputData>
			<InputData type='number'>Teléfono de contacto</InputData>
			<InputData >Ciudad/Municipio</InputData>
			<InputData >Dirección</InputData>
			<InputData >Usuario</InputData>
			<InputData >Contraseña</InputData>
			<InputData >Confirma Contraseña</InputData>
			<button>Enviar</button>
		</form>
	);
}

export default RegisterBank;
