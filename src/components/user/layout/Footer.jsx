import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Cột 1 */}
        <div className="footer-column">
          <h3>RADIOTRUYEN.INFO - NGHE TRUYỆN AUDIO MIỄN PHÍ</h3>
          <p>
            RadioTruyen.Info được thành lập nhằm mục đích lưu trữ và chia sẻ các bộ truyện audio, sách nói, upload truyện audio bởi hội viên nhóm. Tất cả đều miễn phí tới thính giả!
          </p>
        </div>

        {/* Cột 2 */}
        <div className="footer-column">
          <h3>RADIO TRUYỆN</h3>
          <ul>
            <li>Chính Sách & Bảo Mật Cookies</li>
            <li>Bản Quyền Nội Dung</li>
          </ul>
        </div>

        {/* Cột 3 */}
        <div className="footer-column">
          <h3>KẾT NỐI VỚI CHÚNG TÔI QUA FACEBOOK</h3>
          <p>
            <em>Radio Truyện</em>
          </p>
        </div>
      </div>
      <div className="footer-copyright">
        © Copyright 2024 by radiotruyen.info. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
