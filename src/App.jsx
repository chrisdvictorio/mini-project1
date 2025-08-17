import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import PackageDetail from "./pages/PackageDetail";
import PackageCount from "./pages/PackageCount";
import PackageById from "./pages/PackageById";
import ErrorPage from "./pages/ErrorPage";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="min-h-dvh flex flex-col font-poppins bg-white text-black">
      <Header />
      <main className="flex-1 py-12 px-8 md:px-12 xl:px-36">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/data" element={<PackageDetail />} />
          <Route path="/data/count" element={<PackageCount />} />
          <Route path="/data/:id" element={<PackageById />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </main>
      <Footer className="mt-auto" />
    </div>
  );
};

export default App;
