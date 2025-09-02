import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import CommonLayout from "../layout/CommonLayout";
import Login from "./components/pages/Login";
import Cars from "./components/pages/Cars";
import CarDetails from "./components/pages/CarDetails";
import Contact from "./components/pages/Contact";
import Like from "./components/pages/Like";
import Documents from "./components/pages/Documents"
import Logistics from "./components/srvcs/Logistics";
import VehicleInspection from "./components/srvcs/VehicleInspection";
import VehicleSearch from "./components/srvcs/VehicleSearch";
import { LikeProvider } from "./components/pages/LikeContext";

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
            <Route path="/documents" element={<Documents />} />
            <Route path="/services/logistics" element={<Logistics/>} />
            <Route path="/services/vehicle-search" element={<VehicleSearch/>}/>
            <Route path="/services/vehicle-inspection" element={<VehicleInspection/>}/>
          </Route>
        </Routes>
      </Router>
    </LikeProvider>
  );
}

export default App;
