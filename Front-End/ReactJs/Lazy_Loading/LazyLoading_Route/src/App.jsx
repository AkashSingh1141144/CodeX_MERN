import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

// Lazy load heavy Admin Dashboard
const AdminDashboard = lazy(() => import("./pages/AdminDashboard"));

export default function App() {
  return (
    <Router>
      <Navbar />
      <div className="p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          
          <Route
            path="/admin"
            element={
              <Suspense fallback={<p className="text-lg text-gray-500">Loading Admin Panel...</p>}>
                <AdminDashboard />
              </Suspense>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}
