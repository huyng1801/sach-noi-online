import React from 'react';
import AdminLayout from '../../components/admin/layout/AdminLayout';
import UserTable from '../../components/admin/user/UserTable';
import UserFilters from '../../components/admin/user/UserFilters';
import UserModal from '../../components/admin/user/UserModal';
import { useUserManagement } from '../../hooks/useUserManagement';

const styles = {
  container: {
    padding: '24px',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '24px',
    flexWrap: 'wrap',
    gap: '16px',
  },
  title: {
    margin: 0,
    color: '#1f1f1f',
    fontSize: '24px',
    fontWeight: 600,
  },
};

const UserPage = () => {
  const {
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
  } = useUserManagement();

  return (
    <AdminLayout>
      <div style={styles.container}>
        <div style={styles.header}>
          <h1 style={styles.title}>User Management</h1>
          <UserFilters 
            onSearch={handleSearch}
            onAdd={handleAdd}
          />
        </div>
        
        <UserTable
          users={users}
          loading={loading}
          pagination={pagination}
          onChange={handleTableChange}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />

        <UserModal
          visible={isModalVisible}
          mode={modalMode}
          initialValues={selectedUser}
          onCancel={handleModalCancel}
          onSubmit={handleModalSubmit}
          loading={loading}
        />
      </div>
    </AdminLayout>
  );
};

export default UserPage;