import React from 'react';
import InputData from '../components/InputData';
import { useState } from 'react';
import './Login_2.css';

function RegisterBank() {
  const url = 'https://blood-bank-19nv.onrender.com';
  const [name, setName] = useState('');
  const [nit, setNit] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [addres, setAddres] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (password !== confirmPass) {
      alert('Las contraseñas no coinciden');
      return;
    }

    const post_url =
      url +
      `/bank?name=${encodeURIComponent(name)}&nit=${encodeURIComponent(nit)}&email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}&addres=${encodeURIComponent(addres)}&phone_number=${encodeURIComponent(phone)}&city=${encodeURIComponent(city)}`;

    console.log(post_url);
    fetch(post_url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`El banco ${name} no se pudo crear`);
        }

        if (
          response.status === 201 &&
          response.headers.get('Content-Length') === '0'
        ) {
          return {};
        }

        return response.json();
      })
      .then(() => {
        alert(`El usuario ${name} ha sido registrado`);
        setName('');
        setNit('');
        setEmail('');
        setPhone('');
        setCity('');
        setAddres('');
        setPassword('');
        setConfirmPass('');
      })
      .catch((error) => {
        alert(`Error: ${error}`);
      });
  };

  return (
    <div className="cuerpo-fondo">
      <div className="register-container">
        <h1>Registro banco</h1>
        <form onSubmit={handleSubmit} className="Form">
          <InputData
            className="input-container"
            placeholder="Ingrese nombre o razón social"
            value={name}
            onChange={(e) => setName(e.target.value)}
          >
            Razón social
          </InputData>
          <InputData
            className="input-container"
            type="number"
            placeholder="Ingrese el NIT"
            value={nit}
            onChange={(e) => setNit(e.target.value)}
          >
            NIT
          </InputData>
          <InputData
            className="input-container"
            type="email"
            placeholder="Ingrese el correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          >
            Correo electrónico
          </InputData>
          <InputData
            className="input-container"
            type="number"
            placeholder="Ingrese el número telefónico"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          >
            Teléfono de contacto
          </InputData>
          <InputData
            className="input-container"
            placeholder="Ingrese ciudad/municipio de residencia"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          >
            Ciudad/Municipio
          </InputData>
          <InputData
            className="input-container"
            placeholder="Ingrese la dirección de residencia"
            value={addres}
            onChange={(e) => setAddres(e.target.value)}
          >
            Dirección
          </InputData>
          <InputData
            className="input-container"
            type="password"
            placeholder="Ingrese la contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          >
            Contraseña
          </InputData>
          <InputData
            className="input-container"
            type="password"
            placeholder="Confirme la contraseña"
            value={confirmPass}
            onChange={(e) => setConfirmPass(e.target.value)}
          >
            Confirma Contraseña
          </InputData>
          <button type="submit" className="register-button">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegisterBank;
