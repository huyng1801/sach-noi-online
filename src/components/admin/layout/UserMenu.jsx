import React from 'react';
import { Avatar, Dropdown, Space } from 'antd';
import { UserOutlined, LogoutOutlined, SettingOutlined } from '@ant-design/icons';
import { useUserMenu } from '../../../hooks/useUserMenu';

const UserMenu = () => {
  const menuItems = [
    {
      key: 'profile',
      icon: <UserOutlined />,
      label: 'Profile',
    },
    {
      key: 'settings',
      icon: <SettingOutlined />,
      label: 'Settings',
    },
    {
      type: 'divider',
    },
    {
      key: 'logout',
      icon: <LogoutOutlined />,
      label: 'Logout',
    },
  ];

  const { handleMenuClick } = useUserMenu();

  return (
    <Dropdown 
      menu={{ items: menuItems, onClick: handleMenuClick }} 
      placement="bottomRight"
    >
      <Space style={{ cursor: 'pointer', marginLeft: 'auto', marginRight: '24px' }}>
        <Avatar icon={<UserOutlined />} />
        <span>Admin</span>
      </Space>
    </Dropdown>
  );
};

export default UserMenu;