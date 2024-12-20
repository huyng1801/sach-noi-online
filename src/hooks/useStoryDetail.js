import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { message } from 'antd';
import { storyService } from '../services/storyService';
import { audioService } from '../services/audioService';

export const useStoryDetail = () => {
  const { storyId } = useParams();
  const [story, setStory] = useState(null);
  const [audioList, setAudioList] = useState([]);
  const [currentAudio, setCurrentAudio] = useState(null);
  const [loading, setLoading] = useState(true);

  // Load story details and audio list
  useEffect(() => {
    const loadStoryDetail = async () => {
      try {
        setLoading(true);
        const [storyData, audiosData] = await Promise.all([
          storyService.getStoryById(storyId),
          audioService.fetchAudios({ storyId: storyId, pageSize: 100 })
        ]);
        setStory(storyData);
        setAudioList(audiosData.items);
        
        // Set first audio as current if available
        if (audiosData.items.length > 0) {
          setCurrentAudio(audiosData.items[0]);
        }
      } catch (error) {
        message.error('Failed to load story details');
      } finally {
        setLoading(false);
      }
    };

    loadStoryDetail();
  }, [storyId]);

  const handleAudioSelect = (audio) => {
    setCurrentAudio(audio);
  };

  const handleTimeUpdate = (currentTime) => {
    // Handle audio progress update
    console.log('Current time:', currentTime);
  };

  const handleAudioEnd = () => {
    // Auto play next audio if available
    const currentIndex = audioList.findIndex(audio => audio.id === currentAudio.id);
    if (currentIndex < audioList.length - 1) {
      setCurrentAudio(audioList[currentIndex + 1]);
    }
  };

  return {
    story,
    currentAudio,
    audioList,
    loading,
    handleAudioSelect,
    handleTimeUpdate,
    handleAudioEnd,
  };
};