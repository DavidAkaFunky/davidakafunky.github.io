import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import InConstruction from "./pages/InConstruction";
import "./css/App.css";

function App() {
	return (
		<>
			<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/cv" element={<InConstruction />} />
					<Route path="/projects" element={<InConstruction />} />
					<Route path="/learning" element={<InConstruction />} />
					{/* Fallback route */}
					<Route path="/*" element={<Navigate to="/" />} />
				</Routes>
			<Footer />
		</>
	);
}

export default App;
