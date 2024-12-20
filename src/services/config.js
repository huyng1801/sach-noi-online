// API configuration
export const API_BASE_URL = 'https://localhost:7246/api';

export const API_ENDPOINTS = {
  CATEGORY: `${API_BASE_URL}/Category`,
  NARRATOR: `${API_BASE_URL}/Narrator`,
  AUTHOR: `${API_BASE_URL}/Author`,
  STORY: `${API_BASE_URL}/Story`,
  AUDIO: `${API_BASE_URL}/Audio`,
};

export const DEFAULT_HEADERS = {
  'Content-Type': 'application/json',
  'Accept': '*/*',
};