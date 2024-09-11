"use client";
import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FaBook, FaUsers } from "react-icons/fa6";
import { GoHomeFill } from "react-icons/go";
import { FaSignOutAlt, FaCog } from "react-icons/fa";
import LogoutButton from "./LogoutButton";

const SideBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  const menuItems = [
    { icon: <GoHomeFill />, label: "Dashboard" },
    { icon: <FaUsers />, label: "Authors" },
    { icon: <FaBook />, label: "Books" },
  ];

  return (
    <aside className=" flex flex-col rounded-r-xl h-screen ">
      <div
        className={`relative h-full bg-gray-800 transition-all duration-300 ${
          isOpen ? "w-48" : "w-16"
        }`}
      >
        <ul className="relative space-y-2 mt-2">
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
        <ul className="absolute bottom-6 w-full border-t border-slate-400">
          <li className="flex items-center space-x-4 text-white cursor-pointer p-4 hover:bg-gray-700 transition-all duration-300">
            <span className="text-xl">
              <FaCog />
            </span>
            {isOpen && <span className="whitespace-nowrap">Settings</span>}
          </li>
          <li className="flex items-center space-x-4 text-white cursor-pointer p-4 hover:bg-gray-700 transition-all duration-300">
            <span className="text-xl">
              <FaSignOutAlt />
            </span>
            {isOpen && (
              <span className="whitespace-nowrap">
                <LogoutButton />
              </span>
            )}
          </li>
        </ul>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="absolute top-4 -right-3 bg-gray-800 text-white p-2 rounded-full border-white border-2"
        >
          {isOpen ? <FaChevronLeft /> : <FaChevronRight />}
        </button>
      </div>
    </aside>
  );
};

export default SideBar;
