import React from "react";
import SideBar from "./Components/SideBar";
import { Route, Routes } from "react-router-dom";
import Glassmorphism from "./Pages/Glassmorphism.jsx";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <div className="max-h-screen overflow-hidden">
        <Routes>
          <Route path="glassmorphism" element={<Glassmorphism />}></Route>
        </Routes>
        <SideBar />
        <Toaster />
      </div>
    </>
  );
}

export default App;
