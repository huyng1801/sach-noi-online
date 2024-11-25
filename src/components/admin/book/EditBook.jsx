import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const EditBook = () => {
  // Lấy thông tin sách từ state
  const location = useLocation();
  const navigate = useNavigate();
  const { book } = location.state || {}; 


  useEffect(() => {
    if (!book) {
      navigate('/admin/dashboard');
    }
  }, [book, navigate]);

  const [editedBook, setEditedBook] = useState(book);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedBook((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };


  const handleSave = () => {
    console.log('Lưu sách:', editedBook);

    navigate('/admin/dashboard');
  };

  return (
    <div className="container mt-4">
      <h3 className="text-center mb-4">Chỉnh Sửa Sách</h3>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Sửa thông tin sách: {editedBook?.title}</h5>
              <form>
                <div className="form-group">
                  <label htmlFor="title">Tiêu đề</label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    name="title"
                    value={editedBook?.title || ''}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="genre">Thể loại</label>
                  <input
                    type="text"
                    className="form-control"
                    id="genre"
                    name="genre"
                    value={editedBook?.genre || ''}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="author">Tác giả</label>
                  <input
                    type="text"
                    className="form-control"
                    id="author"
                    name="author"
                    value={editedBook?.author || ''}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="narrator">Giọng đọc</label>
                  <input
                    type="text"
                    className="form-control"
                    id="narrator"
                    name="narrator"
                    value={editedBook?.narrator || ''}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="listenerCount">Lượt nghe</label>
                  <input
                    type="number"
                    className="form-control"
                    id="listenerCount"
                    name="listenerCount"
                    value={editedBook?.listenerCount || ''}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="rating">Đánh giá</label>
                  <input
                    type="number"
                    className="form-control"
                    id="rating"
                    name="rating"
                    value={editedBook?.rating || ''}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="audioUrl">URL Audio</label>
                  <input
                    type="text"
                    className="form-control"
                    id="audioUrl"
                    name="audioUrl"
                    value={editedBook?.audioUrl || ''}
                    onChange={handleInputChange}
                  />
                </div>

                <button type="button" className="btn btn-primary" onClick={handleSave}>
                  Lưu Thay Đổi
                </button>
                <button type="button" className="btn btn-secondary ml-2" onClick={() => navigate('/admin/dashboard')}>
                  Hủy
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditBook;
