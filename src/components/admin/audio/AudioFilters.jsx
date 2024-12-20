import React from 'react';
import { Space, Input, Select, Button } from 'antd';
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

const AudioFilters = ({ filters, onFilterChange, onAdd }) => {
  const { stories, narrators } = filters;

  return (
    <Space wrap style={styles.filters}>
      <Search
        placeholder="Tìm kiếm âm thanh..."
        allowClear
        onSearch={value => onFilterChange('search', value)}
        style={styles.search}
      />
      
      <Select
        placeholder="Chọn Câu Chuyện"
        allowClear
        style={styles.select}
        onChange={value => onFilterChange('storyId', value)}
        options={stories}
      />
      
      <Button
        type="primary"
        icon={<PlusOutlined />}
        onClick={onAdd}
      >
        Thêm Âm Thanh
      </Button>
    </Space>
  );
};

export default AudioFilters;
