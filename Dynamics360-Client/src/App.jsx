import React from "react";
import FeaturedEvents from "./Events/FeaturedEvents";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<FeaturedEvents />} />
        <Route path="/events" element={<FeaturedEvents />} />
        <Route path="/contact" element={<div>Contact us</div>} />
      </Routes>
    </>
  );
}

export default App;
