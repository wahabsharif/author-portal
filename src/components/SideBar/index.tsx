"use client";
import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FaBook, FaUsers } from "react-icons/fa6";
import { GoHomeFill } from "react-icons/go";

const SideBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { icon: <GoHomeFill />, label: "Dashboard" },
    { icon: <FaUsers />, label: "Authors" },
    { icon: <FaBook />, label: "Books" },
  ];

  return (
    <div className="flex h-screen">
      <div
        className={`relative h-full bg-gray-800 transition-all duration-300 ${
          isOpen ? "w-48" : "w-16"
        }`}
      >
        <ul className="relative space-y-2 mt-6">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="flex items-center space-x-4 text-white cursor-pointer p-4 hover:bg-gray-700 transition-all duration-300"
            >
              <span className="text-xl">{item.icon}</span>
              {isOpen && (
                <span className="whitespace-nowrap">{item.label}</span>
              )}
            </li>
          ))}
        </ul>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="absolute top-4 -right-3 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-500 transition-colors"
        >
          {isOpen ? <FaChevronLeft /> : <FaChevronRight />}
        </button>
      </div>
    </div>
  );
};

export default SideBar;
