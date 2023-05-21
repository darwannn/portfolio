
import './App.css';


import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';

import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
   <>
       <Navbar/>
       <Home/>
       <About/>
         <Projects/>
       <Contact/>
       <Footer text="Built & Designed by Darwin Ramos"/>
   </>
  );
}
export default App;
