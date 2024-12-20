import { useState, useEffect } from 'react';
import { message } from 'antd';
import { 
  fetchRatings, 
  createRating, 
  updateRating, 
  deleteRating 
} from '../services/ratingService';
import { 
  fetchStories,
  fetchUsers 
} from '../services/masterDataService';

export const useRatingManagement = () => {
  const [ratings, setRatings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedRating, setSelectedRating] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalMode, setModalMode] = useState('create');
  const [filters, setFilters] = useState({
    search: '',
    storyId: undefined,
    userId: undefined,
    rating: undefined,
    status: undefined,
    stories: [],
    users: [],
    statuses: [
      { value: 'Approved', label: 'Approved' },
      { value: 'Pending', label: 'Pending' },
      { value: 'Rejected', label: 'Rejected' },
    ],
  });
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
    total: 0,
  });

  // Load master data
  useEffect(() => {
    const loadMasterData = async () => {
      try {
        const [stories, users] = await Promise.all([
          fetchStories(),
          fetchUsers(),
        ]);

        setFilters(prev => ({
          ...prev,
          stories,
          users,
        }));
      } catch (error) {
        message.error('Failed to load master data');
      }
    };

    loadMasterData();
  }, []);

  // Load ratings
  const loadRatings = async () => {
    try {
      setLoading(true);
      const { data, total } = await fetchRatings({
        page: pagination.current,
        pageSize: pagination.pageSize,
        ...filters,
      });

      setRatings(data);
      setPagination(prev => ({ ...prev, total }));
    } catch (error) {
      message.error('Failed to load ratings');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadRatings();
  }, [pagination.current, pagination.pageSize, filters]);

  const handleTableChange = (newPagination, filters, sorter) => {
    setPagination(prev => ({
      ...prev,
      current: newPagination.current,
      pageSize: newPagination.pageSize,
    }));
  };

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
    setPagination(prev => ({ ...prev, current: 1 }));
  };

  const handleAdd = () => {
    setModalMode('create');
    setSelectedRating(null);
    setIsModalVisible(true);
  };

  const handleEdit = (rating) => {
    setModalMode('edit');
    setSelectedRating(rating);
    setIsModalVisible(true);
  };

  const handleDelete = async (id) => {
    try {
      await deleteRating(id);
      message.success('Rating deleted successfully');
      loadRatings();
    } catch (error) {
      message.error('Failed to delete rating');
    }
  };

  const handleModalCancel = () => {
    setIsModalVisible(false);
    setSelectedRating(null);
  };

  const handleModalSubmit = async (values) => {
    try {
      if (modalMode === 'create') {
        await createRating(values);
        message.success('Rating created successfully');
      } else {
        await updateRating(selectedRating.id, values);
        message.success('Rating updated successfully');
      }
      
      setIsModalVisible(false);
      setSelectedRating(null);
      loadRatings();
    } catch (error) {
      message.error(`Failed to ${modalMode} rating`);
    }
  };

  return {
    ratings,
    loading,
    pagination,
    filters,
    selectedRating,
    isModalVisible,
    modalMode,
    handleTableChange,
    handleFilterChange,
    handleAdd,
    handleEdit,
    handleDelete,
    handleModalCancel,
    handleModalSubmit,
  };
};

export default useRatingManagement;