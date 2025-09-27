import React from "react";
import Header from "./components/header";
import Homepage from "./components/homepage";
import About from "./components/About";
import Projects from "./components/Projects";
import Services from "./components/Services";
import News from "./components/News";
import Contact from "./components/Contact";
import ClipsPage from "./components/ClipsPage";
import Footer from "./components/footer";
import StarBackground from "./components/starbg";
import "./App.css";

function App() {
  return (
    <div>
      {/* Global star background behind everything */}
      <StarBackground />

      {/* Main site content */}
      <Header />
      <main>
        <Homepage />
        <About />
        <Projects />
        <Services />
        <News />
        <ClipsPage />
        {/* <Contact /> */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
