// import React, { useState } from 'react';
// import { Button, Input, Form, message } from 'antd';
// import { useNavigate } from 'react-router-dom';  // Thêm hook useNavigate
// import AdminLayout from '../../../layouts/AdminLayout'; // Đường dẫn chính xác

// const AddBook = () => {
//   const [form] = Form.useForm();
//   const navigate = useNavigate();  // Khởi tạo navigate

//   const onFinish = (values) => {
//     console.log('Thêm sách mới: ', values);

//     // Thông báo thành công
//     message.success('Sách đã được thêm thành công!');

//     // Chuyển hướng về trang Dashboard sau khi thêm thành công
//     navigate('/admin/dashboard');  // Chuyển hướng đến trang Dashboard
//   };

//   return (
//     <AdminLayout>
//       <div className="container mt-4">
//         <h3 className="text-center mb-4">Thêm Sách Mới</h3>

//         <Form form={form} name="add-book" onFinish={onFinish} layout="vertical">
//           <Form.Item label="Tiêu đề sách" name="title" rules={[{ required: true, message: 'Vui lòng nhập tiêu đề sách!' }]}>
//             <Input placeholder="Nhập tiêu đề sách" />
//           </Form.Item>

//           <Form.Item label="Thể loại" name="genre" rules={[{ required: true, message: 'Vui lòng chọn thể loại sách!' }]}>
//             <Input placeholder="Nhập thể loại sách" />
//           </Form.Item>

//           <Form.Item label="Tác giả" name="author" rules={[{ required: true, message: 'Vui lòng nhập tên tác giả!' }]}>
//             <Input placeholder="Nhập tên tác giả" />
//           </Form.Item>

//           <Form.Item label="Giọng đọc" name="narrator" rules={[{ required: true, message: 'Vui lòng nhập giọng đọc!' }]}>
//             <Input placeholder="Nhập tên giọng đọc" />
//           </Form.Item>

//           <Form.Item label="Lượt nghe" name="listenerCount" rules={[{ required: true, message: 'Vui lòng nhập số lượt nghe!' }]}>
//             <Input placeholder="Nhập số lượt nghe" type="number" />
//           </Form.Item>

//           <Form.Item label="Đường dẫn audio" name="audioUrl" rules={[{ required: true, message: 'Vui lòng nhập đường dẫn audio!' }]}>
//             <Input placeholder="Nhập đường dẫn audio" />
//           </Form.Item>

//           <Form.Item>
//             <Button type="primary" htmlType="submit">
//               Thêm Sách
//             </Button>
//           </Form.Item>
//         </Form>
//       </div>
//     </AdminLayout>
//   );
// };

// export default AddBook;





import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { message } from 'antd';
import AdminLayout from '../../../layouts/AdminLayout'; // Đường dẫn chính xác

const AddBook = () => {
  const navigate = useNavigate();  // Khởi tạo navigate

  // State để quản lý các trường thông tin sách
  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState('');
  const [author, setAuthor] = useState('');
  const [narrator, setNarrator] = useState('');
  const [listenerCount, setListenerCount] = useState('');
  const [audioUrl, setAudioUrl] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Tạo đối tượng sách mới
    const newBook = { 
      id: Date.now(),
      title,
      genre,
      author,
      narrator,
      listenerCount,
      audioUrl 
    };

    // In ra thông tin sách mới (hoặc gọi API để lưu vào hệ thống)
    console.log('Thêm sách mới: ', newBook);

    // Thông báo thành công
    message.success('Sách đã được thêm thành công!');

    // Chuyển hướng đến trang Dashboard sau khi thêm thành công
    navigate('/admin/dashboard');

    // Reset lại các trường dữ liệu sau khi gửi form
    setTitle('');
    setGenre('');
    setAuthor('');
    setNarrator('');
    setListenerCount('');
    setAudioUrl('');
  };

  return (
    <AdminLayout>
      <div className="container mt-4">
        <h3 className="text-center mb-4">Thêm Sách Mới</h3>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Tiêu đề sách"
            required
          />
          <input
            type="text"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            placeholder="Thể loại sách"
            required
          />
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Tên tác giả"
            required
          />
          <input
            type="text"
            value={narrator}
            onChange={(e) => setNarrator(e.target.value)}
            placeholder="Tên giọng đọc"
            required
          />
          <input
            type="number"
            value={listenerCount}
            onChange={(e) => setListenerCount(e.target.value)}
            placeholder="Số lượt nghe"
            required
          />
          <input
            type="text"
            value={audioUrl}
            onChange={(e) => setAudioUrl(e.target.value)}
            placeholder="Đường dẫn audio"
            required
          />
          <button type="submit">Thêm Sách</button>
        </form>
      </div>
    </AdminLayout>
  );
};

export default AddBook;
