import React from 'react';
import AdminLayout from '../../components/admin/layout/AdminLayout';
import NarratorTable from '../../components/admin/narrator/NarratorTable';
import NarratorFilters from '../../components/admin/narrator/NarratorFilters';
import NarratorModal from '../../components/admin/narrator/NarratorModal';
import { useNarratorManagement } from '../../hooks/useNarratorManagement';

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

const NarratorPage = () => {
  const {
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
  } = useNarratorManagement();

  return (
    <AdminLayout>
      <div style={styles.container}>
        <div style={styles.header}>
          <h1 style={styles.title}>Người kể chuyện</h1>
          <NarratorFilters 
            onSearch={handleSearch}
            onAdd={handleAdd}
          />
        </div>
        
        <NarratorTable
          narrators={narrators}
          loading={loading}
          pagination={pagination}
          onChange={handleTableChange}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />

        <NarratorModal
          visible={isModalVisible}
          mode={modalMode}
          initialValues={selectedNarrator}
          onCancel={handleModalCancel}
          onSubmit={handleModalSubmit}
          loading={loading}
        />
      </div>
    </AdminLayout>
  );
};

export default NarratorPage;