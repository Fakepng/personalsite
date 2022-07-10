import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Hero from "./pages/Hero";
import AboutMe from "./pages/AboutMe";
import Education from "./pages/Education";
import Github from "./pages/Github";
import Certificate from "./pages/Certificate";
import Contact from "./pages/Contact";

import Menu from "./components/Menu";
import FPS from "./components/Fps";

function App() {
	return (
		<BrowserRouter>
			<Menu />
			<FPS />
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
