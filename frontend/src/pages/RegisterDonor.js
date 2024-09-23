import InputData from "../components/InputData";
function RegisterDonor() {
	return (
		<form>
			<InputData>Nombres</InputData>
			<InputData>Apellidos</InputData>
			<InputData>Fecha de nacimiento</InputData>
			<InputData>Género</InputData>
			<InputData>Teléfono</InputData>
			<InputData>Correo electrónico</InputData>
			<InputData>Historial médico</InputData>
			<InputData>Grupo sanguíneo</InputData>
			<InputData>Ciudad / Municipio</InputData>
			<InputData>Dirección</InputData>
			<InputData>Usuario</InputData>
			<InputData>Contraseña</InputData>
			<InputData>Confirma contraseña</InputData>
			<button>Enviar</button>
		</form>
	);
}

export default RegisterDonor;
