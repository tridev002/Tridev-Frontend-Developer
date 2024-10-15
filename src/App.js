import React from "react";
import Navbar from "./components/Navbar";
import Title from "./components/Title";
import Features from "./components/Features";
import About from "./components/About";
import Tokenomics from "./components/Tokenomics";
import Roadmap from "./components/Roadmap";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Title />
      <Features />
      <About />
      <Tokenomics />
      <Roadmap />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
