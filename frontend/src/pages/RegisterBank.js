import InputData from "../components/InputData";

function RegisterBank() {
	return (
		<div>
			<h1>Registro banco</h1>
			<form className="Form">
				<InputData placeholder='Ingrese nombre o razón social'>Razón social</InputData>
				<InputData type='number' placeholder='Ingrese el NIT'>NIT</InputData>
				<InputData type='email' placeholder='Ingrese el correo electrónico'>Correo electrónico</InputData>
				<InputData type='number' placeholder='Ingrese el número telefónico'>Teléfono de contacto</InputData>
				<InputData placeholder='Ingrese ciudad/municipio de residencia'>Ciudad/Municipio</InputData>
				<InputData placeholder='Ingrese la dirección de residencia'>Dirección</InputData>
				<InputData placeholder='Ingrese el nuevo usuario'>Usuario</InputData>
				<InputData placeholder='Ingrese la contraseña'>Contraseña</InputData>
				<InputData placeholder='Confirme la contraseña'>Confirma Contraseña</InputData>
				<button>Enviar</button>
			</form>
		</div>
	);
}

export default RegisterBank;
