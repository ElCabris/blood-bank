import './App.css';
import './App_mod.css';
import { BrowserRouter as Router, Routes, Route, NavLink, useLocation } from "react-router-dom";
import RegisterBank from "./pages/RegisterBank";
import RegisterDonor from "./pages/RegisterDonor";
import Login from "./pages/Login";
import Home from './pages/Home';
import DonorHome from './pages/DonorHome';
import BankHome from './pages/BankHome';
import HealthForm from './pages/healtforms';
function Navbar() {
  return (
    <nav className='navbar'>
      <ul>
        <li>
          <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" className={({ isActive }) => isActive ? 'active' : ''}>
            Iniciar Sesión
          </NavLink>
        </li>
        <li>
          <NavLink to="/register/bank" className={({ isActive }) => isActive ? 'active' : ''}>
            Registrar Banco
          </NavLink>
        </li>
        <li>
          <NavLink to="/register/donor" className={({ isActive }) => isActive ? 'active' : ''}>
            Registrar Donante
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

function NavarModif(){
	return (
		<nav className='navbar_modif'>
			<ul>
				<li>
					<NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>
            		Inicio
          			</NavLink>
				</li>
			</ul>
		</nav>
	);
}

function App() {
  const location = useLocation();

  // Lista de rutas donde quieres mostrar el navbar
  const routesWithNavbar = ['/', '/login', '/register/bank', '/register/donor'];

  return (
    <div>
      {/* Mostrar el navbar solo en las rutas especificadas */}
      {routesWithNavbar.includes(location.pathname) ? <Navbar /> : <NavarModif />}

      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/donor" element={<DonorHome />} />
          <Route path="/bank" element={<BankHome />} />
          <Route path="/register/bank" element={<RegisterBank />} />
          <Route path="/register/donor" element={<RegisterDonor />} />
          <Route path="/healtforms" element={<HealthForm />} />
        </Routes>
      </div>
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
