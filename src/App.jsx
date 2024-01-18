import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./layout/Header";
import Experience from "./pages/Experience";
import Home from "./pages/Home";

const App = () => {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path="/experience" element={<Experience />} />
				<Route path="/" element={<Home />} />
			</Routes>
		</Router>
	);
};

export default App;
