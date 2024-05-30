import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";

import Navbar from "./components/Navbar";

import "./assets/css/lightgallery.css";
import "./assets/css/swiper.css";

import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <ToastContainer position="bottom-right" limit={1} />
      <Navbar />
      <Outlet />
      <Footer text="Built & Designed by Darwin Ramos" />
    </>
  );
}
export default App;
