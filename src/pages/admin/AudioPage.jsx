import React from 'react';
import AdminLayout from '../../components/admin/layout/AdminLayout';
import AudioTable from '../../components/admin/audio/AudioTable';
import AudioFilters from '../../components/admin/audio/AudioFilters';
import AudioModal from '../../components/admin/audio/AudioModal';
import { useAudioManagement } from '../../hooks/useAudioManagement';

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

const AudioPage = () => {
  const {
    audios,
    loading,
    pagination,
    filters,
    selectedAudio,
    isModalVisible,
    modalMode,
    handleTableChange,
    handleFilterChange,
    handleAdd,
    handleEdit,
    handleDelete,
    handleModalCancel,
    handleModalSubmit,
  } = useAudioManagement();

  return (
    <AdminLayout>
      <div style={styles.container}>
        <div style={styles.header}>
          <h1 style={styles.title}>Quản lý âm thanh</h1>
          <AudioFilters 
            filters={filters}
            onFilterChange={handleFilterChange}
            onAdd={handleAdd}
          />
        </div>
        
        <AudioTable
          audios={audios}
          loading={loading}
          pagination={pagination}
          onChange={handleTableChange}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />

        <AudioModal
          visible={isModalVisible}
          mode={modalMode}
          initialValues={selectedAudio}
          filters={filters}
          onCancel={handleModalCancel}
          onSubmit={handleModalSubmit}
          loading={loading}
        />
      </div>
    </AdminLayout>
  );
};

export default AudioPage;