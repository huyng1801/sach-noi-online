import React from 'react';
import { Table, Space, Button, Popconfirm, Image } from 'antd';
import { EditOutlined, DeleteOutlined, BookOutlined } from '@ant-design/icons';

const styles = {
  table: {
    background: 'white',
    padding: '24px',
    borderRadius: '8px',
    boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.03)',
  },
  coverImage: {
    width: 40,
    height: 40,
    objectFit: 'cover',
    borderRadius: '4px',
  },
};

const StoryTable = ({ stories, loading, pagination, onChange, onEdit, onDelete }) => {
  const columns = [
    {
      title: 'Tiêu đề',
      dataIndex: 'title',
      key: 'title',
      render: (text, record) => (
        <Space>
          {record.coverImageUrl ? (
            <Image
              src={record.coverImageUrl}
              style={styles.coverImage}
              fallback="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw_HeSzHfBorKS4muw4IIeVvvRgnhyO8Gn8w&s"
            />
          ) : (
            <BookOutlined style={{ fontSize: '24px', color: '#1890ff' }} />
          )}
          {text}
        </Space>
      ),
    },
    {
      title: 'Tác giả',
      dataIndex: 'authorName',
      key: 'authorName',
    },
    {
      title: 'Thể loại',
      dataIndex: 'categoryName',
      key: 'categoryName',
    },
    {
      title: 'Người kể',
      dataIndex: 'narratorName',
      key: 'narratorName',
    },
    {
      title: 'Tổng số audio',
      dataIndex: 'totalAudios',
      key: 'totalAudios',
    },
    {
      title: 'Đánh giá',
      dataIndex: 'averageRating',
      key: 'averageRating',
      render: (rating) => rating?.toFixed(1) || 'Chưa có',
    },
    {
      title: 'Ngày tạo',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: (date) => new Date(date).toLocaleDateString(),
    },
    {
      title: 'Hành động',
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
            title="Xóa câu chuyện"
            description="Bạn có chắc chắn muốn xóa câu chuyện này không?"
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
      dataSource={stories}
      rowKey="id"
      loading={loading}
      pagination={{
        ...pagination,
        showSizeChanger: true,
        showTotal: (total) => `Tổng cộng ${total} mục`,
      }}
      onChange={onChange}
    />
  );
};

export default StoryTable;
