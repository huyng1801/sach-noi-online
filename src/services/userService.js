// Mock implementation - replace with actual API calls
export const fetchUsers = async ({ page, pageSize, search }) => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({
          data: [
            {
              id: 1,
              username: 'johndoe',
              email: 'john.doe@example.com',
              role: 'Admin',
              status: 'Active',
              avatarUrl: null,
              lastLoginAt: '2023-12-01T10:30:00',
              createdAt: '2023-11-01',
              isActive: true,
            },
            {
              id: 2,
              username: 'janesmith',
              email: 'jane.smith@example.com',
              role: 'Moderator',
              status: 'Active',
              avatarUrl: null,
              lastLoginAt: '2023-12-02T15:45:00',
              createdAt: '2023-11-02',
              isActive: true,
            },
          ],
          total: 50,
        });
      }, 1000);
    });
  };
  
  export const createUser = async (userData) => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({ id: Date.now(), ...userData });
      }, 1000);
    });
  };
  
  export const updateUser = async (id, userData) => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({ id, ...userData });
      }, 1000);
    });
  };
  
  export const deleteUser = async (id) => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({ success: true });
      }, 1000);
    });
  };