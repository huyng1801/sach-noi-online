import React from 'react';
import AdminLayout from '../../layouts/AdminLayout';
import { useNavigate } from 'react-router-dom';


const audiobooks = [
  {
    title: "Hoa Tang Cho Ngày Cưới",
    genre: "truyện tâm lý xã hội",
    listenerCount: 2271,
    rating: 3.2,
    narrator: "MC Đình Duy",
    author: "Hoàng Phương Hùng",
    audioUrl: "/audio/hoatang.mp3",
  },
  {
    title: "Sóng Gió Cuộc Đời",
    genre: "truyện tâm lý xã hội",
    listenerCount: 518,
    rating: 4.5,
    narrator: "MC Tiến Phong",
    author: "Nguyễn Văn A",
    audioUrl: "/audio/songgio.mp3",
  },
  {
    title: "Nghề Coi Tù",
    genre: "truyện hình sự",
    listenerCount: 665,
    rating: 4.0,
    narrator: "MC Đình Duy",
    author: "Trần Thị Lan",
    audioUrl: "/audio/nghecoitu.mp3",
  },
  {
    title: "Số Phận Cuộc Đời",
    genre: "truyện tâm lý xã hội",
    listenerCount: 698,
    rating: 3.8,
    narrator: "MC Nguyễn Huy",
    author: "Hoàng Mai",
    audioUrl: "/audio/sophancuocdoi.mp3",
  },
  {
    title: "Những Đứa Con Bất Trị",
    genre: "truyện xã hội",
    listenerCount: 1600,
    rating: 4.1,
    narrator: "MC Trần Vân",
    author: "Lê Minh Tân",
    audioUrl: "/audio/nhungduaconbattri.mp3",
  },
  {
    title: "Nuôi Con Người Khác",
    genre: "truyện tâm lý xã hội",
    listenerCount: 985,
    rating: 4.3,
    narrator: "MC Bảo Linh",
    author: "Phạm Thanh Hương",
    audioUrl: "/audio/nuoiconguoikhac.mp3",
  },
  {
    title: "Bí Mật Quân Cờ",
    genre: "truyện trinh thám",
    listenerCount: 655,
    rating: 3.9,
    narrator: "MC Tiến Phong",
    author: "Trương Duy Anh",
    audioUrl: "/audio/bimatquanco.mp3",
  },
  {
    title: "Mả Phát",
    genre: "truyện ma",
    listenerCount: 56,
    rating: 4.2,
    narrator: "MC Hồng Nhung",
    author: "Lê Quang Huy",
    audioUrl: "/audio/maphat.mp3",
  },
  {
    title: "Người Đẻ Mướn",
    genre: "truyện xã hội",
    listenerCount: 750,
    rating: 3.5,
    narrator: "MC Anh Tú",
    author: "Nguyễn Hồng Sơn",
    audioUrl: "/audio/nguoidemuen.mp3",
  },
  {
    title: "Cãi Nhau Với Vợ",
    genre: "truyện hài hước",
    listenerCount: 1200,
    rating: 4.0,
    narrator: "MC Nguyễn Huy",
    author: "Trần Quang Tuấn",
    audioUrl: "/audio/cainhauvoivo.mp3",
  },
  {
    title: "Vụ Án Họ Trình",
    genre: "truyện hình sự",
    listenerCount: 1000,
    rating: 4.4,
    narrator: "MC Đình Soạn",
    author: "Vũ Đình Long",
    audioUrl: "/audio/vuanhotrinh.mp3",
  },
  {
    title: "Nỗi Đau Thân Phận Đàn Bà",
    genre: "truyện tâm lý xã hội",
    listenerCount: 643,
    rating: 4.1,
    narrator: "MC Trần Vân",
    author: "Mai Thị Lan",
    audioUrl: "/audio/noidauthanphandanba.mp3",
  },
  {
    title: "Yêu Kẻ Hoàn Lương",
    genre: "truyện tình cảm",
    listenerCount: 480,
    rating: 4.0,
    narrator: "MC Tiến Phong",
    author: "Nguyễn Duy Hoàng",
    audioUrl: "/audio/yeukehonluong.mp3",
  },
  {
    title: "Chuyện Vui Thời Bao Cấp",
    genre: "truyện hài hước",
    listenerCount: 119,
    rating: 3.7,
    narrator: "MC Hồng Nhung",
    author: "Trương Minh Cường",
    audioUrl: "/audio/chuyenvuithoibaocap.mp3",
  },
  {
    title: "Tráo Phận Đổi Tình",
    genre: "truyện tình cảm",
    listenerCount: 641,
    rating: 4.5,
    narrator: "MC Đình Duy",
    author: "Lê Thi Thanh",
    audioUrl: "/audio/traophandoitinh.mp3",
  },
  {
    title: "Thuê Chồng",
    genre: "truyện tình cảm",
    listenerCount: 4200,
    rating: 4.6,
    narrator: "MC Anh Tú",
    author: "Nguyễn Phương Dung",
    audioUrl: "/audio/thuechong.mp3",
  },
];



const DashboardPage = () => {
  const navigate = useNavigate();  // Khởi tạo navigate

  const handleEdit = (book) => {
    // Điều hướng người dùng đến trang chỉnh sửa sách (giả sử đường dẫn /admin/editbook/:id)
    navigate(`./admin/book/EditBook/${book.title}`, { state: { book } });
  };
  const onDelete = (id) => {
    // Xử lý logic xóa ở đây (ví dụ: xóa sách khỏi mảng audiobooks)
    console.log("Đang xóa sách có id:", id);
  };
  return (
    <AdminLayout>
      
      <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet" />

       <div className="container mt-4">
        <h3 className="text-center mb-4">Truyện Audio Mới Nhất</h3>
        <div className="row">
          {audiobooks.map((book, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{book.title}</h5>
                  <p><strong>Thể Loại:</strong> {book.genre}</p>
                  <p><strong>Lượt nghe:</strong> {book.listenerCount}</p>
                  <p><strong>Giọng đọc:</strong> {book.narrator}</p>
                  <p><strong>Tác giả:</strong> {book.author}</p>
                  <audio controls>
                    <source src={book.audioUrl} type="audio/mp3" />
                    Your browser does not support the audio element.
                  </audio>
                  <button onClick={() => handleEdit(book)} className="btn btn-primary mt-2">
                    Sửa
                  </button>
                  <button onClick={() => onDelete(book.id)} className="btn btn-primary mt-2">
                    Xóa
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </AdminLayout>
  );
};

export default DashboardPage;
