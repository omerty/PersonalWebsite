import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";

import React, { useState, useEffect } from 'react';

function App() {
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector('.footer');
      const st = window.pageYOffset || document.documentElement.scrollTop;

      if (footer) {
        const rect = footer.getBoundingClientRect();
        const isFooterVisible = rect.top <= window.innerHeight;

        if (isFooterVisible && st > lastScrollTop) {
          // Scrolling down and footer is visible
          window.scrollTo(0, window.pageYOffset);
        }
      }

      setLastScrollTop(st <= 0 ? 0 : st);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollTop]);

  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;