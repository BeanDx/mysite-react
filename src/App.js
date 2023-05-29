import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useEffect } from 'react';

import "./styles/style.css"

import Header from './components/header/Header';
import Home from "./pages/Home";
import Stack from "./pages/Stack";
import Works from "./pages/Works";
import Workspace from "./pages/Workspace";

function App() {
  useEffect(() => {
    const handleBurgerClick = () => {
      document.querySelector("header").classList.toggle("open");
    };

    const burgerElement = document.getElementById("burger");
    burgerElement.addEventListener("click", handleBurgerClick);

    return () => {
      burgerElement.removeEventListener("click", handleBurgerClick);
    };
  }, []);

  useEffect(() => {
    document.querySelector('.themetoggle').addEventListener('click', (event) => {
      event.preventDefault();
      if (localStorage.getItem('theme') === 'dark') {
          localStorage.removeItem('theme');
      } else {
          localStorage.setItem('theme', 'dark');
      }
      addDarkClassHTML();
    });

    function addDarkClassHTML() {
      try {
          if (localStorage.getItem('theme') === 'dark') {
              document.querySelector('html').classList.add('dark');
              document.querySelector('.themetoggle span').textContent = 'dark_mode';
          }
          else {
              document.querySelector('html').classList.remove('dark');
              document.querySelector('.themetoggle span').textContent = 'wb_sunny';
          }
      } catch (err) { }
    }

    addDarkClassHTML();
  }, []);

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stack" element={<Stack />} />
          <Route path="/works" element={<Works />} />
          <Route path="/workspace" element={<Workspace />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
