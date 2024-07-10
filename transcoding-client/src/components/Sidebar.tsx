// Sidebar.jsx
"use client";
import { Video, Upload, SquareUser } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Sidebar = () => {
  const navItems = [
    {
      title: "Upload",
      icon: Upload,
      href: "/upload",
    },
    {
      title: "Assets",
      icon: Video,
      href: "/assets",
    },
    {
      title: "User",
      icon: SquareUser,
      href: "/user",
    },
  ];
  const pathname = usePathname();
  return (
    <div className="hidden md:flex flex-col w-64 border-r bg-gray-100 dark:bg-gray-800">
      <div className="flex-1 overflow-auto">
        <nav className="flex-1 py-4">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={`flex items-center h-12 px-6 text-lg font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white cursor-pointer ${
                pathname === item.href ? "bg-gray-200 dark:bg-gray-700" : ""
              }`}
            >
              <item.icon className="h-6 w-6 mr-3 text-gray-600 dark:text-gray-300" />
              <span>{item.title}</span>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
