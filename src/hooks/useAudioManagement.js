import { useState, useEffect } from 'react';
import { message } from 'antd';
import { audioService } from '../services/audioService';
import { storyService } from '../services/storyService';

export const useAudioManagement = () => {
  // State Management
  const [audios, setAudios] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedAudio, setSelectedAudio] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalMode, setModalMode] = useState('create');
  
  // Filters and Pagination
  const [filters, setFilters] = useState({
    search: '',
    storyId: undefined,
    stories: [], // Available stories for dropdown
  });
  
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
    total: 0,
  });

  // Load stories for filter dropdown
  useEffect(() => {
    const loadStories = async () => {
      try {
        const response = await storyService.fetchStories({
          pageNumber: 1,
          pageSize: 100, // Get all stories for dropdown
        });

        setFilters(prev => ({
          ...prev,
          stories: response.items.map(story => ({
            label: story.title,
            value: story.id,
          })),
        }));
      } catch (error) {
        message.error('Failed to load stories');
      }
    };

    loadStories();
  }, []);

  // Load audios when filters or pagination change
  const loadAudios = async () => {
    try {
      setLoading(true);
      const { search, storyId } = filters;
      const response = await audioService.fetchAudios({
        pageNumber: pagination.current,
        pageSize: pagination.pageSize,
        search,
        storyId,
      });

      setAudios(response.items);
      setPagination(prev => ({ ...prev, total: response.totalItems }));
    } catch (error) {
      message.error('Failed to load audios');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadAudios();
  }, [pagination.current, pagination.pageSize, filters.search, filters.storyId]);

  // Table handlers
  const handleTableChange = (newPagination) => {
    setPagination(prev => ({
      ...prev,
      current: newPagination.current,
      pageSize: newPagination.pageSize,
    }));
  };

  // Filter handlers
  const handleFilterChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
    setPagination(prev => ({ ...prev, current: 1 }));
  };

  // Modal handlers
  const handleAdd = () => {
    setModalMode('create');
    setSelectedAudio(null);
    setIsModalVisible(true);
  };

  const handleEdit = (audio) => {
    setModalMode('edit');
    setSelectedAudio(audio);
    setIsModalVisible(true);
  };

  const handleModalCancel = () => {
    setIsModalVisible(false);
    setSelectedAudio(null);
  };

  // CRUD operations
  const handleModalSubmit = async (values) => {
    try {
      setLoading(true);
      
      if (modalMode === 'create') {
        await audioService.createAudio(values);
        message.success('Audio created successfully');
      } else {
        await audioService.updateAudio(selectedAudio.id, values);
        message.success('Audio updated successfully');
      }
      
      setIsModalVisible(false);
      setSelectedAudio(null);
      await loadAudios();
    } catch (error) {
      message.error(`Failed to ${modalMode} audio`);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      setLoading(true);
      await audioService.deleteAudio(id);
      message.success('Audio deleted successfully');
      await loadAudios();
    } catch (error) {
      message.error('Failed to delete audio');
    } finally {
      setLoading(false);
    }
  };

  return {
    // State
    audios,
    loading,
    pagination,
    filters,
    selectedAudio,
    isModalVisible,
    modalMode,

    // Handlers
    handleTableChange,
    handleFilterChange,
    handleAdd,
    handleEdit,
    handleDelete,
    handleModalCancel,
    handleModalSubmit,
  };
};