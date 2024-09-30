import React, { useState } from 'react';
//import './mystyles.css';

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
    // Aquí puedes manejar el envío de los datos para modificar el usuario
  };

  return (
    <div style={{ margin: '20px', padding: '80px', maxWidth: '400px', border: '1px solid #ccc', borderRadius: '10px' }}>
      <h2>Modificar información del banco</h2>
      <form onSubmit={handleSubmit}>
        <label>Correo electrónico:</label>
        <input 
          type="email" 
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
          style={{ display: 'block', marginBottom: '10px', width: '100%' }} 
        />

        <label>Teléfono de contacto:</label>
        <input 
          type="tel" 
          name="telefono" 
          value={formData.telefono} 
          onChange={handleChange} 
          style={{ display: 'block', marginBottom: '10px', width: '100%' }} 
        />

        <label>Ciudad / municipio:</label>
        <select 
          name="ciudad" 
          value={formData.ciudad} 
          onChange={handleChange} 
          style={{ display: 'block', marginBottom: '10px', width: '100%' }}
        >
          <option value="">Selecciona tu ciudad</option>
          <option value="Ciudad1">Ciudad 1</option>
          <option value="Ciudad2">Ciudad 2</option>
        </select>

        <label>Dirección:</label>
        <input 
          type="text" 
          name="direccion" 
          value={formData.direccion} 
          onChange={handleChange} 
          style={{ display: 'block', marginBottom: '10px', width: '100%' }} 
        />

        <label>Usuario:</label>
        <input 
          type="text" 
          name="usuario" 
          value={formData.usuario} 
          onChange={handleChange} 
          style={{ display: 'block', marginBottom: '10px', width: '100%' }} 
        />

        <label>Contraseña actual:</label>
        <input 
          type="password" 
          name="contrasenaActual" 
          value={formData.contrasenaActual} 
          onChange={handleChange} 
          style={{ display: 'block', marginBottom: '10px', width: '100%' }} 
        />

        <label>Nueva contraseña:</label>
        <input 
          type="password" 
          name="nuevaContrasena" 
          value={formData.nuevaContrasena} 
          onChange={handleChange} 
          style={{ display: 'block', marginBottom: '10px', width: '100%' }} 
        />

        <label>Confirmar nueva contraseña:</label>
        <input 
          type="password" 
          name="confirmarNuevaContrasena" 
          value={formData.confirmarNuevaContrasena} 
          onChange={handleChange} 
          style={{ display: 'block', marginBottom: '10px', width: '100%' }} 
        />

        <button type="submit" style={{ marginTop: '20px' }}>Modificar</button>
      </form>
    </div>
  );
}

export default BankEditProfile;
