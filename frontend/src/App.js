import './App.css';
import {BrowserRouter as Router, Routes, Route, NavLink} from "react-router-dom";
import RegisterBank from "./pages/RegisterBank";
import RegisterDonor from "./pages/RegisterDonor";
import Login from "./pages/Login";
import Home from './pages/Home';
import DonorHome from './pages/DonorHome';
import BankHome from './pages/BankHome';

function App() {
	return (
		<Router>
			<nav className='navbar'>
				<ul>
					<li>
						<NavLink to="/" className={({isActive}) => isActive ? 'active' : ''}>
							Casa
						</NavLink>
					</li>
					<li>
						<NavLink to="/login" className={({isActive}) => isActive ? 'active' : ''}>
							Iniciar Sesión
						</NavLink>
					</li>
					<li>
						<NavLink to="/register/bank" className={({isActive}) => isActive ? 'active' : ''}>
							Registrar Banco
						</NavLink>
					</li>
					<li>
						<NavLink to="/register/donor" className={({isActive}) => isActive ? 'active' : ''}>
							Registrar Donante
						</NavLink>
					</li>
				</ul>
			</nav>

			<div className="main-content">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route path="/donor" element={<DonorHome />} />
					<Route path="/bank" element={<BankHome />} /> 
					<Route path="/register/bank" element={<RegisterBank />} />
					<Route path="/register/donor" element={<RegisterDonor />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;

