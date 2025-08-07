import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./src/components/pages/Home";
import About from "./src/components/pages/About"

function App() {
  return (
    <Router>
        <Route path="/" element={<Home />} />
        <Route path="/" element ={<About />} />
    </Router>
  );
}

export default App;

