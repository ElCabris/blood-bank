import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputData from "../components/InputData";
import './Login.css';

const Login = () => {
  // Estado para almacenar el nombre de usuario y la contraseña
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  
  // Estado para mostrar un mensaje de error si el login falla
  const [showError, setShowError] = useState(false);
  
  // Hook para navegar a diferentes rutas
  const navigate = useNavigate();

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita que la página se recargue

    // Validación de usuario y contraseña
    if (user === "donor" && password === "donorpass") {
      navigate("/donor"); // Navega a la página de donantes
    } else if (user === "bank" && password === "bankpass") {
      navigate("/bank"); // Navega a la página del banco
    } else {
      setShowError(true); // Muestra un mensaje de error si la validación falla
    }
  };

  return (
    <div className="pagina-login">
      <div className="wrapper">
        {/* Formulario de inicio de sesión */}
        <form onSubmit={handleSubmit}>
          <h1>INICIO DE SECCIÓN</h1>
          
          {/* Entrada para el nombre de usuario */}
          <div className="input-box">
            <input 
              type="text" 
              placeholder="Nombre de usuario" 
              value={user}
              onChange={(e) => setUser(e.target.value)}
              required 
            />
          </div>

          {/* Entrada para la contraseña */}
          <div className="input-box">
            <input 
              type="password" 
              value={password} 
              placeholder="Contraseña" 
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
          </div>

          {/* Opción de recordar sesión y enlace de "Olvidé mi contraseña" */}
          <div className="remember-forgot">
            <label>
              <input type="checkbox" /> Recordarme
            </label>
            <a href="#"> Olvidé mi contraseña</a>
          </div>

          {/* Botón para enviar el formulario */}
          <button type="submit">Entrar</button>

          {/* Enlace para registro de nuevos usuarios */}
          <div className="register-link">
            <p> ¿No tienes una cuenta como banco? <a onClick={() => navigate("/register/bank")}>Regístrate como banco</a></p>
          </div>

          <div className="register-link">
            <p> ¿No tienes una cuenta como donante? <a onClick={() => navigate("/register/donor")}>Regístrate como donante</a></p>
          </div>
        
        
        </form>

        {/* Mensaje de error para usuario o contraseña incorrectos */}
        {showError && (
          <p style={{ color: "red" }}>Usuario o contraseña incorrectos</p>
        )}
      </div>
    </div>
  );
};

export default Login;

