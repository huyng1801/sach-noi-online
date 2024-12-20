import React from 'react';
import { Table, Space, Button, Tag, Popconfirm, Rate, Avatar } from 'antd';
import { EditOutlined, DeleteOutlined, UserOutlined } from '@ant-design/icons';
import { formatDate } from '../../../utils/formatters';

const styles = {
  table: {
    background: 'white',
    padding: '24px',
    borderRadius: '8px',
    boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.03)',
  },
  avatar: {
    marginRight: '8px',
  },
  comment: {
    maxWidth: '300px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
};

const RatingTable = ({ ratings, loading, pagination, onChange, onEdit, onDelete }) => {
  const columns = [
    {
      title: 'User',
      dataIndex: 'userName',
      key: 'userName',
      render: (text, record) => (
        <Space>
          <Avatar 
            style={styles.avatar}
            src={record.userAvatar}
            icon={!record.userAvatar && <UserOutlined />}
          />
          {text}
        </Space>
      ),
    },
    {
      title: 'Story',
      dataIndex: 'storyTitle',
      key: 'storyTitle',
      sorter: true,
    },
    {
      title: 'Rating',
      dataIndex: 'ratingValue',
      key: 'ratingValue',
      sorter: true,
      render: value => <Rate disabled defaultValue={value} />,
    },
    {
      title: 'Comment',
      dataIndex: 'comment',
      key: 'comment',
      render: text => (
        <div style={styles.comment} title={text}>
          {text}
        </div>
      ),
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: status => (
        <Tag color={status === 'Approved' ? 'green' : status === 'Pending' ? 'gold' : 'red'}>
          {status}
        </Tag>
      ),
    },
    {
      title: 'Created Date',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: date => formatDate(date),
      sorter: true,
    },
    {
      title: 'Actions',
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
            title="Delete Rating"
            description="Are you sure you want to delete this rating?"
            onConfirm={() => onDelete(record.id)}
            okText="Yes"
            cancelText="No"
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
      dataSource={ratings}
      rowKey="id"
      loading={loading}
      pagination={pagination}
      onChange={onChange}
    />
  );
};

export default RatingTable;