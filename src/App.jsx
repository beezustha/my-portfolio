import { BrowserRouter } from "react-router-dom";
import Header from "./layout/Header";
import Experience from "./pages/Experience";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/about";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Home />
        <About />
        <Projects />
        <Experience />
        {/* <Resume /> */}
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
