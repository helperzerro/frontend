import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Homez, Contact } from "../../pages";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homez />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
