// mockAPI.js
export const fetchUsers = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { id: 1, name: "John Doe", email: "john@example.com" },
          { id: 2, name: "Jane Smith", email: "jane@example.com" },
        ]);
      }, 1000);
    });
  };
  
  export const addUser = (user) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ ...user, id: Date.now() });
      }, 1000);
    });
  };
  
  export const deleteUser = (id) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(id);
      }, 1000);
    });
  };
  
  export const updateUser = (user) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(user);
      }, 1000);
    });
  };
  
  // New code for Roles
  export const fetchRoles = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { id: 1, role: "Admin", permissions: ["Create", "Edit", "Delete"] },
          { id: 2, role: "Editor", permissions: ["Create", "Edit"] },
        ]);
      }, 1000);
    });
  };
  
  export const addRole = (role) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ ...role, id: Date.now() });
      }, 1000);
    });
  };
  
  export const deleteRole = (id) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(id);
      }, 1000);
    });
  };
  
  export const updateRole = (role) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(role);
      }, 1000);
    });
  };
  