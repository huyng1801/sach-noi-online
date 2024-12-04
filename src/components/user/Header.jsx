import React, { useState } from "react";
import "./Header.css";
import { SearchOutlined, DownOutlined } from "@ant-design/icons"; 

const Header = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [showTheLoai, setShowTheLoai] = useState(false);
  const [showGiongDoc, setShowGiongDoc] = useState(false);

  return (
    <header className="header-container">
      <div className="header-content">
        
        <div className="logo">
          <h1>RADIO TRUYỆN . INFO</h1>
          <span>Nghe Truyện Audio Online</span>
        </div>

        
        <nav className="nav-menu">
          <ul>
            <li>
              <a href="/">Trang chủ</a>
            </li>
            <li
              className="dropdown"
              onMouseEnter={() => setShowTheLoai(true)}
              onMouseLeave={() => setShowTheLoai(false)}
              role="button"
              tabIndex="0"
            >
              <a>
                Thể Loại <DownOutlined className="dropdown-icon" />
              </a>
              {showTheLoai && (
                <ul className="dropdown-menu">
                  <li>
                    <a href="#">Kinh dị</a>
                  </li>
                  <li>
                    <a href="#">Trinh thám</a>
                  </li>
                  <li>
                    <a href="#">Hài hước</a>
                  </li>
                </ul>
              )}
            </li>
            <li
              className="dropdown"
              onMouseEnter={() => setShowGiongDoc(true)}
              onMouseLeave={() => setShowGiongDoc(false)}
              role="button"
              tabIndex="0"
            >
              <a>
                Giọng đọc <DownOutlined className="dropdown-icon" />
              </a>
              {showGiongDoc && (
                <ul className="dropdown-menu">
                  <li>
                    <a href="#">Nam</a>
                  </li>
                  <li>
                    <a href="#">Nữ</a>
                  </li>
                  <li>
                    <a href="#">Trẻ em</a>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <a href="#">🌙</a>
            </li>
            <li className="search-container">
              <SearchOutlined className="search-icon" onClick={() => setShowSearch(!showSearch)} />
              {showSearch && (
                <div className="search-bar">
                  <form action="/tim-kiem.html" method="get">
                    <input
                      className="abc"
                      type="text"
                      name="q"
                      placeholder="Nhập tên truyện có dấu hoặc không dấu..."
                    />
                    <button type="submit">
                      <SearchOutlined />
                    </button>
                  </form>
                </div>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
