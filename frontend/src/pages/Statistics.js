import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend } from 'chart.js';
// import './mystyles_estad.css';
ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend);

// Simulación de la base de datos de donantes
const donantesDB = [
  { id: 1, nombre: 'Donante X', tipoSangre: 'A+', ubicacion: 'Ciudad1', edad: 25, enfermedadesPreexistentes: false },
  { id: 2, nombre: 'Donante Y', tipoSangre: 'O-', ubicacion: 'Ciudad2', edad: 40, enfermedadesPreexistentes: true },
  { id: 3, nombre: 'Donante Z', tipoSangre: 'B+', ubicacion: 'Ciudad1', edad: 30, enfermedadesPreexistentes: false },
  { id: 4, nombre: 'Donante W', tipoSangre: 'O+', ubicacion: 'Ciudad3', edad: 45, enfermedadesPreexistentes: false },
  { id: 5, nombre: 'Donante V', tipoSangre: 'AB-', ubicacion: 'Ciudad1', edad: 35, enfermedadesPreexistentes: true },
  // Más donantes...
];

function Statistics() {
  // Funciones para obtener datos de la base de datos simulada
  const tiposSangreData = () => {
    const tiposSangre = donantesDB.reduce((acc, donante) => {
      acc[donante.tipoSangre] = (acc[donante.tipoSangre] || 0) + 1;
      return acc;
    }, {});

    return {
      labels: Object.keys(tiposSangre),
      datasets: [{
        label: 'Donantes por tipo de sangre',
        data: Object.values(tiposSangre),
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
        borderColor: '#fff',
        borderWidth: 1,
      }]
    };
  };

  const ubicacionData = () => {
    const ubicaciones = donantesDB.reduce((acc, donante) => {
      acc[donante.ubicacion] = (acc[donante.ubicacion] || 0) + 1;
      return acc;
    }, {});

    return {
      labels: Object.keys(ubicaciones),
      datasets: [{
        label: 'Donantes por ubicación',
        data: Object.values(ubicaciones),
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
        borderColor: '#fff',
        borderWidth: 1,
      }]
    };
  };

  const edadData = () => {
    const edades = [0, 0, 0, 0]; // Rango de edades: <20, 21-30, 31-40, 41+
    donantesDB.forEach(donante => {
      if (donante.edad < 20) edades[0] += 1;
      else if (donante.edad <= 30) edades[1] += 1;
      else if (donante.edad <= 40) edades[2] += 1;
      else edades[3] += 1;
    });

    return {
      labels: ['<20', '21-30', '31-40', '41+'],
      datasets: [{
        label: 'Donantes por rango de edad',
        data: edades,
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
        borderColor: '#fff',
        borderWidth: 1,
      }]
    };
  };

  const enfermedadesData = () => {
    const enfermedades = donantesDB.reduce((acc, donante) => {
      if (donante.enfermedadesPreexistentes) {
        acc['Con Enfermedades'] = (acc['Con Enfermedades'] || 0) + 1;
      } else {
        acc['Sin Enfermedades'] = (acc['Sin Enfermedades'] || 0) + 1;
      }
      return acc;
    }, {});

    return {
      labels: Object.keys(enfermedades),
      datasets: [{
        label: 'Donantes con/sin enfermedades preexistentes',
        data: Object.values(enfermedades),
        backgroundColor: ['#FF6384', '#36A2EB'],
        borderColor: '#fff',
        borderWidth: 1,
      }]
    };
  };

  return (
    <div style={{ margin: '20px', padding: '20px' }}>
      <h2>Estadísticas de Donantes</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px' }}>
        {/* Gráfico de barras: Donantes por tipo de sangre */}
        <div style={{ width: '45%', minWidth: '300px' }}>
          <h3>Donantes por Tipo de Sangre</h3>
          <Bar data={tiposSangreData()} />
        </div>

        {/* Gráfico de pie: Donantes por ubicación */}
        <div style={{ width: '45%', minWidth: '300px' }}>
          <h3>Donantes por Ubicación</h3>
          <Pie data={ubicacionData()} />
        </div>

        {/* Gráfico de barras: Donantes por edad */}
        <div style={{ width: '45%', minWidth: '300px' }}>
          <h3>Donantes por Rango de Edad</h3>
          <Bar data={edadData()} />
        </div>

        {/* Gráfico de pie: Donantes con/sin enfermedades preexistentes */}
        <div style={{ width: '45%', minWidth: '300px' }}>
          <h3>Enfermedades Preexistentes</h3>
          <Pie data={enfermedadesData()} />
        </div>
      </div>
    </div>
  );
}

export default Statistics;
