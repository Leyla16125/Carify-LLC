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
import Documents from "./src/components/pages/Documents"
import Logistics from "./src/components/srvcs/Logistics";
import VehicleInspection from "./src/components/srvcs/VehicleInspection";
import VehicleSearch from "./src/components/srvcs/VehicleSearch";
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
