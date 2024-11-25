// src/Login.js
import React, { useState } from 'react';
import './Login.css'; // Để thêm kiểu CSS tùy chỉnh

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (username === '' || password === '') {
      setError('Vui lòng điền đầy đủ thông tin');
      return;
    }
    
    // Xử lý đăng nhập ở đây (gọi API, kiểm tra thông tin...)
    console.log('Đăng nhập với', username, password);
    // Xóa thông báo lỗi nếu thành công
    setError('');
  };

  return (
    <div className="login-container">
      <h2>Đăng Nhập</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label htmlFor="username">Tên người dùng:</label>
          <input
            type="text"
            id="username"
            placeholder="Nhập tên người dùng"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Mật khẩu:</label>
          <input
            type="password"
            id="password"
            placeholder="Nhập mật khẩu"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {error && <div className="error-message">{error}</div>}

        <button type="submit" className="login-button">Đăng Nhập</button>
      </form>
    </div>
  );
};

export default Login;
