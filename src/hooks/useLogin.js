import { useState } from 'react';
import { message } from 'antd';
import { useNavigate } from 'react-router-dom';
import { login } from '../services/authService';

export const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (values) => {
    try {
      setLoading(true);
      const response = await login(values);
      
      if (response.token) {
        // Store the token in localStorage or a secure storage
        localStorage.setItem('token', response.token);
        
        message.success('Login successful');
        navigate('/admin/dashboard');
      }
    } catch (error) {
      message.error(error.message || 'Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return {
    handleLogin,
    loading,
  };
};