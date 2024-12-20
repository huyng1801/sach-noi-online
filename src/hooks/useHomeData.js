import { useState, useEffect } from 'react';
import { message } from 'antd';
import { storyService } from '../services/storyService';
import { categoryService } from '../services/categoryService';

export const useHomeData = () => {
  const [categories, setCategories] = useState([]);
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        // Fetch categories
        const categoriesResponse = await categoryService.fetchCategories({
          pageNumber: 1,
          pageSize: 12,
        });
        setCategories(categoriesResponse.items);

        // Fetch stories
        const storiesResponse = await storyService.fetchStories({
          pageNumber: 1,
          pageSize: 12,
        });
        setStories(storiesResponse.items);

      } catch (error) {
        message.error('Failed to load home page data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return {
    categories,
    stories,
    loading,
  };
};
