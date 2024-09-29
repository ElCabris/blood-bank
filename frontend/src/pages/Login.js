import InputData from "../components/InputData";
function Login() {
	return (
		<>
		<h1>Iniciar Sesión</h1>
		<form>
			<InputData>Usuario</InputData>
			<InputData>Contraseña</InputData>
		</form>
		<button>Enviar</button>
	</>
	);
}

export default Login;
