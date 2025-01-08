import React, { useState } from "react";
import { Link } from "react-router-dom";

function SideBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const sideBarLinks = [
    { slag: "/border", title: "Border" },
    { slag: "/boxshadow", title: "Box Shadow" },
    { slag: "/glassmorphism", title: "Glassmorphism" },
    { slag: "/headertext", title: "Header Text" },
    { slag: "/textshadow", title: "Text Shadow" },
  ];

  return (
    <div className="relative h-screen">
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-[#F3F4F6] text-black p-5 transition-transform duration-300 shadow-3xl ${
          isOpen ? "transform translate-x-0" : "transform -translate-x-full"
        }`}
      >
        <button
          onClick={toggleSidebar}
          className="absolute top-4 right-4 bg-blue-500 text-white p-2 shadow-md hover:bg-red-600 transition-colors rounded-sm"
        >
          ✕
        </button>

        <nav className="mt-10">
          {sideBarLinks.map((link) => (
            <Link
              key={link.slag}
              to={link.slag}
              className="block py-2 px-4 rounded-md text-black hover:underline"
            >
              {link.title}
            </Link>
          ))}
        </nav>
      </div>
      {!isOpen && (
        <button
          onClick={toggleSidebar}
          className="fixed top-4 left-4 bg-blue-500 rounded-sm text-white p-2  shadow-lg hover:bg-blue-600 transition-colors"
        >
          ☰
        </button>
      )}
    </div>
  );
}

export default SideBar;
