import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import PackageDetail from "./pages/PackageDetail";
import PackageById from "./pages/PackageById";
import PackageCount from "./pages/PackageCount";
import ErrorPage from "./pages/ErrorPage";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="min-h-dvh font-poppins space-y-4 bg-white text-black">
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/data" element={<PackageDetail />} />
        <Route path="/data/count" element={<PackageCount />} />
        <Route path="/data/:id" element={<PackageById />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
