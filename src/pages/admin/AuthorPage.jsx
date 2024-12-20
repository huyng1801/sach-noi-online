import React from 'react';
import AdminLayout from '../../components/admin/layout/AdminLayout';
import AuthorTable from '../../components/admin/author/AuthorTable';
import AuthorFilters from '../../components/admin/author/AuthorFilters';
import AuthorModal from '../../components/admin/author/AuthorModal';
import { useAuthorManagement } from '../../hooks/useAuthorManagement';

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

const AuthorPage = () => {
  const {
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
  } = useAuthorManagement();

  return (
    <AdminLayout>
      <div style={styles.container}>
        <div style={styles.header}>
          <h1 style={styles.title}>Quản lý tác giả</h1>
          <AuthorFilters 
            onSearch={handleSearch}
            onAdd={handleAdd}
          />
        </div>
        
        <AuthorTable
          authors={authors}
          loading={loading}
          pagination={pagination}
          onChange={handleTableChange}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />

        <AuthorModal
          visible={isModalVisible}
          mode={modalMode}
          initialValues={selectedAuthor}
          onCancel={handleModalCancel}
          onSubmit={handleModalSubmit}
          loading={loading}
        />
      </div>
    </AdminLayout>
  );
};

export default AuthorPage;