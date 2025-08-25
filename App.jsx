import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./src/components/pages/Home";
import About from "./src/components/pages/About";
import CommonLayout from "./layout/CommonLayout";
import Login from "./src/components/pages/Login";
import Cars from "./src/components/pages/Cars";
import CarDetails from "./src/components/pages/CarDetails";
import Contact from "./src/components/pages/Contact";
import Like from "./src/components/pages/Like";
import { LikeProvider } from "./src/components/pages/LikeContext";

function App() {
  return (
    <LikeProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
          
          <Route element={<CommonLayout />}>
            <Route path="/cars" element={<Cars />} />
            <Route path="/cars/:id" element={<CarDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/like" element={<Like />} />
          </Route>
        </Routes>
      </Router>
    </LikeProvider>
  );
}

export default App;
