import React from "react";
import SideBar from "./Components/SideBar";
import { Route, Routes } from "react-router-dom";
import Glassmorphism from "./Pages/Glassmorphism.jsx";
import { Toaster } from "react-hot-toast";
import Border from "./Pages/Border.jsx";
import BoxShadow from "./Pages/BoxShadow.jsx";
import HeaderText from "./Pages/HeaderText.jsx";
import TextShadow from "./Pages/TextShadow.jsx";

function App() {
  return (
    <>
      <div className="max-h-screen overflow-hidden">
        <Routes>
          <Route path="glassmorphism" element={<Glassmorphism />}></Route>
          <Route path="/border" element={<Border />}></Route>
          <Route path="/headertext" element={<HeaderText />}></Route>
          <Route path="/boxshadow" element={<BoxShadow />}></Route>
          <Route path="/textshadow" element={<TextShadow />}></Route>
        </Routes>
        <SideBar />
        <Toaster />
      </div>
    </>
  );
}

export default App;
