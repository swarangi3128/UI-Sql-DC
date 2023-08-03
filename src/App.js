import './App.css';
import Home from "./Sections/Home";
import About from "./Sections/About";
import Experience from "./Sections/Experience";
import Contact from "./Sections/Contact"
import ContactBar from "./Components/ContactBar";
import Footer from "./Components/Footer";
import Heading from "./Components/Heading";
import Navbar from "./Components/Navbar";



function App() {
  return (
    <main className="main">
      <Navbar />
      <div className="app_section_container">
        <Home/>
        <About />
        <Experience />
        <Contact />
      </div>
      <ContactBar />
      <Footer />
    </main>
  );
}

export default App;
