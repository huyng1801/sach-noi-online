import React from 'react';
import { Table, Space, Button, Popconfirm } from 'antd';
import { EditOutlined, DeleteOutlined, UserOutlined } from '@ant-design/icons';

const styles = {
  table: {
    background: 'white',
    padding: '24px',
    borderRadius: '8px',
    boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.03)',
  },
};

const AuthorTable = ({ authors, loading, pagination, onChange, onEdit, onDelete }) => {
  const columns = [
    {
      title: 'Tên Tác Giả', // Vietnamese title
      dataIndex: 'authorName',
      key: 'authorName',
      render: (text) => (
        <Space>
          <UserOutlined />
          {text}
        </Space>
      ),
    },
    {
      title: 'Tổng Số Câu Chuyện', // Vietnamese title
      dataIndex: 'totalStories',
      key: 'totalStories',
    },
    {
      title: 'Ngày Tạo', // Vietnamese title
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: (date) => new Date(date).toLocaleDateString(),
    },
    {
      title: 'Ngày Cập Nhật', // Vietnamese title
      dataIndex: 'updatedAt',
      key: 'updatedAt',
      render: (date) => new Date(date).toLocaleDateString(),
    },
    {
      title: 'Hành Động', // Vietnamese title
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
            title="Xóa Tác Giả" // Vietnamese confirmation title
            description="Bạn có chắc chắn muốn xóa tác giả này không?" // Vietnamese confirmation description
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
    <Table
      style={styles.table}
      columns={columns}
      dataSource={authors}
      rowKey="id"
      loading={loading}
      pagination={{
        ...pagination,
        showSizeChanger: true,
        showTotal: (total) => `Tổng cộng ${total} mục`, // Vietnamese pagination text
      }}
      onChange={onChange}
    />
  );
};

export default AuthorTable;
