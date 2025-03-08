import React from "react";
import { MdOutlineMessage, MdSettings, MdLogout } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { useAuthStore } from "../store/useAuthStore";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
const Navbar = () => {
  const { authUser, logout } = useAuthStore();
  return (
    <nav className="bg-white shadow-lg w-full  fixed top-0 left-0 right-0 mb-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left Section: Logo and Name */}
          <Link to={"/"}>
            <div className="flex items-center">
              <MdOutlineMessage className="py-auto text-green-600 text-2xl" />
              <span className="ml-2 text-xl font-bold text-gray-800">
                Chatty
              </span>
            </div>
          </Link>
          {/* Right Section: Settings, Profile, and Logout */}
          <div className="flex items-center space-x-4">
            {/* Settings Button */}
            <Link to="/settings">
              <button
                className="p-2 text-gray-600 hover:text-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 rounded-md transition-all"
                aria-label="Settings"
              >
                <MdSettings className="text-2xl" />
              </button>
            </Link>
            {authUser && (
              <div>
                <Link to="/profile">
                  <button
                    className="p-2 text-gray-600 hover:text-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 rounded-md transition-all"
                    aria-label="Profile"
                  >
                    <FaUserCircle className="text-2xl" />
                  </button>
                </Link>
                <button
                  onClick={logout}
                  className="p-2 text-gray-600 hover:text-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 rounded-md transition-all"
                  aria-label="Logout"
                >
                  <MdLogout className="text-2xl" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
