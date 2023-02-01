import './index.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";

import { ProductProvider } from "./context/ProductContext";

function App() {
	return (
		<>
			<ProductProvider>
				<Router>
					<Navbar />
					<Routes>
						<Route path='/' element={<Home />} />
					</Routes>
					<Footer />
				</Router>
			</ProductProvider>
		</>
	);
}

export default App;
