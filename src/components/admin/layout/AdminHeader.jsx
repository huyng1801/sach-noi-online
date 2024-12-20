import React from 'react';
import { Layout, Space } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import UserMenu from './UserMenu';

const { Header } = Layout;

const styles = {
  header: {
    padding: 0,
    position: 'sticky',
    top: 0,
    zIndex: 1,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  trigger: {
    padding: '0 24px',
    fontSize: '18px',
    cursor: 'pointer',
  },
};

const AdminHeader = ({ collapsed, onToggleCollapse, colorBgContainer }) => {
  return (
    <Header
      style={{
        ...styles.header,
        background: colorBgContainer,
      }}
    >
      <Space>
        {React.createElement(
          collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
          {
            className: 'trigger',
            onClick: onToggleCollapse,
            style: styles.trigger,
          }
        )}
      </Space>
      <UserMenu />
    </Header>
  );
};

export default AdminHeader;