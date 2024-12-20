import { useState, useEffect } from 'react';
import { message } from 'antd';
import { authorService } from '../services/authorService';

export const useAuthorManagement = () => {
  const [authors, setAuthors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedAuthor, setSelectedAuthor] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalMode, setModalMode] = useState('create');
  const [searchQuery, setSearchQuery] = useState('');
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
    total: 0,
  });

  const loadAuthors = async () => {
    try {
      setLoading(true);
      const response = await authorService.fetchAuthors({
        pageNumber: pagination.current,
        pageSize: pagination.pageSize,
      });

      setAuthors(response.items);
      setPagination(prev => ({
        ...prev,
        total: response.totalItems,
        current: response.pageNumber,
        pageSize: response.pageSize
      }));
    } catch (error) {
      message.error('Tải danh sách tác giả thất bại');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadAuthors();
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
    setSelectedAuthor(null);
    setIsModalVisible(true);
  };

  const handleEdit = (author) => {
    setModalMode('edit');
    setSelectedAuthor(author);
    setIsModalVisible(true);
  };

  const handleDelete = async (id, isSoftDelete = false) => {
    try {
      setLoading(true);
      if (isSoftDelete) {
        await authorService.softDeleteAuthor(id);
      } else {
        await authorService.deleteAuthor(id);
      }
      message.success('Tác giả đã được xóa thành công');
      await loadAuthors();
    } catch (error) {
      message.error('Xóa tác giả thất bại');
    } finally {
      setLoading(false);
    }
  };

  const handleModalCancel = () => {
    setIsModalVisible(false);
    setSelectedAuthor(null);
  };

  const handleModalSubmit = async (values) => {
    try {
      setLoading(true);
      if (modalMode === 'create') {
        await authorService.createAuthor(values);
        message.success('Tác giả đã được tạo thành công');
      } else {
        await authorService.updateAuthor(selectedAuthor.id, values);
        message.success('Tác giả đã được cập nhật thành công');
      }
      
      setIsModalVisible(false);
      setSelectedAuthor(null);
      await loadAuthors();
    } catch (error) {
      message.error(`Tạo/cập nhật tác giả thất bại`);
    } finally {
      setLoading(false);
    }
  };

  return {
    authors,
    loading,
    pagination,
    selectedAuthor,
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
