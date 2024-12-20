import React from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;

const AdminFooter = () => {
  return (
    <Footer
      style={{
        textAlign: 'center',
        background: 'transparent',
      }}
    >
      SachNoiOnline ©{new Date().getFullYear()} Được tạo bởi nhóm 5 - Nguyễn Tấn Huy - Phan Tấn Sỹ - Văng Công Tín - Phạm Thế Học
    </Footer>
  );
};

export default AdminFooter;