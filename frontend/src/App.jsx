import React, { useState, useContext, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Hackathons from "./pages/Hackathons/Hackathons";
import Footer from "./components/Footer/Footer";
import LoginPopup from "./components/LoginPopup/LoginPopup";
import { StoreContext } from "./context/StoreContext";

import "./App.css";

function App() {
  const location = useLocation();
  const { token, setToken } = useContext(StoreContext);
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, [setToken]);

  return (
    <>
      <Navbar setShowLogin={setShowLogin} />
      {showLogin && <LoginPopup setShowLogin={setShowLogin} />}
      
      {/* Show Header only on Home Page */}
      {location.pathname === "/" && <Header />} 

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hackathons" element={<Hackathons />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
