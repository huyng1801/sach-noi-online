import React from 'react';
import { Space, Input, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const { Search } = Input;

const CategoryFilters = ({ onSearch, onAdd }) => {
  return (
    <div className="category-filters" style={{ marginBottom: '24px' }}>
      <Space wrap size="middle">
        {/* <Search
          placeholder="Tìm kiếm danh mục..." // Vietnamese text
          allowClear
          onSearch={onSearch}
          style={{ width: 300 }}
        /> */}
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={onAdd}
        >
          Thêm Danh Mục
        </Button>
      </Space>
    </div>
  );
};

export default CategoryFilters;
