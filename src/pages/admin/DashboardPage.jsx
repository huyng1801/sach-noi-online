import React from 'react';
import { Card, Row, Col, Statistic, Table, Space } from 'antd';
import { 
  UserOutlined, 
  BookOutlined, 
  SoundOutlined, 
  StarOutlined 
} from '@ant-design/icons';
import {
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import AdminLayout from '../../components/admin/layout/AdminLayout';

const DashboardPage = () => {
  // Dữ liệu giả lập - Trong ứng dụng thực, dữ liệu sẽ lấy từ API
  const statistics = {
    totalUsers: 15234,
    totalStories: 856,
    totalAudios: 2431,
    averageRating: 4.7
  };

  const listenerData = [
    { date: '2023-11-01', listeners: 1200 },
    { date: '2023-11-02', listeners: 1400 },
    { date: '2023-11-03', listeners: 1600 },
    { date: '2023-11-04', listeners: 1300 },
    { date: '2023-11-05', listeners: 1800 }
  ];

  const categoryData = [
    { category: 'Phiêu Lưu', value: 35 },
    { category: 'Lãng Mạn', value: 25 },
    { category: 'Kỳ Bí', value: 20 },
    { category: 'Huyễn Tưởng', value: 20 }
  ];

  const recentStories = [
    {
      id: 1,
      title: 'Cuộc Phiêu Lưu Vĩ Đại',
      author: 'John Doe',
      category: 'Phiêu Lưu',
      duration: '1h 30m',
      listeners: 1500,
      rating: 4.8,
      createdAt: '2023-12-01'
    },
    {
      id: 2,
      title: 'Kỳ Bí Giữa Đêm',
      author: 'Jane Smith',
      category: 'Kỳ Bí',
      duration: '2h 15m',
      listeners: 2100,
      rating: 4.6,
      createdAt: '2023-12-02'
    }
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  const columns = [
    {
      title: 'Tiêu Đề',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Tác Giả',
      dataIndex: 'author',
      key: 'author',
    },
    {
      title: 'Thể Loại',
      dataIndex: 'category',
      key: 'category',
    },
    {
      title: 'Thời Gian',
      dataIndex: 'duration',
      key: 'duration',
    },
    {
      title: 'Số Người Nghe',
      dataIndex: 'listeners',
      key: 'listeners',
      sorter: (a, b) => a.listeners - b.listeners,
    },
    {
      title: 'Đánh Giá',
      dataIndex: 'rating',
      key: 'rating',
      render: (rating) => (
        <Space>
          <span>⭐</span>
          <span>{rating.toFixed(1)}</span>
        </Space>
      ),
    }
  ];

  const statsCards = [
    {
      title: 'Tổng Người Dùng',
      value: statistics.totalUsers,
      icon: <UserOutlined />,
      color: '#1890ff'
    },
    {
      title: 'Tổng Câu Chuyện',
      value: statistics.totalStories,
      icon: <BookOutlined />,
      color: '#52c41a'
    },
    {
      title: 'Tổng Audio',
      value: statistics.totalAudios,
      icon: <SoundOutlined />,
      color: '#722ed1'
    },
    {
      title: 'Đánh Giá Trung Bình',
      value: statistics.averageRating,
      icon: <StarOutlined />,
      color: '#faad14',
      precision: 1,
      suffix: '/5'
    }
  ];

  return (
    <AdminLayout>
      <div style={{ padding: '24px' }}>
        <h1 style={{ marginBottom: '24px', fontSize: '24px', fontWeight: 600 }}>
          Tổng Quan Dashboard
        </h1>

        {/* Phần thống kê */}
        <Row gutter={[24, 24]} style={{ marginBottom: '24px' }}>
          {statsCards.map((stat, index) => (
            <Col xs={24} sm={12} lg={6} key={index}>
              <Card>
                <Statistic
                  title={
                    <span style={{ color: stat.color }}>
                      {stat.icon} {stat.title}
                    </span>
                  }
                  value={stat.value}
                  precision={stat.precision}
                  suffix={stat.suffix}
                />
              </Card>
            </Col>
          ))}
        </Row>

        {/* Phần biểu đồ */}
        <Row gutter={[24, 24]} style={{ marginBottom: '24px' }}>
          <Col xs={24} lg={12}>
            <Card title="Xu Hướng Người Nghe">
              <ResponsiveContainer width="100%" height={350}>
                <LineChart data={listenerData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="listeners"
                    stroke="#8884d8"
                    activeDot={{ r: 8 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </Card>
          </Col>
          <Col xs={24} lg={12}>
            <Card title="Phân Bố Thể Loại">
              <ResponsiveContainer width="100%" height={350}>
                <PieChart>
                  <Pie
                    data={categoryData}
                    cx="50%"
                    cy="50%"
                    labelLine={true}
                    outerRadius={130}
                    fill="#8884d8"
                    dataKey="value"
                    nameKey="category"
                    label={({ name, percent }) => 
                      `${name} ${(percent * 100).toFixed(0)}%`
                    }
                  >
                    {categoryData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </Card>
          </Col>
        </Row>

        {/* Bảng câu chuyện gần đây */}
        <Card title="Câu Chuyện Gần Đây" style={{ marginTop: '24px' }}>
          <Table
            columns={columns}
            dataSource={recentStories}
            rowKey="id"
            pagination={{
              pageSize: 5,
              showSizeChanger: false
            }}
          />
        </Card>
      </div>
    </AdminLayout>
  );
};

export default DashboardPage;
