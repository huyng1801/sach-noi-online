import { API_ENDPOINTS } from './config';

// Helper function to handle API responses
const handleResponse = async (response) => {
  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new Error(error.message || 'An error occurred');
  }

  if (response.status === 204) {
    return null;
  }

  return response.json();
};

// Helper function to build form data
const buildFormData = (data) => {
  const formData = new FormData();
  
  Object.entries(data).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      if (key === 'audioFile' && value[0]?.originFileObj) {
        formData.append(key, value[0].originFileObj);
      } else {
        formData.append(key, value);
      }
    }
  });
  
  return formData;
};

export const audioService = {
  // Get paginated audios with filters
  fetchAudios: async ({ pageNumber = 1, pageSize = 10, search = '', storyId, narratorId }) => {
    const params = new URLSearchParams({
      pageNumber,
      pageSize,
      ...(search && { search }),
      ...(storyId && { storyId })
    });

    const response = await fetch(`${API_ENDPOINTS.AUDIO}?${params}`, {
      method: 'GET',
      headers: { 'Accept': '*/*' },
    });

    return handleResponse(response);
  },

  // Get audio by ID
  getAudioById: async (id) => {
    const response = await fetch(`${API_ENDPOINTS.AUDIO}/${id}`, {
      method: 'GET',
      headers: { 'Accept': '*/*' },
    });

    return handleResponse(response);
  },

  // Create new audio
  createAudio: async (audioData) => {
    const formData = buildFormData(audioData);

    const response = await fetch(API_ENDPOINTS.AUDIO, {
      method: 'POST',
      body: formData,
    });

    return handleResponse(response);
  },

  // Update audio
  updateAudio: async (id, audioData) => {
    const formData = buildFormData({ ...audioData, id });

    const response = await fetch(`${API_ENDPOINTS.AUDIO}/${id}`, {
      method: 'PUT',
      body: formData,
    });

    return handleResponse(response);
  },

  // Hard delete audio
  deleteAudio: async (id) => {
    const response = await fetch(`${API_ENDPOINTS.AUDIO}/${id}`, {
      method: 'DELETE',
      headers: { 'Accept': '*/*' },
    });

    return handleResponse(response);
  },

  // Soft delete audio
  softDeleteAudio: async (id) => {
    const response = await fetch(`${API_ENDPOINTS.AUDIO}/${id}/soft-delete`, {
      method: 'PATCH',
      headers: { 'Accept': '*/*' },
    });

    return handleResponse(response);
  },
};