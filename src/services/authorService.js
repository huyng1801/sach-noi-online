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

export const authorService = {
  // Get paginated authors
  fetchAuthors: async ({ pageNumber = 1, pageSize = 10 }) => {
    const queryParams = new URLSearchParams({ pageNumber, pageSize }).toString();
    const url = `${API_ENDPOINTS.AUTHOR}?${queryParams}`;
    
    return apiRequest(url, {
      method: 'GET',
    });
  },

  // Get author by ID
  getAuthorById: async (id) => {
    return apiRequest(`${API_ENDPOINTS.AUTHOR}/${id}`, {
      method: 'GET',
    });
  },

  // Create new author
  createAuthor: async (authorData) => {
    return apiRequest(API_ENDPOINTS.AUTHOR, {
      method: 'POST',
      body: JSON.stringify(authorData),
    });
  },

  // Update author
  updateAuthor: async (id, authorData) => {
    return apiRequest(`${API_ENDPOINTS.AUTHOR}/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        ...authorData,
        id,
      }),
    });
  },

  // Hard delete author
  deleteAuthor: async (id) => {
    return apiRequest(`${API_ENDPOINTS.AUTHOR}/${id}`, {
      method: 'DELETE',
    });
  },

  // Soft delete author
  softDeleteAuthor: async (id) => {
    return apiRequest(`${API_ENDPOINTS.AUTHOR}/soft-delete/${id}`, {
      method: 'DELETE',
    });
  },
};