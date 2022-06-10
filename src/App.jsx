import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Hero from "./pages/Hero";
import AboutMe from "./pages/AboutMe";
import Github from "./pages/Github";
import Menu from "./components/Menu";

function App() {
	return (
		<BrowserRouter>
			<Menu />
			<Routes>
				<Route
					exact
					path='/'
					element={
						<>
							<Hero />
							<AboutMe />
							<Github />
						</>
					}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
