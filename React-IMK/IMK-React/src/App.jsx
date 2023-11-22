import React from "react";
import { Nav } from "./Component/Navbar";
// import { Homepage } from './Component/Homepage'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Faq from "./Pages/Faq";
import NoPagesFound from "./Pages/err404";
import { Footer } from "./Component/Footer";

const App = () => {
  return (
    <div className="">
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/Home" index element={<Home />} />
          <Route path="/About" index element={<About />} />
          <Route path="/Faq" index element={<Faq />} />
          <Route path="*" index element={<NoPagesFound />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;
