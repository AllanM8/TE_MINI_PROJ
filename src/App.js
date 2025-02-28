import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Properties from "./components/Properties";
import SingleProperty from "./components/SingleProperty";
import Contact from "./components/Contact";
import Login from "./components/Login";  
import Signup from "./components/Signup"; 
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/properties/:id" element={<SingleProperty />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />  
        <Route path="/signup" element={<Signup />} /> 
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
