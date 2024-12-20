import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { message } from 'antd';
import { storyService } from '../services/storyService';
import { narratorService } from '../services/narratorService';

export const useStoryByNarrator = () => {
  const { narratorId } = useParams();
  const [narrator, setNarrator] = useState(null);
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadNarratorStories = async () => {
      try {
        setLoading(true);
        const [narratorData, storiesData] = await Promise.all([
          narratorService.getNarratorById(narratorId),
          storyService.fetchStories({ 
            pageNumber: 1,        
            pageSize: 100,       
            filters: { narratorId } 
          })
        ]);

        setNarrator(narratorData);
        setStories(storiesData.items);
      } catch (error) {
        message.error('Failed to load stories');
      } finally {
        setLoading(false);
      }
    };

    if (narratorId) {
      loadNarratorStories();
    }
  }, [narratorId]);

  return {
    narrator,
    stories,
    loading
  };
};