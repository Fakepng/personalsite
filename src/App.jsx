import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Hero from "./pages/Hero";
import AboutMe from "./pages/AboutMe";
import Education from "./pages/Education";
import Github from "./pages/Github";
import Certificate from "./pages/Certificate";
import Contact from "./pages/Contact";

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
							<Education />
							<Github />
							<Certificate />
							<Contact />
						</>
					}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
