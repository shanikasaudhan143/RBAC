import React, { useState } from "react";

const RolesPage = () => {
  const [roles, setRoles] = useState([
    { id: 1, name: "Admin", permissions: "Read, Write, Delete" },
    { id: 2, name: "User", permissions: "Read" },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [newRole, setNewRole] = useState({ name: "", permissions: "" });
  const [editRole, setEditRole] = useState(null);

  const filteredRoles = roles.filter(
    (role) =>
      role.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      role.permissions.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const addRole = () => {
    if (newRole.name && newRole.permissions) {
      setRoles([
        ...roles,
        {
          id: roles.length + 1,
          ...newRole,
        },
      ]);
      setNewRole({ name: "", permissions: "" });
    }
  };

  const deleteRole = (id) => {
    const updatedRoles = roles.filter((role) => role.id !== id);
    setRoles(updatedRoles);
  };

  const editRoleDetails = (role) => {
    setEditRole(role);
    setNewRole({ name: role.name, permissions: role.permissions });
  };

  const saveRoleChanges = () => {
    const updatedRoles = roles.map((role) =>
      role.id === editRole.id ? { ...role, ...newRole } : role
    );
    setRoles(updatedRoles);
    setEditRole(null);
    setNewRole({ name: "", permissions: "" });
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl p-6">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Roles Management
        </h1>

        {/* Search Input */}
        <input
          type="text"
          placeholder="Search roles by name or permissions..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg mb-6"
        />

        {/* Add or Edit Role Form */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2 text-gray-700">
            {editRole ? "Edit Role" : "Add New Role"}
          </h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              placeholder="Role Name"
              value={newRole.name}
              onChange={(e) => setNewRole({ ...newRole, name: e.target.value })}
              className="flex-grow p-3 border border-gray-300 rounded-lg"
            />
            <input
              type="text"
              placeholder="Permissions"
              value={newRole.permissions}
              onChange={(e) =>
                setNewRole({ ...newRole, permissions: e.target.value })
              }
              className="flex-grow p-3 border border-gray-300 rounded-lg"
            />
            <button
              onClick={editRole ? saveRoleChanges : addRole}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
            >
              {editRole ? "Save Changes" : "Add Role"}
            </button>
          </div>
        </div>

        {/* Roles Table */}
        <div className="overflow-x-auto">
          <table className="table-auto border-collapse border border-gray-300 w-full text-left">
            <thead>
              <tr>
                <th className="border border-gray-300 px-4 py-2">ID</th>
                <th className="border border-gray-300 px-4 py-2">Role Name</th>
                <th className="border border-gray-300 px-4 py-2">Permissions</th>
                <th className="border border-gray-300 px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredRoles.map((role) => (
                <tr key={role.id} className="hover:bg-gray-100">
                  <td className="border border-gray-300 px-4 py-2">{role.id}</td>
                  <td className="border border-gray-300 px-4 py-2">{role.name}</td>
                  <td className="border border-gray-300 px-4 py-2">{role.permissions}</td>
                  <td className="border border-gray-300 px-4 py-2">
                    <button
                      onClick={() => editRoleDetails(role)}
                      className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteRole(role.id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg ml-2"
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
    </div>
  );
};

export default RolesPage;
