import React from 'react';
import AdminLayout from '../../components/admin/layout/AdminLayout';
import RatingTable from '../../components/admin/rating/RatingTable';
import RatingFilters from '../../components/admin/rating/RatingFilters';
import RatingModal from '../../components/admin/rating/RatingModal';
import { useRatingManagement } from '../../hooks/useRatingManagement';

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

const RatingPage = () => {
  const {
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
  } = useRatingManagement();

  return (
    <AdminLayout>
      <div style={styles.container}>
        <div style={styles.header}>
          <h1 style={styles.title}>Rating Management</h1>
          <RatingFilters 
            filters={filters}
            onFilterChange={handleFilterChange}
            onAdd={handleAdd}
          />
        </div>
        
        <RatingTable
          ratings={ratings}
          loading={loading}
          pagination={pagination}
          onChange={handleTableChange}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />

        <RatingModal
          visible={isModalVisible}
          mode={modalMode}
          initialValues={selectedRating}
          filters={filters}
          onCancel={handleModalCancel}
          onSubmit={handleModalSubmit}
          loading={loading}
        />
      </div>
    </AdminLayout>
  );
};

export default RatingPage;