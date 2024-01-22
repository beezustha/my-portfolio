import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Preloader from "./component/Preloader";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Experience from "./pages/Experience";
import Home from "./pages/Home";

function App() {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		// Simulate a delay of 3 seconds
		const timer = setTimeout(() => {
			setLoading(false);
		}, 2000);

		// Clear the timeout on component unmount (cleanup)
		return () => clearTimeout(timer);
	}, []); // Empty dependency array means this effect runs once after the initial render

	return (
		<div className="App">
			{loading ? (
				<Preloader />
			) : (
				<BrowserRouter>
					<Header />
					<Home />
					{/* <About />
          <Skills />
          <Projects /> */}
					{/* <Experience /> */}
					{/* <Resume /> */}
					<Footer />
				</BrowserRouter>
			)}
		</div>
	);
}

export default App;
