import { theme } from 'antd';

export const useTheme = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return {
    colorBgContainer,
    borderRadiusLG,
  };
};