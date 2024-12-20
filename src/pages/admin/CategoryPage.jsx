import React from 'react';
import AdminLayout from '../../components/admin/layout/AdminLayout';
import CategoryTable from '../../components/admin/category/CategoryTable';
import CategoryFilters from '../../components/admin/category/CategoryFilters';
import CategoryModal from '../../components/admin/category/CategoryModal';
import { useCategoryManagement } from '../../hooks/useCategoryManagement';

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

const CategoryPage = () => {
  const {
    categories,
    loading,
    pagination,
    selectedCategory,
    isModalVisible,
    modalMode,
    handleTableChange,
    handleSearch,
    handleAdd,
    handleEdit,
    handleDelete,
    handleModalCancel,
    handleModalSubmit,
  } = useCategoryManagement();

  return (
    <AdminLayout>
      <div style={styles.container}>
        <div style={styles.header}>
          <h1 style={styles.title}>Quản lý thể loại</h1>
          <CategoryFilters 
            onSearch={handleSearch}
            onAdd={handleAdd}
          />
        </div>
        
        <CategoryTable
          categories={categories}
          loading={loading}
          pagination={pagination}
          onChange={handleTableChange}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />

        <CategoryModal
          visible={isModalVisible}
          mode={modalMode}
          initialValues={selectedCategory}
          onCancel={handleModalCancel}
          onSubmit={handleModalSubmit}
          loading={loading}
        />
      </div>
    </AdminLayout>
  );
};

export default CategoryPage;