// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import './App.css'
import About from './sections/About';
import Contact from './sections/Contact';
import Experience from './sections/Experience';
import Footer from './sections/Footer';
import Hero from './sections/Hero'
import Navbar from './sections/Navbar'
import Projects from './sections/Projects';
import Skills from './sections/Skills'
import { useEffect, useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <>
      <main className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="fixed bottom-6 right-6 z-[999] flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition hover:scale-105"
          style={{
            background: "var(--color-mode-btn)",
            color: "var(--color-heading)",
          }}
        >
          <span className="text-2xl">
            {darkMode ? "☀️" : "🌙"}
          </span>
        </button>
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </>
  )
}

export default App
