import { API_ENDPOINTS } from './config';

// Helper function to handle API responses
const handleResponse = async (response) => {
  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new Error(error.message || 'An error occurred');
  }

  // Nếu không có nội dung (204 No Content), không gọi response.json()
  if (response.status === 204) {
    return null;  // Hoặc trả về một giá trị mặc định tùy theo logic ứng dụng của bạn
  }

  return response.json();  // Nếu có nội dung, tiếp tục xử lý JSON
};


// Helper function to make API requests
const apiRequest = async (url, options = {}) => {
  const defaultHeaders = {
    'Accept': '*/*',
  };

  // Don't set Content-Type for FormData
  if (!(options.body instanceof FormData)) {
    defaultHeaders['Content-Type'] = 'application/json';
  }

  const response = await fetch(url, {
    ...options,
    headers: {
      ...defaultHeaders,
      ...options.headers,
    },
  });

  return handleResponse(response);
};

export const storyService = {
  // Get paginated stories
  fetchStories: async ({ pageNumber = 1, pageSize = 10, filters, searchQuery }) => {
    // Convert filters to query parameters and include searchQuery
    console.log(filters);
    const queryParams = new URLSearchParams({
      pageNumber,
      pageSize,
      authorId: filters?.authorId || '',    // Optional filters
      categoryId: filters?.categoryId || '',
      narratorId: filters?.narratorId || '',
      searchQuery: searchQuery || ''         // Optional search query
    }).toString();
    
    // Build the full URL with query parameters
    const url = `${API_ENDPOINTS.STORY}?${queryParams}`;
    
    // Make the GET request to the API endpoint
    return apiRequest(url, {
      method: 'GET',
    });
  },

  // Get story by ID
  getStoryById: async (id) => {
    return apiRequest(`${API_ENDPOINTS.STORY}/${id}`, {
      method: 'GET',
    });
  },

  // Create new story
  createStory: async (storyData) => {
    const formData = new FormData();
    
    // Append all story data to FormData
    Object.keys(storyData).forEach(key => {
      if (key === 'coverImageFile' && storyData[key]?.[0]) {
        formData.append(key, storyData[key][0].originFileObj);
      } else {
        formData.append(key, storyData[key]);
      }
    });

    return apiRequest(API_ENDPOINTS.STORY, {
      method: 'POST',
      body: formData,
    });
  },

  // Update story
  updateStory: async (id, storyData) => {
    const formData = new FormData();
    
    // Append all story data to FormData
    Object.keys(storyData).forEach(key => {
      if (key === 'coverImageFile' && storyData[key]?.[0]) {
        formData.append(key, storyData[key][0].originFileObj);
      } else {
        formData.append(key, storyData[key]);
      }
    });

    formData.append('id', id);

    return apiRequest(`${API_ENDPOINTS.STORY}/${id}`, {
      method: 'PUT',
      body: formData,
    });
  },

  // Hard delete story
  deleteStory: async (id) => {
    return apiRequest(`${API_ENDPOINTS.STORY}/${id}`, {
      method: 'DELETE',
    });
  },

  // Soft delete story
  softDeleteStory: async (id) => {
    return apiRequest(`${API_ENDPOINTS.STORY}/soft/${id}`, {
      method: 'DELETE',
    });
  },
};