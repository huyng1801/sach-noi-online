// Mock implementation - replace with actual API calls
export const fetchRatings = async ({ page, pageSize, search, storyId, userId, rating, status }) => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({
          data: [
            {
              id: 1,
              userName: 'John Doe',
              userAvatar: null,
              storyTitle: 'The Great Adventure',
              ratingValue: 4.5,
              comment: 'An amazing story with great narration!',
              status: 'Approved',
              createdAt: '2023-12-01',
            },
            {
              id: 2,
              userName: 'Jane Smith',
              userAvatar: null,
              storyTitle: 'Mystery at Midnight',
              ratingValue: 5,
              comment: 'Absolutely loved it! The narrator did an excellent job.',
              status: 'Approved',
              createdAt: '2023-12-02',
            },
          ],
          total: 100,
        });
      }, 1000);
    });
  };
  
  export const createRating = async (ratingData) => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({ id: Date.now(), ...ratingData });
      }, 1000);
    });
  };
  
  export const updateRating = async (id, ratingData) => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({ id, ...ratingData });
      }, 1000);
    });
  };
  
  export const deleteRating = async (id) => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({ success: true });
      }, 1000);
    });
  };