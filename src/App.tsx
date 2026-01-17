import Navbar from "./components/Navbar";
import { AiFillFacebook, AiFillLinkedin, AiFillTwitterCircle } from "react-icons/ai";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./App.css";
import devimg from "./assets/ShristiAvatar.png";
import design from "./assets/design.png";
import code from "./assets/code.png";
import consulting from "./assets/consulting.png";

import Projects from "./components/Projects";
import Project2 from "./components/Spendly";
import BrewNBake from "./components/BrewNBake";
import EdgeStudio from "./components/EdgeStudio";
import ContactCard from "./components/ContactCard";
import ScrollToTop from "./components/ScrollToTop";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [darkMode, setDarkMode] = useState(true); // Dark mode by default

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      document.body.classList.add("dark");
      setDarkMode(true);
    }
  }, []);

  const toggleDarkMode = () => {
    document.body.classList.toggle("dark");
    const isDark = document.body.classList.contains("dark");
    setDarkMode(isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  };

  return (
    <BrowserRouter>
    <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <div className={`app-wrapper ${darkMode ? "dark" : "light"}`}>

              {/* Dark mode stars */}
              {darkMode && (
                <div className="stars-wrapper">
                  <div className="stars"></div>
                  <div className="shooting-star"></div>
                  <div className="shooting-star"></div>
                  <div className="shooting-star"></div>
                  <div className="shooting-star"></div>
                </div>
              )}

              {/* Light mode floating bubbles */}
              {!darkMode && (
                <div className="light-bubbles-wrapper">
                  <div className="light-bubble"></div>
                  <div className="light-bubble"></div>
                  <div className="light-bubble"></div>
                  <div className="light-bubble"></div>
                  <div className="light-bubble"></div>
                </div>
              )}


              {/* Navbar and main content */}
              <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
              <main className="px-10 md:px-10 lg:px-40 relative z-10">
                <section className="min-h-screen">
                  {/* HERO */}
                  <div className="text-center p-10">
                    <h1 className="text-5xl py-2 bg-gradient-to-r from-cyan-500 to-red-500 bg-clip-text text-transparent font-medium md:text-6xl">
                      Shristi Badoni
                    </h1>
                    <h3 className="text-2xl py-2 md:text-3xl">
                      UI/UX & Product Designer
                    </h3>
                    <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto">
                      I am a UI/UX designer with a passion for creating beautiful and functional designs.
                    </p>
                  </div>

                  {/* SOCIAL */}
                  <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
                    <AiFillFacebook />
                    <AiFillLinkedin />
                    <AiFillTwitterCircle />
                  </div>

                  {/* IMAGE */}
                  <div className="relative bg-gradient-to-b from-teal-500 to-blue-400 rounded-full w-60 h-60 mt-20 mx-auto overflow-hidden md:h-96 md:w-96">
                    <img src={devimg} className="w-full h-full object-cover" alt="hero" />
                  </div>

                  {/* SERVICES */}
                  <section className="text-center mt-32">
                    <h1 className="text-3xl py-1">Services I offer</h1>
                    <div className="lg:flex gap-10 flex-col lg:flex-row justify-center">
                      <div className="slide-card text-center shadow-lg p-10 rounded-xl my-10">
                        <img src={design} className="mx-auto w-28" />
                        <h3 className="pt-8 text-lg font-medium">Beautiful Designs</h3>
                        <p>Creating visually appealing interfaces.</p>
                      </div>

                      <div className="slide-card text-center shadow-lg p-10 rounded-xl my-10">
                        <img src={code} className="mx-auto w-28" />
                        <h3 className="pt-8 text-lg font-medium">Clean UI</h3>
                        <p>Scalable and maintainable UI.</p>
                      </div>

                      <div className="slide-card text-center shadow-lg p-10 rounded-xl my-10">
                        <img src={consulting} className="mx-auto w-28" />
                        <h3 className="pt-8 text-lg font-medium">Consulting</h3>
                        <p>Expert product guidance.</p>
                      </div>
                    </div>
                  </section>

                  {/* PROJECTS */}
                  <Projects />
                  <ContactCard />
                </section>
              </main>
            </div>
          }
        />

        {/* PROJECT DETAIL */}
        <Route path="/project2" element={<Project2 darkMode={darkMode} toggleDarkMode={toggleDarkMode} />} />
        <Route path="/BrewNBake" element={<BrewNBake darkMode={darkMode} toggleDarkMode={toggleDarkMode} />} />
        <Route path="/EdgeStudio" element={<EdgeStudio darkMode={darkMode} toggleDarkMode={toggleDarkMode} />} />
        <Route path="/ContactCard" element={<ContactCard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
