import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Preloader from "./component/Preloader";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Spotify from "./pages/Spotify";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay of 3 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

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
          <About />
          <Projects />
          {/* <Spotify /> */}
          <Contact />
          <Footer />
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
