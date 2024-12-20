import React from 'react';
import { Space, Input, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const { Search } = Input;

const NarratorFilters = ({ onSearch, onAdd }) => {
  return (
    <div className="narrator-filters" style={{ marginBottom: '24px' }}>
      <Space wrap size="middle">
        {/* <Search
          placeholder="Tìm kiếm tác giả..."
          allowClear
          onSearch={onSearch}
          style={{ width: 300 }}
        /> */}
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={onAdd}
        >
          Thêm Tác Giả
        </Button>
      </Space>
    </div>
  );
};

export default NarratorFilters;
