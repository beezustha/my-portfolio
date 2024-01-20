import { BrowserRouter } from "react-router-dom";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Experience from "./pages/Experience";
import Home from "./pages/Home";

function App() {
	return (
		<div className="App">
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
		</div>
	);
}

export default App;
