import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import About from "./pages/About";
import Footer from "./components/Footer";
import { useTheme } from "./hooks/useTheme";
import WebDesign from "./pages/WebDesign";
import AppDesign from "./pages/AppDesign";
import ScrollToTop from "./helpers/ScrollToTop";
function App() {
	const { theme } = useTheme();
	return (
		<BrowserRouter>
			<ScrollToTop />
			<NavBar />
			<main data-bs-theme={theme}>
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
				<Routes>
					<Route path="/about" element={<About />} />
				</Routes>
				<Routes>
					<Route path="/web-design" element={<WebDesign />} />
				</Routes>
				<Routes>
					<Route path="/app-design" element={<AppDesign />} />
				</Routes>
			</main>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
