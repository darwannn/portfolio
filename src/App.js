import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";

import Contact from "./components/Contact";
import Footer from "./components/Footer";

import "./assets/css/lightgallery.css";
import "./assets/css/swiper.css";

function App() {
  return (
    <>
      <ToastContainer position="bottom-right" limit={1} />
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer text="Built & Designed by Darwin Ramos" />
    </>
  );
}
export default App;
