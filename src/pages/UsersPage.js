import React, { useState, useEffect } from "react";
import { fetchUsers, addUser, deleteUser, updateUser } from "../mockAPI";

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ name: "", email: "" });
  const [editUser, setEditUser] = useState(null);  // Track the user to edit
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchUsers().then((data) => setUsers(data));
  }, []);

  // Filter users based on search term
  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Add user function
  const handleAddUser = () => {
    if (newUser.name && newUser.email) {
      addUser(newUser).then((user) => {
        setUsers([...users, user]);
        setNewUser({ name: "", email: "" });  // Reset after adding
      });
    }
  };

  // Edit user function
  const handleEditUser = () => {
    if (editUser) {
      updateUser(editUser).then((updatedUser) => {
        setUsers(
          users.map((user) => (user.id === updatedUser.id ? updatedUser : user))
        );
        setEditUser(null);  // Reset the edit state
        setNewUser({ name: "", email: "" });  // Reset form after edit
      });
    }
  };

  // Delete user function
  const handleDeleteUser = (id) => {
    deleteUser(id).then(() => {
      setUsers(users.filter((user) => user.id !== id));
    });
  };

  // Set user for editing
  const handleEditClick = (user) => {
    setEditUser(user);
    setNewUser({ name: user.name, email: user.email });  // Populate form with user data
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-4xl">
        <h1 className="text-2xl font-bold text-center mb-6">Users Management</h1>
        
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search users by name or email"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-3 border rounded-lg mb-6 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Add/Edit User Form */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-700">
            {editUser ? "Edit User" : "Add New User"}
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <input
              type="text"
              placeholder="User Name"
              value={newUser.name}
              onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
              className="p-3 border rounded-lg flex-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              placeholder="User Email"
              value={newUser.email}
              onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
              className="p-3 border rounded-lg flex-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              onClick={editUser ? handleEditUser : handleAddUser}
              className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
            >
              {editUser ? "Save Changes" : "Add User"}
            </button>
          </div>
        </div>

        {/* Users Table */}
        <table className="table-auto w-full border-collapse border border-gray-300 rounded-lg overflow-hidden shadow-md">
          <thead className="bg-gray-200 text-gray-700">
            <tr>
              <th className="border px-4 py-2">ID</th>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Email</th>
              <th className="border px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr
                key={user.id}
                className="hover:bg-gray-100 transition text-gray-700"
              >
                <td className="border px-4 py-2 text-center">{user.id}</td>
                <td className="border px-4 py-2">{user.name}</td>
                <td className="border px-4 py-2">{user.email}</td>
                <td className="border px-4 py-2 text-center">
                  <button
                    onClick={() => handleEditClick(user)}
                    className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteUser(user.id)}
                    className="bg-red-500 text-white px-4 py-2 rounded-lg ml-2 hover:bg-red-600 transition"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersPage;
