import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-1/4 bg-gradient-to-t from-gray-900 via-gray-800 to-gray-700 text-white min-h-screen p-6 shadow-lg rounded-r-3xl">
        <h1 className="text-3xl font-bold mb-12 text-center tracking-wide text-gradient bg-clip-text text-transparent">
          RBAC Dashboard
        </h1>
        <ul className="space-y-6">
          <li>
            <NavLink
              to="/users"
              className={({ isActive }) =>
                isActive
                  ? "bg-blue-600 hover:bg-blue-500 px-5 py-3 rounded-lg flex items-center gap-4 transition-all duration-300 ease-in-out shadow-lg transform hover:scale-105"
                  : "px-5 py-3 flex items-center gap-4 hover:bg-gray-800 rounded-lg transition-all duration-300 ease-in-out"
              }
            >
              <span className="material-icons"> </span> {/* Users Button */}
              <span className="text-lg font-medium">Users</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/roles"
              className={({ isActive }) =>
                isActive
                  ? "bg-blue-600 hover:bg-blue-500 px-5 py-3 rounded-lg flex items-center gap-4 transition-all duration-300 ease-in-out shadow-lg transform hover:scale-105"
                  : "px-5 py-3 flex items-center gap-4 hover:bg-gray-800 rounded-lg transition-all duration-300 ease-in-out"
              }
            >
              <span className="material-icons"> </span> {/* Roles Button */}
              <span className="text-lg font-medium">Roles</span>
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="w-3/4 bg-gray-100 p-8 rounded-l-3xl">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">Welcome to the RBAC Dashboard</h2>
        <p className="text-gray-600 text-lg">
          Select a section from the sidebar to manage users or roles.
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
