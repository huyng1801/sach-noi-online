import React from 'react';
import { Table, Space, Button, Popconfirm } from 'antd';
import { EditOutlined, DeleteOutlined, AppstoreOutlined } from '@ant-design/icons';

const CategoryTable = ({ categories, loading, pagination, onChange, onEdit, onDelete }) => {
  const columns = [
    {
      title: 'Tên Danh Mục', // Vietnamese label
      dataIndex: 'categoryName',
      key: 'categoryName',
      render: (text) => (
        <Space>
          <AppstoreOutlined style={{ color: '#1890ff' }} />
          {text}
        </Space>
      ),
    },
    {
      title: 'Tổng Số Câu Chuyện', // Vietnamese label
      dataIndex: 'totalStories',
      key: 'totalStories',
    },
    {
      title: 'Ngày Tạo', // Vietnamese label
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: (date) => new Date(date).toLocaleDateString(),
    },
    {
      title: 'Ngày Cập Nhật', // Vietnamese label
      dataIndex: 'updatedAt',
      key: 'updatedAt',
      render: (date) => new Date(date).toLocaleDateString(),
    },
    {
      title: 'Hành Động', // Vietnamese label
      key: 'actions',
      render: (_, record) => (
        <Space size="middle">
          <Button
            type="primary"
            icon={<EditOutlined />}
            onClick={() => onEdit(record)}
            ghost
          />
          <Popconfirm
            title="Xóa Danh Mục" // Vietnamese label
            description="Bạn có chắc chắn muốn xóa danh mục này?" // Vietnamese text
            onConfirm={() => onDelete(record.id)}
            okText="Có"
            cancelText="Không"
          >
            <Button
              type="primary"
              icon={<DeleteOutlined />}
              danger
              ghost
            />
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <div className="category-table">
      <Table
        columns={columns}
        dataSource={categories}
        rowKey="id"
        loading={loading}
        pagination={{
          ...pagination,
          showSizeChanger: true,
          showTotal: (total) => `Tổng cộng ${total} mục` // Vietnamese text
        }}
        onChange={onChange}
        style={{ 
          background: 'white',
          padding: '24px',
          borderRadius: '8px',
          boxShadow: '0 1px 2px rgba(0, 0, 0, 0.03)'
        }}
      />
    </div>
  );
};

export default CategoryTable;
