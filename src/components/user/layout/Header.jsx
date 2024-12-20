import React, { useState } from "react";
import "./Header.css";
import { SearchOutlined, DownOutlined } from "@ant-design/icons";
import { useCategoryManagement } from "../../../hooks/useCategoryManagement"; // Import the category hook
import { useNarratorManagement } from "../../../hooks/useNarratorManagement"; // Import the narrator hook
import { Link } from "react-router-dom"; // Import Link component for navigation

const Header = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [showTheLoai, setShowTheLoai] = useState(false);
  const [showGiongDoc, setShowGiongDoc] = useState(false);

  // Use custom hooks to fetch categories and narrators
  const { categories } = useCategoryManagement();
  const { narrators } = useNarratorManagement();

  return (
    <header className="header-container">
      <div className="header-content">
        <div className="logo">
          <h1>SachNoiOnline</h1>
          <span>Nghe Sách Nói Online</span>
        </div>

        <nav className="nav-menu">
          <ul>
            <li>
              <Link to="/">Trang chủ</Link>
            </li>

            {/* Categories Dropdown */}
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
                  {categories.map((category) => (
                    <li key={category.id}>
                      {/* Use Link to navigate to category page */}
                      <Link to={`/category/${category.id}`}>{category.categoryName}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {/* Narrators Dropdown */}
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
                  {narrators.map((narrator) => (
                    <li key={narrator.id}>
                      {/* Use Link to navigate to narrator page */}
                      <Link to={`/narrator/${narrator.id}`}>{narrator.narratorName}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            <li>
              <a href="#">🌙</a>
            </li>

            {/* Search Bar */}
            <li className="search-container">
              <SearchOutlined
                className="search-icon"
                onClick={() => setShowSearch(!showSearch)}
              />
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
