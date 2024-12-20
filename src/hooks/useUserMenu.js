import { message } from 'antd';

export const useUserMenu = () => {
  const handleMenuClick = ({ key }) => {
    switch (key) {
      case 'profile':
        message.info('Profile clicked');
        break;
      case 'settings':
        message.info('Settings clicked');
        break;
      case 'logout':
        message.info('Logout clicked');
        break;
      default:
        break;
    }
  };

  return {
    handleMenuClick,
  };
};