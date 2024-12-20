import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { message } from 'antd';
import { storyService } from '../services/storyService';
import { categoryService } from '../services/categoryService';

export const useStoryByCategory = () => {
  const { categoryId } = useParams();
  const [category, setCategory] = useState(null);
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCategoryStories = async () => {
      try {
        setLoading(true);
     
        const [categoryData, storiesData] = await Promise.all([
          categoryService.getCategoryById(categoryId),
          storyService.fetchStories({ 
            pageNumber: 1,        
            pageSize: 100,       
            filters: { categoryId } 
          })
        ]);
     
        setCategory(categoryData);
        setStories(storiesData.items);
      } catch (error) {
        message.error('Failed to load stories');
      } finally {
        setLoading(false);
      }
    };

    if (categoryId) {
      loadCategoryStories();
    }
  }, [categoryId]);

  return {
    category,
    stories,
    loading
  };
};