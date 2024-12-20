import React from 'react';
import { Space, Input, Button, Select } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const { Search } = Input;

const styles = {
  filters: {
    display: 'flex',
    gap: '16px',
    flexWrap: 'wrap',
  },
  search: {
    width: 250,
  },
  select: {
    width: 150,
  },
  '@media (max-width: 768px)': {
    search: {
      width: '100%',
    },
    select: {
      width: '100%',
    },
  },
};

const UserFilters = ({ onSearch, onAdd }) => {
  const roleOptions = [
    { value: 'Admin', label: 'Admin' },
    { value: 'Moderator', label: 'Moderator' },
    { value: 'User', label: 'User' },
  ];

  const statusOptions = [
    { value: 'Active', label: 'Active' },
    { value: 'Inactive', label: 'Inactive' },
  ];

  return (
    <Space wrap style={styles.filters}>
      <Search
        placeholder="Search users..."
        allowClear
        onSearch={onSearch}
        style={styles.search}
      />

      <Select
        placeholder="Role"
        allowClear
        options={roleOptions}
        style={styles.select}
      />

      <Select
        placeholder="Status"
        allowClear
        options={statusOptions}
        style={styles.select}
      />
      
      <Button
        type="primary"
        icon={<PlusOutlined />}
        onClick={onAdd}
      >
        Add User
      </Button>
    </Space>
  );
};

export default UserFilters;