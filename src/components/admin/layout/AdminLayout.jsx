import React, { useState, useEffect } from 'react';
import { Layout, Breadcrumb } from 'antd';
import { useLocation } from 'react-router-dom'; // For getting the current route
import { useTheme } from '../../../hooks/useTheme';
import AdminHeader from './AdminHeader';
import AdminFooter from './AdminFooter';
import Sidebar from './Sidebar';

const { Content } = Layout;

const AdminLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const { colorBgContainer, borderRadiusLG } = useTheme();
  const location = useLocation();

  const handleToggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  // Function to generate breadcrumb items based on the current route
  const getBreadcrumbItems = () => {
    const pathnames = location.pathname.split('/').filter((x) => x);
    const breadcrumbItems = [
      { title: 'Trang chủ', href: '/' }, // Home page breadcrumb
    ];

    if (pathnames.length > 0) {
      pathnames.forEach((path, index) => {
        const href = '/' + pathnames.slice(0, index + 1).join('/');
        let title = '';

        switch (path) {
          case 'admin':
            title = 'Quản trị';
            break;
          case 'dashboard':
            title = 'Bảng điều khiển';
            break;
          case 'stories':
            title = 'Quản lý câu chuyện';
            break;
          case 'authors':
            title = 'Tác giả';
            break;
          case 'categories':
            title = 'Danh mục';
            break;
          case 'narrators':
            title = 'Người kể chuyện';
            break;
          case 'audios':
            title = 'Âm thanh';
              break;
          case 'ratings':
            title = 'Đánh giá';
            break;
          case 'users':
            title = 'Người dùng';
            break;
          default:
            title = path.charAt(0).toUpperCase() + path.slice(1);
        }

        breadcrumbItems.push({ title, href });
      });
    }

    return breadcrumbItems;
  };

  const breadcrumbItems = getBreadcrumbItems();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sidebar collapsed={collapsed} />
      <Layout style={{ transition: 'all 0.2s' }}>
        <AdminHeader 
          collapsed={collapsed} 
          onToggleCollapse={handleToggleCollapse}
          colorBgContainer={colorBgContainer}
        />
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
            minHeight: 280,
          }}
        >
          {/* Breadcrumb component */}
          <Breadcrumb style={{ margin: '16px 0' }}>
            {breadcrumbItems.map((item, index) => (
              <Breadcrumb.Item key={index}>
                {item.href ? <a href={item.href}>{item.title}</a> : item.title}
              </Breadcrumb.Item>
            ))}
          </Breadcrumb>
          
          {children}
        </Content>
        <AdminFooter />
      </Layout>
    </Layout>
  );
};

export default AdminLayout;
