import React from "react";
import SideBar from "./Components/SideBar";
import { Route, Routes } from "react-router-dom";
import Glassmorphism from "./Pages/Glassmorphism.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="glassmorphism" element={<Glassmorphism />}></Route>
      </Routes>
      <SideBar />
    </>
  );
}

export default App;
