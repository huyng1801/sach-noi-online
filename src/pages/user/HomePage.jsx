import React from 'react';
import UserLayout from '../../layouts/UserLayout';
import {Typography} from 'antd';
import StoryList from '../../components/user/StoryList';
import CategoryList from '../../components/user/CategoryList';
import RecentComments from '../../components/user/RecentComments';

const { Title, Paragraph } = Typography;

const HomePage = () => {
  const category = [
    { title: 'Truyện Kiếm Hiệp', image: '/images/kiem-hiep.jpg' },
    { title: 'Truyện Tiên Hiệp', image: '/images/kiem-hiep.jpg' },
    { title: 'Truyện Tâm Lý - Xã Hội', image: '/images/kiem-hiep.jpg' },
    { title: 'Truyện Ngôn Tình', image: '/images/kiem-hiep.jpg' },
    { title: 'Truyện Ma Kinh Dị', image: '/images/kiem-hiep.jpg' },
    { title: 'Truyện Đêm Khuya', image: '/images/kiem-hiep.jpg' },
    { title: 'Audio Văn Học', image: '/images/tien-hiep.jpg' },
    { title: 'Truyện Phật Giáo', image: '/images/tien-hiep.jpg' },
    { title: 'MC Nguyễn Ngọc Ngạn', image: '/images/tien-hiep.jpg' },
    { title: 'MC Đình Soạn', image: '/images/tien-hiep.jpg' },
    { title: 'MC Nguyễn Ngọc Ngạn', image: '/images/tien-hiep.jpg' },
    { title: 'MC Đình Soạn', image: '/images/tien-hiep.jpg' },
  ];
  

  const fullStories = [
    { title: 'Yêu Long', image: '/images/cuoc-tinh-ngang-trai.jpg', category: 'Tiên Hiệp', rating: 4.8, views: 1200 },
    { title: 'Hắc Tây Du', image: '/images/Hac-Tay-Du.jpg', category: 'Huyền Huyễn', rating: 4.7, views: 980 },
    { title: 'Yêu Long', image: '/images/cuoc-tinh-ngang-trai.jpg', category: 'Tiên Hiệp', rating: 4.8, views: 1200 },
    { title: 'Hắc Tây Du', image: '/images/Hac-Tay-Du.jpg', category: 'Huyền Huyễn', rating: 4.7, views: 980 },
    { title: 'Yêu Long', image: '/images/nghiep-tran-vong.jpg', category: 'Tiên Hiệp', rating: 4.8, views: 1200 },
    { title: 'Hắc Tây Du', image: '/images/nghiep-tran-vong.jpg', category: 'Huyền Huyễn', rating: 4.7, views: 980 },
    { title: 'Yêu Long', image: '/images/yeu-long.jpg', category: 'Tiên Hiệp', rating: 4.8, views: 1200 },
    { title: 'Hắc Tây Du', image: '/images/nghiep-tran-vong.jpg', category: 'Huyền Huyễn', rating: 4.7, views: 980 },
    { title: 'Yêu Long', image: '/images/yeu-long.jpg', category: 'Tiên Hiệp', rating: 4.8, views: 1200 },
    { title: 'Hắc Tây Du', image: '/images/trot-dai.jpg', category: 'Huyền Huyễn', rating: 4.7, views: 980 },
    { title: 'Yêu Long', image: '/images/yeu-long.jpg', category: 'Tiên Hiệp', rating: 4.8, views: 1200 },
    { title: 'Hắc Tây Du', image: '/images/trot-dai.jpg', category: 'Huyền Huyễn', rating: 4.7, views: 980 },
  ];

  const newStories = [
    { title: 'Yêu Long ádsadsadasada', image: '/images/yeu-long.jpg', category: 'Tiên Hiệp', rating: 4.8, views: 120 },
    { title: 'Hắc Tây Du', image: '/images/Hac-Tay-Du.jpg', category: 'Huyền Huyễn', rating: 4.7, views: 98 },
    { title: 'Yêu Long', image: '/images/yeu-long.jpg', category: 'Tiên Hiệp', rating: 4.8, views: 120 },
    { title: 'Hắc Tây Du', image: '/images/Hac-Tay-Du.jpg', category: 'Huyền Huyễn', rating: 4.7, views: 98 },
    { title: 'Yêu Long', image: '/images/yeu-long.jpg', category: 'Tiên Hiệp', rating: 4.8, views: 120 },
    { title: 'Hắc Tây Du', image: '/images/Hac-Tay-Du.jpg', category: 'Huyền Huyễn', rating: 4.7, views: 98 },
    { title: 'Yêu Long', image: '/images/yeu-long.jpg', category: 'Tiên Hiệp', rating: 4.8, views: 120 },
    { title: 'Hắc Tây Du', image: '/images/Hac-Tay-Du.jpg', category: 'Huyền Huyễn', rating: 4.7, views: 98 },
    { title: 'Yêu Long', image: '/images/yeu-long.jpg', category: 'Tiên Hiệp', rating: 4.8, views: 120 },
    { title: 'Hắc Tây Du', image: '/images/Hac-Tay-Du.jpg', category: 'Huyền Huyễn', rating: 4.7, views: 98 },
    { title: 'Yêu Long', image: '/images/yeu-long.jpg', category: 'Tiên Hiệp', rating: 4.8, views: 120 },
    { title: 'Hắc Tây Du', image: '/images/Hac-Tay-Du.jpg', category: 'Huyền Huyễn', rating: 4.7, views: 98 },
  ];

  const comments = [
    {
      avatar: '/images/user1.jpg',
      user: 'Nhật Tân',
      storyTitle: 'Cực Phẩm Toàn Năng Cao Thủ',
      genre: 'Truyện Đô Thị',
      comment: 'Giọng hay, truyện cũng hay.',
      rating: 5,
      date: '2024-11-27T10:32:14',
    },
    {
      avatar: null,
      user: 'Màu của gió',
      storyTitle: 'Cặp Đôi Oan Gia',
      genre: 'Truyện Ngôn Tình',
      comment: 'Trương Huệ viết truyện nào cũng hay.',
      rating: 4,
      date: '2024-11-27T09:44:44',
    },
  ];

  return (
    <UserLayout>
      <div className="home-page">
        <Title level={2} style={{ textAlign: 'center', marginBottom: '20px' }}>
          Welcome to Radio Truyện
        </Title>
        <Paragraph style={{ textAlign: 'center', fontSize: '16px' }}>
          Khám phá thế giới truyện phong phú và đa dạng. Hàng ngàn câu chuyện đang chờ bạn!
        </Paragraph>
        <Title style={{ marginLeft: '150px', marginBottom: '20px', fontSize: '28px' }}>
          Thể loại
        </Title>
        <CategoryList categories={category}/>
        <StoryList title="Radio Truyện Full" stories={fullStories} />
        <StoryList title="Truyện Mới Nhất" stories={newStories} />
        <StoryList title="Truyện Ngôn Lù" stories={fullStories} />
        <StoryList title="Truyện Ma - Kinh dị" stories={newStories} />
        <StoryList title="Sách Lùa Gà" stories={fullStories} />
    
        <RecentComments comments={comments} />
     
      </div>
      
    </UserLayout>
  );
};

export default HomePage;
