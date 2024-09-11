import * as React from "react";
import { FaCog } from "react-icons/fa";
import { FaBook, FaUsers } from "react-icons/fa6";
import { GoHomeFill } from "react-icons/go";

const menuItems = [
  {
    icon: React.createElement(GoHomeFill),
    label: "Dashboard",
    link: "#",
  },
  {
    icon: React.createElement(FaUsers),
    label: "Authors",
    link: "#",
  },
  {
    icon: React.createElement(FaBook),
    label: "Books",
    link: "#",
  },
];

const botMenuItems = [
  {
    icon: React.createElement(FaCog),
    label: "Settings",
    link: "#",
  },
];

export { menuItems, botMenuItems };
