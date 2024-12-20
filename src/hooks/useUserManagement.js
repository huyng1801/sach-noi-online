import { useState, useEffect } from 'react';
import { message } from 'antd';
import { 
  fetchUsers, 
  createUser, 
  updateUser, 
  deleteUser 
} from '../services/userService';

export const useUserManagement = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalMode, setModalMode] = useState('create');
  const [searchQuery, setSearchQuery] = useState('');
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
    total: 0,
  });

  const loadUsers = async () => {
    try {
      setLoading(true);
      const { data, total } = await fetchUsers({
        page: pagination.current,
        pageSize: pagination.pageSize,
        search: searchQuery,
      });

      setUsers(data);
      setPagination(prev => ({ ...prev, total }));
    } catch (error) {
      message.error('Failed to load users');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadUsers();
  }, [pagination.current, pagination.pageSize, searchQuery]);

  const handleTableChange = (newPagination, filters, sorter) => {
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
    setSelectedUser(null);
    setIsModalVisible(true);
  };

  const handleEdit = (user) => {
    setModalMode('edit');
    setSelectedUser(user);
    setIsModalVisible(true);
  };

  const handleDelete = async (id) => {
    try {
      await deleteUser(id);
      message.success('User deleted successfully');
      loadUsers();
    } catch (error) {
      message.error('Failed to delete user');
    }
  };

  const handleModalCancel = () => {
    setIsModalVisible(false);
    setSelectedUser(null);
  };

  const handleModalSubmit = async (values) => {
    try {
      if (modalMode === 'create') {
        await createUser(values);
        message.success('User created successfully');
      } else {
        await updateUser(selectedUser.id, values);
        message.success('User updated successfully');
      }
      
      setIsModalVisible(false);
      setSelectedUser(null);
      loadUsers();
    } catch (error) {
      message.error(`Failed to ${modalMode} user`);
    }
  };

  return {
    users,
    loading,
    pagination,
    selectedUser,
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

export default useUserManagement;