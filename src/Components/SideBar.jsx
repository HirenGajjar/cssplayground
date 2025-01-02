import React, { useState } from "react";
import { Link } from "react-router-dom";

function SideBar() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative h-screen">
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-black text-white p-5 transition-transform duration-300 ${
          isOpen ? "transform translate-x-0" : "transform -translate-x-full"
        }`}
      >
        <button
          onClick={toggleSidebar}
          className="absolute top-4 right-4 bg-red-500 text-white p-2"
        >
          X
        </button>

        <Link
          to="/glassmorphism"
          className="block mt-10 text-white hover:text-red-500"
        >
          Glassmorphism
        </Link>
      </div>
      {!isOpen && (
        <button
          onClick={toggleSidebar}
          className="fixed top-4 left-4 bg-blue-500 text-white p-2 shadow-lg"
        >
          →
        </button>
      )}
    </div>
  );
}

export default SideBar;
