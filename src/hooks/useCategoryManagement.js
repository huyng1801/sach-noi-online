import { useState, useEffect } from 'react';
import { message } from 'antd';
import { categoryService } from '../services/categoryService';

export const useCategoryManagement = () => {
  // State management
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalMode, setModalMode] = useState('create');
  const [searchQuery, setSearchQuery] = useState('');
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
    total: 0,
  });

  // API interaction methods
  const loadCategories = async () => {
    try {
      setLoading(true);
      const response = await categoryService.fetchCategories({
        pageNumber: pagination.current,
        pageSize: pagination.pageSize,
      });

      setCategories(response.items);
      setPagination(prev => ({ 
        ...prev, 
        total: response.totalItems,
        current: response.pageNumber,
        pageSize: response.pageSize
      }));
    } catch (error) {
      message.error('Không thể tải danh mục');
    } finally {
      setLoading(false);
    }
  };

  // Effect to load categories when pagination or search changes
  useEffect(() => {
    loadCategories();
  }, [pagination.current, pagination.pageSize, searchQuery]);

  // Table handlers
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

  // Modal handlers
  const handleAdd = () => {
    setModalMode('create');
    setSelectedCategory(null);
    setIsModalVisible(true);
  };

  const handleEdit = (category) => {
    setModalMode('edit');
    setSelectedCategory(category);
    setIsModalVisible(true);
  };

  const handleModalCancel = () => {
    setIsModalVisible(false);
    setSelectedCategory(null);
  };

  // CRUD operations
  const handleCreate = async (values) => {
    try {
      setLoading(true);
      await categoryService.createCategory(values);
      message.success('Danh mục đã được tạo thành công');
      await loadCategories();
      return true;
    } catch (error) {
      message.error('Không thể tạo danh mục');
      return false;
    } finally {
      setLoading(false);
    }
  };

  const handleUpdate = async (id, values) => {
    try {
      setLoading(true);
      await categoryService.updateCategory(id, values);
      message.success('Danh mục đã được cập nhật thành công');
      await loadCategories();
      return true;
    } catch (error) {
      message.error('Không thể cập nhật danh mục');
      return false;
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id, isSoftDelete = false) => {
    try {
      setLoading(true);
      console.log('Đang xóa danh mục với id:', id);
      if (isSoftDelete) {
        await categoryService.softDeleteCategory(id);
      } else {
        await categoryService.deleteCategory(id);
      }
      message.success('Danh mục đã được xóa thành công');
      await loadCategories();
      return true;
    } catch (error) {
      console.error('Lỗi khi xóa danh mục:', error);  // In chi tiết lỗi để debug
      message.error('Không thể xóa danh mục');
      return false;
    } finally {
      setLoading(false);
    }
  };
  

  const handleModalSubmit = async (values) => {
    let success;
    
    if (modalMode === 'create') {
      success = await handleCreate(values);
    } else {
      success = await handleUpdate(selectedCategory.id, values);
    }

    if (success) {
      setIsModalVisible(false);
      setSelectedCategory(null);
    }
  };

  return {
    // State
    categories,
    loading,
    pagination,
    selectedCategory,
    isModalVisible,
    modalMode,

    // Handlers
    handleTableChange,
    handleSearch,
    handleAdd,
    handleEdit,
    handleDelete,
    handleModalCancel,
    handleModalSubmit,
  };
};
