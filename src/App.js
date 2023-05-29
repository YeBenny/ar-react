import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import ImageTracking from "./pages/image-tracking/ImageTracking";
import FaceTracking from "./pages/face-tracking/FaceTracking";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/image-tracking" element={<ImageTracking />} />
      <Route path="/face-tracking" element={<FaceTracking />} />
    </Routes>
  );
}

export default App;
