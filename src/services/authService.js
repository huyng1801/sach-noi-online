// Mock implementation - replace with actual API calls
export const login = async ({ email, password }) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate API validation
        if (email === 'admin@example.com' && password === 'password123') {
          resolve({
            token: 'mock-jwt-token',
            user: {
              id: 1,
              email: 'admin@example.com',
              name: 'Admin User',
              role: 'admin',
            },
          });
        } else {
          reject(new Error('Invalid email or password'));
        }
      }, 1000);
    });
  };