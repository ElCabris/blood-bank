import React from 'react';
import { useState } from 'react';
// import './mystyles_filter.css';
// Simulación de la base de datos de donantes
const donantesDB = [
  {
    id: 1,
    nombre: 'Donante X',
    tipoSangre: 'A+',
    ubicacion: 'Ciudad1',
    edad: 25,
    enfermedadesPreexistentes: false,
  },
  {
    id: 2,
    nombre: 'Donante Y',
    tipoSangre: 'O-',
    ubicacion: 'Ciudad2',
    edad: 40,
    enfermedadesPreexistentes: true,
  },
  {
    id: 3,
    nombre: 'Donante Z',
    tipoSangre: 'B+',
    ubicacion: 'Ciudad1',
    edad: 30,
    enfermedadesPreexistentes: false,
  },
  // Más donantes...
];

function RequestDonor() {
  const [busqueda, setBusqueda] = useState('');
  const [filtros, setFiltros] = useState({
    tipoSangre: '',
    ubicacion: '',
    edad: '',
    enfermedadesPreexistentes: 'irrelevante',
  });

  // Manejo de cambios en los filtros
  const handleFiltroChange = (e) => {
    const { name, value } = e.target;
    setFiltros({
      ...filtros,
      [name]: value,
    });
  };

  // Manejo de cambios en el campo de búsqueda
  const handleBusquedaChange = (e) => {
    setBusqueda(e.target.value);
  };

  // Filtrar los donantes según los filtros y la búsqueda
  const donantesFiltrados = donantesDB.filter((donante) => {
    return (
      donante.nombre.toLowerCase().includes(busqueda.toLowerCase()) &&
      (filtros.tipoSangre === '' ||
        donante.tipoSangre === filtros.tipoSangre) &&
      (filtros.ubicacion === '' || donante.ubicacion === filtros.ubicacion) &&
      (filtros.edad === '' || donante.edad === parseInt(filtros.edad)) &&
      (filtros.enfermedadesPreexistentes === 'irrelevante' ||
        (filtros.enfermedadesPreexistentes === 'si' &&
          donante.enfermedadesPreexistentes) ||
        (filtros.enfermedadesPreexistentes === 'no' &&
          !donante.enfermedadesPreexistentes))
    );
  });

  return (
    <div style={{ display: 'flex', margin: '20px' }}>
      {/* Búsqueda y lista de donantes */}
      <div style={{ flex: 1, marginRight: '20px' }}>
        <h3>Buscar Donante</h3>
        <input
          type="text"
          placeholder="Buscar por nombre"
          value={busqueda}
          onChange={handleBusquedaChange}
          style={{ width: '100%', marginBottom: '20px' }}
        />

        <ul>
          {donantesFiltrados.map((donante) => (
            <li key={donante.id} style={{ marginBottom: '10px' }}>
              {donante.nombre} - {donante.tipoSangre} - {donante.ubicacion} -{' '}
              {donante.edad} años
              <button style={{ marginLeft: '10px' }}>Enviar solicitud</button>
            </li>
          ))}
        </ul>
      </div>

      {/* Filtros */}
      <div
        style={{
          flexBasis: '300px',
          padding: '10px',
          border: '1px solid #ccc',
          borderRadius: '10px',
        }}
      >
        <h3>Filtrar</h3>

        {/* Filtro por tipo de sangre */}
        <label>Tipo de sangre:</label>
        <select
          name="tipoSangre"
          value={filtros.tipoSangre}
          onChange={handleFiltroChange}
          style={{ display: 'block', marginBottom: '10px', width: '100%' }}
        >
          <option value="">Todos</option>
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
        </select>

        {/* Filtro por ubicación */}
        <label>Ubicación:</label>
        <select
          name="ubicacion"
          value={filtros.ubicacion}
          onChange={handleFiltroChange}
          style={{ display: 'block', marginBottom: '10px', width: '100%' }}
        >
          <option value="">Todas</option>
          <option value="Ciudad1">Ciudad 1</option>
          <option value="Ciudad2">Ciudad 2</option>
          {/* Otras ciudades */}
        </select>

        {/* Filtro por edad */}
        <label>Edad:</label>
        <input
          type="number"
          name="edad"
          value={filtros.edad}
          onChange={handleFiltroChange}
          style={{ display: 'block', marginBottom: '10px', width: '100%' }}
          placeholder="Ej. 30"
        />

        {/* Filtro por enfermedades preexistentes */}
        <label>Enfermedades preexistentes:</label>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <label>
            <input
              type="radio"
              name="enfermedadesPreexistentes"
              value="si"
              checked={filtros.enfermedadesPreexistentes === 'si'}
              onChange={handleFiltroChange}
            />
            Sí
          </label>
          <label>
            <input
              type="radio"
              name="enfermedadesPreexistentes"
              value="no"
              checked={filtros.enfermedadesPreexistentes === 'no'}
              onChange={handleFiltroChange}
            />
            No
          </label>
          <label>
            <input
              type="radio"
              name="enfermedadesPreexistentes"
              value="irrelevante"
              checked={filtros.enfermedadesPreexistentes === 'irrelevante'}
              onChange={handleFiltroChange}
            />
            Irrelevante
          </label>
        </div>
      </div>
    </div>
  );
}

export default RequestDonor;
