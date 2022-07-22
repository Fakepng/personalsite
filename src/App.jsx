import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ReactGA from "react-ga";
import AOS from "aos";

import "aos/dist/aos.css";

import Hero from "./pages/Hero";
import AboutMe from "./pages/AboutMe";
import Education from "./pages/Education";
import Github from "./pages/Github";
import Certificate from "./pages/Certificate";
import Contact from "./pages/Contact";

import PageNotFound from "./pages/PageNotFound";

import Menu from "./components/Menu";
import FPS from "./components/Fps";

function App() {
	const TRACKING_ID = "G-XRM8WHGJ6P";
	ReactGA.initialize(TRACKING_ID);

	AOS.init();

	return (
		<BrowserRouter>
			<FPS />
			<Routes>
				<Route
					exact
					path='/'
					element={
						<>
							<Menu />
							<Hero />
							<AboutMe />
							<Education />
							<Github />
							<Certificate />
							<Contact />
						</>
					}
				/>
				<Route path='/404' element={<PageNotFound />} />
				<Route path='*' element={<Navigate to={"/404"} />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
