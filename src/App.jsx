import { useState } from "react";
import viteLogo from "/vite.svg";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import ContactForm from "./Components/ContactForm/ContactForm";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Projects from "./Components/Projects/Projects";
import Work from "./Components/Work/Work";
import About from "./Components/About/About";
import selfie from "./assets/selfie.jpeg";

function App() {
  const imglist = [selfie];
  return (
    <div className="container">
      <Navbar />
      <ToastContainer position="bottom-center" />

      <div className="containerCenter">
        <section id="about">
          <About></About>
        </section>

        <section id="work">
          <Work />
        </section>

        <section id="projects">
          <Projects></Projects>
        </section>
        <section id="contact">
          <ContactForm></ContactForm>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default App;
