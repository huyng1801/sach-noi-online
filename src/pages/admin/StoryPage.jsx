import React from 'react';
import AdminLayout from '../../components/admin/layout/AdminLayout';
import StoryTable from '../../components/admin/story/StoryTable';
import StoryFilters from '../../components/admin/story/StoryFilters';
import StoryModal from '../../components/admin/story/StoryModal';
import { useStoryManagement } from '../../hooks/useStoryManagement';

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

const StoryPage = () => {
  const {
    stories,
    loading,
    pagination,
    filters,
    categories,
    authors,
    narrators,
    selectedStory,
    isModalVisible,
    modalMode,
    handleTableChange,
    handleSearch,
    handleFilterChange,
    handleAdd,
    handleEdit,
    handleDelete,
    handleModalCancel,
    handleModalSubmit,
  } = useStoryManagement();

  return (
    <AdminLayout>
      <div style={styles.container}>
        <div style={styles.header}>
          <h1 style={styles.title}>Quản lý sách</h1>
          <StoryFilters 
              onSearch={handleSearch}
              onAdd={handleAdd}
              onCategoryFilter={(value) => handleFilterChange('categoryId', value)}
              onAuthorFilter={(value) => handleFilterChange('authorId', value)}
              onNarratorFilter={(value) => handleFilterChange('narratorId', value)}
              categories={categories}
              authors={authors}
              narrators={narrators}
            />
        </div>
        
        <StoryTable
          stories={stories}
          loading={loading}
          pagination={pagination}
          onChange={handleTableChange}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />

        <StoryModal
          visible={isModalVisible}
          mode={modalMode}
          categories={categories}
          authors={authors}
          narrators={narrators}
          initialValues={selectedStory}
          filters={filters}
          onCancel={handleModalCancel}
          onSubmit={handleModalSubmit}
          loading={loading}
        />
      </div>
    </AdminLayout>
  );
};

export default StoryPage;