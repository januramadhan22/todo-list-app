import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "../pages/Home";
import Detail from "../pages/Detail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/activity-groups/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
