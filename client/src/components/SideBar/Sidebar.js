// Sidebar.js

import React from "react";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={`fixed h-screen bg-gray-900 text-white p-4 ${
        isOpen ? "w-64" : "w-0"
      } transition-all duration-300 z-10`}
    >
      <ul className={`mt-4 ${isOpen ? "block" : "hidden"}`}>
        <li className="py-2 cursor-pointer hover:bg-slate-700 rounded-md p-2">
          Home
        </li>
        <li className="py-2 cursor-pointer  hover:bg-slate-700 rounded-md p-2">
          About
        </li>
        <li className="py-2 cursor-pointer  hover:bg-slate-700 rounded-md p-2">
          Contact
        </li>
      </ul>
      {isOpen && (
        <button
          className="text-2xl absolute top-4 right-4"
          onClick={toggleSidebar}
        >
          ✕
        </button>
      )}
    </div>
  );
};

export default Sidebar;
