import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import { Homez, Contact, About, Slider } from "../../pages";
import { Slider } from "../../pages";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Slider />} />
        {/* <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/slider" element={<Slider />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
