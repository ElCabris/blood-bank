import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import RegisterBank from "./pages/RegisterBank";
import RegisterDonor from "./pages/RegisterDonor";
import DonationSites from "./pages/DonationSites";
import DonationHistory from "./pages/DonationHistory";
import Login from "./pages/Login";
import Home from './pages/Home';

function App() {
  return (
		<Router>
			<nav>
				<Link to="/">Casa</Link>
				<Link to="/login">Iniciar Sesión</Link>
				<Link to="/register-bank">Registrar Banco</Link>
				<Link to="/register-donor">Registrar Donante</Link>
			</nav>

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register-bank" element={<RegisterBank />} />
				<Route path="/register-donor" element={<RegisterDonor />} />
				<Route path="/donation-site" element={<DonationSites />} />
				<Route path="/donation-history" element={<DonationHistory />} />
			</Routes>
		</Router>
  );
}

export default App;
