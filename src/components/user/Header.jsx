import React from 'react';
import './Header.css';
import { SearchOutlined, BulbOutlined } from '@ant-design/icons';

const Header = () => {
  return (
    <header className="header-container">
      <div className="header-content">
        {/* Phần bên trái */}
        <div className="header-left">
          <img
            src="./sachnoi.png"
            alt="Radio Icon"
            className="header-logo"
          />
          <div className="header-title">
            <h1>RADIO TRUYỆN . INFO</h1>
            <p>Nghe Truyện Audio Online</p>
          </div>
        </div>

        {/* Phần bên phải */}
        <nav className="header-right">
          <a href="#trangchu">Trang chủ</a>
          <div className="dropdown">
            <a href="#theloai">Thể Loại</a>
          </div>
          <div className="dropdown">
            <a href="#giongdoc">Giọng đọc</a>
          </div>
          <a href="#darkmode" className="header-icon">
            <BulbOutlined />
          </a>
          <a href="#search" className="header-icon">
            <SearchOutlined />
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
