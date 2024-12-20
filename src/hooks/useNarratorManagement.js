import { useState, useEffect } from 'react';
import { message } from 'antd';
import { narratorService } from '../services/narratorService';

export const useNarratorManagement = () => {
  const [narrators, setNarrators] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedNarrator, setSelectedNarrator] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalMode, setModalMode] = useState('create');
  const [searchQuery, setSearchQuery] = useState('');
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
    total: 0,
  });

  const loadNarrators = async () => {
    try {
      setLoading(true);
      const response = await narratorService.fetchNarrators({
        pageNumber: pagination.current,
        pageSize: pagination.pageSize,
      });

      setNarrators(response.items);
      setPagination(prev => ({
        ...prev,
        total: response.totalItems,
        current: response.pageNumber,
        pageSize: response.pageSize
      }));
    } catch (error) {
      message.error('Không thể tải danh sách người kể chuyện');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadNarrators();
  }, [pagination.current, pagination.pageSize, searchQuery]);

  const handleTableChange = (newPagination) => {
    setPagination(prev => ({
      ...prev,
      current: newPagination.current,
      pageSize: newPagination.pageSize,
    }));
  };

  const handleSearch = (value) => {
    setSearchQuery(value);
    setPagination(prev => ({ ...prev, current: 1 }));
  };

  const handleAdd = () => {
    setModalMode('create');
    setSelectedNarrator(null);
    setIsModalVisible(true);
  };

  const handleEdit = (narrator) => {
    setModalMode('edit');
    setSelectedNarrator(narrator);
    setIsModalVisible(true);
  };

  const handleDelete = async (id, isSoftDelete = false) => {
    try {
      setLoading(true);
      if (isSoftDelete) {
        await narratorService.softDeleteNarrator(id);
      } else {
        await narratorService.deleteNarrator(id);
      }
      message.success('Người kể chuyện đã được xóa thành công');
      await loadNarrators();
    } catch (error) {
      message.error('Không thể xóa người kể chuyện');
    } finally {
      setLoading(false);
    }
  };

  const handleModalCancel = () => {
    setIsModalVisible(false);
    setSelectedNarrator(null);
  };

  const handleModalSubmit = async (values) => {
    try {
      setLoading(true);
      if (modalMode === 'create') {
        await narratorService.createNarrator(values);
        message.success('Người kể chuyện đã được tạo thành công');
      } else {
        await narratorService.updateNarrator(selectedNarrator.id, values);
        message.success('Người kể chuyện đã được cập nhật thành công');
      }
      
      setIsModalVisible(false);
      setSelectedNarrator(null);
      await loadNarrators();
    } catch (error) {
      message.error(`Không thể ${modalMode} người kể chuyện`);
    } finally {
      setLoading(false);
    }
  };

  return {
    narrators,
    loading,
    pagination,
    selectedNarrator,
    isModalVisible,
    modalMode,
    handleTableChange,
    handleSearch,
    handleAdd,
    handleEdit,
    handleDelete,
    handleModalCancel,
    handleModalSubmit,
  };
};

export default useNarratorManagement;
