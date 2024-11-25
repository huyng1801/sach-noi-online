import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import { DashboardOutlined, UserOutlined, LogoutOutlined, PlusOutlined, BookOutlined } from '@ant-design/icons';


const { Sider, Header, Content, Footer } = Layout;

const AdminLayout = ({ children }) => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider width={250} className="site-layout-background">
        <div className="logo" style={{ padding: '20px', color: '#fff', textAlign: 'center' }}>
          Sách nói
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<DashboardOutlined />}>
            <Link to="/admin/dashboard">Dashboard</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<UserOutlined />}>
            <Link to="/users">Users</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<PlusOutlined />}>
            <Link to="/admin/newbook">New book</Link>
          </Menu.Item>
          <Menu.Item key="4" icon={<LogoutOutlined />}>
            <Link to="/logout">Logout</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: '#fff' }}>
          <div style={{ padding: '20px', fontSize: '20px', fontWeight: 'bold', textAlign: 'center'}}>
            Welcome to Admin Dashboard
          </div>
        </Header>
        <Content style={{ margin: '20px', padding: '20px', background: '#fff' }}>
          {children}
        </Content>
        <Footer style={{ textAlign: 'center' }}>Admin Dashboard ©2024 Created by You</Footer>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;
