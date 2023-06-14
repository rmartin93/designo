import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import About from "./pages/About";
import Footer from "./components/Footer";
import { useTheme } from "./hooks/useTheme";
function App() {
	const { theme } = useTheme();
	return (
		<BrowserRouter>
			<NavBar />
			<main data-bs-theme={theme}>
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
				<Routes>
					<Route path="/about" element={<About />} />
				</Routes>
			</main>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
