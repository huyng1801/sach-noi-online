import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, InfoCircleOutlined, LoginOutlined, UserAddOutlined } from '@ant-design/icons';
import Header from '../components/user/Header';
import Footer from '../components/user/Footer'; 

const { Content } = Layout;

const UserLayout = ({ children }) => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ background: '#001529', padding: 0 }}>
        <div style={{ color: '#fff', fontSize: '24px', textAlign: 'center' }}>Welcome to Our Platform</div>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} style={{ textAlign: 'center' }}>
          <Menu.Item key="1" icon={<HomeOutlined />}>
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<InfoCircleOutlined />}>
            <Link to="/about">About</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<LoginOutlined />}>
            <Link to="/login">Login</Link>
          </Menu.Item>
          <Menu.Item key="4" icon={<UserAddOutlined />}>
            <Link to="/register">Register</Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '50px 20px', background: '#fff' }}>
        {children}
      </Content>
      <Footer />
    </Layout>
  );
};

export default UserLayout;
