import React from "react";
import { Route, Routes } from "react-router-dom";

// components
import Header from "./components/Header";
import Footer from "./components/Footer";

// pages
import Home from "./pages/Home";
import PropertyDetails from "./pages/PropertyDetails";
import SignIn from "./components/SignIn/SignIn";
import LogIn from "./components/LogIn/LogIn";
import Verify from "./components/Verify";

const App = () => {
  return (
    <div className="bg-white" dir="rtl">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Property/:id" element={<PropertyDetails />} />
        <Route path="/Singin" element={<SignIn />} />
        <Route path="/Login" element={<LogIn />} />
        <Route path="/Verify" element={<Verify />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
