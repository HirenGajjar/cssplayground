import React from "react";
import SideBar from "./Components/SideBar";
import { Route, Routes } from "react-router-dom";
import Glassmorphism from "./Pages/Glassmorphism.jsx";
import { Toaster } from "react-hot-toast";
import Border from "./Pages/Border.jsx";

function App() {
  return (
    <>
      <div className="max-h-screen overflow-hidden">
        <Routes>
          <Route path="glassmorphism" element={<Glassmorphism />}></Route>
          <Route path="/border" element={<Border />}></Route>
        </Routes>
        <SideBar />
        <Toaster />
      </div>
    </>
  );
}

export default App;
