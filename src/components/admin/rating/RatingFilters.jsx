import React from 'react';
import { Space, Input, Select, Button, Rate } from 'antd';
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
    width: 200,
  },
  rate: {
    marginBottom: 0,
  },
  '@media (max-width: 768px)': {
    filters: {
      flexDirection: 'column',
    },
    search: {
      width: '100%',
    },
    select: {
      width: '100%',
    },
  },
};

const RatingFilters = ({ filters, onFilterChange, onAdd }) => {
  const { stories, users, statuses } = filters;

  return (
    <Space wrap style={styles.filters}>
      <Search
        placeholder="Search comments..."
        allowClear
        onSearch={value => onFilterChange('search', value)}
        style={styles.search}
      />
      
      <Select
        placeholder="Select Story"
        allowClear
        style={styles.select}
        onChange={value => onFilterChange('storyId', value)}
        options={stories}
      />
      
      <Select
        placeholder="Select User"
        allowClear
        style={styles.select}
        onChange={value => onFilterChange('userId', value)}
        options={users}
      />

      <Select
        placeholder="Select Status"
        allowClear
        style={styles.select}
        onChange={value => onFilterChange('status', value)}
        options={statuses}
      />
      
      <Rate 
        style={styles.rate}
        onChange={value => onFilterChange('rating', value)}
      />
      
      <Button
        type="primary"
        icon={<PlusOutlined />}
        onClick={onAdd}
      >
        Add Rating
      </Button>
    </Space>
  );
};

export default RatingFilters;