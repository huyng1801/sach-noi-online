import React from 'react';
import UserLayout from '../../components/user/layout/UserLayout';
import { Typography, Spin } from 'antd';
import StoryList from '../../components/user/StoryList';
import { useHomeData } from '../../hooks/useHomeData';

const { Title, Paragraph } = Typography;

const HomePage = () => {
  const { categories, stories, loading } = useHomeData();

  if (loading) {
    return (
      <UserLayout>
        <Spin size="large" style={{ display: 'block', margin: '50px auto' }} />
      </UserLayout>
    );
  }

  // Group stories by category
  const storiesByCategory = stories.reduce((acc, story) => {
    const { categoryName } = story;
    if (!acc[categoryName]) {
      acc[categoryName] = [];
    }
    acc[categoryName].push(story);
    return acc;
  }, {});

  return (
    <UserLayout>
      <div className="home-page">
        {/* Header Section */}
        <Title level={2} style={{ textAlign: 'center', marginBottom: '20px' }}>
          Chào mừng đến với Sách Nói Online
        </Title>
        <Paragraph style={{ textAlign: 'center', fontSize: '16px' }}>
          Khám phá những cuốn sách hay đang chờ bạn!
        </Paragraph>

        {/* Story List by Categories */}
        {Object.entries(storiesByCategory).map(([categoryName, categoryStories]) => (
          <StoryList key={categoryName} title={categoryName} stories={categoryStories} />
        ))}
      </div>
    </UserLayout>
  );
};

export default HomePage;
