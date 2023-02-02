import './index.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ShoppingCart from './pages/ShoppingCart';
import Product from './pages/Product';

import { ProductProvider } from "./context/ProductContext";

import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

function App() {
	return (
		<>
			<ProductProvider>
				<Router>
					<Navbar />
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/shopping-cart' element={<ShoppingCart />} />
						<Route path='/product/:id' element={<Product />} />
					</Routes>
					<Footer />
				</Router>
				<ToastContainer />
			</ProductProvider>
		</>
	);
}

export default App;
