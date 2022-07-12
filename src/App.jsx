import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactGA from "react-ga";

import Hero from "./pages/Hero";
import AboutMe from "./pages/AboutMe";
import Education from "./pages/Education";
import Github from "./pages/Github";
import Certificate from "./pages/Certificate";
import Contact from "./pages/Contact";

import Menu from "./components/Menu";
import FPS from "./components/Fps";

function App() {
	const TRACKING_ID = "G-XRM8WHGJ6P";

	ReactGA.initialize(TRACKING_ID);

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
