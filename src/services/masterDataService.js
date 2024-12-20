// Mock implementation - replace with actual API calls
export const fetchCategories = async () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve([
          { value: 1, label: 'Adventure' },
          { value: 2, label: 'Mystery' },
          { value: 3, label: 'Romance' },
          { value: 4, label: 'Fantasy' },
        ]);
      }, 500);
    });
  };
  
  export const fetchAuthors = async () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve([
          { value: 1, label: 'John Doe' },
          { value: 2, label: 'Jane Smith' },
          { value: 3, label: 'Robert Johnson' },
        ]);
      }, 500);
    });
  };
  
  export const fetchNarrators = async () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve([
          { value: 1, label: 'James Smith' },
          { value: 2, label: 'Sarah Wilson' },
          { value: 3, label: 'Michael Brown' },
        ]);
      }, 500);
    });
  };
  
  export const fetchStories = async () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve([
          { value: 1, label: 'The Great Adventure' },
          { value: 2, label: 'Mystery of the Old House' },
          { value: 3, label: 'Romantic Tales' },
        ]);
      }, 500);
    });
  };
  export const fetchUsers = async () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve([
                { id: 1, username: 'User1', email: 'user1@example.com', role: 'Admin', status: 'Active', lastLoginAt: '2024-12-10T10:00:00Z', createdAt: '2024-01-01T10:00:00Z' },
                { id: 2, username: 'User2', email: 'user2@example.com', role: 'Moderator', status: 'Inactive', lastLoginAt: '2024-12-08T09:00:00Z', createdAt: '2024-02-01T12:00:00Z' },
                { id: 3, username: 'User3', email: 'user3@example.com', role: 'User', status: 'Active', lastLoginAt: '2024-12-12T15:00:00Z', createdAt: '2024-03-01T14:00:00Z' },
            ]);
        }, 500);
    });
};
