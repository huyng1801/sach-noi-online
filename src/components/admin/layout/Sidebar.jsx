import React from 'react';
import { Layout, Menu } from 'antd';
import {
  DashboardOutlined,
  BookOutlined,
  UserOutlined,
  AppstoreOutlined,
  TeamOutlined,
  SoundOutlined,
  StarOutlined,
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const { Sider } = Layout;

const Sidebar = ({ collapsed }) => {
  const navigate = useNavigate();

  const menuItems = [
    {
      key: 'dashboard',
      icon: <DashboardOutlined />,
      label: 'Bảng điều khiển', // Vietnamese label
      onClick: () => navigate('/admin/dashboard')
    },
    {
      key: 'stories',
      icon: <BookOutlined />,
      label: 'Câu chuyện', // Vietnamese label
      onClick: () => navigate('/admin/stories')
    },
    {
      key: 'authors',
      icon: <UserOutlined />,
      label: 'Tác giả', // Vietnamese label
      onClick: () => navigate('/admin/authors')
    },
    {
      key: 'categories',
      icon: <AppstoreOutlined />,
      label: 'Danh mục', // Vietnamese label
      onClick: () => navigate('/admin/categories')
    },
    {
      key: 'narrators',
      icon: <TeamOutlined />,
      label: 'Người kể chuyện', // Vietnamese label
      onClick: () => navigate('/admin/narrators')
    },
    {
      key: 'audios',
      icon: <SoundOutlined />,
      label: 'Âm thanh', // Vietnamese label
      onClick: () => navigate('/admin/audios')
    },
    {
      key: 'ratings',
      icon: <StarOutlined />,
      label: 'Đánh giá', // Vietnamese label
      onClick: () => navigate('/admin/ratings')
    },
    {
      key: 'users',
      icon: <UserOutlined />,
      label: 'Người dùng', // Vietnamese label
      onClick: () => navigate('/admin/users')
    }
  ];

  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div style={{ 
        height: '64px', 
        margin: '16px',
        background: 'rgba(255, 255, 255, 0.2)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <h1 style={{ color: 'white', margin: 0 }}>
          {collapsed ? 'SNO' : 'SachNoiOnline'}
        </h1>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['dashboard']}
        items={menuItems}
      />
    </Sider>
  );
};

export default Sidebar;
