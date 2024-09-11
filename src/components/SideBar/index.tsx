// src/components/SideBar/index.tsx

"use client";
import { useAuth } from "@/contexts/AuthContext";
import Link from "next/link";
import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaSignOutAlt } from "react-icons/fa";
import { menuItems, botMenuItems } from "@/data/sideBarData";

const SideBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <aside className=" flex flex-col rounded-r-xl h-screen ">
      <div
        className={`relative h-full bg-gray-800 transition-all duration-300 ${
          isOpen ? "w-48" : "w-16"
        }`}
      >
        <div className="relative space-y-2 mt-2">
          {menuItems.map((item, index) => (
            <Link
              href={item.link}
              key={index}
              className="flex items-center space-x-4 text-white cursor-pointer p-4 rounded-xl hover:bg-gray-700 transition-all duration-300"
            >
              <span className="text-xl">{item.icon}</span>
              {isOpen && (
                <span className="whitespace-nowrap">{item.label}</span>
              )}
            </Link>
          ))}
        </div>
        <div className="absolute bottom-4 w-full border-t border-slate-400">
          {botMenuItems.map((item, index) => (
            <Link
              href={item.link}
              key={index}
              className="flex items-center space-x-4 text-white cursor-pointer p-4 rounded-xl hover:bg-gray-700 transition-all duration-300"
            >
              <span className="text-xl">{item.icon}</span>
              {isOpen && (
                <span className="whitespace-nowrap">{item.label}</span>
              )}
            </Link>
          ))}
          <button
            onClick={handleLogout}
            className="flex items-center space-x-4 w-full text-white cursor-pointer p-4 rounded-xl hover:bg-gray-700 transition-all duration-300"
          >
            <span className="text-xl">
              <FaSignOutAlt />
            </span>
            {isOpen && <span className="whitespace-nowrap">Logout</span>}
          </button>
        </div>
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
