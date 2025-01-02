import React, { useState } from "react";
import { Link } from "react-router-dom";

function SideBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative h-screen">
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-gray-900 text-white p-5 transition-transform duration-300 shadow-lg ${
          isOpen ? "transform translate-x-0" : "transform -translate-x-full"
        }`}
      >
        <button
          onClick={toggleSidebar}
          className="absolute top-4 right-4 bg-red-500 text-white p-2 rounded-full shadow-md hover:bg-red-600 transition-colors"
        >
          ✕
        </button>

        <nav className="mt-10">
          <Link
            to="/glassmorphism"
            className="block py-2 px-4 rounded-md text-white hover:bg-gray-700 transition-colors"
          >
            Glassmorphism
          </Link>
          <Link
            to="/border"
            className="block py-2 px-4 rounded-md text-white hover:bg-gray-700 transition-colors"
          >
            Border
          </Link>
          {/* Add more links here */}
        </nav>
      </div>
      {!isOpen && (
        <button
          onClick={toggleSidebar}
          className="fixed top-4 left-4 bg-blue-500 text-white p-2 rounded-full shadow-lg hover:bg-blue-600 transition-colors"
        >
          ☰
        </button>
      )}
    </div>
  );
}

export default SideBar;
