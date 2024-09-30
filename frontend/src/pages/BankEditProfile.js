import React, { useState } from 'react';
import InputData from "../components/InputData";
import './BankEditProfile.css';

function BankEditProfile() {
  const [formData, setFormData] = useState({
    nombre: '',
    nit: '',
    email: '',
    telefono: '',
    ciudad: '',
    direccion: '',
    usuario: '',
    contrasenaActual: '',
    nuevaContrasena: '',
    confirmarNuevaContrasena: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar si la nueva contraseña coincide con la confirmación
    if (formData.nuevaContrasena !== formData.confirmarNuevaContrasena) {
      alert('La nueva contraseña y la confirmación no coinciden.');
      return;
    }

    console.log('Datos modificados:', formData);
  };

  return (
    <div className='Modify'>
      <h2>Modificar información del banco</h2>
      <h3>*Solo ingrese los datos que desea modificar</h3>
      <form onSubmit={handleSubmit} className='Form'>
        <InputData type="text" placeholder='Ingrese el nuevo número telefónico'>Teléfono</InputData>
        <InputData type="email" placeholder='Ingrese el nuevo correo electrónico'>Correo electrónico</InputData>
        <InputData placeholder='Ingrese nueva ciudad/municipio de residencia'>Ciudad / Municipio</InputData>
        <InputData placeholder='Ingrese la nueva dirección de residencia'>Dirección</InputData>
				<InputData type="password" placeholder='Ingrese la contraseña antigua'>Contraseña antigua</InputData>
				<InputData type="password" placeholder='Ingrese la contraseña nueva'>Contraseña</InputData>
				<InputData type="password" placeholder='Confirme la contraseña nueva'>Confirma contraseña</InputData>
				<button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default BankEditProfile;
