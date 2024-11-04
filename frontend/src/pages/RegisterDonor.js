import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputData from '../components/InputData';
import './Login_2.css';

function RegisterDonor() {
  const [uploadMedicalHistory, setUploadMedicalHistory] = useState(null);
  const navigate = useNavigate();

  const handleMedicalHistoryChange = (e) => {
    const choice = e.target.value;
    setUploadMedicalHistory(choice);
    if (choice === 'no') {
      navigate('/healtforms');
    }
  };

  return (
    <div className="register-container">
      <h1>Registro donante</h1>
      <form className="Form">
        <InputData
          className="input-container"
          placeholder="Ingrese los nombres"
        >
          Nombres
        </InputData>
        <InputData
          className="input-container"
          placeholder="Ingrese los apellidos"
        >
          Apellidos
        </InputData>
        <InputData
          className="input-container"
          type="date"
          placeholder="Ingrese fecha de nacimiento"
        >
          Fecha de nacimiento
        </InputData>

        <div className="form-group">
          <label>Género:</label>
          <select name="gener" className="input-container">
            <option>Hombre</option>
            <option>Mujer</option>
            <option>Otro</option>
          </select>
        </div>

        <InputData
          className="input-container"
          type="text"
          placeholder="Ingrese el número telefónico"
        >
          Teléfono
        </InputData>
        <InputData
          className="input-container"
          type="email"
          placeholder="Ingrese el correo electrónico"
        >
          Correo electrónico
        </InputData>

        <div className="form-group">
          <label>¿Deseas subir tu historial médico?</label>
          <select
            className="input-container"
            onChange={handleMedicalHistoryChange}
          >
            <option value="">Selecciona una opción</option>
            <option value="yes">Sí</option>
            <option value="no">No</option>
          </select>
        </div>

        {uploadMedicalHistory === 'yes' && (
          <InputData className="input-container" type="file">
            Historial médico
          </InputData>
        )}

        <div className="form-group">
          <label>Grupo sanguíneo:</label>
          <select name="sangre" className="input-container">
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

        <InputData
          className="input-container"
          placeholder="Ingrese ciudad/municipio de residencia"
        >
          Ciudad / Municipio
        </InputData>
        <InputData
          className="input-container"
          placeholder="Ingrese la dirección de residencia"
        >
          Dirección
        </InputData>
        <InputData
          className="input-container"
          placeholder="Ingrese el nuevo usuario"
        >
          Usuario
        </InputData>
        <InputData
          className="input-container"
          type="password"
          placeholder="Ingrese la contraseña"
        >
          Contraseña
        </InputData>
        <InputData
          className="input-container"
          type="password"
          placeholder="Confirme la contraseña"
        >
          Confirma contraseña
        </InputData>

        <button className="register-button" type="submit">
          Enviar
        </button>
      </form>
    </div>
  );
}

export default RegisterDonor;
