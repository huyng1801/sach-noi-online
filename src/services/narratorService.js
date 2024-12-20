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

export const narratorService = {
  // Get paginated narrators
  fetchNarrators: async ({ pageNumber = 1, pageSize = 10 }) => {
    const queryParams = new URLSearchParams({ pageNumber, pageSize }).toString();
    const url = `${API_ENDPOINTS.NARRATOR}?${queryParams}`;
    
    return apiRequest(url, {
      method: 'GET',
    });
  },

  // Get narrator by ID
  getNarratorById: async (id) => {
    return apiRequest(`${API_ENDPOINTS.NARRATOR}/${id}`, {
      method: 'GET',
    });
  },

  // Create new narrator
  createNarrator: async (narratorData) => {
    return apiRequest(API_ENDPOINTS.NARRATOR, {
      method: 'POST',
      body: JSON.stringify(narratorData),
    });
  },

  // Update narrator
  updateNarrator: async (id, narratorData) => {
    return apiRequest(`${API_ENDPOINTS.NARRATOR}/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        ...narratorData,
        id,
      }),
    });
  },

  // Hard delete narrator
  deleteNarrator: async (id) => {
    return apiRequest(`${API_ENDPOINTS.NARRATOR}/${id}`, {
      method: 'DELETE',
    });
  },

  // Soft delete narrator
  softDeleteNarrator: async (id) => {
    return apiRequest(`${API_ENDPOINTS.NARRATOR}/soft-delete/${id}`, {
      method: 'DELETE',
    });
  },
};

/**
 * @typedef {Object} Narrator
 * @property {number} id
 * @property {string} narratorName
 * @property {string} createdAt
 * @property {string} updatedAt
 * @property {string|null} deletedAt
 * @property {number} totalStories
 */

/**
 * @typedef {Object} PaginatedResponse
 * @property {Narrator[]} items
 * @property {number} totalItems
 * @property {number} pageNumber
 * @property {number} pageSize
 * @property {number} totalPages
 */