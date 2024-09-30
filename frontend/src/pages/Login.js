import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputData from "../components/InputData";
import './Login.css';

function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState(""); // Estado para la contraseña
  const [showError, setShowError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); 

    if (user === "donor" && password === "donorpass") {
      navigate("/donor");
    } else if (user === "bank" && password === "bankpass") {
      navigate("/bank");
    } else {
      setShowError(true);
    }
  };

  return (
    <div>
      <h1>Iniciar Sesión</h1>
      <form onSubmit={handleSubmit} className="Form">
        <InputData
          value={user}
          onChange={(e) => setUser(e.target.value)}
          placeholder="Ingrese el usuario"
        >
          Usuario
        </InputData>
        <InputData
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Ingrese la contraseña"
        ><br></br>
        <br></br>
          Contraseña
        </InputData>
        <br></br>
        <br></br>
        <button type="submit">Enviar</button>
      </form>
      {showError && (
        <p style={{ color: "red" }}>Usuario o contraseña incorrectos</p>
      )}
    </div>
  );
}

export default Login;

