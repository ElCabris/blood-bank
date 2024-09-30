import InputData from "../components/InputData";
function RegisterDonor() {
	return (
		<form>
			<InputData>Nombres</InputData>
			<InputData>Apellidos</InputData>
			<InputData>Fecha de nacimiento</InputData>
		<select name="gener">
		<option>Hombre</option>
		<option>Mujer</option>
		<option>Elicoptero de batalla</option>
		</select>
			<InputData type="number">Teléfono</InputData>
			<InputData type="email">Correo electrónico</InputData>
			<InputData type="file">Historial médico*</InputData>
			<InputData>Grupo sanguíneo</InputData>
			<InputData>Ciudad / Municipio</InputData>
			<InputData>Dirección</InputData>
			<InputData>Usuario</InputData>
			<InputData type="password">Contraseña</InputData>
			<InputData type="password">Confirma contraseña</InputData>
			<button type="submit">Enviar</button>
		</form>
	);
}

export default RegisterDonor;
