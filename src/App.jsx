import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Preloader from "./component/Preloader";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import About from "./pages/About";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Spotify from "./pages/Spotify";

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
          <About />
          <Skills />
          <Spotify />
          <Footer />
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
