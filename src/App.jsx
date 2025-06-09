import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // ✅ FIXED HERE
import Home from "./components/Home.jsx";
import Login from "./Pages/Authentication/Login.jsx";
import Register from "./Pages/Authentication/Register.jsx";
import Benefits from "./components/Benefits.jsx";
import Pricing from "./components/Pricing.jsx";
import Roadmap from "./components/RoadMap.jsx";
import Services from "./components/Services.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Features" element={<Benefits />} />
        <Route path="/Pricing" element={<Pricing />} />
        <Route path="/Use" element={<Services />} />
        <Route path="/Roadmap" element={<Roadmap />} />
      </Routes>
    </Router>
  );
};

export default App;
