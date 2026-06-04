import { useState, useEffect } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Loader from "./components/Loader";
import Cursor from "./components/Cursor";
import CanvasBg from "./components/CanvasBg";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./index.css";

function ScrollToTop() {
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const fn = () => setVis(window.scrollY > 400);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return (
    <button
      id="stt"
      className={vis ? "vis" : ""}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
    >↑</button>
  );
}

export default function App() {
  const [loaded, setLoaded] = useState(false);

  return (
    <ThemeProvider>
      {!loaded && <Loader onDone={() => setLoaded(true)} />}
      {loaded && (
        <>
          <Cursor />
          <CanvasBg />
          <ScrollToTop />
          <Navbar />
          <main>
            <Hero />
            <Marquee />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Certificates />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </ThemeProvider>
  );
}
