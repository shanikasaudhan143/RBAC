import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import UsersPage from "./pages/UsersPage";
import RolesPage from "./pages/RolesPage";
import Sidebar from "./components/Sidebar"; // Ensure you import the Sidebar component

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex-1 bg-gray-100 p-8 overflow-auto">
          <Routes>
            <Route path="/users" element={<UsersPage />} />
            <Route path="/roles" element={<RolesPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
