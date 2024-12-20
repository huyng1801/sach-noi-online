import { API_ENDPOINTS } from './config';

// Helper function to handle API responses
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
    'Content-Type': 'application/json',
    'Accept': '*/*',
  };

  const response = await fetch(url, {
    ...options,
    headers: {
      ...defaultHeaders,
      ...options.headers,
    },
  });

  return handleResponse(response);
};

export const categoryService = {
  // Get paginated categories
  fetchCategories: async ({ pageNumber = 1, pageSize = 10 }) => {
    const queryParams = new URLSearchParams({ pageNumber, pageSize }).toString();
    const url = `${API_ENDPOINTS.CATEGORY}?${queryParams}`;
    
    return apiRequest(url, {
      method: 'GET',
    });
  },

  // Get category by ID
  getCategoryById: async (id) => {
    return apiRequest(`${API_ENDPOINTS.CATEGORY}/${id}`, {
      method: 'GET',
    });
  },

  // Create new category
  createCategory: async (categoryData) => {
    return apiRequest(API_ENDPOINTS.CATEGORY, {
      method: 'POST',
      body: JSON.stringify(categoryData),
    });
  },

  // Update category
  updateCategory: async (id, categoryData) => {
    return apiRequest(`${API_ENDPOINTS.CATEGORY}/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        ...categoryData,
        id,
      }),
    });
  },

  // Hard delete category
  deleteCategory: async (id) => {
    return apiRequest(`${API_ENDPOINTS.CATEGORY}/${id}`, {
      method: 'DELETE',
    });
  },

  // Soft delete category
  softDeleteCategory: async (id) => {
    return apiRequest(`${API_ENDPOINTS.CATEGORY}/soft-delete/${id}`, {
      method: 'DELETE',
    });
  },
};

/**
 * @typedef {Object} Category
 * @property {number} id
 * @property {string} categoryName
 * @property {string} createdAt
 * @property {string} updatedAt
 * @property {string|null} deletedAt
 * @property {number} totalStories
 */

/**
 * @typedef {Object} PaginatedResponse
 * @property {Category[]} items
 * @property {number} totalItems
 * @property {number} pageNumber
 * @property {number} pageSize
 * @property {number} totalPages
 */