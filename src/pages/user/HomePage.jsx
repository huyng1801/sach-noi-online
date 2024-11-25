import React from 'react';
import UserLayout from '../../layouts/UserLayout';
import {Typography} from 'antd';
import StoryList from '../../components/user/StoryList';
import RecentComments from '../../components/user/RecentComments';

const { Title, Paragraph } = Typography;

const HomePage = () => {
  const fullStories = [
    { title: 'Yêu Long', image: '/images/yeulong.jpg', category: 'Tiên Hiệp', rating: 4.8, views: 1200 },
    { title: 'Hắc Tây Du', image: '/images/hactaydu.jpg', category: 'Huyền Huyễn', rating: 4.7, views: 980 },
    { title: 'Yêu Long', image: '/images/yeulong.jpg', category: 'Tiên Hiệp', rating: 4.8, views: 1200 },
    { title: 'Hắc Tây Du', image: '/images/hactaydu.jpg', category: 'Huyền Huyễn', rating: 4.7, views: 980 },
    { title: 'Yêu Long', image: '/images/yeulong.jpg', category: 'Tiên Hiệp', rating: 4.8, views: 1200 },
    { title: 'Hắc Tây Du', image: '/images/hactaydu.jpg', category: 'Huyền Huyễn', rating: 4.7, views: 980 },
    { title: 'Yêu Long', image: '/images/yeulong.jpg', category: 'Tiên Hiệp', rating: 4.8, views: 1200 },
    { title: 'Hắc Tây Du', image: '/images/hactaydu.jpg', category: 'Huyền Huyễn', rating: 4.7, views: 980 },
    { title: 'Yêu Long', image: '/images/yeulong.jpg', category: 'Tiên Hiệp', rating: 4.8, views: 1200 },
    { title: 'Hắc Tây Du', image: '/images/hactaydu.jpg', category: 'Huyền Huyễn', rating: 4.7, views: 980 },
    { title: 'Yêu Long', image: '/images/yeulong.jpg', category: 'Tiên Hiệp', rating: 4.8, views: 1200 },
    { title: 'Hắc Tây Du', image: '/images/hactaydu.jpg', category: 'Huyền Huyễn', rating: 4.7, views: 980 },
  ];

  const newStories = [
    { title: 'Yêu Long', image: '/images/yeulong.jpg', category: 'Tiên Hiệp', rating: 4.8, views: 1200 },
    { title: 'Hắc Tây Du', image: '/images/hactaydu.jpg', category: 'Huyền Huyễn', rating: 4.7, views: 980 },
    { title: 'Yêu Long', image: '/images/yeulong.jpg', category: 'Tiên Hiệp', rating: 4.8, views: 1200 },
    { title: 'Hắc Tây Du', image: '/images/hactaydu.jpg', category: 'Huyền Huyễn', rating: 4.7, views: 980 },
    { title: 'Yêu Long', image: '/images/yeulong.jpg', category: 'Tiên Hiệp', rating: 4.8, views: 1200 },
    { title: 'Hắc Tây Du', image: '/images/hactaydu.jpg', category: 'Huyền Huyễn', rating: 4.7, views: 980 },
    { title: 'Yêu Long', image: '/images/yeulong.jpg', category: 'Tiên Hiệp', rating: 4.8, views: 1200 },
    { title: 'Hắc Tây Du', image: '/images/hactaydu.jpg', category: 'Huyền Huyễn', rating: 4.7, views: 980 },
    { title: 'Yêu Long', image: '/images/yeulong.jpg', category: 'Tiên Hiệp', rating: 4.8, views: 1200 },
    { title: 'Hắc Tây Du', image: '/images/hactaydu.jpg', category: 'Huyền Huyễn', rating: 4.7, views: 980 },
    { title: 'Yêu Long', image: '/images/yeulong.jpg', category: 'Tiên Hiệp', rating: 4.8, views: 1200 },
    { title: 'Hắc Tây Du', image: '/images/hactaydu.jpg', category: 'Huyền Huyễn', rating: 4.7, views: 980 },
  ];

  const recentComments = [
    {
      user: 'Nguyen Van A',
      avatar: '/images/avatar1.jpg',
      text: 'Truyện rất hay và cuốn hút!',
      rating: 5,
      storyLink: '/story/yeu-long',
    },
    {
      user: 'Tran Thi B',
      avatar: '/images/avatar2.jpg',
      text: 'Phần kết hơi hụt hẫng, nhưng nhìn chung ổn.',
      rating: 4,
      storyLink: '/story/hac-tay-du',
    },
    {
      user: 'Le Van C',
      avatar: '/images/avatar3.jpg',
      text: 'Chưa đọc hết nhưng thấy phần mở đầu rất ấn tượng.',
      rating: 4.5,
      storyLink: '/story/nguyen-nhan',
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
        <StoryList title="Radio Truyện Full" stories={fullStories} />
        <StoryList title="Truyện Mới Nhất" stories={newStories} />
        <StoryList title="Truyện Ngôn Lù" stories={fullStories} />
        <StoryList title="Truyện Ma - Kinh dị" stories={newStories} />
        <StoryList title="Sách Lùa Gà" stories={fullStories} />
    
        <RecentComments comments={recentComments} />
     
      </div>
      
    </UserLayout>
  );
};

export default HomePage;
